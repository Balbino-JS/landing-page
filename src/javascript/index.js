/*AQUI UTILIZAMOS JQUERY*/
$(document).ready(function(){
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

/* FUNÇÃO PARA SCROLL */
/*$(window).on('scroll', function() {
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
        header.css('box-shadow', 'none');
    } else {
        header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.3)');
    }

    sections.each(function(i) {
        const section = $(this);
        const sectionTop = section.offset().top - 96;
        const sectionBottom = sectionTop + section.outerHeight();

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSectionIndex = i;
            return false;
        }
    });

    navItems.removeClass('active');
    $(navItems[activeSectionIndex]).addClass('active');
});*/

/* SCROLL REVEAL CORRIGIDO */
/*scrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance:'20%'
});

scrollReveal().reveal('.car', {
    origin: 'left',
    duration: 2000,
    distance:'20%'
});
});*/