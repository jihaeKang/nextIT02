$(function() {

    /* focus */
    $('#header #header_top .header_top .search_box button.search').focusout(function() {
        $('#header #header_gnb .header_gnb nav ul.depth1 > li').find('.sub_menu').hide();
        $('#header #header_gnb .header_gnb nav ul.depth1 > li:first-child').find('.sub_menu').show();
        $('#header .bg').show();
    });
    $('#header #header_gnb .header_gnb nav ul.depth1 > li:first-child ul.depth2 li:last-child').focusout(function() {
        $('#header #header_gnb .header_gnb nav ul.depth1 > li').find('.sub_menu').hide();
        $('#header #header_gnb .header_gnb nav ul.depth1 > li:nth-child(2)').find('.sub_menu').show();
    });
    $('#header #header_gnb .header_gnb nav ul.depth1 > li:nth-child(2) ul.depth2 li:last-child').focusout(function() {
        $('#header #header_gnb .header_gnb nav ul.depth1 > li').find('.sub_menu').hide();
        $('#header #header_gnb .header_gnb nav ul.depth1 > li:nth-child(3)').find('.sub_menu').show();
    });
    $('#header #header_gnb .header_gnb nav ul.depth1 > li:nth-child(3) ul.depth2 li:last-child').focusout(function() {
        $('#header #header_gnb .header_gnb nav ul.depth1 > li').find('.sub_menu').hide();
        $('#header #header_gnb .header_gnb nav ul.depth1 > li:nth-child(4)').find('.sub_menu').show();
    });
    $('#header #header_gnb .header_gnb nav ul.depth1 > li:nth-child(4) ul.depth2 li:last-child').focusout(function() {
        $('#header #header_gnb .header_gnb nav ul.depth1 > li').find('.sub_menu').hide();
        $('#header #header_gnb .header_gnb nav ul.depth1 > li:last-child').find('.sub_menu').show();
    });
    $('#header #header_gnb .header_gnb nav ul.depth1 > li:last-child ul.depth2 li:last-child').focusout(function() {
        $('#header #header_gnb .header_gnb .sitemap_box button').focus();
        $('#header #header_gnb .header_gnb nav ul.depth1 > li:last-child').find('.sub_menu').hide();
        $('#header .bg').hide();
    });

    /* gnb */
    $('#header ul.depth1 > li h2 a').mouseover(function() {
        $('#header ul.depth1 > li h2 a').parents('li').removeClass('active');
        $(this).parents('li').addClass('active');
        $('.sub_menu').hide();
        $(this).parents('li').find('.sub_menu').show();
        $('#header .bg').show();
    });
    $('.sub_menu').mouseleave(function() {
        $('#header ul.depth1 > li h2 a').parents('li').removeClass('active');
        $('.sub_menu').hide();
        $('#header .bg').hide();
    });

    $('.sitemap_box button.open').click(function() {
        if ($(this).hasClass('active')) {
            $('#sitemap').fadeOut();
            $('body').css('position', 'relative');
            $('.sitemap_box button.open').removeClass('active');
            $(this).find('span').html('열기');
            $('#header #header_gnb .header_gnb nav ul.depth1 > li h2 a').append("<style>#header #header_gnb .header_gnb nav ul.depth1 > li h2 a::after {display:block; } </style>");
        } else {
            $('#header .search_wrap').hide();
            $('#sitemap').fadeIn();
            $('body').css('position', 'fixed');
            $('.sitemap_box button.open').addClass('active');
            $(this).find('span').html('닫기');
            $('#header #header_gnb .header_gnb nav ul.depth1 > li').removeClass('active');
            $('.sub_menu').hide();
            $('#header .bg').hide();
            $('#header #header_gnb .header_gnb nav ul.depth1 > li h2 a').append("<style>#header #header_gnb .header_gnb nav ul.depth1 > li h2 a::after {display:none; } </style>");
        }
    });
    $('.sitemap_box button.mobile_open').click(function() {
        if ($(this).hasClass('active')) {
            $('body').removeClass('fixed');
            $('#mobile_menu').animate({
                right: -3000
            }, 300);
            $('.sitemap_box button.mobile_open').removeClass('active');
        } else {

            $('body').addClass('fixed');
            $('#mobile_menu').animate({
                right: 0
            }, 300);
            $('.sitemap_box button.mobile_open').addClass('active');
        }
    });

    /* mobile_menu */
    $('ul.mobile_menu_depth1 li h2 a').click(function() {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().parent().find('.mobile_menu_depth2').slideUp();
            $(this).parent().removeClass('active');
        } else {
            $('ul.mobile_menu_depth1 li').find('.mobile_menu_depth2').slideUp();
            $(this).parent().parent().find('.mobile_menu_depth2').slideDown();
            $('ul.mobile_menu_depth1 li h2').removeClass('active');
            $(this).parent().addClass('active');
        }
        return false;
    });
    $('ul.mobile_menu_depth2 li h3 a').click(function() {
        if ($(this).parent().parent().find('.mobile_menu_depth3').length) {
            if ($(this).parent().hasClass('active')) {
                $(this).parent().parent().find('.mobile_menu_depth3').slideUp();
                $(this).parent().removeClass('active');
            } else {
                $('ul.mobile_menu_depth2 li').find('.mobile_menu_depth3').slideUp();
                $(this).parent().parent().find('.mobile_menu_depth3').slideDown();
                $('ul.mobile_menu_depth2 li h3').removeClass('active');
                $(this).parent().addClass('active');
            }
            return false;
        }
    });
    $('ul.mobile_menu_depth2 li:has(ul)').children('h3').addClass('depth2');

    $('.mobile_close').click(function() {
        $('#header .mobile_menu').animate({
            right: -3000
        }, 300);
        $('#header .mobile_bg').animate({
            right: -3000
        }, 300);
        $('body').css('position', 'relative');
    });

    /* search */
    $('.search_box button.search').click(function() {
        $('.search_wrap').fadeIn();
        $('body').css('position', 'fixed');
        $('#header .bg').css('opacity', '0');
        $('.sub_menu').css('opacity', '0');
        $('#header #header_gnb .header_gnb nav ul.depth1 > li').removeClass('active');
        $('#header .search_wrap button.close').show();
        $('#sitemap').hide();
        $('button.open').removeClass('active');
        $('#header #header_gnb .header_gnb nav ul.depth1 > li h2 a').append("<style>#header #header_gnb .header_gnb nav ul.depth1 > li h2 a::after {display:none; } </style>");
    });
    $('#header .search_wrap button.close').click(function() {
        $('#header .bg').css('opacity', '.9');
        $('.sub_menu').css('opacity', '.9');
        $('#header .bg').hide();
        $('.sub_menu').hide();
        $('.search_wrap').fadeOut();
        $('body').css('position', 'relative');
        $('#header .search_wrap button.close').hide();
        $('#header #header_gnb .header_gnb nav ul.depth1 > li h2 a').append("<style>#header #header_gnb .header_gnb nav ul.depth1 > li h2 a::after {display:block; } </style>");
    });

    $('#footer_logo .link > a').click(function() {
        if ($('#footer_logo .link .box').css('display') == 'none') {
            $(this).addClass('active');
            $('#footer_logo .link .box').show();
            $('#footer_logo .link').css('z-index', '9999');
        } else {
            $(this).removeClass('active');
            $('#footer_logo .link .box').hide();
            $('#footer_logo .link').css('z-index', '1');
        }
return false;
    });

    /* 상단으로 이동 */
    $('a.top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });

    /* 스크롤 시 탑버튼 표시 */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('a.top').fadeIn();
        } else {
            $('a.top').fadeOut();
        }
    });


});
