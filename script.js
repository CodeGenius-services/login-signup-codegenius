function signin(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "") {
    alert("Please Enter Your Username");
  }
  else if (password == "") {
    alert("Please Enter Your Password");
  }
  else {
    var url = 'dashboard.html';
    if(username="abubakar" && password=="123"){
      window.open(url);
    }
    else{
      alert("Incorrect Username or Password");
    }
  }
}

function signup(){
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confpassword = document.getElementById("confpassword").value;
  if(fullname==""){
    alert("Please Enter Your Full Name");
  }
  else if(email==""){
    alert("Please Enter Your Email");
  }
  else if(username==""){
    alert("Please Enter Your Username");
  }
  else if(password==""){
    alert("Please Enter Your Password");
  }
  else if(confpassword==""){
    alert("Confirm Your Password");
  }
  else if(password != confpassword){
    alert("Password doesn't matched");
  }
  else{
    alert("You are Registered ");
  }
}