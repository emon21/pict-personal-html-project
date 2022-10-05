//




const all = document.getElementById("all");
const vector = document.getElementById("vector");
const raster = document.getElementById("raster");
const uiux = document.getElementById("uiux");
const printing = document.getElementById("printing");

//
const allTab = document.getElementsByClassName("all");
const vectorTab = document.getElementsByClassName("vector");
const rasterTab = document.getElementsByClassName("raster");
const uiuxTab = document.getElementsByClassName("uiux");
const printingTab = document.getElementsByClassName("printing");

// mixitup



// var mixer = mixitup('.protfolio');

var containerEl = document.querySelector(".protfolio");

      var mixer = mixitup(containerEl, {
        animation: {
          animateResizeContainer: false, // required to prevent column algorithm bug
        },
      });

       //counter
    //    $(".counter").counterUp({
    //     delay: 10,
    //     time: 1000,
    //   });

// Owl Carousel Slider


   
//$('.owl-carousel').owlCarousel();


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    navigation : true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1200:{
            items:3
        }
    }
});


//  $("#owl-demo").owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:false,
    //     autoPlay:true,
    
    //     navigation : true,
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:1,
    //             nav:true
    //         },
    //         600:{
    //             items:3,
    //             nav:false
    //         },
    //         1000:{
    //             items:3,
    //             nav:true,
    //             loop:false
    //         }
    //     }
    //   });
    
// Owl Carousel Slider

//slick Slider

$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

//   logo slider

$('.logo-slider').slick({
    dots: true,
    infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
});


//testimonials

$('.testimonial').slick({

    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
});



//slick Slider

/* scroll to fixed top menu */

   // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    //   window.onscroll = function () {
    //     scrollFunction();
    //   };

    //   function scrollFunction() {
    //     if (
    //       document.body.scrollTop > 10 ||
    //       document.documentElement.scrollTop > 10
    //     ) {
    //       document.getElementById("menu").style.padding = "30px 10px";
    //       document.getElementById("logo").style.fontSize = "25px";
    //     } else {
    //       document.getElementById("navbar").style.padding = "80px 10px";
    //       document.getElementById("logo").style.fontSize = "35px";
    //     }
    //   }
  
        $(window).on("scroll", function () {
          //if you hard code, then use console
          //.log to determine when you want the
          //nav bar to stick.
          var scroll = $(window).scrollTop();
          if (scroll < 150) {
            $(".top-menu").removeClass("scroll-header");
          } else {
            $(".top-menu").addClass("scroll-header");
          }
  
            // console.log($(window).scrollTop());
            // if ($(window).scrollTop() > 50) {
            //   $(".sticky").addClass("menu");
            // }
            // if ($(window).scrollTop() < 50) {
            //   $(".sticky").removeClass("menu");
            // }
        });
    


      

/* scroll to fixed top menu */


// $(document).ready(function(){
    
//     $('li').on('click',function(){
//         $(this).siblings().removeClass('active');
//         $(this).addClass('active');
//     });
// });


// $(document).ready(function(){
//     $('ul li a').click(function(){
//       $('li a').removeClass("active");
//       $(this).addClass("active");
//   });
//   });

// $('#nav-menu a').click(function(e){

//     e.preventDefault();
//      var hash = this.hash;
//      var position = $(hash).offset().top;
//    // alert(position);
//      $('html').animate({
//          scrollTop:position
//      },800);
//  });
//  $(document).ready(function(){
//      $('nav-link').on('click',function(){
//          $(this).siblings().removeClass('active');
//          $(this).addClass('active');
//      });
//  });


const activePage = window.location.pathname;
console.log(activePage);
const navLinks = document.querySelectorAll('nav-link').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    console.log(link.href);
    link.classList.add('active');
  }
});
