<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Document</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>

    <?php 
        include "header.php";
    ?>


    <div class="container">
        <div class="row justify-content-center my-5 p-1 col-md-12">
            <div class="col-md-6">
                <a class="text-white text-decoration-none" href="userLogin.php">
                <div class="card login-card member-card text-white mt-3">
                    <div class="card-body text-center">
                        <h3 class="card-title mt-5 pt-4">Member/Visitor Login</h3>
                        <div class="decorative-element">
                            <div class="decorative-dot"></div>
                        </div>
                        <p class="card-text mt-5">Login to borrow books and access member services</p>
                    </div>
                </div></a>
            </div>
            
            
            <div class="col-md-6">
                <a class="text-white text-decoration-none" href="StaffLogin.php">
                <div class="card login-card staff-card text-white mt-3">
                    <div class="card-body text-center">
                        <h3 class="card-title mt-5 pt-4">Library Staff Login</h3>
                        <div class="decorative-element">
                            <div class="decorative-dot"></div>
                        </div>
                        <p class="card-text mt-5">Access the library management system</p>
                    </div>
                </div>
            </a>
            </div>
            
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <?php
        include "footer.php";
    ?>
   
</body>
</html>