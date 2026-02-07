let digit = document.querySelector('h1')
let increment = document.getElementById("incre")
let reset = document.getElementById("reset")
let decrement = document.getElementById("decre")

let count = 0
increment.addEventListener('click', increase)
decrement.addEventListener('click', decrese)
reset.addEventListener('click' , reload)

function reload() {
     location.reload();
}

function increase() {
      if (count => 0) {
        digit.style.color = 'white'
    }
    count++;
    digit.innerText = count;
  


}



function decrese() {

    if (count == 0) {
        alert("it's already 0");
        digit.style.color = 'red'
    }
    count--;
    digit.innerText = count;
}