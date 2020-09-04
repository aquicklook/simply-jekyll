var currentChapter = $('.current-chapter');
// var prevChapter = currentChapter.closest();
var nextChapter = currentChapter.next();

$('.open').on('click', function(e) {
  e.preventDefault();
  $('#primary__nav').show().animate({
    'bottom': '2.95rem'
  });
  $('.open').hide();
  $('.close').show();
});

$('.close').on('click', function(e) {
  e.preventDefault();
  $('#primary__nav').animate({
    'bottom': '-3rem'
  });
  $('.open').show();
  $('.close').hide();
});

$('#toc').hide();

$('#table-of-contents').on('click', function() {
  $('#toc').show().animate({
    'top': '-78vh'
  });
});

$('.toc-link').on('click', function() {
  var chapterID = $(this).attr('data-tab');
  $('.chapter').hide();
  $('#' + chapterID).show();
  $('.panel').animate({
    'top': '100%'
  });
  $('#primary__nav').animate({
    'bottom': '-3rem'
  });
  $('.open').show();
  $('.close').hide();
});

$('.panel-close').on('click', function() {
  $('.panel').animate({
    'top': '100%'
  });
});

// scrolling controls
$(window).scroll(function() {
  // if scroll is greater than 300px, do something
  if ($(window).scrollTop() > 300) {
    // attach top bar to the top of the screen
    $('#top-bar').css({
      'position' : 'fixed',
      'top' : '0', 
      'width' : '100%'
    });
    // hides nav menu when scroll is less than 100px
  } else {
      $('#top-bar').css({
        'position' : 'relative'      
      });
    } 
});


$('.prev').on('click', function() {
  currentChapter.prev().show().addClass('current-chapter');
});


$('.next').on('click', function() {
  // currentChapter.next().addClass('current-chapter');
  // // $('article').prev().removeClass('current-chapter');
  nextChapter.show().addClass('current-chapter');
  currentChapter.hide().removeClass('current-chapter');
});


