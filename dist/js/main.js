let popup=document.getElementById("popup-add"),body=document.querySelector(".black-body"),menu=document.querySelector(".burger-menu"),leftSide=document.querySelector(".left-content"),btnAdd=document.querySelector(".account__add"),btnClose=document.querySelector(".popup-close");btnAdd.addEventListener("click",(()=>{popup.style.display="block",body.style.display="block"})),btnClose.addEventListener("click",(()=>{popup.style.display="none",body.style.display="none"})),menu.addEventListener("click",(()=>{leftSide.classList.toggle("hover-menu")}));