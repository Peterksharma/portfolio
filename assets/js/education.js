$(document).ready(function() {
    // Define your elements and delay time
    const elements = ['.highschool', '.culinaryschool', '.codingschool'];
    const delayTime = 450; 

    // Function to animate each element
    function animateElement(index) {
        if (index >= elements.length) return;

        $(elements[index]).animate({
            left: '0%',
            opacity: 1
        }, delayTime, function() {
            // When done, animate the next element
            animateElement(index + 1);
        });
    }

    // Start the animation
    animateElement(0);
});
