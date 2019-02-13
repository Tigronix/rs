"use strict"

const RS = {};

// brakepoints
RS.fromDesktop = window.matchMedia( "(min-width: 769px)" );
RS.atMobile = window.matchMedia( "(max-width: 767px)" );

RS.imgAdaptive = function(){
  const $imgAdaptiveItem = $('.js-adaptive-bg');

  const setImg = function(){
    $imgAdaptiveItem.each(function(){
      if(RS.fromDesktop.matches){
        const desktopImg = $(this).data('bg-desktop');

        $(this).css('background-image', 'url("'+ desktopImg +'")');
      }

      if(RS.atMobile.matches){
        const atMobileImg = $(this).data('bg-mobile');

        $(this).css('background-image', 'url("'+ atMobileImg +'")');
      }
    });
  };

  setImg();

  $(window).on('resize', function(){
    setImg();
  });



};

RS.tabs = function videoTabs() {
    $(document).on('click', '[data-tabclass]', function onClick() {
        const $this = $(this);
        const content = $this.data('tabclass');
        const number = $this.data('tabnumber');

        $('[data-tabclass="' + content + '"]').each(function each() {
            const $element = $(this);

            if ($element.data('tabnumber') === number) {
                $element.addClass('active').siblings().removeClass('active');
            }
        });

        $('.' + content + ' > [data-tabnumber="' + number + '"]').addClass('active').siblings().removeClass('active');
    });
};

RS.activeToggle = function(){
  const $elems = $('.js-active-toggle');

  $elems.each(function(){
    $(this).on('click', function(){
      $(this).toggleClass('active');
    });
  });
};

RS.activeToggleSiblingsOff = function(){
  const $elems = $('.js-active-toggle-siblings-off');

  $elems.each(function(){
    $(this).on('click', function(){
      $(this).toggleClass('active').siblings().removeClass('active');
    });
  });
};

RS.svgGlobal = function(){
  new Vue({
    	el: '#global-svg',
    	template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-hamburger" viewBox="0 0 37 32"><title>hamburger</title><path d="M35.434 0h-34.291c-0.63 0-1.143 0.549-1.143 1.221v5.214c0 0.645 0.514 1.172 1.143 1.172h34.291c0.631 0 1.143-0.527 1.143-1.172v-5.214c0-0.672-0.512-1.221-1.143-1.221zM35.434 12.196h-34.291c-0.63 0-1.143 0.549-1.143 1.221v5.215c0 0.646 0.514 1.172 1.143 1.172h34.291c0.631 0 1.143-0.526 1.143-1.172v-5.215c0-0.672-0.512-1.221-1.143-1.221zM35.434 24.391h-34.291c-0.63 0-1.143 0.549-1.143 1.223v5.214c0 0.646 0.514 1.172 1.143 1.172h34.291c0.631 0 1.143-0.526 1.143-1.172v-5.214c0-0.674-0.512-1.223-1.143-1.223z"></path></symbol></defs></svg>'
    })
};

RS.mainSlider = function(){
  const $slider = $('.main-slider__slider');

  const mainSliderCounter = function(){

  };

  $slider.on('init', function(event, slick){
    const $this = slick.$slider;
    const $currentSlide = $this.siblings('.main-slider__counter').find('.main-slider__current-slide');
    const currentSlide = $this.find('.slick-current').data('slick-index') + 1;
    const $lastSlide = $this.siblings('.main-slider__counter').find('.main-slider__last-slide');
    const lastSlideNumber = slick.$slides.length;

    $currentSlide.html(currentSlide);
    $lastSlide.html(lastSlideNumber);
  });

  $slider.slick({
    dots: false,
    slidesToShow: 1,
    arrows: true,
    appendArrows: '.main-slider__arrows',
    infinite: false
  });

  $slider.on('afterChange', function(event, slick, currentSlide){
    const $this = slick.$slider;
    const $currentSlide = $this.siblings('.main-slider__counter').find('.main-slider__current-slide');
    const $lastSlide = $this.siblings('.main-slider__counter').find('.main-slider__last-slide');
    const lastSlideNumber = slick.$slides.length;
    currentSlide = currentSlide + 1

    $currentSlide.html(currentSlide);
    $lastSlide.html(lastSlideNumber);
  });
};

RS.catalogBest = function(){
  const $slider = $('.js-catalog-best-slider');

  $slider.slick({
    dots: false,
    slidesToShow: 4,
    arrows: true,
    infinite: false,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  });
};


(function onPageReady () {
  // Вспомогательные
  RS.tabs();
  RS.svgGlobal();
  RS.imgAdaptive();
  RS.activeToggle();
  RS.activeToggleSiblingsOff();

  // Слайдеры
  RS.mainSlider();
  RS.catalogBest();
}());
