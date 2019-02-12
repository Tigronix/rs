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
    	template: ''
    })
};


(function onPageReady () {
  RS.svgGlobal();
  RS.imgAdaptive();
  RS.activeToggle();
  RS.activeToggleSiblingsOff();
}());
