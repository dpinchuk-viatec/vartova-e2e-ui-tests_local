import { APIRequestContext, APIResponse } from "@playwright/test";
import { ApiBuilder } from "../builder/ApiBuilder";
import {ENCRYPT, GET_CLIENT_INFO, LOGIN, LOGOUT} from "./path";
import { EMPTY_OBJECT } from "../../constants/BaseConstants";
import { LoginHeader } from "../../constants/DataTypes";

export class LoginController {

    // Get public key
    static async encrypt(
        request: APIRequestContext,
        headers: LoginHeader,
        isContentType: boolean,
    ): Promise<APIResponse> {
        return await ApiBuilder.sendGetRequest(
            request,
            ENCRYPT,
            headers,
            isContentType,
        )
    }

    // Get current IP address
    static async getClientInfo(
        request: APIRequestContext,
        format: string,
        isContentType: boolean,
    ): Promise<APIResponse> {
        return await ApiBuilder.sendGetRequest(
            request,
            GET_CLIENT_INFO(format),
            EMPTY_OBJECT,
            isContentType,
        )
    }

    static async login(
        request: APIRequestContext,
        headers: LoginHeader,
        isContentType: boolean,
        body: object,
    ): Promise<APIResponse> {
        return await ApiBuilder.sendPostRequest(
            request,
            LOGIN,
            headers,
            isContentType,
            body,
        )
    }


    static async logout(
        request: APIRequestContext,
        headers: LoginHeader,
        isContentType: boolean,
    ): Promise<APIResponse> {
        return await ApiBuilder.sendGetRequest(
            request,
            LOGOUT,
            headers,
            isContentType,
        )
    }
}
