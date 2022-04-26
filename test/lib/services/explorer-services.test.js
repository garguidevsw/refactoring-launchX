const ExplorerServices = require("../../../lib/services/ExplorerServices");

describe("Test class ExplorerService", () => {
    test("should filter explorers by mission", () => {
        const explorers = [{
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "js",
            "stacks": [
                "javascript",
                "reasonML",
                "elm"
            ]
        },
        {
            "name": "Woopa2",
            "githubUsername": "ajolonauta2",
            "score": 2,
            "mission": "node",
            "stacks": [
                "javascript",
                "groovy",
                "elm"
            ]
        }];

        const filter = ExplorerServices.filterByMission(explorers, "node");

        expect(filter.length).toBe(1);
        expect(typeof filter).toBe("object");
    });

    test("should quantity of explorers by mission", () => {
        const explorers = [{
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "js",
            "stacks": [
                "javascript",
                "reasonML",
                "elm"
            ]
        },
        {
            "name": "Woopa2",
            "githubUsername": "ajolonauta2",
            "score": 2,
            "mission": "node",
            "stacks": [
                "javascript",
                "groovy",
                "elm"
            ]
        }];

        const qty = ExplorerServices.getAmountOfExplorersByMission(explorers, "node");

        expect(qty).toBe(1);
        expect(typeof qty).toBe("number");
    });

    test("should username of explorers by mission", () => {
        const explorers = [{
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "js",
            "stacks": [
                "javascript",
                "reasonML",
                "elm"
            ]
        },
        {
            "name": "Woopa2",
            "githubUsername": "ajolonauta2",
            "score": 2,
            "mission": "node",
            "stacks": [
                "javascript",
                "groovy",
                "elm"
            ]
        }];

        const usernames = ExplorerServices.getExplorersUsernamesByMission(explorers, "node");
        
        expect(usernames).toEqual(["ajolonauta2"]);
    });
});