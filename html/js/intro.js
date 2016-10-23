var intro='<div class="carousel carousel-slider center" data-indicators="true">\
    <div class="carousel-item red white-text" href="#one!">\
      <h2>First Panel</h2>\
      <p class="white-text">This is your first panel</p>\
    </div>\
    <div class="carousel-item amber white-text" href="#two!">\
      <h2>Second Panel</h2>\
      <p class="white-text">This is your second panel</p>\
    </div>\
    <div class="carousel-item green white-text" href="#three!">\
      <h2>Third Panel</h2>\
      <p class="white-text">This is your third panel</p>\
    </div>\
    <div class="carousel-item  darken-4 back-text" href="#four!">\
      <h2>Screen Me</h2>\
      <div class="row">\
   <form class="col s12">\
     <div class="row">\
       <div class="input-field col s12">\
         <i class="material-icons prefix">account_circle</i>\
         <input id="username" type="text" class="validate">\
         <label for="icon_prefix">Email</label>\
       </div>\
       <div class="input-field col s12">\
         <i class="material-icons prefix">lock</i>\
         <input id="password" type="password" class="validate">\
         <label for="icon_lock">Password</label>\
       </div>\
       <div id="re-password-div" class="input-field col s12">\
         <i class="material-icons prefix">lock</i>\
         <input id="re-password" type="password" class="validate">\
         <label for="icon_lock">Re-Password</label>\
       </div>\
       <div class="input-field col s12">\
         <a id="login" class="waves-effect light-blue btn-large" style="width: 100%;">เข้าสู่ระบบ</a>\
       </div>\
       <div class="input-field col s12">\
       <a  id="regis" class="waves-effect light-blue btn-large" style="width: 100%;">สมัครสมาชิก</a>\
       </div>\
       <div class="input-field col s12">\
       <a  id="re-regis" class="waves-effect light-blue btn-large" style="width: 100%;">สมัครสมาชิก</a>\
       </div>\
     </div>\
   </form>\
 </div>\
    </div>\
  </div>';
$('#menubar').css('display', 'none');  
$("#view").append(intro);
$('.carousel.carousel-slider').carousel({full_width: true});
var test1="height: "+$(document).height()+"px;";
var test=$(".carousel.carousel-slider.center.initialized").attr('style',test1);
init();
