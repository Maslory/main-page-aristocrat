var next1 = document.getElementById('next');
var prev1 = document.getElementById('prev');
var upper = document.getElementById('upper');
let all_info_about_company = document.querySelectorAll('#displayBlockNoneSection1, #displayBlockNoneSection2, #displayBlockNoneSection3, #displayBlockNoneSection4, #displayBlockNoneSection5, #displayBlockNoneSection6, #displayBlockNoneSection7');
window.onload = function() {

 };
var logo = document.getElementById("logo");
var headTags = document.getElementById("headTags");


// window.addEventListener("resize", function() {
//     console.log(innerWidth);
//     console.log(innerHeight);
//     if(document.documentElement.clientWidth < 806){
//         section1.style.display = "block";
//         section2.style.display = "block";
//         section3.style.display = "block";
//         section4.style.display = "block";
//         section5.style.display = "block";
//         section6.style.display = "block";
//         section7.style.display = "block";
//        }
//        if(document.documentElement.clientWidth > 806){
//         section1.style.display = "none";
//         section2.style.display = "none";
//         section3.style.display = "none";
//         section4.style.display = "none";
//         section5.style.display = "none";
//         section6.style.display = "none";
//         section7.style.display = "none";
//        }
// }, false);



$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if(document.documentElement.clientWidth < 1030) {
        $('#header').css({'height' :'180px'});
    }
    if(document.documentElement.clientWidth > 1030) {
        $('#header').css({'height' :'90px'});
    }
    if( scrolled > 30 && document.documentElement.clientWidth > 1030) {
        $('.content').addClass('scrolled');
        logo.setAttribute("src","img/logo2.png");
        $('.headTags').css({'color': '#4B1C1C'});
        $('.header1').css({'color': '#4B1C1C'});
        $('#upper').css({'display' :'block'});
        

    }
    if( scrolled <= 30 ) {
        $('.content').removeClass('scrolled');
        logo.setAttribute("src","img/logo.png");
        // header.style.color = "white";
        $('.headTags').css({'color': ' #FFFFFF'});
        $('.header1').css({'color': ' #FFFFFF'});
        $('#upper').css({'display' :'none'});
    }
});


var oknoInfo = document.getElementById('borderOknoInfo');
var section1 = document.getElementById('displayBlockNoneSection1');
var section2 = document.getElementById('displayBlockNoneSection2');
var section3 = document.getElementById('displayBlockNoneSection3');
var section4 = document.getElementById('displayBlockNoneSection4');
var section5 = document.getElementById('displayBlockNoneSection5');
var section6 = document.getElementById('displayBlockNoneSection6');
var section7 = document.getElementById('displayBlockNoneSection7');
var zakaz = document.getElementById('showForZakaz');
var arch = document.getElementById('showForArch');
var build = document.getElementById('showForCompany');
var dekor1 = document.getElementById('dekor1');
let buttonA1 = document.getElementById('buttonsA1');
let buttonA2 = document.getElementById('buttonsA2');
let buttonA3 = document.getElementById('buttonsA3');


 function showForZakaz() {
    buttonA1.style.display = 'block';
    buttonA2.style.display = 'none';
    buttonA3.style.display = 'none';
   zakaz.style.color = "#4B1C1C";
   arch.style.color = "#777777";
   build.style.color = "#777777";
   oknoInfo.style.display = 'block';
   section1.style.display = 'block';
   section2.style.display = 'block';
   section3.style.display = 'block';
   section4.style.display = 'none';
   section5.style.display = 'none';
   section6.style.display = 'none';
   section7.style.display = 'none';
 }

 function showForArch() {
    buttonA1.style.display = 'none';
    buttonA2.style.display = 'block';
    buttonA3.style.display = 'none';
   zakaz.style.color = "#777777";
   arch.style.color = "#4B1C1C";
   build.style.color = "#777777";
   oknoInfo.style.display = 'none';
   section1.style.display = 'none';
   section2.style.display = 'none';
   section3.style.display = 'none';
   section4.style.display = 'block';
   section5.style.display = 'block';
   section6.style.display = 'none';
   section7.style.display = 'none';
 }

 function showForCompany() {
    buttonA1.style.display = 'none';
    buttonA2.style.display = 'none';
    buttonA3.style.display = 'block';
   zakaz.style.color = "#777777";
   arch.style.color = "#777777";
   build.style.color = "#4B1C1C";
   oknoInfo.style.display = 'none';
   section1.style.display = 'none';
   section2.style.display = 'none';
   section3.style.display = 'none';
   section4.style.display = 'none';
   section5.style.display = 'none';
   section6.style.display = 'block';
   section7.style.display = 'block';
 }

 slides = document.getElementsByClassName("slide");
 containerWidth = 400;

 Array.prototype.forEach.call(slides, function (el, i) {//set the initial position of each slide
     el.style.left = (i * containerWidth) + "px";
 });

function blockButton() {
  next1.style.src = "javascript:moveSlides('next');";
  prev1.style.src =  "javascript:moveSlides('prev');";
}

 window.moveSlides = function (direction) {
     run = true;
     tracker = containerWidth; //500 in this example. We make a separate variable so we can decrement it

     if (((direction == "next" && (parseInt(slides[0].style.left) <= (0 - (containerWidth * (slides.length - 1)))))) //compare against 2nd-to-last slide's index, otherwise it'll go 1 slide too far
         || (direction == "prev" && (parseInt(slides[0].style.left) >= 0))) { run = false; }

     if (run) {
         var slideInterval = setInterval(function () {

             moveRate = 3; //set the speed here (use numbers that the container's width can be divided by without a remainder)
             Array.prototype.forEach.call(slides, function (el, i) {
                 if (tracker <= 0) {
                     clearInterval(slideInterval);
                 }
                 else{
                     el.style.left = (direction == "next") ? (parseInt(el.style.left) - moveRate) + "px" : (parseInt(el.style.left) + moveRate) + "px";
                     next1.style.src = "#";
                     prev1.style.src = "#";
                 }
             });
             tracker -= moveRate;
         }, 1);

     }
     next1.style.src = "javascript:moveSlides('next');";
     prev1.style.src =  "javascript:moveSlides('prev');";

 }
