        function toggleSkill(element) {
            element.classList.toggle('active');
        }
 document.addEventListener('DOMContentLoaded', function() {
        var swiper = new Swiper(".myCoverflowSwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true, // Important pour le scroll infini
            
            // === LES LIGNES MAGIQUES POUR LE MODAL ===
            observer: true,       // Détecte les changements de style (quand le modal s'ouvre)
            observeParents: true, // Surveille le conteneur parent (le modal)
            // =========================================

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
            // Permet de scroller avec la souris ou le doigt
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
        // Cette boucle permet d'activer le Swiper pour CHAQUE modal séparément
        document.querySelectorAll('.myCoverflowSwiper').forEach(function(swiperElement) {
            new Swiper(swiperElement, {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                loop: true,
                
                // Options critiques pour les Modals
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