
var number = 0;
var numberDiv = document.querySelector(".smallNumber");


document.getElementById("knop").addEventListener("click", klik);

function klik(){

    getRandom();
    hoevaak();
    changeid();
}

function getRandom() {
    // var number = document.getElementById("generate")

    number = Math.floor(Math.random() * 87);

    numberDiv.innerHTML = number;

    console.log(number)

    if (number === 69) {
        document.querySelector(".nice").innerHTML = "Nice! ;)"
        console.log('nice');
        } else { 
            document.querySelector(".nice").innerHTML = "" 
    }
}



//variabele voor het aantal keer klikken op de button
var count = 1;

//functie die elke keer 1 optelt bij count
function hoevaak() {
  document.getElementById("teller").innerHTML = "Aantal keren geklikt " + count++;
//   console.log(count);
}


function changeid() {
    if (numberDiv.classList.contains("smallNumber")) {
        numberDiv.classList.add("bigNumber")
    }
}

function log() {
    console.log('functie')
}

