const primary_btn = document.querySelector('#primary-btn');
const secondary_btn = document.querySelector('#secondary-btn');
const success_btn = document.querySelector('#success-btn');
const container_btn = document.querySelector('#container-btn')
const notification = document.querySelector('.notification');
const btn_x = document.querySelector('#btn-x');

primary_btn.addEventListener('click', () => {
    const elem = document.createElement('div');
    elem.className = 'notification notification-primary';
    elem.innerHTML = '<p>button 1</p>';
    container_btn.after(elem);
    setTimeout(() => {
        elem.classList.add('d-none');
    },5000)
    const x = document.createElement('button');
    x.innerHTML = '&#10006';
    elem.append(x);
    x.addEventListener('click', () => {
    elem.classList.add('d-none');
    })
})

secondary_btn.addEventListener('click', () => {
    const elem = document.createElement('div');
    elem.className = 'notification notification-secondary';
    elem.innerHTML = '<p>button 2</p>';
    container_btn.after(elem);
    setTimeout(() => {
        elem.classList.add('d-none');
    },5000)
    const x = document.createElement('button');
    x.innerHTML = '&#10006';
    elem.append(x);
    x.addEventListener('click', () => {
    elem.classList.add('d-none');
    })
})

success_btn.addEventListener('click', () => {
    const elem = document.createElement('div');
    elem.className = 'notification notification-success';
    elem.innerHTML = '<p>button 3</p>';
    container_btn.after(elem);
    setTimeout(() => {
        elem.classList.add('d-none');
    },5000)
    const x = document.createElement('button');
    x.innerHTML = '&#10006';
    elem.append(x);
    x.addEventListener('click', () => {
    elem.classList.add('d-none');
    })
})


// ЗАДАЧА №2
const ul = document.querySelector('#ul');
const button = document.querySelector('#button');
button.addEventListener('click', () => {
    ul.innerHTML += '<li>пункт</li>'
})
