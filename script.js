// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
bar.addEventListener('click',() => {
    console.log('fucked')
    nav.classList.add('active');
})}