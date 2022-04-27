const FizzbussService = require("../services/FizzbuzzService");
const ExplorerService = require("./../services/ExplorerServices");
const Reader = require("./../utils/Reader");

class ExplorerController{
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static getFizzBuzz(score){
        return FizzbussService.applyValidationInNumber(score);
    }
}

module.exports = ExplorerController;