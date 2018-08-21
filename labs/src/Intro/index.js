import './site.css';
import getBrowserInfo from './getBrowserInfo';

alert("Hello world");
document.getElementById("main").innerHTML = "Hello world";

let min = 1;
let max = 10;
let random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('The random number: ' + random);

let str = '';
for (let index = 1; index <= random; index++) {

    console.log('This is the index: ' + index);
    switch (index) {
        case 1:
            str += 'fun' + ' ';
            break;

        case 2:
            str += 'blue' + ' ';
            break;

        case 3:
            str += 'free' + ' ';
            break;

        case 4:
            str += 'pour' + ' ';
            break;

        case 5:
            str += 'hive' + ' ';
            break;

        case 6:
            str += 'kicks' + ' ';
            break;

        case 7:
            str += 'eleven' + ' ';
            break;

        case 8:
            str += 'straight' + ' ';
            break;

        case 9:
            str += 'fine' + ' ';
            break;

        case 10:
            str += 'pen' + ' ';
            break;
    }

}

document.getElementById("number").innerHTML = str;
document.getElementById("main").innerHTML = getBrowserInfo();