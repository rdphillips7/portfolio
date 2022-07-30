const primaryNav = document.querySelector(".navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

const scroLock = document.querySelector(".scroll-lock");
const getBtn = document.querySelectorAll(".navbutton");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible",true);
        scroLock.setAttribute("scroll-lock", true);
    } else {
        primaryNav.setAttribute("data-visible",false);
        scroLock.setAttribute("scroll-lock", false);
    }
});

getBtn.forEach(function(v){
    v.addEventListener('click', () => {
        const visibility = primaryNav.getAttribute("data-visible");
        const viewSize = window.innerWidth;
        
        if (viewSize <= 600) {
            if (visibility === "false") {
                primaryNav.setAttribute("data-visible",true);
                scroLock.setAttribute("scroll-lock", true);
            } else {
                primaryNav.setAttribute("data-visible",false);
                scroLock.setAttribute("scroll-lock", false);
            }
    }
    });
});