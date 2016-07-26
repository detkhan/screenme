// Initialize your app
var myApp = new Framework7();
var $$ = Dom7;
var url="http://127.0.0.1/screenme/api/";
data_url="";
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
  if(data[i].msg_check=="yes"){
    $('#re_sign_up').css('display', 'none');
    $('#re_password').css('display', 'none');
    $('#sign_in').css('display', 'block');
    $('#sign_up').css('display', 'block');
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
