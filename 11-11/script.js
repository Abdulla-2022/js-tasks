const images = document.querySelectorAll('#images-block img');
const btn = document.getElementById('btn');
const images_mass = [];
for(let i = 0; i < images.length; i++){
    images[i].onclick = () => {
            if(images[i].alt){
            images_mass.push(images[i].alt);
            } else {
            alert('pusto')
            }
    }
}
btn.onclick = () => {
    console.log(images_mass);
}