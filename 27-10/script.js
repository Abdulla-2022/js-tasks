/*
let country = prompt('столица Кыргызстана?')
if (country === 'Бишкек'){
    alert('верно');
}else{
    alert('не знаете?')
}*/

let login = prompt('кто пришел?')
if (login === 'Админ'){
    
    let password = prompt('пороль')
    if (password === 'черный властелин'){
        alert('добро пожаловать');
    }else if (password == null){
        alert('я вас не знаю');
    }else{
        alert('вход отменен');
    }
}else if(login == null){
    alert('вох отменен');
}else {
    alert('я вас не знаю');
}