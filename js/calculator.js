let display = "";

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

function printDisplay (text) {
    display = display + text;
    document.getElementById("display").textContent = display;
}