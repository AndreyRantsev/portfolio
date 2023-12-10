const button = document.querySelector("#menu-btn");
const mobileAnchoreLinks = document.querySelectorAll(".mobile-menu a");

button.addEventListener("click",(e)=>{
    document.querySelector(".mobile-menu").classList.toggle("active");
    button.classList.toggle("active");
    const openCard = document.querySelector(".skill-card.active");
    if(!openCard){
        document.body.classList.toggle("active");
    }
    else{
        document.querySelector(".skill-card.active").classList.remove("active");
        fade.classList.remove("active");
    }
});



mobileAnchoreLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        document.querySelector(".mobile-menu").classList.remove("active");
        document.querySelector(".burger").classList.remove("active");
        document.body.classList.remove("active");
    });
});

// card animation

const skillButtons = document.querySelectorAll(".context-button");
const cross = document.querySelectorAll(".skill-card__close");
const fade = document.querySelector(".fadeblock");

skillButtons.forEach(item => {
    item.addEventListener("click", ()=>{
        item.closest(".skill-card").classList.add("active");
        fade.classList.add("active");
        document.body.classList.add("active");
    });
});

cross.forEach(item => {
    item.addEventListener("click", ()=>{
        item.closest(".skill-card").classList.remove("active")
        fade.classList.remove("active");
        document.body.classList.remove("active");
    });
});


//form animation

const inputs = document.querySelectorAll(".form__input");

inputs.forEach((item) => {
    const placeholder = item.nextElementSibling;
    item.addEventListener("focus", () => {
        placeholder.style.top = "-2px"
    })
})

