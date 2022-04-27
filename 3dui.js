const humburgerMenu = document.querySelector('.humburger-menu');
const container = document.querySelector('.container');
const main = document.querySelector('.main');

humburgerMenu.addEventListener("click",()=>{
    container.classList.toggle("active");
})

main.addEventListener("click",()=>{
    container.classList.remove("active");
})

