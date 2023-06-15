
function login()
{
    var uname = document.getElementById("UserName").value;
    var pwd = document.getElementById("password").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(uname =='')
    {
        alert("please enter user name.");
    }
    else if(pwd=='')
    {
        alert("enter the password");
    }
    else if(!filter.test(uname))
    {
        alert("Enter valid email id.");
    }
    else if(pwd.length < 6 || pwd.length > 6)
    {
        alert("Password min and max length is 6.");
    }
    else
    {
        location.assign("http://127.0.0.1:5500/login%20page/welcome.html?UserName=Prakash%40gamil.com&password=123456&remember=on");
          alert('Thank You for Login !!');
        }
}
// Reset Inputfield code.
function clearFunc()
{
    document.getElementById("UserName").value="";
    document.getElementById("password").value="";
}	