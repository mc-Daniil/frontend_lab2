let counter = localStorage.getItem("counter");

if (counter === null) {
    counter = 0;
}

let newCounter = Number(counter) + 1; 
localStorage.setItem("counter", newCounter);

alert(newCounter);