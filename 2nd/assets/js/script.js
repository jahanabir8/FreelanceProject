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
const menuBar = document.getElementById('menu__bar')

menubar.addEventListener('click', () =>{
  mbMenu.classList.toggle("d-block")
})  

window.addEventListener('click', (event) => {
    const menuArray = Array.from(menuList); // Convert NodeList to an array
    if (!megaMenu.contains(event.target) && !menuArray.some(menu => menu.contains(event.target))) {
      megaMenu.classList.remove('mega__show');
    }
  });