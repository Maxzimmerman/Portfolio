$(function () {
    $('.scroll-up-button-outer').hide(0);
    $(window).on('scroll', function () {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        if(Math.ceil(scrolled !== 0)) {
            $('.scroll-up-button-outer').show(100)
        }else{
            $('.scroll-up-button-outer').hide(100)
        }
    })
    $('.scroll-up-button').on('click', function () {
        $(window).scrollTop(1);
    });
})

const hiddenElements = document.querySelectorAll('.hidden');


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

hiddenElements.forEach((el) => observer.observe(el))

// window.addEventListener('scroll', reveal);
//
// function reveal() {
//     var elements = document.querySelectorAll('.project-card');
//
//     for(var i = 0; i < elements.length; i++) {
//
//         var windowheight = window.innerHeight;
//         var realtop = elements[i].getBoundingClientRect().top;
//         var revealpoint = 150;
//
//         if(realtop < windowheight - revealpoint) {
//             elements[i].classList.add('show');
//         }else {
//             elements[i].classList.remove('show')
//         }
//     }
// }