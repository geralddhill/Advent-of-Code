const fs = require('fs');
const regexFront = /one|two|three|four|five|six|seven|eight|nine|\d/g;
const regexBack = /(?:one|two|three|four|five|six|seven|eight|nine|\d)(?!ne|wo|hree|our|ive|ix|even|ight|ine)/g

function getData(filename) {
    let data = fs.readFileSync(filename, 'utf-8');

    return data;
}

function separateLines(data) {
    return data.split('\n');
}

function convertToNumString(input) {
    if (!isNaN(input)) {
        return input;
    }
    else {
        switch(input) {
            case "zero":
                return '0';
            case "one":
                return '1';
            case "two":
                return '2';
            case "three":
                return '3';
            case "four":
                return '4';
            case "five":
                return '5';
            case "six":
                return '6';
            case "seven":
                return '7';
            case "eight":
                return '8';
            case "nine":
                return '9';
            default:
                console.log("Error converting written int to real int.\n");
                return;
        }
    }
}

function findNumberInLine(dataLine) {
    let matchesFront = dataLine.match(regexFront);
    let matchesBack = dataLine.match(regexBack);

    let numString = convertToNumString(matchesFront[0]) + convertToNumString(matchesBack[matchesBack.length - 1])

    return parseInt(numString);
}

function getNumbers(data) {
    let outputNumbers = [];

    for (let i in data) {
        outputNumbers.push(findNumberInLine(data[i]));
    }

    return outputNumbers;
}

function sumNumbers(data) {
    let sum = 0;
    for (let i in data) {
        sum += data[i];
    }

    return sum;
}

let myFilename = "/Users/gerald/Library/CloudStorage/Dropbox/Coding Projects/Advent of Code/2023/day-1/part-2/input.txt"
let myTestCase = "/Users/gerald/Library/CloudStorage/Dropbox/Coding Projects/Advent of Code/2023/day-1/part-2/test_case.txt"
let data = separateLines(getData(myFilename));
let numbers = getNumbers(data);
let sumOfNumbers = sumNumbers(numbers);

console.log(numbers);
console.log(sumOfNumbers);
