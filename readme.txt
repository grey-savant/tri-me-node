/***********************************
 * TRI-ME a Triangle analyzer
 * @author: Jonathan Artemis Pierce
************************************/

This is a Node.js implementation of the Triangle exercise provided by the team at Disney.

This implementation was used to create and test the code and logic before using it in other implementations (such as a React app).

/* CORE FILES */
Two main files form the core of the application.

-- /geometry/triangle.js
-- /utils/validate-geometry.js

The validation logic was separated into a separate file for readability and maintenance.
If there is future development on the application, such as adding more geometry, the validation utility can be extended without
affecting the existing code.

/* AUTOMATED TESTING */

A set of test cases has been created in a .csv file to be used as an automated test suite.
The automated test is implemented from the command line.
The test files are:

-- /test-cases/test-cases.js
-- /test-cases/test-cases.csv

/***********************************
 * RUNNING THE PROGRAM
************************************/

1. Unpack tri-me.zip file in a folder and navigate to the top directory.
2. From a command prompt, type "node setup.js"
    If Node is running on your machine, then you will receive confirmation of the valid setup.
3. Type "node tri-me.js"
4. You will see a print out of the following information for each test case:
    a) The expected response.
    b) The values being tested.
    c) The response from the program for the test case.

/***********************************/