function toggle_visibility(toc) {
var f = document.getElementById(toc);
if(f.style.display == 'none')
  f.style.display = 'block';
else
f.style.display = 'none';
$('.Hide').click(function() {
    $('#target').hide(500);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
   $('.Show').click(function() {
    $('#target').show(500);
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.toggle').click(function() {
    $('#target').toggle('slow');
});
    }
