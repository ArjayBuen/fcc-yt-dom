//DOM Selection

// const title=document.getElementById('main-heading');
// console.log(title);

// const listItems=document.getElementsByClassName('list-items');
// console.log(listItems);

// const list=document.getElementsByTagName('li');
// console.log(list);

// const container=document.querySelector('.container');
// console.log(container);

// const divContainer=document.querySelectorAll('div');
// console.log(divContainer);

const title=document.querySelector('#main-heading')
title.style.color='red';//inline css styling
console.log(title);

const listItems=document.querySelectorAll('.list-items');

for(let i=0;i<listItems.length;i++){
    listItems[i].style.fontWeight='bold';
}
console.log(listItems);

//Creating Elements
const ul=document.querySelector('ul');
const li=document.createElement('li');

//Adding Elements
ul.append(li);
console.log(ul);

//Modifying the Text
const firstListItem=document.querySelector('.list-items');

console.log(firstListItem);
console.log(firstListItem.innerHTML);
console.log(firstListItem.innerText);//recommended to use
console.log(firstListItem.textContent);

li.innerText='X-men';
//Modifying Attribute & Classes
li.setAttribute('class','list-items');
li.removeAttribute('class');//remove the style

console.log(title.getAttribute('id'));

li.classList.add("list-items");//add style again
li.classList.remove("list-items");//remove the style again

console.log(li.classList.contains('list-items'));//returns boolean

li.remove();//remove the last list containing X-men


//Parent Node Traversal
console.log(ul.parentNode);//div
console.log(ul.parentNode.parentNode);//body
console.log(ul.parentNode.parentNode.parentNode);//html
console.log(ul.parentNode.parentNode.parentNode.parentNode);//document
console.log(ul.parentNode.parentNode.parentNode.parentNode.parentNode);
//null, there is no greater than document

console.log(ul.parentElement.parentElement.parentElement.parentElement);
//null, there is no element greater than html

const html=document.documentElement;
console.log(html.parentNode);
console.log(html.parentElement);

//Child Node Traversal
console.log(ul);
console.log(ul.childNodes);
console.log(ul.firstChild);//logs the text
console.log(ul.lastChild);//logs the text

//ul.firstChild.style.backgroundColor='blue';//nothing will change because text is just an indent
ul.childNodes[1].style.backgroundColor='blue';

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
console.log(ul.children[1]);

//Sibling Node Traversal
const div =document.querySelector('div');
console.log(div.childNodes);
console.log(ul.previousSibling);
console.log(ul.nextSibling);
console.log(ul.previousElementSibling);//logs the h1 because they are the same level
console.log(ul.nextElementSibling);//logs null because no same level element next

