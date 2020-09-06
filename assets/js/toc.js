function tocContainer() {
  var x = document.getElementById("toc-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


var lastScrollTop = 20;
window.addEventListener("scroll", function(){  
   var st = window.pageYOffset || document.documentElement.scrollTop;  
   if (st > lastScrollTop){
       document.getElementById("bottommenu").style.bottom = "-100%";
   } else {
      document.getElementById("bottommenu").style.bottom = "20";
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);
