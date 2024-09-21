function staffLogin() {

    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    document.getElementById('usernameError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    if (username === '') {
        document.getElementById('usernameError').innerText = 'Username is required.';
    }else if(password === '') {
        document.getElementById('passwordError').innerText = 'Password is required.';
    } else{
        var form = new FormData();
        form.append("username",username);
        form.append("password",password);

        var req = new XMLHttpRequest();
        req.onreadystatechange = function(){
            if(req.readyState == 4 && req.status == 200){
                var resp = req.responseText;

                if(resp.trim() === "success"){
                    alert("success");
                    //window.location();
                
                }else{
                    document.getElementById("errormsg").innerHTML = resp;
                    document.getElementById("errormsgdiv").classList.remove("d-none");
                }
            }
        }

        req.open("POST","staff-login-process.php",true);
        req.send(form);
    }   
}

function memberLogin() {

    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var rememberMe = document.getElementById("rememberme");

    document.getElementById('usernameError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    if (username === '') {
        document.getElementById('usernameError').innerText = 'Username is required.';
    }else if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required.';
    }else{
        var form = new FormData();
        form.append("username",username);
        form.append("password",password);
        form.append("rememberme", rememberMe.checked);
    
        var req = new XMLHttpRequest();
        req.onreadystatechange = function(){
            if(req.readyState == 4 && req.status == 200){
                var resp = req.responseText;
                if(resp.trim() === "success"){
                    alert("success");
                    //window.location = "#";
                }else{
                    document.getElementById("errormsg").innerHTML = resp;
                    document.getElementById("errormsgdiv").classList.remove("d-none");
                }
            }
        }
    
        req.open("POST","member-login-process.php",true);
        req.send(form);
    }   
}

function forgotPassword(){
    var email = document.getElementById('email').value;
    var req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200){
         
            var resp = req.responseText;
            alert(resp);
        }
    }
    req.open("GET", "forgot-password-process.php?email="+email,true);
    req.send();

}

function resetPassword(){ 

    var pw = document.getElementById('pw').value.trim();
    var pwError = document.getElementById('pwError');

    var cpw = document.getElementById('cpw').value.trim();
    var cpwError = document.getElementById('cpwError');

    pwError.innerText = '';
    cpwError.innerText = '';

    if (pw === '') {
        pwError.innerText = 'Password is required.';
    } else if (cpw === '') {
        cpwError.innerText = 'Password confirmation is required.';
    } else if (pw !== cpw) {
        pwError.innerText = 'Passwords do not match.';
    } else {
        var pw = document.getElementById("pw").value; 
        var cpw = document.getElementById("cpw").value; 
        var vcode = document.getElementById("vcode").innerHTML; 
       
        var form = new FormData(); 
        form.append("pw",pw); 
        form.append("cpw",cpw); 
        form.append("vcode",vcode); 

        var req = new XMLHttpRequest(); 
        req.onreadystatechange = function(){ 
            if(req.readyState == 4 && req.status == 200){ 
                var resp = req.responseText; 
                alert(resp); 
                window.location="member-login.php";
            } 
        } 
        req.open("POST","reset-password-process.php",true); 
        req.send(form); 
    }
  } 


function register() {
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");

    btn1.addEventListener('click', function() {
        var memId = document.getElementById("membershipID").value;
        var nic = document.getElementById("NICNumber").value;

        if (memId === "" || nic === "") {
            if (memId === "") {
                document.getElementById("memerror").innerText = "Please enter Membership ID";
            } else {
                document.getElementById("memerror").innerText = "";
            }
    
            if (nic === "") {
                document.getElementById("nicnumerror").innerText = "Please enter NIC Number";
            } else {
                document.getElementById("nicnumerror").innerText = "";
            }
    
            
        } else{
            document.getElementById("Box1").classList.add("d-none");
            document.getElementById("Box2").classList.remove("d-none");
            
        }
    });

    btn2.addEventListener('click', function() {
        var address = document.getElementById("address").value;
        var phoneNumber = document.getElementById("phoneNumber").value;

        if (address === "" || phoneNumber === "") {
                    if (address === "") {
                        document.getElementById("Addresserror").innerText = "Please enter Address";
                    } else {
                        document.getElementById("Addresserror").innerText = "";
                    }
            
                    if (phoneNumber === "") {
                        document.getElementById("Pnumerror").innerText = "Please enter Phone Number";
                    } else {
                        document.getElementById("Pnumerror").innerText = "";
                    }
            
                    
                } else{
                    document.getElementById("Box2").classList.add("d-none");
                    document.getElementById("Box3").classList.remove("d-none");
                    
                }

    });

    btn3.addEventListener('click', function() {
        var email = document.getElementById("email").value;
        

                if (email === "") {
                    if (email === "") {
                        document.getElementById("Emailerror").innerText = "Please enter a valid email address";
                    } else {
                        document.getElementById("Emailerror").innerText = "";
                    }
            
                   
                } else{
                    document.getElementById("Box3").classList.add("d-none");
                    document.getElementById("Box4").classList.remove("d-none");
                  
                }

    });
}

// function RegisterBox(){
//     var Fname = document.getElementById("Fname").value;
//     var Lname = document.getElementById("Lname").value;
//     var Pword = document.getElementById("Pword").value;
//     var Cpword = document.getElementById("Cpword").value;

//     if (Fname === "" || Lname === "" || Pword === "" || Cpword === "") {
//         if (Fname === "") {
//             document.getElementById("Ferror").innerText = "First name is required";
//         } else {
//             document.getElementById("Ferror").innerText = "";
//         }

//         if (Lname === "") {
//             document.getElementById("Lerror").innerText = "Last name is required";
//         } else {
//             document.getElementById("Lerror").innerText = "";
//         }

//         if (Pword === "") {
//             document.getElementById("Perror").innerText = "Password is required";
//         } else if(Pword.length < 6) {
//             document.getElementById("Perror").innerText = "Password must be at least 6 characters.";
//         } else{
//             document.getElementById("Perror").innerText = "";
//         }

//         if (Cpword === "") {
//             document.getElementById("Cperror").innerText = "Password confirmation is required";
//         } else if(Pword !== Cpword) {
//             document.getElementById("Cperror").innerText = "Passwords do not match";
//         } else {
//             document.getElementById("Cperror").innerText = "";
//         }

//         return false; 
//     } else{
        
//     }

//     // If the form is valid, allow submission
//     return true;
// }

//  //registation End part