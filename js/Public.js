$(document).ready(function () {
    //窗口滚动
    function wdgd() {
        var windowTime = 500;
        $(window).scroll(function (event) {
            if ($(window).scrollTop() > 50) {
                $('.nav_wrap').stop().animate({'height': '80px'}, windowTime);
                $('.headerLogo').stop().animate({'top': '16px'}, windowTime);
                $('.nav>li').stop().animate({'line-height': '80px'}, windowTime);
                $('.nav>li>ul').css({'top': '80px'});
                $('.nav_select').css({'top': '80px'});
            } else {
                $('.nav_wrap').stop().animate({'height': '120px'}, windowTime);
                $('.headerLogo').stop().animate({'top': '38px'}, windowTime);
                $('.nav>li').stop().animate({'line-height': '120px'}, windowTime);
                $('.nav>li>ul').css({'top': '120px'});
                $('.nav_select').css({'top': '120px'});
            }
        });
    }

    wdgd();
});
//nav
$(document).ready(function () {
    windowNavLi();
    $(window).resize(windowNavLi);
    function windowNavLi() {
        var navLiWidth = $('.nav li').width();
        $('.navScrollTop').css({'width': navLiWidth});
        $('.nav>li').mouseover(function (event) {
            $('.navScrollTop').stop().animate({'left': ($(this).index() - 1) * navLiWidth}, 300);
            $(this).children('ul').stop().slideDown(200);
        }).mouseout(function (event) {
            $('.navScrollTop').stop().animate({'left': 0}, 300);
            $(this).children('ul').stop().slideUp(200);
        });
    }
});

//nav_select
$(document).ready(function () {
    var select_xhl = 0;
    $('.select_btn').click(function (event) {
        if (select_xhl == 0) {
            $('.nav_select').stop().fadeIn(200);
            select_xhl = 1;
        } else {
            $('.nav_select').stop().fadeOut(200);
            select_xhl = 0;
        }
    });
});

//banner
$(document).ready(function () {
    function lunbo() {
        var timer = null;
        var num = 0;
        var len = $('.banner ul li').length;

        $('.banner ul li').eq(0).fadeIn(200).children('.container').addClass('active');
        $('.banner ol li').mouseover(function (event) {
            clearInterval(timer);
            var num = $(this).index();
            $(this).addClass('cur').siblings().removeClass('cur');
            $('.banner ul li').eq(num).stop().fadeIn(500).siblings().stop().fadeOut(500);
            $('.banner ul li').eq(num).children('.container').addClass('active');
            $('.banner ul li').eq(num).siblings().children('.container').removeClass('active');
            timer = setInterval(autoplay, 5000);
        });

        //鼠标移入移出banner区域
        $('.banner').mouseover(function (event) {
            clearInterval(timer);
        }).mouseout(function (event) {
            timer = setInterval(autoplay, 5000);
        });
        ;

        //定时器
        timer = setInterval(autoplay, 5000);
        function autoplay() {
            num = num + 1;
            if (num > len - 1) {
                num = 0;
            }
            $('.banner ol li').eq(num).addClass('cur').siblings().removeClass('cur');
            $('.banner ul li').eq(num).stop().fadeIn(500).siblings().stop().fadeOut(500);
            $('.banner ul li').eq(num).children('.container').addClass('active');
            $('.banner ul li').eq(num).siblings().children('.container').removeClass('active');
        }
    }

    lunbo();
});

//news
$(document).ready(function () {
    newsTab();
    $(window).resize(newsTab);
    function newsTab() {
        var num = 0;
        var listWidth = 1286;
        var len = $('.news_main ul li').length / 3;
        var first = 3;

        //检查窗口宽度改变变量的值
        if ($(window).width() < 640) {
            listWidth = 210;
            first = 1;
            len = $('.news_main ul li').length;
        } else if ($(window).width() < 1200) {
            listWidth = 418;
            first = 1;
            len = $('.news_main ul li').length;
        } else {
            listWidth = 1286;
            first = 3;
            len = $('.news_main ul li').length / 3;
        }
        //alert(listWidth);

        $('.news_main ul li').each(function (index, el) {
            if (index < first) {
                $(el).stop().fadeTo(1, 1);
            } else {
                $(el).stop().fadeTo(1, 0);
            }
        });

        //点击右按钮
        $('.news_right').click(function () {
            num = num + 1;
            if (num > len - 1) {
                num = 0;
            }
            if ($(window).width() < 1200) {
                $('.news_main ul').stop().animate({'left': -(listWidth * num)}, 500, function () {
                    WebnewsChange();
                });
            } else {
                $('.news_main ul').stop().animate({'left': -(listWidth * num)}, 500, function () {
                    newsChange();
                });
            }
        });
        //点击左按钮
        $('.news_left').click(function () {
            num = num - 1;
            if (num < 0) {
                num = len - 1;
            }
            if ($(window).width() < 1200) {
                $('.news_main ul').stop().animate({'left': -(listWidth * num)}, 500, function () {
                    WebnewsChange();
                });
            } else {
                $('.news_main ul').stop().animate({'left': -(listWidth * num)}, 500, function () {
                    newsChange();
                });
            }
        });

        function newsChange() {
            $('.news_main ul li').stop().fadeTo(1, 0).removeClass('active');
            $('.news_main ul li').eq(3 * num).stop().fadeTo(200, 1).addClass('active');
            $('.news_main ul li').eq(3 * num + 1).stop().fadeTo(200, 1).addClass('active');
            $('.news_main ul li').eq(3 * num + 2).stop().fadeTo(200, 1).addClass('active');
        }

        function WebnewsChange() {
            $('.news_main ul li').stop().fadeTo(1, 0).removeClass('active');
            $('.news_main ul li').eq(num).stop().fadeTo(200, 1).addClass('active');
        }
    }
});

//视频
$(document).ready(function () {
    $('.video_close').click(function () {
        $('.video_wrap,.video_In').stop().fadeOut();
    });
    $('.lastSp').click(function () {
        $('.video_wrap,.video_In').stop().fadeIn();
    });
});

//cp_list
$(document).ready(function () {
    function cpList() {
        var xinhao = 0;
        $('.cpArea .addBtn').click(function (event) {
            if (xinhao == 0) {
                $(this).siblings('.cp_list').children('.con').stop().slideDown(500);
                $(this).children('.sub2').removeClass('subz');
                xinhao = 1;
            } else {
                $(this).siblings('.cp_list').children('.con').stop().slideUp(500);
                $(this).children('.sub2').addClass('subz');
                xinhao = 0;
            }
        });
    }

    cpList();
});

//cp_list
$(document).ready(function () {
    function cpList02() {
        $('.cp_list .pointer').each(function (index, el) {
            var xinhao2 = index;
            $(el).click(function () {
                if (xinhao2 == index) {
                    $(this).parent('.childTitle').siblings('ul').stop().slideDown(500);
                    $(this).children('.sub2').removeClass('subz');
                    xinhao2 = index + 1;
                } else {
                    $(this).parent('.childTitle').siblings('ul').stop().slideUp(500);
                    $(this).children('.sub2').addClass('subz');
                    xinhao2 = index;
                }
            });
        });
    }

    cpList02();
});


