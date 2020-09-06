  $('.subcategories-block').each(function()
  {
    var parent = $(this),
      item = parent.find('.subcategories-block__item'),
      itemsLength = item.length,
      itemsHeight = 0,
      itemLonger = 0;

    item.each(function()
    {
      itemsHeight = itemsHeight + $(this).innerHeight();

      if( $(this).innerHeight() > itemLonger )
      {
        itemLonger = $(this).innerHeight();
      }
    });

    parent.css({
      "max-height" : itemsHeight/4 + itemLonger*0.7
    });
    
    console.log(itemsHeight);
  });
