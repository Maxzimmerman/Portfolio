const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});

const Card = document.querySelectorAll('.hidden');
Card.forEach((el) => observer.observe(el));


$(function () {
    $('.show').fadeIn(6000)
})
