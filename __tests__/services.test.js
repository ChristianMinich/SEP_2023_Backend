
const { ValidateEmail } = require("../services/E-Mail-Validator");

describe("ValidateEmail", () => {
    test("Valid email", () => {
        const email = "example@test.com";
        const result = ValidateEmail(email);
        expect(result).toBe(true);
    });


    test("Invalid email: null pointer", () => {
        const email = null;
        const result = ValidateEmail(email);
        expect(result).toBe(false);
    });


    test("Invalid email: empty string", () => {
        const email = "";
        const result = ValidateEmail(email);
        expect(result).toBe(false);
    });


    test("Invalid email: invalid format", () => {
        const email = "test@example";
        const result = ValidateEmail(email);
        expect(result).toBe(false);
    });
});
