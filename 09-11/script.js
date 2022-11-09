/*
const showMessage = (message) => {
    alert(message);

}
setTimeout(showMessage, 4000, 'Hello after 4 seconds');
setTimeout(showMessage, 8000, 'Hello after 8 seconds');


*/

const YearOfBirth = +prompt('введите год рождения');
const ThisYear = +prompt('какой сейчас год?');
result = YearOfBirth - ThisYear;
alert(`вам ${result} лет`);