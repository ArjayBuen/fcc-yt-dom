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


//Event Propogation

window.addEventListener("click", function(){
    console.log('Window');
}, true);
document.addEventListener("click", function(){
    console.log('Dcoument')
}, true)
document.querySelector('.div2').addEventListener("click", function(){
    //e.stopPropagation();
    console.log('DIV 2');
},{once: true}/*true*/ );

document.querySelector('.div1').addEventListener("click", function(){
    console.log('DIV 1');
}, true);

document.querySelector('.btn').addEventListener("click", function(e){
    e.preventDefault();
    console.log(e.target.innerText='clicked');
}, true);


//Event Delegation
// document.querySelector('.Football').addEventListener("click",function(e){
//     console.log('football is clicked');
//     const target=e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor="lightgray";
//     }
// })

// document.querySelector('.basketball').addEventListener("click",function(e){
//     console.log('basketball is clicked');
//     const target=e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor="lightgray";
//     }
// })

// document.querySelector('.boxing').addEventListener("click",function(e){
//     console.log('boxing is clicked');
//     const target=e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor="lightgray";
//     }
// })

// document.querySelector('.tennis').addEventListener("click",function(e){
//     console.log('tennis is clicked');
//     const target=e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor="lightgray";
//     }
// })

// document.querySelector('.golf').addEventListener("click",function(e){
//     console.log('golf is clicked');
//     const target=e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor="lightgray";
//     }
// })

document.querySelector('#sports-list').addEventListener("click",function(e){
    console.log(e.target.getAttribute('id')+ ' is clicked');
    const target= e.target;
    if(target.matches('li')){
                 target.style.backgroundColor="lightgray";
             }
})