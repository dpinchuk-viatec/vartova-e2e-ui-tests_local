import { expect } from "@playwright/test";

export class FilterValidator {
    static async validateTextContains(
        actualData: Record<string, string>,
        expectedData: Record<string, string | undefined>
    ): Promise<void> {
        for (const [key, expectedValue] of Object.entries(expectedData)) {
            if (expectedValue) {
                expect(actualData[key]).toContain(expectedValue);
            }
        }
    }
}
