"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firststr = (0, readline_sync_1.question)("enter first number: ");
    var operator = (0, readline_sync_1.question)("enter operator: ");
    var secoundstr = (0, readline_sync_1.question)("enter secound number: ");
    var validInput = isNumber(firststr) && isOperator(operator) && isNumber(secoundstr);
    if (validInput) {
        var firstNum = parseInt(firststr);
        var secoundNum = parseInt(secoundstr);
        var result = caculate(firstNum, operator, secoundNum);
        console.log(result);
    }
    else {
        main();
        console.log("\ninvaild input \n");
    }
}
function caculate(firstNum, operator, secoundNum) {
    switch (operator) {
        case "+":
            return firstNum + secoundNum;
        case "-":
            return firstNum - secoundNum;
        case "*":
            return firstNum * secoundNum;
        case "/":
            return firstNum / secoundNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "/":
        case "*":
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybenum = parseInt(str);
    var isnum = !isNaN(maybenum);
    return isnum;
}
main();
