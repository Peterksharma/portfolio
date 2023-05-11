// var image = document.getElementById('chillen-astro');
// var isRotatedLeft = false;


// //add a small skew function as the same time to make it feel 3D
// function rotate() {
//     if(isRotatedLeft) {
//         image.style.transform = 'rotate(0deg)';
//         isRotatedLeft = false;
//     } else {
//         image.style.transform = 'rotate(-10deg)';
//         isRotatedLeft = true;
//     }
// }

// setInterval(rotate, 3000); // Rotate every 3 seconds


//Tracks the mouse movement across the screen and logs the value
const parrallax_effectl = document.querySelectorAll(".movement")
const parrallax_effectr = document.querySelectorAll(".movementr")

let xValue = 0,
    yValue = 0;

window.addEventListener('mousemove', (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parrallax_effectl.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(-5% + ${-xValue * speedx}px)) translateY(calc(-5% + ${-yValue * speedy}px))`;
    })

    parrallax_effectr.forEach((el) => {
        let speedx1 = el.dataset.speedx1;
        let speedy1 = el.dataset.speedy1;
        el.style.transform = `translateX(calc(5% + ${xValue * speedx1}px)) translateY(calc(5% + ${yValue * speedy1}px))`;
    })
})
