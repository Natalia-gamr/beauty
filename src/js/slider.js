
let slider = document.querySelector('.slider');
let slide = document.querySelectorAll('.slider__item');
let index = 0;
let left = document.querySelector('.slider__left');
let right = document.querySelector('.slider__right');
let vw = document.documentElement.clientWidth;

if (vw <= 800) {
    slide[0].style.display = 'flex';
    left.style.display = 'none';

    right.addEventListener('click', moveLeft);
    function moveLeft(){
        left.style.display = 'block';
        slide[index].style.display = 'none'; 
        slide[++index].style.display = 'flex'; 
        if (index === slide.length - 1) { 
        right.style.display = 'none';
        }
    }


    left.addEventListener('click', moveRight);
    function moveRight(){
        right.style.display = 'block';
        slide[index].style.display = 'none';
        slide[--index].style.display = 'flex';
        if (index === 0) {
        left.style.display = 'none';
        }
    }
}

