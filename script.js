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
    } else if (pw.length < 6) {
        pwError.innerText = 'Password must be at least 6 characters.';
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
        alert(vcode);

        var req = new XMLHttpRequest(); 
        req.onreadystatechange = function(){ 
            if(req.readyState == 4 && req.status == 200){ 
                var resp = req.responseText; 
                alert(resp); 
            } 
        } 
        req.open("POST","reset-password-process.php",true); 
        req.send(form); 
    }
  } 
