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
    
    // http://select2.github.io/examples.html#themes-templating-responsive-design
    $(".select2").select2();
    $(".tour-select2").select2({
      placeholder: "Выбрать tурнир",
      templateResult: formatPic
    });
    $(".teams-select2").select2({
      placeholder: "Выбрать команду",
      templateResult: formatPic
    });
    //images in select2
    function formatPic (pic) {
      if (!pic.id) { return pic.text; }
      var $pic = $(
        '<span><img src="' + pic.element.value.toLowerCase() + '" class="img-ico"/> ' + pic.text + '</span>'
      );
      return $pic;
    };
    
    //fancy
    $('.fancybox').fancybox({
      openEffect  : 'none',
      closeEffect : 'none',
      /*prevEffect: 'none',
      nextEffect: 'none',
      helpers: {
        title: {
          type: 'outside'
        }
      }*/
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