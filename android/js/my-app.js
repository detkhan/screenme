// Initialize your app
var myApp = new Framework7();
var $$ = Dom7;
var url="http://inwdog.com/screenme/api/view/";
data_url="";
var mainView = myApp.addView('.view-main');

var test=1;


var newPageContent='<div id="index" class="page-content" data-theme="blue" data-page="index"> \
<div data-pagination=".swiper-pagination" data-paginationHide="true" class="swiper-container swiper-init ks-demo-slider"> \
<div class="swiper-pagination"></div> \
<div class="swiper-wrapper"> \
<div class="swiper-slide">Slide 1</div> \
<div class="swiper-slide">Slide 2</div> \
<div class="swiper-slide">Slide 3</div> \
<div class="swiper-slide"> \
<div class="page-content login-screen-content"> \
<div class="login-screen-title">Screen Me</div> \
<form> \
<div class="list-block inputs-list"> \
<ul> \
  <li class="item-content"> \
    <div class="item-inner"> \
      <div class="item-title label">Username</div> \
      <div class="item-input"> \
        <input id="txt_username" type="text" name="username" placeholder="Your username"/> \
      </div> \
    </div> \
  </li> \
  <li class="item-content"> \
    <div class="item-inner"> \
      <div class="item-title label">Password</div>\
      <div class="item-input"> \
        <input id="txt_password" type="password" name="password" placeholder="Your password"/> \
      </div> \
    </div> \
  </li> \
        <li id="re_password" class="item-content"> \
    <div class="item-inner"> \
      <div class="item-title label">Re Password</div> \
      <div class="item-input"> \
        <input id="txt_re_password" type="password" name="password" placeholder="Your re password"/> \
      </div> \
    </div> \
  </li> \
</ul> \
</div> \
<div class="content-block"><a href="#" id="sign_in" class="button button-big button-fill">เข้าสู่ระบบ</a></div> \
<div class="content-block"><a href="#" id="sign_up" class="button button-big button-fill">สมัครสมาชิก</a></div> \
<div class="content-block"><a href="#" id="re_sign_up" class="button button-big button-fill">ยืนยันสมัครสมาชิก</a></div> \
<div class="content-block"> \
<div class="list-block-label">Some text about login information.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div> \
</div> \
</form> \
</div> \
</div> \
</div> \
</div> \
</div>';
if(test==1){
myApp.alert('Complete', 'Load!');
$("#home").append(newPageContent);
}else{
myApp.alert('Complete', 'Load Error!');
}


function init(){

  // Init slider and store its instance in mySwiper variable
  var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination'
  });
screen_login();
}
init();


function screen_login()
{
$('#re_password').css('display', 'none');
$('#re_sign_up').css('display', 'none');

}

function validateLogin(username,password,re_password) {
  var validate_data=false;
  if(username!='' ||password!='' ||re_password!='')
  {
    validate_data=true;
  }
  else{
  myApp.alert('กรุณากรอกข้อมูลให้ครบ', 'แจ้งเตือน!');
  }
  return validate_data;
}

$(document).on("click", "#sign_up", function() {
$('#re_sign_up').css('display', 'block');
$('#re_password').css('display', 'block');
$('#sign_in').css('display', 'none');
$('#sign_up').css('display', 'none');



});

$(document).on("click", "#re_sign_up", function() {
var username=$("#txt_username").val();
var password=$("#txt_password").val();
var re_password=$("#txt_re_password").val();
var data_validate=validateLogin(username,password,re_password);
if(data_validate){
  if(password==re_password){
  var page="registration.php";
  var pack_data={username:username,password:password};
  var feedhost=url+page+'?jsoncallback=?';
  $.getJSON( feedhost, {
    pack_data:pack_data,
    format: 'json'
    })
      .done(function( data ) {
$.each(data, function(i, field){
  console.log(data[i].msg_check);
  if(data[i].msg_check=="add"){
    $('#re_sign_up').css('display', 'none');
    $('#re_password').css('display', 'none');
    $('#sign_in').css('display', 'block');
      myApp.alert('Complete', 'Registration!');
  }else{
      myApp.alert('Have User already', 'Not Registration!');
  }

});
    });
  }else{
  myApp.alert('กรอกpasswordกับre password ไม่ตรงกัน', 'แจ้งเตือน!');
  }
}

});

$(document).on("click", "#sign_in", function() {
var username=$("#txt_username").val();
var password=$("#txt_password").val();
var data_validate=validateLogin(username,password,password);
if(data_validate){
  var page="login.php";
  var pack_data={username:username,password:password};
  var feedhost=url+page+'?jsoncallback=?';
  $.getJSON( feedhost, {
    pack_data:pack_data,
    format: 'json'
    })
      .done(function( data ) {
$.each(data, function(i, field){
  console.log(data[i].msg_check);
  if(data[i].msg_check=="yes"){
      myApp.alert('Welcome', 'Sign in!');
      mainView.router.load({pageName: 'about'});
      $("#home").empty();
  }else{
      myApp.alert('fail username   password', 'Not Sign in!');
  }

});
    });
}

});
