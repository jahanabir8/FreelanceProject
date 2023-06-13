// mega menu js here
const megaMenu = document.querySelector('.mega__menu')
const menuList = document.querySelectorAll(".menu__list")

menuList.forEach((menul)=>{
    menul.addEventListener('click', ()=>{
        megaMenu.classList.toggle('mega__show')
        event.stopPropagation();
    })
})

document.addEventListener('click', (event) => {
    const menuArray = Array.from(menuList); // Convert NodeList to an array
    if (!megaMenu.contains(event.target) && !menuArray.some(menu => menu.contains(event.target))) {
      megaMenu.classList.remove('mega__show');
    }
  });