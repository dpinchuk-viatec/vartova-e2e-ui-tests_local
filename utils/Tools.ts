import {credentials} from "../constants/SecurityConstants";

export function headerGenerator(xCaSignature: string, isContentType?: boolean, additionalData = {}): object {
    return {
        Accept: "*/*",
        ...(isContentType ? { "Content-Type": "application/json" } : {}),
        "X-Ca-Key": credentials.APP_KEY,
        "x-ca-signature": xCaSignature,
        "x-ca-signature-headers": "X-Ca-Key",
        ...additionalData,
    };
}

export function bodyGenerator(username: string, userPwd: string, publicKey: string, clientIP: string, additionalData = {}): object {
    return {
        userName: username,
        userPwd: userPwd,
        publicKey: publicKey,
        clientIP: clientIP,
        ...additionalData,
    };
}