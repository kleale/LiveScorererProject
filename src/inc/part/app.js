/*
* Global scripts
*/
(function ($) {
  'use strict';

  $(document).ready(function () {
    //tip
    $('.tip').tooltip();
    //affix panel offset
    $('header').on('affix.bs.affix', function () {
      $('body').addClass('affixpad');
    });
    $('header').on('affixed-top.bs.affix', function () {
      $('body').removeClass('affixpad');
    });
    
    //images in select2
    /*
    function formatState (state) {
      if (!state.id) { return state.text; }
      var $state = $(
        '<span><img src="vendor/images/flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
      );
      return $state;
    };*/
    // http://select2.github.io/examples.html#themes-templating-responsive-design
    $(".select2").select2({
      placeholder: "Выбрать команду"
      //templateResult: formatState
    });
    
    //fancy
    $('.fancybox').fancybox({
      prevEffect: 'none',
      nextEffect: 'none',
      helpers: {
        title: {
          type: 'outside'
        }
      }
    });
    $('.fancybox-media').fancybox({
      openEffect  : 'none',
      closeEffect : 'none',
      //maxWidth	: 800,
      //maxHeight	: 600,
      fitToView	: true,
      width		: '90%',
      height		: '90%',
      autoSize	: true,
      closeClick	: false
    });
    $('.ps').perfectScrollbar();
    $('.open-more-info').click(function () {
      $(this).closest('.event').toggleClass('active');
      $(this).closest('.event').next().toggleClass('active');
    });
  }); //end ready

}(jQuery));