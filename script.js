function seterror(id, error){
element = document.getElementById(id);
element.getElementsByClassName('error')[0].innerHTML = error;

}

function formValidation(){
var returnvalue = true;
    var name = document.forms["myForm"]["name"].value;
    if(name.length<5 || name.length==0){
        seterror("name", "*Name is too short or empty*");
                    returnvalue = false;
    }

    var password = document.forms["myForm"]["newpassword"].value;
    if(password.length<8){
        seterror("pass", "*Password length should be more than 8 character*");
                    returnvalue = false;
    }

    //FOR USER NAME VALIDATION
    /*var username = document.forms["myForm"]["username"].value;
    if(username){
        seterror("uname", "*User Name Already Taken*");
                    returnvalue = false;
    }
    */
    return returnvalue;
}


// TESTING THE SUMIT FUNCTION
/*function auth(){
    if(formValidation() = true){
        window.location.assign("file:///C:/Users/amanr/OneDrive/Desktop/project/profilepage.html");
        alert("Add details carefully");
    }
    else
    {
        alert("Please complete the detail");
        return;
    }
}*/

function redirectToPage3() { 
    window.location.href = "file:///C:/Users/amanr/OneDrive/Desktop/project/thirdpage.html"; 
  } 
   
function redirectToPage4() { 
    window.location.href = "file:///C:/Users/amanr/OneDrive/Desktop/project/4th.html"; 
  } 


  