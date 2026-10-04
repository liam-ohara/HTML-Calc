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
    previousInt = null
    result = null;
    currentOperator = "";
    printDisplay("");
}

function decimalPointButtonPressed () {
    printDisplay(".");
}

function addButtonPressed(secondNumber) {
    
    if (secondNumber != null) {
        result = previousInt + secondNumber;
     
    } else if (currentOperator.length == 0) {
        previousInt = Number(display);
        printDisplay("+");

    } else {
        return;

    }

    currentOperator = "+";

}

function subtractButtonPressed(secondNumber) {

     if (secondNumber != null) {
        result = previousInt - secondNumber;
     
    } else if (currentOperator.length == 0) {
        previousInt = Number(display);
        printDisplay("-");

    } else {
        return;

    }

    currentOperator = "-";

}

function multiplyButtonPressed(secondNumber) {

    if (secondNumber != null) {
        result = previousInt * secondNumber;

    } else if (currentOperator.length == 0) {
        previousInt = Number(display);
        printDisplay("x");

    } else {
        return;

    }

    currentOperator = "x";

}

function divideButtonPressed(secondNumber) {

    if (secondNumber != null && secondNumber == 0) {
        result = "DIV0";

    } else if (secondNumber != null && secondNumber != 0) {
        result = previousInt / secondNumber;

    } else if (currentOperator.length == 0) {
        previousInt = Number(display);
        printDisplay("÷");

    } else {
        return;
        
    }

    currentOperator = "÷";

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