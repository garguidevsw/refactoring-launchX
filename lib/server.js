
const express = require("express");

const ExplorerController = require("./controllers/ExplorerController");

const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const explorers = ExplorerController.getExplorersByMission(request.params.mission);
    response.json(explorers);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const quantity = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({
        mission,
        quantity
    });
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorers = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({
        mission,
        explorers
    });
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const trick = ExplorerController.getFizzBuzz(score);

    response.json({
        score,
        trick
    });
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});