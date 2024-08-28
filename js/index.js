const images = Array.from(document.querySelectorAll('.slide img'));
const dots = Array.from(document.querySelectorAll('.dots .dot'));
const slider = document.querySelector('.slider');
const slide = document.querySelector('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const down = document.getElementById('down');
const up = document.getElementById('up');
let autoPlayInterval;
let currentIndex = 0;
for(let i= 0 ; i < images.length ; i++){
    images[i].addEventListener('click',(e)=>{
        currentIndex = i
        console.log(currentIndex);
        
        let currentPath = e.target.getAttribute('src');
        slider.style.backgroundImage = `url(${currentPath})`;
        updateDots()
    })
}

for(let i = 0 ; i < dots.length ; i++) {
    dots[i].addEventListener("click",function(){
        currentIndex = i
        let currentPath = images[currentIndex].getAttribute('src')
        slider.style.backgroundImage = `url(${currentPath})`
        updateDots()
    })
}


next.addEventListener('click',getNext)
prev.addEventListener('click',getPrev)
function getPrev(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }
    currentPath = images[currentIndex].getAttribute('src');
    slider.style.backgroundImage =`url(${currentPath})`
    updateDots()
}
function getNext(){
    currentIndex++;
    if(currentIndex == images.length){
        currentIndex = 0;
    }
    currentPath = images[currentIndex].getAttribute('src')
    slider.style.backgroundImage = `url(${currentPath})`
    updateDots()
}
function updateDots(){
    for(let i = 0 ; i < dots.length ; i++){
        dots[i].classList.remove('active-dots');
    }
    dots[currentIndex].classList.add('active-dots');
}

function autoPlay(){
    autoPlayInterval = setInterval(getNext,3000)
    updateDots()
}

function stopAutoPlay(){
    clearInterval(autoPlayInterval)
}
slider.addEventListener('mouseenter',stopAutoPlay)
slider.addEventListener('mouseleave',autoPlay)


down.addEventListener('click',()=>{
    slide.classList.add('moveDown')
    slide.classList.remove('moveUp')
})
up.addEventListener('click',()=>{
    slide.classList.add('moveUp')
    slide.classList.remove('moveDown')
})
window.onload = autoPlay()
