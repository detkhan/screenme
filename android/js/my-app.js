$(document).ready(function() {
  $("#owl-demo").owlCarousel({

  navigation : false,
  slideSpeed : 300,
  paginationSpeed : 400,
  singleItem : true,

  // "singleItem:true" is a shortcut for:
  // items : 1,
  // itemsDesktop : false,
  // itemsDesktopSmall : false,
  // itemsTablet: false,
   itemsMobile : true

  });
});
init();
var url="http://inwdog.com/screenme/api/view/";
function init(){
  $('#re-password').css('display', 'none');
  $('#re-regis').css('display', 'none');

}

$(document).on("click", "#regis", function() {
$('#re-password').css('display', 'block');
  $('#re-regis').css('display', 'block');
$('#login').css('display', 'none');
$('#regis').css('display', 'none');

var username=$("#username").val();
var password=$("#password").val();
var re_password=$("#re-password").val();
var data_validate=validateLogin(username,password,re_password);


});

$(document).on("click", "#re-regis", function() {
var username=$("#username").val();
var password=$("#password").val();
var re_password=$("#re-password").val();
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
    $('#regis').css('display', 'none');
    $('#re-regis').css('display', 'none');
    $('#re-password').css('display', 'none');
    $('#login').css('display', 'block');
      alert('Complete', 'Registration!');
  }else{
      alert('Have User already', 'Not Registration!');
  }

});
    });
  }else{
  alert('กรอกpasswordกับre password ไม่ตรงกัน', 'แจ้งเตือน!');
  }
}

});

function validateLogin(username,password,re_password) {
  var validate_data=false;
  if(username!='' || password!='' ||re_password!='')
  {
    validate_data=true;
  }
  else{
    notification("กรุณากรอกข้อมูลให้ครบ");
  }
  return validate_data;
}



$(document).on("click", "#login", function() {
var username=$("#username").val();
var password=$("#password").val();
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
$.mobile.changePage("#homepage");
  }else{
    notification("fail username   password");
  }

});
    });
}

});

function notification(msg){
$("#contentalert").empty();
$("#contentalert").html(msg);
$.mobile.changePage("#pagealert");

}
