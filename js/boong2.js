$('.scroll').click(function (e) {
    e.preventDefault();
    var url = this.href;
    var urlHash = this.hash;
    var parts = url.split('#');
    var trgt = parts[1];
    var target_offset = $('#' + trgt).offset();
    var target_top = target_offset.top;

    

    $('html, body').animate({
        scrollTop: target_top
    }, 500);
    if ($('nav.dots a').hasClass('active')) {
        $('nav.dots a').removeClass('active');
    }
    if (urlHash == '#section-1') {
        $('.hamburger span').css({
            'backgroundColor': 'whitesmoke',
            '--mycolor' : 'whitesmoke'
        });
        $('nav.dots a').removeClass('black_mode black_active');
        $('nav.dots a.scroll-1').addClass('active');
    }
    if (urlHash == '#section-2') {
        $('.hamburger span').css({
            'backgroundColor': '#333',
            '--mycolor' : '#333'
        });
        $('nav.dots a').addClass('black_mode');
        $('nav.dots a').removeClass('black_active');
        $('nav.dots a.scroll-2').addClass('black_active');
        
    }
    if (urlHash == '#section-3') {
        $('.hamburger span').css({
            'backgroundColor': '#333',
            '--mycolor' : '#333'
        });
        $('nav.dots a').addClass('black_mode');
        $('nav.dots a').removeClass('black_active');
        $('nav.dots a.scroll-3').addClass('black_active');
    }
    if (urlHash == '#section-4') {
        $('.hamburger span').css({
            'backgroundColor': '#333',
            '--mycolor' : '#333'
        });
        $('nav.dots a').addClass('black_mode');
        $('nav.dots a').removeClass('black_active');
        $('nav.dots a.scroll-4').addClass('black_active');
    }
});

$('.hamburger span').css({
    '--mycolor' : 'whitesmoke'
});

$('nav.dots a').click(function () {
    if ($('nav.dots a').hasClass('active')) {
        $('nav.dots a').removeClass('active');
    }
    $(this).addClass('active');
});

$('.hamburger, nav.main ul li a').on('click', function (e) {
    e.preventDefault();
    $('.hamburger').toggleClass('is-open');
    $('nav.main ul').toggleClass('is-open');
});

$('.geekstudios, .scroll-2').mouseenter(function () {
    $('.hipster').addClass('show');
});
$('.geekstudios, .scroll-2').mouseleave(function () {
    $('.hipster').removeClass('show');
});

// var elm = ".box";
// $(elm).each(function (index) {
//     // ??????????????? Wheel ????????? ??????
//     $(this).on("mousewheel DOMMouseScroll", function (e) {
//         e.preventDefault();
//         var delta = 0;
//         if (!event) event = window.event;
//         if (event.wheelDelta) {
//             delta = event.wheelDelta / 120;
//             if (window.opera) delta = -delta;
//         }
//         else if (event.detail)
//             delta = -event.detail / 3;
//         var moveTop = $(window).scrollTop();
//         var elmSelecter = $(elm).eq(index);
//         // ??????????????? ????????? ?????????
//         if (delta < 0) {
//             if ($(elmSelecter).next() != undefined) {
//                 try {
//                     moveTop = $(elmSelecter).next().offset().top;
//                 } catch (e) { }
//             }
//             // ??????????????? ???????????? ??????
//         } else {
//             if ($(elmSelecter).prev() != undefined) {
//                 try {
//                     moveTop = $(elmSelecter).prev().offset().top;
//                 } catch (e) { }
//             }
//         }
//         // ?????? ?????? 0.8???(800)
//         $("html,body").stop().animate({
//             scrollTop: moveTop + 'px'
//         }, {
//             duration: 800, complete: function () {
//             }
//         });
//     });
// });
