const Reader = require('./lib/utils/Reader');
const ExplorerServices = require('./lib/services/ExplorerServices');
const FizzbuzzService = require('./lib/services/FizzbuzzService');

const explorers = Reader.readJsonFile('explorers.json');

// Part 2: Get explorers names in node
const explorersInNode = ExplorerServices.filterByMission(explorers, 'node');
// console.log(explorersInNode)

// Part 3: Get the quantity of explorers names in node
const qtyExplorersInNode = ExplorerServices.getAmountOfExplorersByMission(explorers, 'node');
// console.log(qtyExplorersInNode)

// Part4: Get the explorer's usernames in Node
const usernamesInNode = ExplorerServices.getExplorersUsernamesByMission(explorers, 'node');

// console.log(usernamesInNode)

const explorer1 = {name: "Explorer1", score: 1}
console.log(FizzbuzzService.applyValidationInExplorer(explorer1)); // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3}
console.log(FizzbuzzService.applyValidationInExplorer(explorer3)); // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5}
console.log(FizzbuzzService.applyValidationInExplorer(explorer5)); // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15}
console.log(FizzbuzzService.applyValidationInExplorer(explorer15)); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}