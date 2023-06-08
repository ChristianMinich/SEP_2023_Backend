
const { ValidateEmail } = require("../services/E-Mail-Validator");

/**
 * This is the test section for the function ValidateEmail.
 */
describe("ValidateEmail", () => {

    /**
     * Checks if the ValidateEmail function returns true for a valid email.
     */
    test("True: Valid email", () => {
        const email = "example@test.com";
        const result = ValidateEmail(email);
        expect(result).toBe(true);
    });

    /**
     * Checks if the ValidateEmail function returns false for a null pointer.
     */
    test("False: null pointer", () => {
        const email = null;
        const result = ValidateEmail(email);
        expect(result).toBe(false);
    });

    /**
     * Checks if the ValidateEmail function returns false for an empty email.
     */
    test("False: empty string", () => {
        const email = "";
        const result = ValidateEmail(email);
        expect(result).toBe(false);
    });

    /**
     * Checks if the ValidateEmail function returns false for an email without an '@' symbol.
     */
    test("False: missing '@'", () => {
        const email = "testexample.com";
        const result = ValidateEmail(email);
        expect(result).toBe(false);
    });

    /**
     * Checks if the ValidateEmail function returns false for an email without a domain.
     */
    test("False: missing domain", () => {
        const email = "test@";
        const result = ValidateEmail(email);
        expect(result).toBe(false);
    });

    /**
     * Checks if the ValidateEmail function returns false for an email without .com .
     */
    test("False: invalid format", () => {
        const email = "test@example";
        const result = ValidateEmail(email);
        expect(result).toBe(false);
    });

    /**
     * Checks if the ValidateEmail function returns false for an email with a special character.
     */
    test("False: contains special character", () => {
        const email = "test@exa!mple.com";
        const result = ValidateEmail(email);
        expect(result).toBe(false);
    });


    /**
     * Checks if the ValidateEmail function returns false for an email without a dot in the domain.
     */
    test("False: no dot", () => {
        const email = "test@examplecom";
        const result = ValidateEmail(email);
        expect(result).toBe(false);
    });

    /**
     * Checks if the ValidateEmail function returns false for an email without a username.
     */
    test("False: no username", () => {
        const email = "@example.com";
        const result = ValidateEmail(email);
        expect(result).toBe(false);
    });
});
