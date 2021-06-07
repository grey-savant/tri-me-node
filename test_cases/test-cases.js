const fs = require('fs');
const readline = require('readline');
const { Triangle } = require('../geometry/triangle');

class TestCases {
    constructor() {}

    /**
     * @param {string} fileName
     * @return {!Promise<void>}
     */
    initializeTests(fileName) {
        return new Promise( resolve => {
            const reader = readline.createInterface({
                input: fs.createReadStream(fileName)
            });
            reader.on('line', line => {
                const [expected, a, b, c] = line.split(',');
                this.testTriangle(expected, a, b, c);
            });
            reader.on('close', resolve);
        });
    }

    /**
     * Test the case
     * @param {String} expected 
     * @param {number} a 
     * @param {number} b 
     * @param {number} c 
     */
    testTriangle(expected, a, b, c) {
        try {
            console.log(`\nExpected: ${expected}`);
            console.log(`Values: ${a}, ${b}, ${c}`);
            const triangle = new Triangle(a, b, c);
            console.log(`Type: ${triangle.Type()}`);
        } catch(e) {
            console.error(`Exception thrown: ${e}`);
        }   
    }
}

module.exports = {TestCases};