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

  //registation Start part
  
function MemberId() {
    var membershipID = document.getElementById("membershipID").value;
    var nicNumber = document.getElementById("NICNumber").value;

    if (membershipID === "" || nicNumber === "") {
        if (membershipID === "") {
            document.getElementById("memerror").innerText = "Please enter Membership ID";
        } else {
            document.getElementById("memerror").innerText = "";
        }

        if (nicNumber === "") {
            document.getElementById("nicnumerror").innerText = "Please enter NIC Number";
        } else {
            document.getElementById("nicnumerror").innerText = "";
        }

        return false; // Prevents form submission
    } else{
        ShowAddress();
    }

    // If the form is valid, allow submission
    return true;
}


function ShowAddress(){
    document.querySelector('.login-form').innerHTML=`
                    <h5 class="mb-1">Enter <b>Address</b> and <b>Phone Number</b> :</h5>
    
                    <form action="" id="loginForm" onsubmit="return address()">
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label for="Address" class="my-2">Address :</label>
                                <input type="text" class="form-control" id="Address" placeholder="Enter Address">
                                <div id="Addresserror" class="text-danger"></div>
                            </div>
                            <div class="col-md-6">
                                <label for="PhoneNumber" class="my-2">Phone Number :</label>
                                <input type="text" class="form-control" id="PhoneNumber" placeholder="Enter Phone Number">
                                <div id="Pnumerror" class="text-danger"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <button type="button" class="bt" id="backButton">BACK</button> <!-- Back button -->
                            </div>
                            <div class="col d-flex justify-content-end">
                                <button type="submit" class="bt">NEXT</button> <!-- Submit form button -->
                            </div>
                        </div>
                    </form>
                    `;
}
function address() {
    var Address = document.getElementById("Address").value;
    var PhoneNumber = document.getElementById("PhoneNumber").value;

    if (Address === "" || PhoneNumber === "") {
        if (Address === "") {
            document.getElementById("Addresserror").innerText = "Please enter Address";
        } else {
            document.getElementById("Addresserror").innerText = "";
        }

        if (PhoneNumber === "") {
            document.getElementById("Pnumerror").innerText = "Please enter Phone Number";
        } else {
            document.getElementById("Pnumerror").innerText = "";
        }

        return false; // Prevents form submission
    } else{
        ShowOtp();
    }

    // If the form is valid, allow submission
    return true;
}

function ShowOtp(){
    document.querySelector('.login-form').innerHTML=`
                    <h5 class="mb-2">Enter OTP</h5>
                    <p>We have sent an OTP to your mobile number <span class="phone-number">071xxxxxxx</span></p>
                    <p><span class="otp-timer text-warning">OTP expires in <span id="timer">1m : 52s</span></span></p>
    
                    <form action="" id="loginForm" onsubmit="return MemberId()">
                        <div class="otp-inputs d-flex justify-content-between mb-4">
                            <input type="text" maxlength="1" class="form-control text-center otp-box" id="otp1">
                            <input type="text" maxlength="1" class="form-control text-center otp-box" id="otp2">
                            <input type="text" maxlength="1" class="form-control text-center otp-box" id="otp3">
                            <input type="text" maxlength="1" class="form-control text-center otp-box" id="otp4">
                            <input type="text" maxlength="1" class="form-control text-center otp-box" id="otp5">
                            <input type="text" maxlength="1" class="form-control text-center otp-box" id="otp6">
                        </div>

                        <p class="resend-text">Don't receive? <a href="#" class="" id="resend-link">Resend OTP</a></p>

                        <div class="row">
                            <div class="col">
                                <button type="button" class="bt" id="backButton">BACK</button> 
                            </div>
                            <div class="col d-flex justify-content-end">
                                <button type="submit" class="bt">NEXT</button> 
                            </div>
                        </div>
                        
                    </form>
                    `;
}

//  //registation End part