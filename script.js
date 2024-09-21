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
        document.getElementById("Box1").classList.add("d-none");
        document.getElementById("Box2").classList.remove("d-none");
        return false;
    }

    // If the form is valid, allow submission
    return true;
}



function addressBox() {
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
        document.getElementById("Box2").classList.add("d-none");
        document.getElementById("Box3").classList.remove("d-none");
        return false;
    }

    // If the form is valid, allow submission
    return true;
}

//otp
// Function to validate OTP input fields
function validateOTP() {
    let otp = '';
    for (let i = 1; i <= 6; i++) {
        const value = document.getElementById('otp' + i).value;
        if (value === '') {
            alert('Please enter the full OTP.');
            return false;
        }
        otp += value;
    }
    
    // If OTP is valid (6 digits), you can proceed with your logic here
    alert("OTP entered: " + otp); // You can replace this with your form submission logic
    return true;
}

// Timer countdown function
let countdownTime = 120; // OTP expires in 1m 52s (112 seconds)
let timerInterval = setInterval(function () {
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;

    if (seconds < 10) seconds = '0' + seconds;
    document.getElementById('timer').textContent = `${minutes}m : ${seconds}s`;

    if (countdownTime === 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = 'OTP expired';
        alert('Your OTP has expired, please request a new one.');
    }
    countdownTime--;
}, 1000);

// Function to simulate OTP resend
document.getElementById('resend-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the link from doing anything

    // Reset the timer
    countdownTime = 120;
    clearInterval(timerInterval); // Stop the current timer
    timerInterval = setInterval(function () {
        let minutes = Math.floor(countdownTime / 60);
        let seconds = countdownTime % 60;

        if (seconds < 10) seconds = '0' + seconds;
        document.getElementById('timer').textContent = `${minutes}m : ${seconds}s`;

        if (countdownTime === 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = 'OTP expired';
            alert('Your OTP has expired, please request a new one.');
        }
        countdownTime--;
    }, 1000);

    // Optionally, you can show a message that a new OTP has been sent
    alert("A new OTP has been sent to your mobile.");
});

// Function to change to the next step after OTP validation
function change() {
    if (validateOTP()) {
        // Hide OTP box and show the next step (assuming Box4 is your next step)
        document.getElementById("Box3").classList.add("d-none");
        document.getElementById("Box4").classList.remove("d-none");
    }
}

//otp

function EmailBox() {
    var Email = document.getElementById("Email").value;
    var Rece = document.getElementById("Rece").value;

    if (Email === "" || Rece === "") {
        if (Email === "") {
            document.getElementById("Emailerror").innerText = "Please enter a valid email address";
        } else {
            document.getElementById("Emailerror").innerText = "";
        }

        if (Rece === "") {
            document.getElementById("Receerror").innerText = "Please Upload the file";
        } else {
            document.getElementById("Receerror").innerText = "";
        }

        return false; // Prevents form submission
    } else{
        document.getElementById("Box4").classList.add("d-none");
        document.getElementById("Box5").classList.remove("d-none");
        return false;
    }

    // If the form is valid, allow submission
    return true;
}

function RegisterBox(){
    var Fname = document.getElementById("Fname").value;
    var Lname = document.getElementById("Lname").value;
    var Pword = document.getElementById("Pword").value;
    var Cpword = document.getElementById("Cpword").value;

    if (Fname === "" || Lname === "" || Pword === "" || Cpword === "") {
        if (Fname === "") {
            document.getElementById("Ferror").innerText = "First name is required";
        } else {
            document.getElementById("Ferror").innerText = "";
        }

        if (Lname === "") {
            document.getElementById("Lerror").innerText = "Last name is required";
        } else {
            document.getElementById("Lerror").innerText = "";
        }

        if (Pword === "") {
            document.getElementById("Perror").innerText = "Password is required";
        } else if(Pword.length < 6) {
            document.getElementById("Perror").innerText = "Password must be at least 6 characters.";
        } else{
            document.getElementById("Perror").innerText = "";
        }

        if (Cpword === "") {
            document.getElementById("Cperror").innerText = "Password confirmation is required";
        } else if(Pword !== Cpword) {
            document.getElementById("Cperror").innerText = "Passwords do not match";
        } else {
            document.getElementById("Cperror").innerText = "";
        }

        return false; 
    } else{
        
    }

    // If the form is valid, allow submission
    return true;
}

//  //registation End part