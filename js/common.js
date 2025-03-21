window.onscroll = function() {myFunction()};
var navbar_sticky = document.getElementById("navbar_sticky");
var sticky = navbar_sticky.offsetTop;
var navbar_height = document.querySelector('.navbar').offsetHeight;
function myFunction() {
  if (window.pageYOffset >= sticky + navbar_height) {
    navbar_sticky.classList.add("sticky")
	document.body.style.paddingTop = navbar_height + 'px';
  } else {
    navbar_sticky.classList.remove("sticky");
	document.body.style.paddingTop = '0'
  }
}


$(document).ready(function () { 
            $('.dropdown').hover(function () { 
                $(this).addClass('show'); 
                $(this).find('.dropdown-menu').addClass('show'); 
            }, function () { 
                $(this).removeClass('show'); 
                $(this).find('.dropdown-menu').removeClass('show'); 
            }); 
        }); 


        
function toggleText() {
  var moreText = document.getElementById("moreText");
  var btn = document.getElementById("toggleBtn");

  if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btn.innerHTML = "View Less";
  } else {
      moreText.style.display = "none";
      btn.innerHTML = "View More";
  }
}


function openModal(img) {
    document.getElementById("modalImage").src = img.src;
    document.getElementById("imageModal").style.display = "flex";
}
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}


