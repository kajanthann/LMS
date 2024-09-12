<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="userLogin.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
</head>
<body>

    <?php
        include "header.php";
    ?>

    <div class="container-fluid login-container">
        <h1 class="text-white m-3">Hi! Welcome Back</h1>
        <div class="row p-1 my-3 justify-content-center align-items-center">
            <div class="col-md-6 text-white login-form">
                <h1 class="text-center">Log In</h1>

             <form action="" id="loginForm" onsubmit="return validateForm()">

                <div class="form-group">
                    <label for="username">User Name</label>
                    <input class="form-control mt-2" placeholder="eg:STU2220009" type="text" name="" id="username">
                    <span class="error text-danger" id="usernameError"></span>
                    
                </div>
                
                <div class="form-group mt-3">
                    <label for="password">Password</label>
                    <input class="form-control mt-2" placeholder="Enter your password" type="text" name="" id="password">
                    <span class="error text-danger" id="passwordError"></span>
                    
                </div>

                <div class="row mt-2">
                    <div class="col">
                        <input type="checkbox" name="Remember me" id=""rememberme>
                        <label for="rememberme">Remember me</label>
                    </div>
                    <div class="col d-flex justify-content-end">
                        <a href="Forgot.php" class="text-decoration-none forgot-password">Forgot Password?</a>
                    </div>
                </div>
             
                
                <button type="submit" class="btn btn-primary w-100 my-4">Login</button>

                <div class="row">
                    <div class="col">
                        <p>Not registered yet?</p>
                    </div>
                    <div class="col d-flex justify-content-end">
                        <a href="" class="text-decoration-none create-account">Creat an account</a>
                    </div>
                </div>
             </form>
            </div>
            
        </div>
    </div>

    <script src="Login.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <?php
        include "footer.php";
    ?>
</body>
</html>