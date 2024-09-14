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
    }

    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required.';
    } 

    var form = new FormData();
    form.append("username",username);
    form.append("password",password);

    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200){
            var resp = req.responseText;
            if(resp.trim() === "success"){
                window.location = "#";
            }else{
                alert(resp);
            }
        }
    }

    req.open("POST","member-login-process.php",true);
    req.send(form);
}

