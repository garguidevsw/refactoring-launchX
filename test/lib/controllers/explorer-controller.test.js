const ExplorerController = require("./../../../lib/controllers/ExplorerController");

describe("Test Explorer Controller", () => { 
    test("should get a explorers by mission", () => { 
        const explorers = ExplorerController.getExplorersByMission("node");
        
        expect(explorers).not.toBeNull();
        expect(typeof explorers).toBe("object");
    });

    test("should get a quantity of explorers by mission", () => { 
        const qty = ExplorerController.getExplorersAmonutByMission("node");
       
        expect(qty).not.toBeNaN();
        expect(typeof qty).toBe("number");
    });

    test("should get a usernames of explorers by mission", () => { 
        const explorers = ExplorerController.getExplorersUsernamesByMission("node");
        
        expect(explorers).not.toBeNull();
        expect(typeof explorers).toBe("object");
    });

    test("should get a fizzbuzz response", () => { 
        const trick1 = ExplorerController.getFizzBuzz(1);
        const trick3 = ExplorerController.getFizzBuzz(3);
        const trick5 = ExplorerController.getFizzBuzz(5);
        const trick15 = ExplorerController.getFizzBuzz(15);

        expect(trick1).toBe(1);
        expect(trick3).toBe("FIZZ");
        expect(trick5).toBe("BUZZ");
        expect(trick15).toBe("FIZZBUZZ");

    });

    test("should get a valid bot response", () => {
        const resp1 = ExplorerController.fizzBuzzBotResponse(1);
        const resp3 = ExplorerController.fizzBuzzBotResponse(3);
        const resp5 = ExplorerController.fizzBuzzBotResponse(5);
        const resp15 = ExplorerController.fizzBuzzBotResponse(15);
        const respNode = ExplorerController.fizzBuzzBotResponse("node");
        const respJS = ExplorerController.fizzBuzzBotResponse("js");

        expect(resp1).toBe("Tu número es: 1. Validación: 1");
        expect(resp3).toBe("Tu número es: 3. Validación: FIZZ");
        expect(resp5).toBe("Tu número es: 5. Validación: BUZZ");
        expect(resp15).toBe("Tu número es: 15. Validación: FIZZBUZZ");
        expect(respNode).toBe("Explorers Misión NODE: ajolonauta1, ajolonauta2, ajolonauta3, ajolonauta4, ajolonauta5, ajolonauta11, ajolonauta12, ajolonauta13, ajolonauta14, ajolonauta15");
        expect(respJS).toBe("No se encontraron explorers para la misión JS");
    });
});