const menuBtn = document.getElementById("menuBtn")
const menu = document.getElementById("menu")

menuBtn.addEventListener("click", ()=>{
    if(menu.style.display === "block"){
        menu.style.display = "none"
        menuBtn.textContent = "☰"
    } else{
        menu.style.display = "block"
        menuBtn.textContent = "✖"
    }
})