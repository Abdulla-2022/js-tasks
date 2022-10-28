/******* 1 *******/

let x = prompt('введите число');
if (x == 7){
    alert('верно');
}
else {
    alert('неверно');
}

/******* 2 *******/

let a = prompt('введите число');
let b = prompt('введите второе число');
a = Number(a);
b = Number(b);
if (a <= 1 || b >= 3){
    let result = a + b;
    alert(result);
} else{
    result = a - b;
    alert(result);
}


/******* 3 *******/
let time = prompt('введите число от 0 до 59');
if (time <= 15){
    alert(`первая четверть, ${time} минута`);
} else if (time <= 30){
    alert(`вторая четверть, ${time} минута`);
} else if (time <= 45){
    alert(`третья четверть, ${time} минута`);
} else if (time <= 59){
    alert(`четвертая четверть, ${time} минута`);
} else {
    alert('Значение не попадает в диапазон от 0 до 59');
}














