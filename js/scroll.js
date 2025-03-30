window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    let hero = document.querySelector(".hero");
    let heroHeight = hero.offsetHeight;
    let contentHeight = document.querySelector(".content").offsetHeight;
    let text = document.querySelector(".scrolling-text");
    
    let scrollProgress = Math.min(scrollY / (contentHeight - window.innerHeight), 1);


    let fadeProgress = Math.min(scrollY / heroHeight, 1);
    hero.style.opacity = 1 - fadeProgress;


    let maxTranslate = -((text.offsetWidth - window.innerWidth) / 1.5);
    let moveLeft = Math.max(maxTranslate, -scrollY * 1.2);
    text.style.transform = `translateX(${moveLeft}px)`;
});
