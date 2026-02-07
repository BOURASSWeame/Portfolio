function toggleSkill(element) {
        element.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function() {
        var swiper = new Swiper(".myCoverflowSwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true, 
            observer: true,       
            observeParents: true, 

            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            allowTouchMove: true,
        });
    });

var typed = new Typed('#typed-text', {
    strings: ['Élève Ingénieur IA', 'Développeuse Fullstack', 'Passionnée de Data', 'Leader Engagée'],
    typeSpeed: 60,
    backSpeed: 50,
    loop: true,
    cursorChar: '|'
});

document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.myCoverflowSwiper').forEach(function(swiperElement) {
            new Swiper(swiperElement, {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                loop: true,
                
                observer: true, 
                observeParents: true,

                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                },
                pagination: {
                    el: swiperElement.querySelector(".swiper-pagination"), // Cible la pagination DANS ce swiper spécifique
                    clickable: true,
                },
                allowTouchMove: true,
            });
      });

});
