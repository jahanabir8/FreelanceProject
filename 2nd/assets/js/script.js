// mega menu js here
const megaMenu = document.querySelector('.mega__menu')
const menuList = document.querySelectorAll(".menu__list")

menuList.forEach((menul)=>{
    menul.addEventListener('click', (event)=>{
        megaMenu.classList.toggle('mega__show')
        event.stopPropagation();
    })
})


const mbMenu = document.querySelector('.mobile__menu')
const menuBar = document.querySelector('.menu__bar')
const crossBar = document.querySelector('.cross__bar')

menuBar.addEventListener("click", function(){
  mbMenu.classList.toggle("mobile__show")
})

crossBar.addEventListener("click", function (){
  mbMenu.classList.remove('mobile__show')
}
)
// 



document.addEventListener('click', (event) => {
    const menuArray = Array.from(menuList); // Convert NodeList to an array
    if (!megaMenu.contains(event.target) && !menuArray.some(menu => menu.contains(event.target))) {
      megaMenu.classList.remove('mega__show');
    }
  });