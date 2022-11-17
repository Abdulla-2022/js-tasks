const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const alert = document.querySelector('#alert');
const alert1 = document.querySelector('#alert-1');
const alert2 = document.querySelector('#alert-2');
const btn_x = document.querySelector('#btn_x');
const btn_x1 = document.querySelector('#btn_x1');
const btn_x2 = document.querySelector('#btn_x2');
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const text3 = document.querySelector('#text3');













/*** CLICK BUTTON №1 ***/
btn1.addEventListener('click', () => {
    showNotification({
        key: 'primary',
    });
   
});
const showNotification = (option) => {
    alert.classList.add(option.key);
    text1.textContent = 'A simple primary alert—check it out!';
    setTimeout(deleteAlert, 3000);
}
btn_x.addEventListener('click', () => {
    deleteAlert();
});
const deleteAlert = () => {
    alert.classList.remove('primary');
}










































/*** CLICK BUTTON №2 ***/
btn2.addEventListener('click', () => {
    showNotification1({
        key: 'secondary'
    });
});
const showNotification1 = (option) => {
    alert1.classList.add(option.key);
    text2.textContent = 'A simple secondary alert—check it out!';
    setTimeout(deleteAlert1,  3000);
}
btn_x1.addEventListener('click', () => {
    deleteAlert1();
});

const deleteAlert1 = () => {
    alert1.classList.remove('secondary');
}
/*** CLICK BUTTON №3 ***/
btn3.addEventListener('click', () => {
    showNotification2({
        key: 'success'
    });
});
const showNotification2 = (option) => {
    alert2.classList.add(option.key);
    text3.textContent = 'A simple success alert—check it out!';
    setTimeout(deleteAlert2, 3000);
}
btn_x2.addEventListener('click', () => {
    deleteAlert2();
});
const deleteAlert2 = () => {
    alert2.classList.remove('success');
}
/*** style btn ***/
btn1.style.backgroundColor = 'darkblue';
btn1.style.color = 'white';
btn2.style.backgroundColor = 'darkblue';
btn2.style.color = 'white';
btn3.style.backgroundColor = 'darkblue';
btn3.style.color = 'white';