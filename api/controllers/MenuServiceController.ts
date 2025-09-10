import { APIRequestContext, APIResponse } from "@playwright/test";
import { ApiBuilder } from "../builder/ApiBuilder";
import { FIND_MENU } from "./path";
import { LoginHeader } from "../../constants/DataTypes";

export class MenuServiceController {

    static async findMenu(
        request: APIRequestContext,
        headers: LoginHeader,
        isContentType: boolean,
    ): Promise<APIResponse> {
        return await ApiBuilder.sendGetRequest(
            request,
            FIND_MENU,
            headers,
            isContentType,
        )
    }
}
