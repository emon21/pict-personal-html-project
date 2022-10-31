//testimonials slider

$('.testimonial').slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false

  });


  //blog slider

  $('.blog-item').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
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
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 768,
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

//menu header fixed on scroll
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 150) {
          $(".top-menu").removeClass("scroll-header");
        } else {
          $(".top-menu").addClass("scroll-header");
          
        }
      });

//menu click on section into smooth animation
      $('.nav-menu li a').click(function(e){
        // alert('hello')
        e.preventDefault();
         var hash = this.hash;
         var position = $(hash).offset().top;
       // alert(position);
         $('html').animate({
             scrollTop:position
         },800);
     });


     //menu responsive
    //  function Menu(e) {
    //     console.log(e);
    //     let list = document.querySelector('ul');
    //     e.name === 'menu' ? (e.name = "close", list.classList.add('top-[47px]'),
    //      list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[47px]'), list.classList.remove('opacity-100'))
    // }
     //menu responsive
     function Menu(e) {
        console.log(e);
        let list = document.querySelector('ul');
        e.name === 'menu' ? (e.name = "close",
         list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('opacity-100'))
    }
    function topMenu(){
        console.log('click');
    }


    //preloader
    $(window).on("load", function () { 

         $(".preloader").fadeOut(1000);
         
    });

