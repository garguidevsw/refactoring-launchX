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
});