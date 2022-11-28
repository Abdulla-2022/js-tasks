const btn = document.querySelectorAll(".btn");
const atribut = document.querySelector('.btn');
const modal =  document.querySelector('#modal');


btn.forEach((element, index) => {
    console.log(element);
    element.addEventListener('click', () => {
        modal.innerHTML = `<div class="notification" id="notification"> ${element.dataset.text}<button id="close-btn"> x </button></div>`;
        document.querySelector('.notification').classList.add(element.dataset.class);
        showNotification();
    })
   
}) 
 

showNotification = () => {
    document.querySelector('#close-btn').addEventListener('click', () => {
        modal.innerHTML = '';
    })
    setTimeout(()=>{
        modal.innerHTML = '';
    },2000);
}