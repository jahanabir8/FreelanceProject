const menu__bar = document.querySelector(".menu__bar")
const mobile__menu = document.querySelector(".mobile__menu")

menu__bar.addEventListener("click", ()=>{
    if(!mobile__menu.classList.contains("menu__open")){
        mobile__menu.classList.add("menu__open")
    }
})

window.addEventListener("click", (event)=>{
    if(!menu__bar.contains(event.target)){
        mobile__menu.classList.remove("menu__open")
    }
})