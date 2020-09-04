(function($){

  var tocbtn = $('li.table-of-contents');
  var toc    = $('div.table-of-contents');

  function showToC(){
    tocbtn.addClass('active');
    toc.hide()
      .removeClass('hidden')
      .slideDown(); 
  }

  function hideToC(){
    tocbtn.removeClass('active');
    toc.slideUp(); 
  }

  tocbtn.on('click', function(){
    if(!toc.is(':visible'))
      showToC();
    else
      hideToC();
  });

  $('div.bgimg, div.pages').on('click', function(){
    if(toc.is(':visible'))
      hideToC();
  });

})(jQuery);

(function($){
  
  $.fn.hoverEffect = function(){}
  
})(jQuery);
