<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Details</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<?php
        include "dash_header.php";
    ?>
<div class="body-nav d-flex ">
    <div class="nav-bar">
        <?php
                include "dash_site_panel.php";
        ?>
    </div>
    <div class="form">
        <div class="container-fluid fw-bold ">
            <div class="text-center border-bottom border-danger border-4">
                <h2 class="p-3">Update Details</h2>
            </div>

            <div class="row m-4">
                <div class="col-md-4 text-center">
                    <div class="m-4">
                        <img class="rounded-circle" style="height: 200px; width: 200px;" src="img/use.jpg" alt="">
                    </div>
                    <div class="m-4">
                        <input type="file" class="form-control" placeholder="Choose file">
                    </div>
                    <div class="m-4">
                        <label for="">Membership ID</label>
                        <input type="text" class="form-control">
                    </div>
                </div>

                <div class="col-md-8 p-4">
                    <form action="" class="mx-4 px-4">
                        <div class="row">
                            <div class="col-lg-6 col-sm-6 form-group">
                                <label for="">First Name</label>
                                <input class="form-control" type="text" name="">
                            </div>
                        
                            <div class="col form-group">
                                <label for="">Last Name</label>
                                <input class="form-control" type="text" name="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-sm-6 my-3 form-group">
                                <label for="">Email</label>
                                <input class="form-control" type="email" name="">
                            </div>
                        
                            <div class="col my-3 form-group">
                                <label for="">Phone</label>
                                <input class="form-control" type="text" name="">
                            </div>
                        </div>
                        <div class="form-group my-3">
                            <label for="">Address</label>
                            <textarea class="form-control" name="" rows="3"></textarea>
                        </div>
                        <div class="row">
                            <div class="col my-3 form-group">
                                <label for="">NIC Number</label>
                                <input class="form-control" type="text" name="">
                            </div>
                        
                            <div class="col-lg-6 col-sm-6 my-3 form-group">
                                <label for="">Date Of Birth</label>
                                <input class="form-control" type="date" name="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-sm-6 my-3 form-group">
                                <label for="">District</label>
                                <input class="form-control" type="text" name="">
                            </div>
                        
                            <div class="col my-3 form-group">
                                <label for="">City</label>
                                <input class="form-control" type="text" name="">
                            </div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-danger mx-4 mt-4">Reset Password</button>    
                            <button class="btn btn-primary mt-4 px-4">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
