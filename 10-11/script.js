/******** 1 ********/
const imgElements = document.getElementById('img-1');
const img1Elements = document.getElementById('img-2');


const Showmessage = () => {
    alert('первая картинка');
}
const showmessage = () => {
    alert('вторая картинка');
}

imgElements.onclick = Showmessage;
img1Elements.onclick = showmessage;

/******** 2 ********/

const LinkElement = document.getElementById('link-1');
const Link2Element = document.getElementById('link-2');

const getMessage = () => {
    alert('ссыдка на ютуб');
}
const GetMessage = () => {
    alert('ссыдка на мегаком');
}
LinkElement.onmouseover = getMessage;
Link2Element.onmouseover = GetMessage;















