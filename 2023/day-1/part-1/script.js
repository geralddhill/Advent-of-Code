const fs = require('fs');

function getData(filename) {
    data = fs.readFileSync(filename, 'utf-8');

    return data;
}

function getNumbers(data) {
    let outputNumbers = [];
    let first = -1;
    let last = -1;
    for (let i = 0; i < data.length; i++) {
        if (data[i] == '\n') {
            let numberString = first + last;
            outputNumbers.push(parseInt(numberString));
            first = -1;
            last = -1;
            continue;
        }

        if(!isNaN(data[i])) {
            if (first == -1) {
                first = data[i];
            }
            last = data[i];
        }
    }

    return outputNumbers;
}

function sumNumbers(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }

    return sum;
}

let myFilename = "/Users/gerald/Library/CloudStorage/Dropbox/Coding Projects/Advent of Code/2023/day-1/part-1/input.txt";
let sum = sumNumbers(getNumbers(getData(myFilename)));
console.log(sum);

