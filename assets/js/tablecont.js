$(function(){
  
  var volvo = $("#volvo-article");
  var saab = $("#saab-article");
  var saabimage = $(".saab-image");
  var volvoimage= $(".volvo-image");
  var mercedes = $("#mercedes-article");
  var image = $(".image-container");
  
  
  //mute
  
  volvo.hide();
  mercedes.hide();
  saab.hide();
  volvoimage.hide();
  saabimage.hide();
  
$("#contents").change(function(){
  if($(this).val() =="volvo"){
    volvo.show();
    volvoimage.show();
    saabimage.hide();
    saab.hide();
  }
 else if($(this).val()=="saab"){
    saab.show();
    volvo.hide();
    saabimage.show();
   volvoimage.hide();
  }  
else if($(this).val()=="showall"){
  volvo.show();
  saab.show();
}
  else if ($(this).val() == "allimages"){
    volvo.hide();
    saab.hide();
    volvoimage.show();
    saabimage.show();
  }
  else{
    volvo.hide();
    saab.hide();  volvoimage.hide();
  saabimage.hide();
  }
})
  
});
