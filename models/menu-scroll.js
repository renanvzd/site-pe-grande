$(function(){
            
    $(window).scroll(function(){

        if($(window).scrollTop() > 0) {
            $(".header-brand").addClass("sticky-header");
        } else {
            $(".header-brand").removeClass("sticky-header");
        }


        if($(window).scrollTop() > 0) {
            $(".menu-tab").addClass("sticky");
        } else {
            $(".menu-tab").removeClass("sticky");
        }

    });
});


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }