// script.js
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-box');

    images.forEach(image => {
        image.addEventListener('click', function () {
            const overlay = this.querySelector('.overlay');
            if (overlay.style.opacity === '1') {
                overlay.style.opacity = '0';
            } else {
                overlay.style.opacity = '1';
            }
        });
    });
});

