"use strict"

// global object for whole project. DONT change it!
const RS = {};

// brakepoints
RS.fromDesktop = window.matchMedia( "(min-width: 1025px)" );
RS.atMobile = window.matchMedia( "(max-width: 1024px)" );
RS.less500 = window.matchMedia("(max-width: 500px)");

RS.svgGlobal = function(){
  new Vue({
    	el: '#global-svg',
    	template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-instagram" viewBox="0 0 32 32"><title>instagram</title><path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path><path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path><path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path></symbol><symbol id="icon-hamburger" viewBox="0 0 37 32"><title>hamburger</title><path d="M35.434 0h-34.291c-0.63 0-1.143 0.549-1.143 1.221v5.214c0 0.645 0.514 1.172 1.143 1.172h34.291c0.631 0 1.143-0.527 1.143-1.172v-5.214c0-0.672-0.512-1.221-1.143-1.221zM35.434 12.196h-34.291c-0.63 0-1.143 0.549-1.143 1.221v5.215c0 0.646 0.514 1.172 1.143 1.172h34.291c0.631 0 1.143-0.526 1.143-1.172v-5.215c0-0.672-0.512-1.221-1.143-1.221zM35.434 24.391h-34.291c-0.63 0-1.143 0.549-1.143 1.223v5.214c0 0.646 0.514 1.172 1.143 1.172h34.291c0.631 0 1.143-0.526 1.143-1.172v-5.214c0-0.674-0.512-1.223-1.143-1.223z"></path></symbol></defs></svg>'
    })
};

RS.imgAdaptive = function(){
  const $imgAdaptiveItem = $('.js-adaptive-bg');

  const setImg = function(){
    $imgAdaptiveItem.each(function(){
      if(RS.fromDesktop.matches){
        const desktopImg = $(this).data('bg-desktop');

        $(this).css('background-image', 'url("'+ desktopImg +'")');
      }

      if(RS.less500.matches){
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
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  });
};

RS.catalogGalleryQuantity = function(){
  const $btns = $('.js-catalog-gallery-btn');

  $btns.each(function(){
    $(this).on('click', function(){
      RS.quantityCalc($(this));
    });
  });
};

RS.quantityCalc = function($this){
  const $contentWrap = $this.closest('.js-catalog-gallery-wrap');
  const $btnMinus = $contentWrap.find('.js-catalog-gallery-minus');
  const $count = $contentWrap.find('.js-catalog-gallery-count');
  const $btnPlus = $contentWrap.find('.js-catalog-gallery-plus');
  const $price = $contentWrap.find('.js-catalog-price');
  const isMinus = $this.hasClass('js-catalog-gallery-minus');
  const singleItemPrice = $price.data('catalog-gallery-price');
  let quantity = $count.html();

  if(isMinus){
    quantity--;

    if(quantity === 0){
      quantity = 1;
    }

    $count.html(quantity);
  }
  else{
    quantity++;
    $count.html(quantity);
  }

  const calcSumm = singleItemPrice * quantity;

  $price.html('$' + calcSumm);
};

RS.catalogGallerySlider = function(){
  const $slider = $('.catalog-gallery__slider');
  const $arrPrev = $('.js-catalog-gallert-arrow-prev');
  const $arrNext = $('.js-catalog-gallert-arrow-next');

  $slider.slick({
    dots: false,
    slidesToShow: 1,
    arrows: false,
    infinite: false
  });

  $arrPrev.each(function(){
    const $parentSlider = $(this).closest('.catalog-gallery__slider');

    $(this).on('click', function(){
      $parentSlider.slick('slickPrev');
    });
  });

  $arrNext.each(function(){
    const $parentSlider = $(this).closest('.catalog-gallery__slider');

    $(this).on('click', function(){
      $parentSlider.slick('slickNext');
    });
  });
};


(function onPageReady () {
  // Utility
  RS.svgGlobal();
  RS.tabs();
  RS.imgAdaptive();
  RS.activeToggle();
  RS.activeToggleSiblingsOff();

  // Sliders
  RS.mainSlider();
  RS.catalogBest();
  RS.catalogGallerySlider();

  // Calc
  RS.catalogGalleryQuantity();
}());
