<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<<<<<<< HEAD:forgot-password.php
    <title>Shelf Loom || Fprgot Password</title>
=======
    <title>Forgot</title>
    <link rel="stylesheet" href="Forgot.css">
>>>>>>> 472d9483905c3c3435a267c84c6c4a95e0be0ac7:Forgot.php
    <style>
        body{
            background-image: url('img/login_background.png'); 
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            overflow-x: hidden;
        }

        .login-form {
            background: rgba(0, 0, 0, 0.8);
            padding: 30px;
            border-radius: 20px;
            height: 400px;
            
        }
    </style>
</head>
<body>

    <?php
        include "header.php";
    ?>

    <div class="container">
        <div class="row  p-5  mt-4 justify-content-center">
            <div class="col-12 col-md-6 col-lg-4 text-white login-form ">
                <h1 class="text-center pb-3">Forgot Pasword</h1>
                <span class="bg-danger text-dark text-center" id="doesnt"></span>
                <form action="" onsubmit="return validateForm()">
                    <div class="form-group">
                        <span class="text-center" id="doesnt"></span>
                        <label for="" >Enter your Email Address</label>
                        <input class="form-control mt-3" placeholder="Enter your Email" type="email" name="" id="email">
                        <span class="error text-danger" id="emailError"></span>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary mt-4 w-100 ">Continue</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>

    <script src="Forgot.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <?php
        include "footer.php";
    ?>

</body>
</html>