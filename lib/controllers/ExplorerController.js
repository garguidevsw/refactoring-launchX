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

    static fizzBuzzBotResponse(msg){
        const numberToApplyFb = parseInt(msg);
        

        if(!isNaN(numberToApplyFb)){
            const fizzbuzzTrick = ExplorerController.getFizzBuzz(numberToApplyFb);
            const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
            return responseBot;
        } else {
            const explorers = ExplorerController.getExplorersUsernamesByMission(msg);
            if(explorers.length > 0){
                return `Explorers Misión ${msg.toUpperCase()}: ` + explorers.join(", ");
            }else{
                return `No se encontraron explorers para la misión ${msg.toUpperCase()}`;
            }
        }
    }

}

module.exports = ExplorerController;