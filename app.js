// For the movement animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.title');
const logo = document.querySelector('.logo img');
const purchase = document.querySelector('.purchase button');
const info = document.querySelector('.info h3');
const buttons = document.querySelector('.buttons');

// Moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";
    // Pop out
    title.style.transform = "translateZ(100px)";
    logo.style.transform = "translateZ(300px) rotateZ(360deg)";
    info.style.transform = "translateZ(100px)";
    buttons.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});

// Animate out
container.addEventListener('mouseleave', e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Pop back
    title.style.transform = "translateZ(0px)";
    logo.style.transform = "translateZ(0px) rotateZ(0deg)";
    info.style.transform = "translateZ(0px) rotateZ(0deg)";
    buttons.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px) rotateZ(0deg)";
});