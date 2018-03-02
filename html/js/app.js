
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
localStorage.track=field.track;
track=localStorage.track;
}else {
app.dialog.alert('Password Correct','Screen Me');
}
});//each
});//getJSON
}//class user


}//class user

class Feed {
getfeed(){
  var param =data;
  var url = "http://"+hosturl+"/api/feed/getfeed/";
  app.request.json( url,{parameter:param}
  ,function( data ) {
  $.each(data, function(i, field){

  });//each
  });//getJSON
}
}//class feed

getuser();



function getuser(){
if(localStorage.track)
{
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

$$(document).on("click", "#test", function() {
  var text = [{"firstName":"John","lastName":"Doe" },{"firstName":"Anna","lastName":"Smith" }];
  var names = text.map(function(item) {
  return item['firstName'];
});

console.log(names);
mainView.router.navigate("/signup/user/"+names);
});//click sign_up_regis

function adddata(data) {
  var res = data.split(',');
  return res;

}


function home() {

  /*
  $$("#content").html("");
  var content='test';
  $$("#content").append(content);
  */
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
