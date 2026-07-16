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


// Search Bar

const search = document.getElementById("search");
const products = document.querySelectorAll(".product");

search.addEventListener("input", function () {

    const enteredValue = search.value.toLowerCase();

    products.forEach(function (product) {

        const productName = product.querySelector("h1").textContent.toLowerCase();

        if (productName.includes(enteredValue)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });

});