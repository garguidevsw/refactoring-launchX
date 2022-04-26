const Reader = require("../../../lib/utils/Reader");

describe('Test class Reader', () => {
    test('should read a file', () => {
        const json = Reader.readJsonFile('explorers.json');

        expect(typeof json).toBe('object');
    })
});