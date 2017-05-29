/*
* Global scripts
*/
(function ($) {
  'use strict';

  $(document).ready(function () {
    //tip
    $('.tip').tooltip();
    
    //fancy
    $('.fancybox').fancybox({
      prevEffect	: 'none',
      nextEffect	: 'none',
      helpers	: {
        title	: {
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