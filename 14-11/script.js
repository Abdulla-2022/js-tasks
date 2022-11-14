const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const alert = document.querySelector('#alert');
const alert1 = document.querySelector('#alert-1');
const alert2 = document.querySelector('#alert-2');

/*** CLICK BUTTON №1 ***/
btn1.addEventListener('click', () => {
    showNotification({
        key: 'primary'
    });
});
const showNotification = (option) => {
    alert.classList.add(option.key);
    setTimeout(deleteAlert, 1000);
}
const deleteAlert = () => {
    alert.classList.remove('primary', 'secondary', 'success');
}

/*** CLICK BUTTON №2 ***/

btn2.addEventListener('click', () => {
    showNotification1({
        key: 'secondary'
    });
});
const showNotification1 = (option) => {
    alert1.classList.add(option.key);
    setTimeout(deleteAlert1, 1000);
}
const deleteAlert1 = () => {
    alert1.classList.remove('primary', 'secondary', 'success');
}

/*** CLICK BUTTON №3 ***/

btn3.addEventListener('click', () => {
    showNotification2({
        key: 'success'
    });
});
const showNotification2 = (option) => {
    alert2.classList.add(option.key);
    setTimeout(deleteAlert2, 1000);
}
const deleteAlert2 = () => {
    alert2.classList.remove('primary', 'secondary', 'success');
}