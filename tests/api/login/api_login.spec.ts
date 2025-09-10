import { APIResponse, expect, test } from "@playwright/test";
import { superAdminUser } from "../../../data/user";
import { LoginController } from "../../../api/controllers/LoginController";
import StatusCode from "status-code-enum";
import { encryptPassword, getTextToSign, hmacSha256Node } from "../../../utils/Encrypt";
import { LoginBody, LoginHeader } from "../../../constants/DataTypes";
import { credentials } from "../../../constants/SecurityConstants";
import { ENCRYPT, FIND_MENU, LOGIN } from "../../../api/controllers/path";
import { ApiMethods } from "../../../constants/ApiMethods";
import { bodyGenerator, headerGenerator } from "../../../utils/Tools";
import { MenuServiceController } from "../../../api/controllers/MenuServiceController";
import { MsgStatuses } from "../../../constants/EntityStatuses";

const format: string = "json";
const isContentType: boolean = false;

let loginBody: LoginBody;
let loginHeaderEncrypt: LoginHeader;
let loginHeader: LoginHeader;
let xCaSignature: string;
let textToSign: string;
let encryptRequest: APIResponse;

let tgc: string;

test.beforeEach(async({ request }) => {
    textToSign = getTextToSign(ApiMethods.get, ENCRYPT);
    xCaSignature = hmacSha256Node(textToSign, credentials.SECRET_KEY);

    loginHeaderEncrypt = headerGenerator(xCaSignature);

    // Step #0. Send a GET request to /api/common/v1/encrypt to obtain the public key.
    encryptRequest = await LoginController.encrypt(
        request,
        loginHeaderEncrypt,
        isContentType,
    );

    expect(encryptRequest.status()).toBe(StatusCode.SuccessOK);

    // Get public key
    const publicKey: string = (await encryptRequest.json()).data;

    // Step #4. Wait for the GET /ninfconvert/service/rs/login/v1/getClientInfo request.
    const getClientInfoRequest = await LoginController.getClientInfo(
        request,
        format,
        isContentType,
    );

    expect(getClientInfoRequest.status()).toBe(StatusCode.SuccessOK);

    const clientIP: string = (await getClientInfoRequest.json()).ip;

    // Get encrypted user password
    const userPwd: string= encryptPassword(publicKey, superAdminUser.password);
    textToSign = getTextToSign(ApiMethods.post, LOGIN, true);

    // Get signature
    xCaSignature = hmacSha256Node(textToSign, credentials.SECRET_KEY);

    // Prepare Header/Login bodies
    loginHeader = headerGenerator(xCaSignature, true);
    loginBody = bodyGenerator(superAdminUser.username, userPwd, publicKey, clientIP);
});

test("Test User Login and Associated API Requests", async ({ request }) => {
    test.info().annotations.push({
        type: "test_id",
        description: "https://app.clickup.com/t/869a1v9jk"
    });

    let msg: string;

    await test.step("Login with valid credentials", async () => {
        // Step #5. Intercept the API request POST /artemis/api/common/v1/tgt/login and validate the response.
        const loginRequest = await LoginController.login(
            request,
            loginHeader,
            isContentType,
            loginBody,
        );

        expect(loginRequest.status()).toBe(StatusCode.SuccessOK);

        msg = (await loginRequest.json()).msg;
        tgc = (await loginRequest.json()).data.tgc;

        expect(msg).toBe(MsgStatuses.Success);
        expect(tgc.length).toBeGreaterThan(0);
    });

    await test.step("Execute request '/findMenu'", async () => {
        textToSign = getTextToSign(ApiMethods.get, FIND_MENU);
        xCaSignature = hmacSha256Node(textToSign, credentials.SECRET_KEY);
        loginHeader = headerGenerator(xCaSignature, false, { CTGT: tgc });

        // Step #6. Wait for the GET /artemis/api/common/v1/menuService/findMenu request.
        const findMenuRequest = await MenuServiceController.findMenu(
            request,
            loginHeader,
            isContentType,
        );

        expect(findMenuRequest.status()).toBe(StatusCode.SuccessOK);

        msg = (await findMenuRequest.json()).msg;

        expect(msg).toBe(MsgStatuses.Success);
    });
});