const button = document.querySelector("#menu-btn");
const mobileAnchoreLinks = document.querySelectorAll(".mobile-menu a");

button.addEventListener("click",(e)=>{
    document.querySelector(".mobile-menu").classList.toggle("active");
    button.classList.toggle("active");
})


mobileAnchoreLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        document.querySelector(".mobile-menu").classList.remove("active");
        document.querySelector(".burger").classList.remove("active");
    })
})

