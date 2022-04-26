const fs = require("fs");

class Reader {

    static readJsonFile(path = ""){
        // Part 1 Read json file ===========================
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }

}

module.exports = Reader;