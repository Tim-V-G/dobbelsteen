let dice = {
    sides: 6,
    roll: function () {
        let randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}



//Prints dice roll to the page

function printNumber(number) {
    let placeholder = document.getElementById('counter');
    placeholder.innerHTML = number;
}

function printNumber2(number2) {
    let placeholder2 = document.getElementById('counter2');
    placeholder2.innerHTML = number2;
}

let button = document.getElementById('dobbelBtn');
let button2 = document.getElementById('dobbelBtn2');

button.onclick = function() {
    let result = dice.roll();
    printNumber(result);
};

button2.onclick = function() {
    let result = dice.roll();
    printNumber2(result);
};