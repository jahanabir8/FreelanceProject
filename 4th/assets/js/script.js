const sidebar = document.getElementById("sidebar")
const libBtn = document.getElementById("libBtn")

libBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("sidebar__show")
})