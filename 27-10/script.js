/*
let country = prompt('столица Кыргызстана?')
if (country === 'Бишкек'){
    alert('верно');
}else{
    alert('не знаете?')
}*/

let login = prompt('кто ты воин?')
if (login === 'сын ахилеса'){
    alert('ты достоин! говори пороль.');
    let password = prompt('пороль')
    if (password === 'niger'){
        alert('заходи дорогой');
    }else if (password == null){
        alert('уходи!');
    }else{
        alert('кознить!!!');
    }
}else if(login == null){
    alert('уходи');
}else {
    alert('ты кто?');
}