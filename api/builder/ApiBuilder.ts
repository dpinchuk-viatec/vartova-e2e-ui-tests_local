import { APIRequestContext, APIResponse } from "@playwright/test";

export class ApiBuilder {

    static async sendGetRequest(
        request: APIRequestContext,
        endpoint: string,
        headers?: { [key: string]: string },
        isContentType?: boolean,
        body?: object,
        params?: Record<string, string | number | boolean>,
    ): Promise<APIResponse> {
        return await request.get(process.env.API_URL_DEV + endpoint, {
            headers: {
                ...(headers || {}),
                ...(isContentType ? { "Content-Type": "application/json" } : {}),
            },
            data: body,
            params,
        });
    }

    static async sendPostRequest(
        request: APIRequestContext,
        endpoint: string,
        headers?: { [key: string]: string },
        isContentType?: boolean,
        body?: object,
        params?: Record<string, string | number | boolean>,
    ): Promise<APIResponse> {
        return await request.post(process.env.API_URL_DEV + endpoint, {
            headers: {
                ...(headers || {}),
                ...(isContentType ? { "Content-Type": "application/json" } : {}),
            },
            data: body,
            params: params,
        });
    }
}
