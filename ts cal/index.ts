import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";
function main(): void {
  const firststr: string = question("enter first number: ");
  const operator: string = question("enter operator: ");
  const secoundstr: string = question("enter secound number: ");

  const validInput: boolean =
    isNumber(firststr) && isOperator(operator) && isNumber(secoundstr);

  if (validInput) {
    const firstNum: number = parseInt(firststr);
    const secoundNum: number = parseInt(secoundstr);
    const result = caculate(firstNum, operator as Operator, secoundNum);
    console.log(result)
  } else {
    main();
    console.log("\ninvaild input \n");
  }
}

function caculate(firstNum: number, operator: Operator, secoundNum: number) {
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

function isOperator(operator: string): boolean {
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

function isNumber(str: string): boolean {
  const maybenum = parseInt(str);
  const isnum: boolean = !isNaN(maybenum);
  return isnum;
}
main();
