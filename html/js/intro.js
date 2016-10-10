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
  $("#view").append(intro);
$('.carousel.carousel-slider').carousel({full_width: true});
var test1="height: "+$(document).height()+"px;";
var test=$(".carousel.carousel-slider.center.initialized").attr('style',test1);
init();


var home='<div class="navbar-fixed"> \
<nav>\
 <div class="nav-wrapper">\
   <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>\
 </div>\
</nav>\
</div><!--navbar-fixed-->\
<ul id="slide-out" class="side-nav">\
<li><div class="userView">\
 <img class="background" src="http://materializecss.com/images/office.jpg">\
 <a href="#!user"><img class="circle" src="http://materializecss.com/images/yuna.jpg"></a>\
 <a href="#!name"><span class="white-text name">John Doe</span></a>\
 <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>\
</div>\
</li>\
<li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>\
<li><a href="#!">Second Link</a></li>\
<li><div class="divider"></div></li>\
<li><a class="subheader">Subheader</a></li>\
<li><a class="waves-effect" href="#!">Third Link With Waves</a></li>\
</ul><!--slide-out-->';
