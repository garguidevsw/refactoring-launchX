const FizzbussService = require("../../../lib/services/FizzbuzzService");

describe("Test FIZZBUZZ", () => {
    test("should return score", () => {
        const explorer = {name: "Explorer1", score: 1};

        const res = FizzbussService.applyValidationInExplorer(explorer);
        expect(res.trick).toBe(1);
    });

    test("should return fizz", () => {
        const explorer = {name: "Explorer3", score: 3};

        const res = FizzbussService.applyValidationInExplorer(explorer);
        expect(res.trick).toBe("FIZZ");
    });

    test("should return buzz", () => {
        const explorer = {name: "Explorer5", score: 5};

        const res = FizzbussService.applyValidationInExplorer(explorer);
        expect(res.trick).toBe("BUZZ");
    });

    test("should return fizzbuzz", () => {
        const explorer = {name: "Explorer15", score: 15};

        const res = FizzbussService.applyValidationInExplorer(explorer);
        expect(res.trick).toBe("FIZZBUZZ");
    });

    test("validation fizzbuzz", () => {
        const number1 = 1;
        const number3 = 3;
        const number5 = 5;
        const number15 = 15;

        expect(FizzbussService.applyValidationInNumber(number1)).toBe(1);
        expect(FizzbussService.applyValidationInNumber(number3)).toBe("FIZZ");
        expect(FizzbussService.applyValidationInNumber(number5)).toBe("BUZZ");
        expect(FizzbussService.applyValidationInNumber(number15)).toBe("FIZZBUZZ");

    });

});