let display = "";
let previousInt = 0;
let result = 0;
let currentOperator = "";

function zeroButtonPressed () {
    printDisplay("0");
}

function oneButtonPressed () {
    printDisplay("1");
}

function twoButtonPressed () {
    printDisplay("2");
}

function threeButtonPressed () {
    printDisplay("3");
}

function fourButtonPressed () {
    printDisplay("4");
}

function fiveButtonPressed () {
    printDisplay("5");
}

function sixButtonPressed () {
    printDisplay("6");
}

function sevenButtonPressed () {
    printDisplay("7");
}

function eightButtonPressed () {
    printDisplay("8");
}

function nineButtonPressed () {
    printDisplay("9");
}

function allClearPressed () {
    display = "";
    previousInt = 0;
    result = 0;
    currentOperator = "";
    printDisplay("");
}

function addButtonPressed(secondNumber) {
    
    currentOperator = "+";
    
    if (secondNumber != null) {
        result = previousInt + secondNumber;
     
    } else {
        previousInt = Number(display);
        printDisplay("+");
    }

}

function subtractButtonPressed(secondNumber) {

    currentOperator = "-";

     if (secondNumber != null) {
        result = previousInt - secondNumber;
     
    } else {
        previousInt = Number(display);
        printDisplay("-");
    }
}

function multiplyButtonPressed(secondNumber) {

    currentOperator = "x"

    if (secondNumber != null) {
        result = previousInt * secondNumber;

    } else {
        previousInt = Number(display);
        printDisplay("x");

    }
}

function divideButtonPressed(secondNumber) {

    currentOperator = "÷";

    if (secondNumber != null && secondNumber == 0) {
        result = "DIV0";

    } else if (secondNumber != null && secondNumber != 0) {
        result = previousInt / secondNumber;

    } else {
        previousInt = Number(display);
        printDisplay("÷");
    }
}

function equalsButtonPressed() {

    secondNumber = Number(display.slice(display.indexOf(currentOperator)+1));

    switch (currentOperator) {
        case "+": addButtonPressed(secondNumber);
        break;
        case "-": subtractButtonPressed(secondNumber);
        break;
        case "x": multiplyButtonPressed(secondNumber);
        break;
        case "÷": divideButtonPressed(secondNumber);

    }

    previousInt = result;
    display = result;
    currentOperator = "";
    printDisplay("");
}

function printDisplay (text) {
    
    if (display == "DIV0") {
        document.getElementById("display").textContent = display;

    } else {
        display = display + text;
    document.getElementById("display").textContent = display;
    }
}