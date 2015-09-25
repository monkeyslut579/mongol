$(document).ready(function(){ 
    $("#carousel-feedback").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	});

    $(".owl-next").click(function() {
        owl.trigger('owl.next');
    });
	
    $(".owl-prev").click(function() {
        owl.trigger('owl.prev');
    });
    
    $(function() {
    $('a[href*=#introductionjq]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html,body').animate({
    scrollTop: target.offset().top
    }, 1000);
    return false;
    }
    }
    });	
    });

    $(function() {
    $('a[href*=#galleryjq]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html,body').animate({
    scrollTop: target.offset().top
    }, 1000);
    return false;
    }
    }
    });	
    });

    $(function() {
    $('a[href*=#flight-planjq]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html,body').animate({
    scrollTop: target.offset().top
    }, 1000);
    return false;
    }
    }
    });	
    });

    $(function() {
    $('a[href*=#pricejq]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html,body').animate({
    scrollTop: target.offset().top
    }, 1000);
    return false;
    }
    }
    });	
    });

    $(function() {
    $('a[href*=#teamjq]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html,body').animate({
    scrollTop: target.offset().top
    }, 1000);
    return false;
    }
    }
    });	
    });

    $(function() {
    $('a[href*=#contactsjq]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html,body').animate({
    scrollTop: target.offset().top
    }, 1000);
    return false;
    }
    }
    });	
    });

    $(function() {
    $('a[href*=#promo-blockjq]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html,body').animate({
    scrollTop: target.offset().top
    }, 1000);
    return false;
    }
    }
    });	
    });
    $('.tab_buttons a').on('click',function(e){
    e.preventDefault();
    $(this).closest('.tab_buttons').find('.tab_buttons-fill').removeClass('tab_buttons-fill-active');
    $(this).closest('.tab_buttons-fill').addClass('tab_buttons-fill-active');
    
    var tabs_cnt_id = $(this).closest('.tab_buttons').data('tabs-content-id');
    $(tabs_cnt_id).find('.tub_content').removeClass('tub_content-active');
    $(this.hash).addClass('tub_content-active');
  });

  
});