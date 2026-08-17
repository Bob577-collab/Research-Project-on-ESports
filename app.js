
const links = document.querySelectorAll(".links");
const body = document.querySelector("body");
const header = document.querySelector(".header-section");
const divider = document.querySelector(".divider");
const bodySect = document.querySelector(".body-section");

elements = [...links,body,header,divider,bodySect];

links.forEach((link) =>{
    link.addEventListener("click",function(event){
        event.preventDefault();
        elements.forEach((i) =>{
            i.classList.remove("animate");
            void i.offsetWidth;
            i.classList.add("animate");
        }
        
        )

    setTimeout(() => {
        window.location.href = link.href;
    }, 800);})
    
})

