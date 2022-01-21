
let popup = document.getElementById('popup-add');
let body = document.querySelector('.black-body');
let menu = document.querySelector('.burger-menu');
let leftSide = document.querySelector('.left-content')
let btnAdd = document.querySelector('.account__add');
let btnClose = document.querySelector('.popup-close');



btnAdd.addEventListener('click',()=>{
    popup.style.display='block';
    body.style.display='block'
})
btnClose.addEventListener('click',()=>{
    popup.style.display='none';
    body.style.display='none'
})

menu.addEventListener('click',()=>{
    leftSide.classList.toggle("hover-menu")
})