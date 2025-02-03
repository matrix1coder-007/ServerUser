/* 
"""
User input/output function call.
"""
*/
import askQuestion from './user_io_utils.js';

const main = async () => {
    const reply = await askQuestion(`Hi! How are you?\n`)
    console.log(`User replied: ${reply}`);
    process.exit(0);
};

main();