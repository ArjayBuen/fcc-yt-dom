//DOM Manipulation

//Event Listeners
//element.addEventListener("click", function);
const buttonTwo=document.querySelector('.btn-2');

function alertBtn(){
    alert('Button 2 clicked');
}

buttonTwo.addEventListener("click",alertBtn);

//Mouseover

const newBackgroundColor=document.querySelector('.box-3');

function changedBgColor(){
    newBackgroundColor.style.backgroundColor='blue';
}
newBackgroundColor.addEventListener("mouseover",changedBgColor);


//Reveal Event

const revealBtn=document.querySelector('.reveal-btn');
const hiddenContent=document.querySelector('.hidden-content');

function revealContent(){
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
    }else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click',revealContent);