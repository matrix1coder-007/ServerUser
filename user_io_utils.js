/* 
"""
User input/output utils
"""
*/

import { createInterface } from 'readline';

// Create an interface for input and output
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask question
export default function askQuestion (question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
        resolve(answer);
        });
    });
};
