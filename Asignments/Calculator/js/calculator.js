const result = document.getElementById("answer");

function resultAssign() {
    num = 3 + 3 + 6 + 25 + 6;
    result.innerHTML = num;
    console.log("Variable num represents the number:" + num);
}

resultAssign()

function addTwoPlusTwo() {
    result.innerHTML = 2 + 2;
}
function addSevenPlusEight() {
    result.innerHTML = 7 + 8;
}
function addSevenTeenPlusFive() {
    result.innerHTML = 17 + 5;
}
function divisionTenDevidedByFive() {
    result.innerHTML = 10/5 ;
}

addSevenPlusEight()
addTwoPlusTwo()
addSevenTeenPlusFive()
divisionTenDevidedByFive()

function multiply (n1, n2) {
    let multiplication = n1 * n2;
    result.innerHTML = multiplication;
}
function divide (n1, n2) {
    let division = n1/n2;
    result.innerHTML = division;
}
function subtract (n1, n2) {
    let subtraction = n1 - n2;
    result.innerHTML = subtraction;
}