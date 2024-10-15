<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <style>
        nav ul li a img{
            height: 40px;
            width: 40px;
            border-radius: 50%;
        }

        .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }

        .con {
            width: 250px;
        }

        #signup {
            display: none;
            position: absolute;
        }
    </style>
</head>
<body id="body">
    <header class="text-white">
        <div class="row bg-dark m-0 pt-2 align-items-center">
            <div class="col d-flex">
                <h4>Librarian panel</h4>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="col d-flex justify-content-end">
                <nav>
                    <ul class="inline">
                        <li class="list-inline-item"><a class="text-white text-decoration-none" href="#"><i class="fa fa-bell mr-3"></i></a></li>
                        <li class="list-inline-item"><a id="prof" class="text-white text-decoration-none" href="#"><img src="img/use.jpg"  class="mr-2" alt="">Librarian Name</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <!-- Dropdown Content -->
        <div class="justify-content-end d-flex text-right">
            <div class="align-items-center bg-dark p-2 border" id="signup">
                <div class="text-center text-white">
                    <img src="img/use.jpg" class="bg-dark m-2" style="width: 40px; border-radius: 50%;" alt="">
                    <h4>Name - Librarian</h4>
                </div>
                <div class="">
                    <button type="button" class="btn btn-primary px-3 mx-2">Profile</button>
                    <button type="button" class="btn btn-primary mx-2">Sign Out</button>
                </div>
            </div>
        </div>
    </header>
    <?php
        include "dash_site_panel.php";
    ?>
    <script src="script.js"></script>
</body>
</html>
