alert("Hello world");
document.getElementById("main").innerHTML = "Hello world";

let min = 1;
let max = 10;
let random = Math.floor(Math.random() * (max - min + 1)) + min;

let index = 1;
let str = '';
while(index <= random){

    str += index + ' ';
    index++;
}

document.getElementById("number").innerHTML = str;