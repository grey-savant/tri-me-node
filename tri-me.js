const {Triangle} = require('./geometry/triangle');
const {TestCases} = require('./test_cases/test-cases');

async function main() {
    // Initialize new Triangle
    // try {
    //     const myTriangle = new Triangle(1, 2, 10);
    //     let myType = myTriangle.Type();
        
    //     // Test new triangle
    //     console.log(myTriangle.ping())
    //     console.log(`This is a ${myType} triangle.`);
    // } catch(e) {
    //     console.error(`Caught exception: ${e}`);
    // }

    // Automated tests
    const automatedTests = new TestCases();
    await automatedTests.initializeTests('./test_cases/test-cases.csv');

}

main();