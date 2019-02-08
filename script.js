
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/


 //createElement('button') pour créer un élement boutton
 //ensuite pour l'append (joindre ou annexer) on fait .appendChild(nom
//Me suis grandement inspiré de Vincent pour cette partie
 //new Date() donne la date actuelle
 //getFullYear() prend l'année d'une date
 //getDate() returns the day of the month
// to get the number of days in a month u use getDate for a certain date that is like this : (year, month//the number//, 0)
// For the select element, the user is required to select one of the options you've given. For the datalist element, it is suggested that the user select one of the options you've given, but he can actually enter anything he wants in the input.
let todayDate = new Date();
let age;
function fillYearList() {
  let max = new Date().getFullYear()
  let min = 1900
  let compteur = max
  let select = document.querySelector('#yearlist'); ///) changer si l'autre marche
  while (compteur >= min) {
    let opt = document.createElement('option');
    opt.value = compteur;
    opt.innerText = compteur;
    select.appendChild(opt);
    compteur--;
  }
}

function fillDayList() {
  let x = document.querySelector('#daylist')
  let a = document.querySelector('#yearlist').value;
  let b = document.querySelector('#monthlist').value;
  let max = new Date(a, b, 0).getDate();
  let select = document.querySelector('#daylist');
  select.innerHTML = "";
  let compteur = 1;
  while (compteur <= max) {
    let opt = document.createElement('option');
    opt.value = compteur;
    opt.innerText = compteur;
    select.appendChild(opt);
    compteur++;
  }
}
function fillDayAndYear() {
  fillDayList();
  fillYearList();
}
function displayAge() {
  if (parseInt(dayList.value) !== 0 && parseInt(yearList.value) !== 0 && parseInt(monthList.value) !== 0) {
    age = new Date().getFullYear() - parseInt(yearlist.value)
    if ((new Date().getMonth() + 1) < parseInt(monthList.value)) {
      age--
    }
    else if ((new Date().getMonth() + 1) === parseInt(monthList.value)) {
      if ((new Date().getDate()) < parseInt(dayList.value)) {
        age--
      } else if (new Date().getDate() === parseInt(dayList.value)) {
        age = "Happy Birthday!"
      }
    }
    if (age < 0) {
      age = "wtf bro";
    }
    document.querySelector('.displayAge').innerHTML = age
  }
}
let select2 = document.querySelectorAll('select');
let dayList = document.querySelector('#daylist');
let yearList = document.querySelector('#yearlist');
let monthList = document.querySelector('#monthlist');
fillDayAndYear(); //appeler la fonction une fois au lancement de la page pour remplir les selectbox
dayList.addEventListener('change', ()=> {
  displayAge()
})
monthList.addEventListener('change', ()=> {
  fillDayList();
  displayAge();
})
yearList.addEventListener('change', ()=> {
  fillDayList();
  displayAge();
})
