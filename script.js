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

//register start 
function box1() {
    var memId = document.getElementById("membershipID").value;
    var nic = document.getElementById("NICNumber").value;
    var memIdPattern = /^U-\d{4}-\d{4}$/; // Adjust this pattern to match your required ID format

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

    } else if (!memIdPattern.test(memId)) {
        document.getElementById("memerror").innerText = "Invalid Membership ID format. Expected format: U-XXXX-XXXX";
    } else {
        document.getElementById("memerror").innerText = "";
        document.getElementById("Box1").classList.add("d-none");
        document.getElementById("Box2").classList.remove("d-none");
    }
}

function box2(){
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
}

function box3(){
    
    var email = document.getElementById("email").value;
    

    if (email === "") {
        if (email === "") {
            document.getElementById("Emailerror").innerText = "Please enter email address";
        } else {
            document.getElementById("Emailerror").innerText = "";
        }
        
    } else{
      
        var req = new XMLHttpRequest();   
        req.onreadystatechange = function(){
           
            if(req.readyState == 4 && req.status == 200){
             
                var resp = req.responseText;
                alert(resp);
                if(resp === "Check the email for otp"){
                    document.getElementById("Box3").classList.add("d-none");
                    document.getElementById("Box4").classList.remove("d-none");
                }
               
            }
        }

        req.open("GET", "generate-otp.php?email="+email,true);
        req.send();

        
    }
}

function box4(){
    var otp1 = document.getElementById("otp1").value;
    var otp2 = document.getElementById("otp2").value;
    var otp3 = document.getElementById("otp3").value;
    var otp4 = document.getElementById("otp4").value;
    var otp5 = document.getElementById("otp5").value;
    var otp6 = document.getElementById("otp6").value;

    var userotp = otp1+otp2+otp3+otp4+otp5+otp6;

    var form = new FormData(); 
    form.append("userotp",userotp);

    var req = new XMLHttpRequest(); 
    req.onreadystatechange = function(){ 
        if(req.readyState == 4 && req.status == 200){ 
            var resp = req.responseText; 
            if(resp ==='success'){
                alert(resp);
                document.getElementById("Box4").classList.add("d-none");
                document.getElementById("Box5").classList.remove("d-none");
            }
        } 
    } 
    req.open("POST","otp-varification.php",true); 
    req.send(form); 

}

function register(){

    var memId = document.getElementById("membershipID").value;
    var nic = document.getElementById("NICNumber").value;
    var address = document.getElementById("address").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var password = document.getElementById("password").value;


                    var form = new FormData(); 
                    form.append("memID",memId); 
                    form.append("nic",nic); 
                    form.append("address",address); 
                    form.append("phoneNumber",phoneNumber); 
                    form.append("email",email); 
                    form.append("fname",fname); 
                    form.append("lname",lname); 
                    form.append("password",password); 
                  
                    var req = new XMLHttpRequest(); 
                    req.onreadystatechange = function(){ 
                        if(req.readyState == 4 && req.status == 200){ 
                            alert("mm");
                            var resp = req.responseText; 
                            if(resp === "success"){ 
                                alert(resp);
                                
                       
                             } 
                        } 
                    }
                    req.open("POST","register-process.php", true); 
                    req.send(form); 
                }


function back1(){
    document.getElementById("Box2").classList.add("d-none");
    document.getElementById("Box1").classList.remove("d-none");
}
function back2(){
    document.getElementById("Box3").classList.add("d-none");
    document.getElementById("Box2").classList.remove("d-none");
}
function back3(){
    document.getElementById("Box4").classList.add("d-none");
    document.getElementById("Box3").classList.remove("d-none");
}
//register end
