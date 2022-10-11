//testimonials slider

$('.testimonial').slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true

  });


  //blog slider

  $('.single-item').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  


//menu active
// $(document).ready(function(){
//     $('li').on('click',function(){
//         $(this).siblings().removeClass('active');
//         $(this).addClass('active');
//     });
// });


    $(document).on('click','ul li',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

