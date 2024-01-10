var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slide = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slide.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slide[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}