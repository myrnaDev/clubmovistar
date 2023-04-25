$( document ).ready(function() {  

  $('.sliderhero').slick({
    nextArrow: '<i class="anext heros"><img src="assets/images/a-rightb.svg" alt=""></i>',
    prevArrow: '<i class="aprev heros"><img src="assets/images/a-leftb.svg" alt=""></i>',
    dots: true,
    infinite: true,
    speed: 300,
    autoplay:false,
    autoplaySpeed:5000,
    speed:600,
    slidesToShow:1
  });

  $('#robots').slick({
    nextArrow: '<i class="anext"><img src="assets/images/a-rightg.svg" alt=""></i>',
    prevArrow: '<i class="aprev"><img src="assets/images/a-leftg.svg" alt=""></i>',
    dots: true,
    customPaging : function(slider, i) {
    var thumbnail = $(slider.$slides[i]).data('thumbnail');
    var robotext = $(slider.$slides[i]).data('robotext');
    return '<a class="robolink"><img src="'+thumbnail+'" class="roboimg"><span class="robotab"></span><div class="robotext">'+robotext+'</div></a>';
    },
    infinite: true,
    speed: 300,
    autoplay:true,
    autoplaySpeed:5000,
    speed:600,
    slidesToShow:1
  });

  $('#benefits').slick({
    nextArrow: '<i class="anext"><img src="assets/images/a-righte.svg" alt=""></i>',
    prevArrow: '<i class="aprev"><img src="assets/images/a-lefte.svg" alt=""></i>',
    slidesToShow:3,
    slidesToScroll:3,
    infinite: true,
    speed: 300,
    autoplay:true,
    autoplaySpeed:5000,
    dots: true
  });

  //menu hamburger
  (function () {
    $('.menu-wrapper').on('click', function() {
      $('.hamburger-menu').toggleClass('animate');
    })
  })();

  //Menu Mobile (Open/Close)
  var isShowingMobile = false;

  $('.menu-wrapper').click(function(e) {
    e.preventDefault();

    if (isShowingMobile) {
      $('.hamburger-menu').removeClass('animate');
      $('ul.drop').removeClass('opened');
      //$('ul.drop li a').removeClass('bor');
    } else {
      $('.hamburger-menu').addClass('animate');
      $('ul.drop').addClass('opened');
      //$('ul.drop li a').addClass('bor');
    }

    isShowingMobile = !isShowingMobile;
  });

  //accordion
  var accordion = (function(){
    
    var $accordion = $('.js-accordion');
    var $accordion_header = $accordion.find('.js-accordion-header');
    var $accordion_item = $('.js-accordion-item');
   
    // default settings 
    var settings = {
      // animation speed
      speed: 400,
      
      // close all other accordion items if true
      oneOpen: false
    };
      
    return {
      // pass configurable object literal
      init: function($settings) {
        $accordion_header.on('click', function() {
          accordion.toggle($(this));
        });
        
        $.extend(settings, $settings); 
        
        // ensure only one accordion is active if oneOpen is true
        if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
          $('.js-accordion-item.active:not(:first)').removeClass('active');
        }
        
        // reveal the active accordion bodies
        $('.js-accordion-item.active').find('> .js-accordion-body').show();
      },
      toggle: function($this) {
              
        if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
          $this.closest('.js-accordion')
                 .find('> .js-accordion-item') 
                 .removeClass('active')
                 .find('.js-accordion-body')
                 .slideUp()
        }
        
        // show/hide the clicked accordion item
        $this.closest('.js-accordion-item').toggleClass('active');
        $this.next().stop().slideToggle(settings.speed);
      }
    }
  })();

  $(document).ready(function(){
    accordion.init({ speed: 300, oneOpen: true });
  });

});