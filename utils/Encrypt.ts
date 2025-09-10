import * as forge from "node-forge";
import * as crypto from "crypto";
import {credentials} from "../constants/SecurityConstants";

// RSA encryption function
export function encryptPassword(publicKey: string, password: string) {
    // Normalize public key
    const normalizedKey = `-----BEGIN PUBLIC KEY-----\n${publicKey}\n-----END PUBLIC KEY-----`;

    try {
        // Parse public key
        const rsaPublicKey = forge.pki.publicKeyFromPem(normalizedKey);

        // Encrypt password
        const encrypted = rsaPublicKey.encrypt(password, "RSAES-PKCS1-V1_5", {
            md: forge.md.sha256.create(),
        });

        // Convert to base64
        return forge.util.encode64(encrypted);
    } catch (error) {
        throw new Error("Invalid public key or encryption failed");
    }
}

export function hmacSha256Node(textToSign: string, appSecret: string): string {
    const hmac = forge.hmac.create();
    hmac.start("sha256", appSecret);
    hmac.update(textToSign);
    const signatureBytes: string = hmac.digest().getBytes();
    return btoa(signatureBytes);
}

export function getTextToSign(method: string, apiEndPoint: string, isContentType?: boolean): string {
    const parts: string[] = [
        `${method}\n`,
        "*/*\n",
        isContentType ? "application/json\n" : "",
        `x-ca-key:${credentials.APP_KEY}\n`,
        apiEndPoint
    ];
    return parts.join("");
}