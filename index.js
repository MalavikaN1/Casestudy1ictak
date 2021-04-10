function validate(callback)
{
    let uname=document.getElementById("user");
    let pwd=document.getElementById("pwd");
    let username="admin";
    let pass="12345";
    if(username===uname.value)
    {   
        if(pass===pwd.value)
        {
        callback();
        }
        else
        {
        pwd.style.borderColor="red";
        alert("Wrong Password");
        return false;
        }
    }
    else
    {
        uname.style.borderColor="red";
        alert("Invalid Username");
        return false;
    }
}
function redirection()
{
 $("#form").attr("action","list.html");

}
