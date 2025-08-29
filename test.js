const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

const testCases = [
    {
        name: "Test Case A",
        input: { data: ["a", "1", "334", "4", "R", "$"] },
        expected: {
            odd_numbers: ["1"],
            even_numbers: ["334", "4"],
            alphabets: ["A", "R"],
            special_characters: ["$"],
            sum: "339"
        }
    },
    {
        name: "Test Case B", 
        input: { data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"] },
        expected: {
            odd_numbers: ["5"],
            even_numbers: ["2", "4", "92"],
            alphabets: ["A", "Y", "B"],
            special_characters: ["&", "-", "*"],
            sum: "103"
        }
    },
    {
        name: "Test Case C",
        input: { data: ["A", "ABcD", "DOE"] },
        expected: {
            odd_numbers: [],
            even_numbers: [],
            alphabets: ["A", "ABCD", "DOE"],
            special_characters: [],
            sum: "0"
        }
    }
];

async function runTests() {
    console.log('Starting API Tests...\n');
    
    for (const testCase of testCases) {
        try {
            console.log(`Running: ${testCase.name}`);
            console.log(`Input: ${JSON.stringify(testCase.input)}`);
            
            const response = await axios.post(`${BASE_URL}/bfhl`, testCase.input);
            
            console.log(`Status: ${response.status}`);
            console.log(`Response: ${JSON.stringify(response.data, null, 2)}`);
            
            if (response.data.is_success === true) {
                console.log('API returned success status');
            } else {
                console.log('API returned failure status');
            }
            
            console.log('---\n');
            
        } catch (error) {
            console.log(`Error in ${testCase.name}:`);
            if (error.response) {
                console.log(`Status: ${error.response.status}`);
                console.log(`Error: ${JSON.stringify(error.response.data)}`);
            } else {
                console.log(`Error: ${error.message}`);
            }
            console.log('---\n');
        }
    }
    
    console.log('Tests completed!');
}

async function healthCheck() {
    try {
        const response = await axios.get(BASE_URL);
        console.log('Server is running!');
        console.log(`Health check response: ${JSON.stringify(response.data)}`);
        return true;
    } catch (error) {
        console.log('Server is not running. Please start the server first with: npm start');
        return false;
    }
}

async function main() {
    console.log('Checking server health...\n');
    
    const isHealthy = await healthCheck();
    if (!isHealthy) {
        return;
    }
    
    console.log('\nRunning test cases...\n');
    await runTests();
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = { runTests, healthCheck };
