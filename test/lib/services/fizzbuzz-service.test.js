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

});