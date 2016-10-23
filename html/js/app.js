$(document).on("click", "#regis", function() {
$('#re-password-div').css('display', 'block');
  $('#re-regis').css('display', 'block');
$('#login').css('display', 'none');
$('#regis').css('display', 'none');

var username=$("#username").val();
var password=$("#password").val();
var re_password=$("#re-password").val();
//var data_validate=validateLogin(username,password,re_password);
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
    $('#re-password-div').css('display', 'none');
    $('#login').css('display', 'block');
      Materialize.toast('Complete', 'Registration!', 4000);
  }else{
      Materialize.toast('Have User already', 4000);
  }

});
    });
  }else{
  Materialize.toast('กรอกpasswordกับre password ไม่ตรงกัน', 4000);
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
    Materialize.toast("กรุณากรอกข้อมูลให้ครบ", 4000);
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
Materialize.toast("yes login", 4000);
  $("#view").empty();
$('#menubar').css('display', 'block');  
  }else{
    Materialize.toast("fail username   password", 4000);
  }

});
    });
}

});
