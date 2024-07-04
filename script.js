function validation()
{
    if(document.formfill.username.value=="")
        {
            document.getElementById("result").innerHTML="enter username*";
            return false;
        }
        else  if(document.formfill.email.value=="")
            {
                document.getElementById("result").innerHTML="enter your email*";
                return false;
            }
        else   if(document.formfill.password.value=="")
             {
                 document.getElementById("result").innerHTML="enter your password*";
                return false;
             }
        else if(document.formfill.password.value!==document.formfill.cpassword.value)
              {
                   document.getElementById("result").innerHTML="password doesn't matched*";
                    return false;
              }
                  
}