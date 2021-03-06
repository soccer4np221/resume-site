/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  $('#mySidebar').css('width', '250px');
  $('#main').css('marginLeft', '250px');
  $('.closebtn').show();
  $('.openbtn').hide();
}

 

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  $('#mySidebar').css('width', '0');
  $('#main').css('marginLeft', '0');
  $('.closebtn').hide();
  $('.openbtn').show();
}

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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}