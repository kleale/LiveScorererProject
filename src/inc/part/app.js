/*
* Global scripts
*/
(function ($) {
  'use strict';

  $(document).ready(function () {
    
    //fancy
    $(".fancybox").fancybox({
        prevEffect	: 'none',
        nextEffect	: 'none',
        helpers	: {
            title	: {
                type: 'outside'
            },
            thumbs	: {
                width	: 50,
                height	: 50
            }
        }
    });
    
    
  }); //end ready

}(jQuery));