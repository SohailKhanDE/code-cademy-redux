const fs = require('fs');
const file = './data.txt';

// Always run asynchronous logic outside reducers
const message = fs.readFileSync(file, 'utf8');

// Valid Reducer function
const capitalizeMessage = (message) => {
  return message.toUpperCase();
}

console.log(capitalizeMessage(message));