
$(document).ready(function(){
  $('#float').on('click',(function(){
    $('#content').toggleClass("hide show"); 
    $('#toggle').toggleClass("fa-list-ul fa-times");
  }));
  $('#content a').on('click',(function(){//toggle class after a link is clicked
    $('#content').toggleClass("show hide"); 
    $('#toggle').toggleClass("fa-times fa-list-ul");
  }));
});
