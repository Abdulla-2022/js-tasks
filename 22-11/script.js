const btn = document.querySelectorAll(".btn");
const atribut = document.querySelector('.btn');
const modal =  document.querySelector('#modal');
const global_div = document.querySelector('#global-div');

showNotification = (option) => {
    modal.innerHTML = `<div class="notification ${option.className}" id="notification"> ${option.text}<button id="close-btn"> x </button> <div class="div-btn"><button id="bott-btn"> CLOSE </button><button id="save-btn"> save changes </button></div></div>`;
    // const timerid = setTimeout( () => {
    //     modal.innerHTML = '';
    //     global_div.classList.remove('global-div');
    // },5000)
    document.querySelector('#close-btn').addEventListener('click', () => {
        global_div.classList.remove('global-div');
        modal.innerHTML = '';
    });
    document.querySelector('#bott-btn').addEventListener('click', () => {
        global_div.classList.remove('global-div');
        modal.innerHTML = '';
    });
    global_div.addEventListener('dblclick', () => {
        global_div.classList.remove('global-div');
        modal.innerHTML = '';
    });
}
btn.forEach((item) => {
    item.addEventListener('click', () => {
        global_div.classList.add('global-div');
        showNotification({
            className:item.dataset.class,
            text:item.dataset.text
        });
    })
   
}) 
 

