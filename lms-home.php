<!DOCTYPE html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale = 1.0">
   
    <link rel="stylesheet" href="index.css" />
    <link rel="stylesheet" href="bootstrap.css" />
    <link rel="stylesheet" href="lms-home.css" />

    <title>LMS | Home</title>
</head>

<body>
    <?php
        include "header.php";
    ?>

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 div1">
                <div class="row vh-100 d-flex justify-content-center align-items-center">
                    <div class="col-6 offset-6">
                        <div class="row ">
                            <div class="text-center">
                                <div class="col-12">
                                    <h1 class="mb-5 fw-bold">Library LMS - Institute Name</h1>
                                    <p class="fs-5 mt-5">Register now to access our full range of features and <br> start exploring our vast collection of resources</p>

                                </div>
                                <div class=" mt-5">
                                    <button class="btn btn-dark rounded-5 w-25">Register</button>
                                    <button class="btn btn-secondary ms-5 rounded-5 w-25" >Login</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class= "row mt-2 div2">
            <h1 class="mt-3 ms-4 fw-bold"><span class="span1">Top</span> <span class="span2">Books</span></h1>
            <div class="d-flex row mt-5 mb-5 ms-5 gap-5">

                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
                    </div>
                </div>

                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="row mb-5">
            
            <div class="d-flex justify-content-end col-10 div3">
                <img src="img/quotes.jpg" height="600px" class="rounded-4 me-5 mb-5 mt-3">
                
            </div>
        </div>    
    </div>

    <?php
        include "footer.php";
    ?>

    <script src="bootstrap.bundle.js"></script>
</body>

</html>