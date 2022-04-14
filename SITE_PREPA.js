const sidemenu = document.querySelector("aside");
const menubtn = document.querySelector("#menu_btn");
const closebtn = document.querySelector("#fermer_btn");
const themetoggler = document.querySelector(".bascule_theme");
//button menu 
menubtn.addEventListener('click', () =>{
    sidemenu.style.display ='block';
})
//button fermer 
closebtn.addEventListener('click', () =>{
    sidemenu.style.display ='none';
})
//button bascule_theme
themetoggler.addEventListener('click',() =>{
   document.body.classList.toggle('dark-theme-variable');
   themetoggler.querySelector('span:nth-child(1)').classList.toggle('active');
   themetoggler.querySelector('span:nth-child(2)').classList.toggle('active');
})