"use strict";
var $portfolio_filter,$grid_selectors,$blog,$port_filter;
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

    /* ===================================
     Tab Active After Export
     ====================================== */
    
    var tab_id = $('.nav-tabs').parents('section').attr('id');
    if(tab_id != undefined)
    {
        var tz_tabs = tab_id.substring(0,3);
        if(tz_tabs == 'tab')
        {
            var rem_href = $('#'+tab_id).find('.nav-tabs li.active').find('a').attr('href');
            var rem_active =  $('#'+tab_id).find('.nav-tabs li.active').removeClass('active');
            $('#'+tab_id).find(rem_href).removeClass('active');
            $('#'+tab_id).find('.nav-tabs li').first().addClass('active');
            var first_href = $('#'+tab_id).find('.nav-tabs li').first().find('a').attr('href');
            $('#'+tab_id).find(first_href).addClass('active in');
        }
    }

    /* ===================================
     Toggle Close 
     ====================================== */
    $(document).on('click', 'ul.navbar-nav li', function (event) { 
        $('#bs-example-navbar-collapse-1').removeClass('in');
        $('#bs-example-navbar-collapse-1').addClass('collapse');
        $('.navbar-toggle').addClass('collapsed');
    });

    /* ===================================
     shrink navigation Active
     ====================================== */
    $('.navigation-menu').onePageNav({
        scrollSpeed: 750,
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 79, //Height of Navigation Bar
        currentClass: 'active',
        filter: ':not(.btn-very-small)'
    });
    
/* ===================================
 shrink navigation
 ====================================== */
$(window).scroll(function () {
    bind_shrink_header();
});

function bind_shrink_header() {
    if ($('nav').hasClass('shrink-header')) {

        $('.shrink-header').addClass('shrink-nav');
        $('section:first').addClass('header-margin-top');

    } else if ($('nav').hasClass('shrink-big-header')) {

        $('.shrink-big-header').addClass('shrink-nav');
        $('section:first').addClass('header-margin-top-big');

    } else if ($('nav').hasClass('shrink-medium-header')) {

        $('.shrink-medium-header').addClass('shrink-nav');
        $('section:first').addClass('header-margin-top-medium');

    } else if ($('nav').hasClass('shrink-transparent-header-dark')) {

        $('.shrink-transparent-header-dark').addClass('shrink-nav');

    } else if ($('nav').hasClass('shrink-transparent-header-light')) {

        $('.shrink-transparent-header-light').addClass('shrink-nav');

    } else {

        $('.shrink-header').removeClass('shrink-nav');
        $('section:first').removeClass('header-margin-top');
    }

    if ($(window).scrollTop() > 10) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
}

setTimeout(function () {
    $(window).scroll();
}, 500);


/* ===================================
 ---------Custom Script Below----------
 ====================================== */
 
/* ===================================
  1 - Hero Parallax
 ====================================== */
 var bg = $('#hero-section');
 $(window).scroll(function() {
   var x = $(this).scrollTop();
   bg.css('background-position', ' 0% ' + parseInt(-x / 7.5) + 'px ');
 });

 
/* ===================================
  2 - Onscroll
 ====================================== */
 // When the user scrolls down 20px from the top of the document, display go to top button
 window.onscroll = function() {scrollFunction()};
        
 function scrollFunction() {
     if (document.body.scrollTop > 190 || document.documentElement.scrollTop > 190) {
         document.getElementById("totop").style.opacity = "1";
         document.getElementById("totop").style.transitionDelay = "0.5s";
         document.getElementById("totop").style.display = "block";
     } else {
         document.getElementById("totop").style.opacity = "0";
         document.getElementById("totop").style.transitionDelay = "0s";
         document.getElementById("totop").style.display = "none";
     }
     
 }
 // End When the user scrolls down 20px from the top of the document, slide down the navbar

 
/* ===================================
  3 - To Top Smooth
 ====================================== */
 /*
 $(document).ready(function() {
    $('a[href=#page]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
})
*/
 
/* ===================================
  4 - Page Loader
 ====================================== */
 $(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});
