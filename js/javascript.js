
var number = 0;
var id = document.getElementById("number");


document.getElementById("knop").addEventListener("click", klik);

function klik(){

    getRandom();
    hoevaak();
    changeid();
}

function getRandom() {
    // var number = document.getElementById("generate")

    number = Math.floor(Math.random() * 92);

    document.getElementById("number").innerHTML = number;

    console.log(number)
}

if (number >= 10) {
    console.log('nice')
}

//variabele voor het aantal keer klikken op de button
var count = 1;

//functie die elke keer 1 optelt bij count
function hoevaak() {
  document.getElementById("teller").innerHTML = count++;
  console.log(count);
}

function changeid() {
    if (id) {​​​​​
        console.log(document.getElementById("number"))
        document.getElementById("number").id = "numberbig"
        }​​​​​ else {

        }
}


function log() {
    console.log('functie')
}

