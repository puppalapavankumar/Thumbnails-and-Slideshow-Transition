var slideIndex = 0;
showSlides();

function openModal(imageSrc) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');

    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1800); 
}

document.addEventListener("DOMContentLoaded", function () {
    var thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function () {
            var imageSource = thumbnail.src.replace("thumbnail", "");
            openModal(imageSource);
        });
    });
});
