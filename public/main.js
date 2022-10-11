//testimonials slider

$('.testimonial').slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true

  });


  //blog slider

// $('.slider').slick({

//     dots: true,
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 1000,

// });

// $('....sldddider').slick({
//     dots: true,
//     arrows: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   });

      
//   $('.slider').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots: true,
//     arrows: true,
//   });

  $('.single-item').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    centerPadding: '150px',
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
  });



  //responsiver slider

//   $('.single-item').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1920,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });


  
// $('.testimonial').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 1,
//     responsive: [
      
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '150px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });

//menu active
// $(document).ready(function(){
//     $('li').on('click',function(){
//         $(this).siblings().removeClass('active');
//         $(this).addClass('active');
//     });
// });
