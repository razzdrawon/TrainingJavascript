/* eslint no-undef:off, func-style:off, require-jsdoc:off */
import './site.css';
import jsonPersons from './persons.json';
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

function getPersons () {
    console.log(jsonPersons);
    setTimeout(() => {
        console.log("finished reading persons", jsonPersons);
        return jsonPersons;
    }, 3000);
}

let persons = [];
persons = getPersons();
console.log(persons);

let arrayModified = persons.map(p => 
`<section class="person-card">
    <header>
      <h1>
        ${p.name.first} ${p.name.last}
      </h1>
    </header>
    <div class="profile-image-div">
      <img src="${p.picture.large}" alt="${p.name.first} ${p.name.last}" />
    </div>
    <div class="person-data">
      <ul>
        <li>
          <span class="label">Location</span>
          <br />${p.location.street}
          <br />${p.location.city}, ${p.location.state} ${p.location.postcode}
          <br />${p.location.country}</li>
        <li>
          <span class="label">Email:</span> ${p.email}</li>
        <li>
          <span class="label">Cell:</span> ${p.cell}</li>
        <li>
          <span class="label">Gender:</span> ${p.gender}</li>
      </ul>
    </div>
    </header>
  </section>`
);

console.log(arrayModified);


let personString = arrayModified.join();

console.log(personString);

document.getElementById("list").innerHTML = personString;
document.getElementById("number").innerHTML = str;
document.getElementById("info").innerHTML = getBrowserInfo();