// document.querySelector('html').onclick = function () {
//     alert('Ouch! Stop poking me!');
// }
let myHeading = document.querySelector('h1');
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Player, ' + storedName;
}
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName == null) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Player, ' + myName;
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
}




