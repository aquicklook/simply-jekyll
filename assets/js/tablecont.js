$(document).ready(function() {
  var items = $("h2, h3");
  var all = [];
  
  items.each(function() {
    $(this).data("top", parseInt($(this).offset()["top"]));
  });
  
  $(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop() - 1;
    
    //if (scrollTop % 2 == 0) {
      all = [];
      
      $.each(items, function() {
        var $this = $(this),
            top = $this.data("top");
        
        var onScreen = (top >= scrollTop && top <= $(window).innerHeight() + scrollTop);
        
        if (onScreen)
          all.push($this.attr("id"));
      });
      
      if (all.length > 0) {
        var links = $(".index > ol li a");
        
        $.each(links, function() {
          var $this = $(this);
          var $li = $this.parent("li");
          $li.prop("class", "");
          
          if ($.inArray($this.attr("href").substring(1), all) > -1)
              $li.addClass("active");
        });
      }
    //}
  });
});
