"use strict"

// global object for whole project. DONT change it!
const RS = {};

// global vars
RS.ESC_CODE = 27;

// brakepoints
RS.fromDesktop = window.matchMedia( "(min-width: 1025px)" );
RS.atMobile = window.matchMedia( "(max-width: 1024px)" );
RS.less500 = window.matchMedia("(max-width: 500px)");

RS.svgGlobal = function(){
  new Vue({
    	el: '#global-svg',
    	template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-cheveron-down" viewBox="0 0 20 20"><title>cheveron-down</title><path d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 4.242-4.243-4.242-1.414 1.414z"></path></symbol><symbol id="icon-cheveron-right" viewBox="0 0 20 20"><title>cheveron-right</title><path d="M12.95 10.707l0.707-0.707-5.657-5.657-1.414 1.414 4.242 4.243-4.242 4.243 1.414 1.414 4.95-4.95z"></path></symbol><symbol id="icon-cheveron-left" viewBox="0 0 20 20"><title>cheveron-left</title><path d="M7.050 9.293l-0.707 0.707 5.657 5.657 1.414-1.414-4.242-4.243 4.242-4.243-1.414-1.414z"></path></symbol><symbol id="icon-close" viewBox="0 0 20 20"><title>close</title><path d="M10 8.586l-7.071-7.071-1.414 1.414 7.071 7.071-7.071 7.071 1.414 1.414 7.071-7.071 7.071 7.071 1.414-1.414-7.071-7.071 7.071-7.071-1.414-1.414-7.071 7.071z"></path></symbol><symbol id="icon-vk" viewBox="0 0 20 20"><title>vk</title><path d="M17.802 12.298c0 0 1.617 1.597 2.017 2.336 0.011 0.016 0.016 0.028 0.018 0.035 0.163 0.273 0.203 0.487 0.123 0.645-0.135 0.261-0.592 0.392-0.747 0.403 0 0-2.778 0-2.858 0-0.199 0-0.613-0.052-1.117-0.4-0.385-0.269-0.768-0.712-1.139-1.145-0.554-0.643-1.033-1.201-1.518-1.201-0.062 0-0.122 0.010-0.18 0.030-0.367 0.116-0.833 0.639-0.833 2.032 0 0.436-0.344 0.684-0.585 0.684 0 0-1.248 0-1.309 0-0.446 0-2.768-0.156-4.827-2.327-2.523-2.658-4.789-7.99-4.811-8.037-0.141-0.345 0.155-0.533 0.475-0.533h2.886c0.387 0 0.513 0.234 0.601 0.444 0.102 0.241 0.48 1.205 1.1 2.288 1.004 1.762 1.621 2.479 2.114 2.479 0.093 0 0.181-0.023 0.264-0.070 0.644-0.354 0.524-2.654 0.494-3.128 0-0.092-0.001-1.027-0.331-1.479-0.236-0.324-0.638-0.45-0.881-0.496 0.065-0.094 0.203-0.238 0.38-0.323 0.441-0.22 1.238-0.252 2.029-0.252h0.439c0.858 0.012 1.080 0.067 1.392 0.146 0.628 0.15 0.64 0.557 0.585 1.943-0.016 0.396-0.033 0.842-0.033 1.367 0 0.112-0.005 0.237-0.005 0.364-0.019 0.711-0.044 1.512 0.458 1.841 0.064 0.040 0.139 0.062 0.217 0.062 0.174 0 0.695 0 2.108-2.425 0.62-1.071 1.1-2.334 1.133-2.429 0.028-0.053 0.112-0.202 0.214-0.262 0.078-0.048 0.182-0.056 0.236-0.056h3.395c0.37 0 0.621 0.056 0.67 0.196 0.082 0.227-0.016 0.92-1.566 3.016-0.261 0.349-0.49 0.651-0.691 0.915-1.405 1.844-1.405 1.937 0.083 3.337z"></path></symbol><symbol id="icon-pinterest" viewBox="0 0 32 32"><title>pinterest</title><path d="M16 2.138c-7.656 0-13.863 6.206-13.863 13.863 0 5.875 3.656 10.887 8.813 12.906-0.119-1.094-0.231-2.781 0.050-3.975 0.25-1.081 1.625-6.887 1.625-6.887s-0.412-0.831-0.412-2.056c0-1.925 1.119-3.369 2.506-3.369 1.181 0 1.756 0.887 1.756 1.95 0 1.188-0.756 2.969-1.15 4.613-0.331 1.381 0.688 2.506 2.050 2.506 2.462 0 4.356-2.6 4.356-6.35 0-3.319-2.387-5.638-5.787-5.638-3.944 0-6.256 2.956-6.256 6.019 0 1.194 0.456 2.469 1.031 3.163 0.113 0.137 0.131 0.256 0.094 0.4-0.106 0.438-0.338 1.381-0.387 1.575-0.063 0.256-0.2 0.306-0.463 0.188-1.731-0.806-2.813-3.337-2.813-5.369 0-4.375 3.175-8.387 9.156-8.387 4.806 0 8.544 3.425 8.544 8.006 0 4.775-3.012 8.625-7.194 8.625-1.406 0-2.725-0.731-3.175-1.594 0 0-0.694 2.644-0.863 3.294-0.313 1.206-1.156 2.712-1.725 3.631 1.3 0.4 2.675 0.619 4.106 0.619 7.656 0 13.863-6.206 13.863-13.863 0-7.662-6.206-13.869-13.863-13.869z"></path></symbol><symbol id="icon-twitter" viewBox="0 0 32 32"><title>twitter</title><path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path></symbol><symbol id="icon-instagram" viewBox="0 0 32 32"><title>instagram</title><path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path><path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path><path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path></symbol><symbol id="icon-hamburger" viewBox="0 0 37 32"><title>hamburger</title><path d="M35.434 0h-34.291c-0.63 0-1.143 0.549-1.143 1.221v5.214c0 0.645 0.514 1.172 1.143 1.172h34.291c0.631 0 1.143-0.527 1.143-1.172v-5.214c0-0.672-0.512-1.221-1.143-1.221zM35.434 12.196h-34.291c-0.63 0-1.143 0.549-1.143 1.221v5.215c0 0.646 0.514 1.172 1.143 1.172h34.291c0.631 0 1.143-0.526 1.143-1.172v-5.215c0-0.672-0.512-1.221-1.143-1.221zM35.434 24.391h-34.291c-0.63 0-1.143 0.549-1.143 1.223v5.214c0 0.646 0.514 1.172 1.143 1.172h34.291c0.631 0 1.143-0.526 1.143-1.172v-5.214c0-0.674-0.512-1.223-1.143-1.223z"></path></symbol></defs></svg>'
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

      if(!$(this).hasClass('active')){
        $(this).addClass('active');
      };
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

RS.popupItemSlider = function(){
  const $slider = $('.popup-item__slider');

  $slider.slick({
    dots: false,
    slidesToShow: 5,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2
        }
      }
    ]
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
  const $btnsClose = $('.js-catalog-gallery-close');

  $btns.each(function(){
    $(this).on('click', function(){
      RS.quantityCalc($(this));
    });
  });

  $btnsClose.each(function(){
    $(this).on('click', function(){
      const $parentItem = $(this).closest('.js-catalog-gallery-wrap');
      $parentItem.remove();

      RS.calcTotalSumm();
    });
  });
};

RS.quantityCalc = function($this){
  const $contentWrap = $this.closest('.js-catalog-gallery-wrap');
  const $btnMinus = $contentWrap.find('.js-catalog-gallery-minus');
  const $btnPlus = $contentWrap.find('.js-catalog-gallery-plus');
  const $count = $contentWrap.find('.js-catalog-gallery-count');
  const isMinus = $this.hasClass('js-catalog-gallery-minus');
  const $price = $contentWrap.find('.js-catalog-price');
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

  $price.html(calcSumm);
  RS.calcTotalSumm();
};

RS.calcTotalSumm = function(){
  let $totalPrice = $('.js-total-summ');
  $totalPrice.html(0);

  $totalPrice.each(function(){
    const $prices = $('.js-catalog-price');
    let numbers = [];

    $prices.each(function(){
      const singleSumm = parseInt($(this).html());

      numbers.push(singleSumm);
    });

    const getSum = function(total, num) {
      return total + num;
    }

    const innerTotalSumm = function(item) {
      document.querySelector('.js-total-summ').innerHTML = numbers.reduce(getSum);
    }

    innerTotalSumm();
  });
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

RS.accordion = function(){
  const $accordion = $('.js-accordion');
  const $accordionButtons = $accordion.find('.js-accordion-header');
  const $accordionContents = $accordion.find('.js-accordion-content');
  const $accordionItems = $accordion.find('.js-accordion-item');

  $accordionButtons.on('click', function(){
    const $parentItem = $(this).closest('.js-accordion-item');
    const $parentContent = $parentItem.find('.js-accordion-content');
    const isActive = $parentItem.hasClass('active');

    $parentItem.addClass('active').siblings().removeClass('active').find('.js-accordion-content').slideUp('400');
    $parentContent.slideDown('400');

    if(isActive){
      $parentItem.removeClass('active');
      $parentContent.slideUp('400');
    }
  });
};

RS.mainMenuToggle = function(){
  const $menu = $('.js-main-menu');
  const $btnOpen = $('.js-main-menu-open');
  const $btnClose = $menu.find('.js-main-menu-close');
  const $globalWrapper = $('.global-wrapper');

  const popupOpen = function(){
    $menu.slideDown('500');
    $globalWrapper.addClass('js-popup-open');
  };

  const popupClose = function(){
    $menu.slideUp('500');
    $globalWrapper.removeClass('js-popup-open');
  };

  $btnOpen.on('click', function(){
    popupOpen();
  });

  $btnClose.on('click', function(){
    popupClose();
  });

  $(document).on('keydown.js-main-menu', function onKeyDown(evt) {
      if (evt.keyCode === RS.ESC_CODE) {
          popupClose();
      }
  });
};

RS.searchToggle = function(){
  const $elem = $('.js-search');
  const $btnOpen = $('.js-search-open');
  const $btnClose = $elem.find('.js-search-close');
  const $globalWrapper = $('.global-wrapper');

  const popupOpen = function(){
    $elem.slideDown('500');
    $globalWrapper.addClass('js-popup-open');
  };

  const popupClose = function(){
    $elem.slideUp('500');
    $globalWrapper.removeClass('js-popup-open');
  };

  $btnOpen.on('click', function(){
    popupOpen();
  });

  $btnClose.on('click', function(){
    popupClose();
  });

  $(document).on('keydown.js-search', function onKeyDown(evt) {
      if (evt.keyCode === RS.ESC_CODE) {
          popupClose();
      }
  });
};

RS.loginToggle = function(){
  const $elem = $('.js-login');
  const $btnOpen = $('.js-login-open');
  const $btnClose = $elem.find('.js-login-close');
  const $globalWrapper = $('.global-wrapper');

  const popupOpen = function(){
    $elem.slideDown('500');
    $globalWrapper.addClass('js-popup-open');
  };

  const popupClose = function(){
    $elem.slideUp('500');
    $globalWrapper.removeClass('js-popup-open');
  };

  $btnOpen.on('click', function(){
    popupOpen();
  });

  $btnClose.on('click', function(){
    popupClose();
  });

  $(document).on('keydown.js-login', function onKeyDown(evt) {
      if (evt.keyCode === RS.ESC_CODE) {
          popupClose();
      }
  });
};

RS.popupToggle = function(){
  const $elem = $('.js-popup');
  const $btnOpen = $('.js-popup-open');
  const $btnClose = $elem.find('.js-popup-close');
  const $globalWrapper = $('.global-wrapper');
  const elemIsFilter = $elem.hasClass('.js-filter');

  const popupOpen = function(){
    $elem.addClass('active');
    $globalWrapper.addClass('js-popup-open blur');

    if(!elemIsFilter){
      $globalWrapper.removeClass('blur');
    }
  };

  const popupClose = function(){
    $elem.removeClass('active');
    $globalWrapper.removeClass('js-popup-open blur');
  };

  $btnOpen.on('click', function(){
    popupOpen();
  });

  $btnClose.on('click', function(){
    popupClose();
  });

  $(document).on('keydown.js-popup', function onKeyDown(evt) {
      if (evt.keyCode === RS.ESC_CODE) {
          popupClose();
      }
  });

  $(document).mouseup(function (e) {
    var container = $elem.find('.js-popup-content');

    if (container.has(e.target).length === 0){
        $elem.removeClass('active');
        $globalWrapper.removeClass('js-popup-open blur');
    }
  });
};

RS.weeklyTop = function(){
  const $slider = $('.js-weekly-slider');

  $slider.slick({
    dots: false,
    slidesToShow: 2,
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

RS.fancybox = function(){
  if($("*").is("[data-fancybox]")){
      $("[data-fancybox]").fancybox({
          buttons : [
              'close'
          ],
          thumbs : {
              autoStart   : true,
              hideOnClose : true
          },
          lang : 'en',
          i18n : {
              'en' : {
                  CLOSE       : 'close',
                  NEXT        : 'next',
                  PREV        : 'prev',
                  ERROR       : 'Error: cant get image',
              }
          },
  		hash: false ,
      });
    }
};

RS.select = function(){
  const $elem = $('.js-select');
  const $options = $elem.find('.js-select-option');
  const $contents = $('.js-select-wrap');
  const $values = $('.js-select-value');

  const openSelect = function($this){
    const $content = $this.find('.js-select-wrap');
    $contents.removeClass('active');

    $content.addClass('active');
  };

  const closeSelect = function($this){
    const $content = $this.closest('.js-select-wrap');

    $content.removeClass('active');
  };

  $(document).mouseup(function (e) {
      var container = $(".js-select");

      if (container.has(e.target).length === 0){
          $contents.removeClass('active');
      }
    });

    $elem.on('click', function(){
        console.log($(this));
        openSelect($(this));
    });

    $options.on('click', function(){
      const value = $(this).html();
      const $value = $(this).closest('.js-select').find('.js-select-value');

      $value.html(value);
      closeSelect($(this));
    });
};

(function onPageReady () {
  // Utility
  RS.svgGlobal();
  RS.tabs();
  RS.imgAdaptive();
  RS.activeToggle();
  RS.activeToggleSiblingsOff();
  RS.accordion();
  RS.fancybox();
  RS.select();

  // popups
  RS.mainMenuToggle();
  RS.searchToggle();
  RS.loginToggle();
  RS.popupToggle();

  // Sliders
  RS.mainSlider();
  RS.catalogBest();
  RS.catalogGallerySlider();
  RS.weeklyTop();
  RS.popupItemSlider();

  // Calc. IT must be always last!
  RS.catalogGalleryQuantity();
}());
