var image = document.getElementById('chillen-astro');
var isRotatedLeft = false;

function rotate() {
    if(isRotatedLeft) {
        image.style.transform = 'rotate(0deg)';
        isRotatedLeft = false;
    } else {
        image.style.transform = 'rotate(-10deg)';
        isRotatedLeft = true;
    }
}

setInterval(rotate, 4000); // Rotate every 3 seconds
