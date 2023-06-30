const menuBar = document.querySelector('.menu__bar')
const mobileMenu = document.querySelector('.mobile__menu')
const crossBar = document.querySelector('.cross__bar')

menuBar.addEventListener("click", function (){
    mobileMenu.classList.toggle("menu__show")

    }
)

crossBar.addEventListener('click', ()=>{
  
  if(mobileMenu.classList.contains("menu__show")){
    mobileMenu.classList.remove('menu__show')
  }
})
