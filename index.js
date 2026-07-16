//Selecting Side Navbar,Menuicon
const sidenav = document.getElementById("sidenav")
const menuicon = document.getElementById("menuicon")
const closenav = document.getElementById("closenav")
const overlay = document.getElementById("overlay")

menuicon.addEventListener("click", function () {
    sidenav.classList.remove("translate-x-full")
})

closenav.addEventListener("click", function () {
    sidenav.classList.add("translate-x-full")
})