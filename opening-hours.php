<?php
    // Define variables for opening hours
    $weekdays_opening_hours = "8.00 am - 6.00 pm";
    $weekends_opening_hours = "8.00 am - 6.00 pm";
    $weekdays_lending_hours = "8.00 am - 6.00 pm";
    $weekends_lending_hours = "8.00 am - 6.00 pm";
    $weekdays_returning_hours = "8.00 am - 4.00 pm";
    $weekends_returning_hours = "8.00 am - 1.00 pm";
    $image_path = "img\opening hours.png"; 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Opening Hours</title>
    <!-- Bootstrap CSS -->
    <link href="bootstrap.css" rel="stylesheet">
    <style>
        body{
            overflow-x:hidden;
        }
        .header {
            position: relative;
            text-align: center;
            margin-bottom: 30px;
        }
        .header img {
            width: 100%;
            height: auto;
        }
        .header h1 {
            position: absolute;
            bottom: 10px;
            right: 20px;
            font-size: 2em;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .table th {
            background-color: #3f5367;
            color: white;
        }
        .table td {
            background-color: #e5e7eb;
        }
        .container {
            padding-top: 20px;
            padding-bottom: 20px;
        }
    </style>
</head>
<body>

<?php include "header.php"; ?>
    <div class="header">
        <img src="<?php echo $image_path; ?>" alt="Clock Image" class="img-fluid"> <!-- PHP to dynamically insert the image path -->
        <h1>Opening Hours</h1>
    </div>
    <div class="container">
    <div class="table-responsive">
        <table class="table table-bordered text-center">
            <thead>
                <tr>
                    <th>Time</th>
                    <th>weekdays</th>
                    <th>weekends</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="#">Opening Hours</a></td>
                    <td><?php echo $weekdays_opening_hours; ?></td> <!-- PHP to dynamically insert weekdays opening hours -->
                    <td><?php echo $weekends_opening_hours; ?></td> <!-- PHP to dynamically insert weekends opening hours -->
                </tr>
            </tbody>
        </table>

        <table class="table table-bordered text-center">
            <thead>
                <tr>
                    <th>Book Issuing</th>
                    <th>weekdays</th>
                    <th>weekends</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="#">Lending Books</a></td>
                    <td><?php echo $weekdays_lending_hours; ?></td> <!-- PHP to dynamically insert weekdays lending hours -->
                    <td><?php echo $weekends_lending_hours; ?></td> <!-- PHP to dynamically insert weekends lending hours -->
                </tr>
            </tbody>
        </table>

        <table class="table table-bordered text-center">
            <thead>
                <tr>
                    <th>Returning Books</th>
                    <th>weekdays</th>
                    <th>weekends</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td><?php echo $weekdays_returning_hours; ?></td> <!-- PHP to dynamically insert weekdays returning hours -->
                    <td><?php echo $weekends_returning_hours; ?></td> <!-- PHP to dynamically insert weekends returning hours -->
                </tr>
            </tbody>
        </table>
    </div>
</div>
<?php include "footer.php";?>

</body>
</html>

