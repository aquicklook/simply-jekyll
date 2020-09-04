/* Show the side nav panel by repositioning it to right = 0 */
function openNav(){
  $("#sideNavUserGuide").toggleClass("open");
}


/* Function to animate :
--> remove of the nav tabs from the side nav view 
--> and show the tab content in the side nav view  */
$(".nav.nav-tabs li > a").click(function openTabContent() {
 // $(this).closest('ul').addClass("inactive"); 
  $(".nav.nav-tabs").addClass("inactive");
  $(".user-guide-tabs .tab-content").addClass("active");
});



/* Function to animate :
--> remove the tab content from the side nav view 
--> and show the nav tabs in the side nav view  */
function closeTabContent() {
  $(".user-guide-tabs .tab-pane.active").removeClass("active");
  $(".user-guide-tabs .nav.nav-tabs li").removeClass( "active");
  $(".user-guide-tabs .tab-content").removeClass( "active");
  $(".nav.nav-tabs").removeClass("inactive");
  
}


/* Function to close the side nav panel */
$(".user-guide-header button.close").click(function closeNav(){
  $("#sideNavUserGuide").removeClass("open");
  closeTabContent();
});


$("#imageClickToExpand").click(function openImageModal(){
	var imageSrc = $(this).attr("src");
	$("#imageExpandedModal").attr("src", imageSrc);
	$("#imageModal").css("display", "block");
});

/* When the user clicks on x, close the modal */

$(".image-modal span.close").click(function closeImageModal(){
  $(".side-nav-ug .image-modal").css("display","none");
});


/* To move between the tabs with content using next and previous buttons */
$("a.btn-next").click(function(){
    var $toHighlight = $('.user-guide-tabs .tab-pane.active').next().length > 0 ? $('.user-guide-tabs .tab-pane.active').next() : $('.user-guide-tabs .tab-pane').first();
    $('.user-guide-tabs .tab-pane.active').removeClass('active');
    $toHighlight.addClass('active');
});

/* To move between the tab-pane with content using next and previous buttons */
$("a.btn-next").click(function(){
    var $toHighlight = $('.user-guide-tabs .tab-pane.active').next().length > 0 && $('.user-guide-tabs .tab-pane.active').next().hasClass("tab-pane") ? $('.user-guide-tabs .tab-pane.active').next() : $('.user-guide-tabs .tab-pane').first();
    $('.user-guide-tabs .tab-pane.active').removeClass('active');
    $toHighlight.addClass('active');
});

$("a.btn-previous").click(function(){
    var $toHighlight = $('.user-guide-tabs .tab-pane.active').prev().length > 0 && $('.user-guide-tabs .tab-pane.active').prev().hasClass("tab-pane") ? $('.user-guide-tabs .tab-pane.active').prev() : $('.user-guide-tabs .tab-pane').last();
    $('.user-guide-tabs .tab-pane.active').removeClass('active');
    $toHighlight.addClass('active');
});
