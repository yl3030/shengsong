new WOW().init();

// tag (regist)
const tagN=document.querySelectorAll(".tagNav"),
         tagC=document.querySelectorAll(".tagCnt");      

   for(let i=0;i<tagN.length;i++){
      tagN[i].index=i;        
    tagN[i].addEventListener('click',function(){
        for(let i=0;i<tagC.length;i++){
            tagN[i].classList.remove("active");
            tagC[i].classList.remove("on");                 
            tagN[this.index].classList.add("active");
            tagC[this.index].classList.add("on");
        }
    },false)
   } 



//產品頁選擇器
$(document).ready(function(){
  $(".pdBurg").click(function(){
    $(this).toggleClass("is-active");
    $(".panel").slideToggle("500");
  });
});




// ●the bars of the hamburger
$(document).ready(function(){
  $(".burger").click(function(){
    $(this).toggleClass("is-active");
  });
});

// ●data-target & offcanvas
var $toggler = $('.js-toggle');
$toggler.each(function ($el) {
    var _this = this;
    $(this).on('click', function (e) {
        e.preventDefault();
        var target = $(_this).data('target');
        var $target = $('#' + target);
        $(_this).toggleClass('active');
        $target.toggleClass('active');
    });
});

// ●hamburger & pageCover
var mobileMenu = $('.coverRun');
if (mobileMenu.length > 0) {
    mobileMenu.on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('coverToggle');
    });
}
// ●close the hamburger
$('.pageCover').on('click', function () {
    $('.coverRun').click();    
});

//---------------------------------------------slider
//homeSlider
$('.homeSlider').slick({
  dots: true,    
  arrows:true,
  infinite: true,
  slidesToShow: 1,  
  slidesToScroll: 1, 
  autoplay:true,
      
  responsive: [{    
    breakpoint: 1024,
      settings: {      
      arrows: false        
    }
  }]
});


// 超過200個字以"..."取代
$(function(){
    var len = 200; 
    $(".tx200").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});





//page
/*$('#myPage').twbsPagination({
   totalPages: 16,
   visiblePages: 5,
   next: ' ',
   prev: ' ',
   first: " ", 
   last: " ",         
});*/


//bg-set
var bgSet = document.querySelectorAll("div[data-image]");
for (var i = 0; i < bgSet.length; i++) {
    var url = bgSet[i].getAttribute('data-image');
    bgSet[i].style.backgroundImage="url('" + url + "')";
} 


// upLoad
function preview() {
  let frame = document.getElementById('frame');
  frame.src = URL.createObjectURL(event.target.files[0]);
}


//tag
const tabN=document.querySelectorAll(".tabNav"),
         tabC=document.querySelectorAll(".tabCnt");      

   for(let i=0;i<tabN.length;i++){
      tabN[i].index=i;        
    tabN[i].addEventListener('click',function(){
      for(let i=0;i<tabC.length;i++){
            tabN[i].classList.remove("active");
            tabC[i].classList.remove("on");                 
            tabN[this.index].classList.add("active");
            tabC[this.index].classList.add("on");
        }
    },false)
   } 


//Copyright
var d = new Date();
document.getElementById("getyear").innerHTML = d.getFullYear();






//縮圖+slide
$(window).load(function(){
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    //slideshow: false,    
    itemWidth: 100,    
    itemMargin: 5,
    asNavFor: '#slider'
  });

  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel",    
  });
});






//產品頁手風琴選單
(function($) {
   $('.accordion > li:eq(0) .heading').addClass('active').next().slideDown(); 
   $('.accordion .heading').click(function(j) {
      var dropDown = $(this).closest('li').find('.content');
      $(this).closest('.accordion').find('.content').not(dropDown).slideUp();
      if ($(this).hasClass('active')) {
         $(this).removeClass('active');
      } else {
         $(this).closest('.accordion').find('.heading.active').removeClass('active');
         $(this).addClass('active');
      }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
   });
})(jQuery); 


//lightGallery(document.getElementById('lightgallery'));


// menuicon 
$("#menu-icon").click(function(){
  if($(this).hasClass("active")){
    $(this).removeClass("active");
    $("header").children(".container").children(".box2").css("right","-100%");
  }else {
    $(this).addClass("active");
    $("header").children(".container").children(".box2").css("right","0");
  }
})

// product-detail
$(".product-detail").children(".btn-box").children("button").click(function(){
  $(".product-detail").children(".btn-box").children("button").removeClass("active");
  $(this).addClass("active");
  $(".product-detail").children(".pd").hide();
  if($(this).hasClass("detail-btn1")){
    $(".product-detail").children(".pd1").show();
  }else if($(this).hasClass("detail-btn2")){
    $(".product-detail").children(".pd2").show();
  }else if($(this).hasClass("detail-btn3")){
    $(".product-detail").children(".pd3").show();
  }
})

// product-classify
$(".product-classify").children("li").click(function(){
  if($(this).hasClass("active")){
    $(this).removeClass("active");
    $(this).children("ul").slideUp(300);
  }else {
    $(".product-classify").children("li").removeClass("active");
    $(this).addClass("active");
  $(this).children("ul").slideDown(300);
  }
})

// product-list
$(".product-title").click(function(){
  if($(this).children("i").css("display","block")){
    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $(".product-classify").slideUp(300);
    }else{
      $(this).addClass("active");
      $(".product-classify").slideDown(300);
    }
  }
})