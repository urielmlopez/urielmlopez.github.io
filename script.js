let bodyWidth = document.getElementById('medium-width');
let timeline = document.getElementById('timeline');
let contact = document.getElementById('contact');

function timelineIncreaseWidth() {
    bodyWidth.style.width = "90%";
    bodyWidth.style.backgroundColor = "#0094A3";
    bodyWidth.style.transitionDuration = "300ms";
}

function contactIncreaseWidth() {
    bodyWidth.style.width = "90%";
    bodyWidth.style.backgroundColor = "#BF7154";
    bodyWidth.style.transitionDuration = "300ms";
}

function decreaseWidth() {
    bodyWidth.style.width = '75%';
    bodyWidth.style.backgroundColor = "#BDCAB5";
    bodyWidth.style.transitionDuration = "300ms";
}

timeline.addEventListener('mouseenter', timelineIncreaseWidth);
contact.addEventListener('mouseenter', contactIncreaseWidth);
contact.addEventListener('mouseleave', decreaseWidth);
timeline.addEventListener('mouseleave', decreaseWidth);