$(function() {

    $('#header').addClass('sub');

    /* breadcrumb */
    $('#sub .breadcrumb .box > a').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().slideUp(300);
            $(this).find('span').text('열기');
        } else {
            $('#sub .breadcrumb .box > a').removeClass('active');
            $('#sub .breadcrumb .box > a').next().slideUp();
            $(this).addClass('active');
            $(this).next().slideDown(400);
            $('#sub .breadcrumb .box > a.open span').text('열기');
            $(this).find('span').text('닫기');
        }
        return false;
    });

    /* detail_img */
    $('.detail_img .slick').on('afterChange init', function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.detail_img .control .count').html('<em>' + i + '</em>' + slick.slideCount);
    });
    $('.detail_img .slick').slick({
        autoplay: true,
        arrows: true,
        dots: false,
        prevArrow: $('.detail_img .control .prev'),
        nextArrow: $('.detail_img .control .next'),
        accessibility: false,
        draggable: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        zIndex: 1000,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        speed: 1500,
    });
    $('.detail_img .control button').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('pause')) {
            $(this).hide();
            $('.detail_img .control button.play').show();
            $('.detail_img .slick').slick('slickPause');
        } else if ($(this).hasClass('play')) {
            $(this).hide();
            $('.detail_img .control button.pause').show();
            $('.detail_img .slick').slick('slickPlay');
        }
    });

    /* list_slick */
    $('.list_slick .slick').slick({
        variableWidth: true,
        autoplay: false,
        arrows: true,
        dots: false,
        prevArrow: $('.list_slick .control .prev'),
        nextArrow: $('.list_slick .control .next'),
        accessibility: false,
        draggable: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        zIndex: 1000,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        speed: 1500,
    });
    $('.list_slick .control button').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('pause')) {
            $(this).hide();
            $('.list_slick .control button.play').show();
            $('.list_slick .slick').slick('slickPause');
        } else if ($(this).hasClass('play')) {
            $(this).hide();
            $('.list_slick .control button.pause').show();
            $('.list_slick .slick').slick('slickPlay');
        }
    });

    /* st5_tab */
    $('.dictionary.st5 .contents_box').hide();
    $('.dictionary.st5 .contents_box').first().show();
    $('#sub .contents_wrap .contents .dictionary.st5 li').click(function() {
        $('#sub .contents_wrap .contents .dictionary.st5 li').removeClass('active');
        $(this).addClass('active');
        var Idx = $(this).index();
        $('.dictionary.st5 .contents_box').hide();
        $('.dictionary.st5 .contents_box').eq(Idx).show();
        return false;
    });

    /* course */
    $('.course .btn_box01 .btn_close').click(function() {
        $(this).hide();
        $('.course .btn_box01 .btn_open').show();
        $('.course').animate({
            right: -304
        }, 300);
        return false;
    });
    $('.course .btn_box01 .btn_open').click(function() {
        $(this).hide();
        $('.course .btn_box01 .btn_close').show();
        $('.course').animate({
            right: 0
        }, 300);
        return false;
    });
    $('.course .course_top .box > a').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.course .course_top .box > a').next().slideUp(300);
        } else {
            $('.course .course_top .box > a').next().slideUp(300);
            $('.course .course_top .box > a').removeClass('active');
            $(this).addClass('active');
            $(this).next().slideDown(400);
        }
        return false;
    });

    $("#sortable1").sortable();
    $("#sortable1").disableSelection();
    $("#sortable2").sortable();
    $("#sortable2").disableSelection();
    $("#sortable3").sortable();
    $("#sortable3").disableSelection();

    $('.day').hide();
    $('.day').eq(0).show();
    $('.course .course_top .tab a').click(function() {
        $('.course .course_top .tab a').removeClass('active');
        $(this).addClass('active');
        var Idx = $(this).index();
        $('.day').hide();
        $('.day').eq(Idx).show();
        return false;
    });
    $('.course .course_box .box button.close').click(function() {
        $(this).parents('.box').hide();
    });

    $('.course_all .btn_close').click(function() {
        $('.course_all').animate({
            left: -300
        }, 300);
        $('.course_all').css('box-shadow', 'none');
        $(this).hide();
        $('.course_all .btn_open').show();
    });

    $('.course_all .btn_open').click(function() {
        $('.course_all').animate({
            left: 0
        }, 300);
        $('.course_all').css('box-shadow', '4px 4px 3px rgba(0,0,0,.3)');
        $(this).hide();
        $('.course_all .btn_close').show();
    });

    $('#sub .btn_box .share > a').click(function() {
        if ($(this).hasClass('active')) {
            $(this).next().hide();
            $(this).removeClass('active');
        } else {
            $(this).next().show();
            $(this).addClass('active');
        }
    });

    /* map_popup */
    $('.map_popup button.pop_close').click(function() {
        $('.map_popup').hide();
    });

    $('.boGalleryView-view').bxSlider({
        controls: ($(".boGalleryView-view li").length > 1) ? true : false,
    });

});
