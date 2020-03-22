// init select2
// $('.js-select2:not([multiple])').select2({
//     width: '100%',
//     minimumResultsForSearch: 30,
//     placeholder: $(this).data('placeholder'),
//     templateResult: formatState
// });


// header menu
// $('.header__buter, .js-menu__close').click(function(){
//     $('.header__buter').toggleClass('is-active');
//     $('.header__menu').toggleClass('is-open');
// })


// $(document).on('click touchstart', function(event) {
//     if (!$(event.target).closest('.header').length) {
//         $('.header__buter').removeClass('is-active');
//         $('.header__menu').removeClass('is-open');
//     }
// });

// validation
// $('.js-form-submit').on('click', function() {
//     var el = $('.js-form-input');
//     if($(el).val() == 0) {
//         el.addClass('not-valid');
//     }
//     else{
//         el.removeClass('not-valid');
//     }
// });

// reviews slider 
// $('.js-reviews').slick({
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     autoplay: false,
//     autoplaySpeed: 5000,
//     draggable: false,
//     arrows: true,
//     responsive: [
//     {
//       breakpoint: 1281,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         arrows: true,
//         adaptiveHeight: true
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//         adaptiveHeight: true
//       }
//     }
//   ]
// });