
//import User from './user.js';
// Dom7





class User {

login(data) {
  var param =data;
  var url = "http://"+hosturl+"/api/user/login/";
  app.request.json( url,{parameter:param}
  ,function( data ) {
  $.each(data, function(i, field){
if (field.status=="success") {
mainView.router.navigate("/");
var content=field.track;
$$("#content").append(content);
}else {
app.dialog.alert('Password Correct','Screen Me');
}
  });
  });
}

sign_up(){

}

sign_up_regis(){
var email = $$('#email').val();
var password = $$('#password').val();
var re_password = $$('#re_password').val();
if(password==re_password){
  var url = "http://"+hosturl+"/screen/api/regisuser.php?jsoncallback=?";
  $$.getJSON( url, {
      email:email,
      password:password,
      re_password:re_password,}
,function( data ) {
  $$.each(data, function(i, field){
  var msg=field.msg;
  if(msg=="no"){
  myApp.alert("Have User", 'Screen Me!');
  }
  else{
login();
  }
  });
  });
}else{
myApp.alert('Password Not Match Re-Password', 'Screen Me!');
}
}



checklogin(){
alert("test");
}//check login
}//class user



$$(document).on("click", "#about", function() {
  console.log("test");
  var ojb_user=new User();
  ojb_user.checklogin();

});//click about
getuser();



function getuser(){
if(localStorage.user_id&&localStorage.track)
{
user_id = localStorage.user_id;
track=localStorage.track;
home();
//localStorage.clear();
//alert(user_id);
}
else
{
//  var ojb_user=new User();
//  ojb_user.login();
mainView.router.navigate("/login/");
}
}



$$(document).on("click", "#signup", function() {
mainView.router.navigate("/signup/");
});

$$(document).on("click", "#resignup", function() {
  mainView.router.navigate("/login/");

});

$$(document).on("click", "#signin", function() {
var formData = app.form.convertToData('#my-form');
var ojb_user=new User();
ojb_user.login(formData);

});




$$(document).on("click", "#sign_up_regis", function() {
  var ojb_user=new User();
  ojb_user.sign_up_regis();

});//click sign_up_regis

function home() {
  $$("#content").html("");
  var content='test';
  $$("#content").append(content);
}

$$(document).on("click", "#sign_in", function() {
  var email = $$('#email').val();
  var password = $$('#password').val();
    var url = "http://"+hosturl+"/screen/api/loginuser.php?jsoncallback=?";
    $$.getJSON( url, {
        email:email,
        password:password}
  ,function( data ) {
    $$.each(data, function(i, field){
    var msg=field.msg;
    if(msg=="no"){
    myApp.alert("User Or Password Worng", 'Screen Me!');
    }
    else{
      user_id=field.user_id;
      track=field.track;
      localStorage.user_id=field.user_id;
      localStorage.track=field.track;
      $$("#menu").css('display', 'block');
      home();
    }
    });
    });

});//click sign_in
