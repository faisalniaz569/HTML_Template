/* ES6: true */

/*jslint plusplus: true */

var i, $, document, setTimeout,
    slides, dots;

// menu Searchbar

$(function () {
    'use strict';

    $(".fa-search").click(function () {
        $("#formsearchbar").fadeToggle(1000);
    });
});

// mySlides

var slideIndex = 0;

function showSlides() {
    'use strict';
    
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slideactive", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " slideactive";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
showSlides();


// accordion

var acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i += 1) {
    acc[i].addEventListener("click", function () {
        'use strict';
        this.classList.toggle("accactive");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

