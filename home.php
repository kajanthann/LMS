<!DOCTYPE html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale = 1.0">
    <link rel="stylesheet" href="home.css" />

    <title>Home</title>
</head>


<body>
    <?php
        include "header.php";
    ?>
    
    <section class="hero">
        <h1>Welcome to</h1>
    </section>

    <div class="our-goal-section">
        <h2>Our Goal</h2>
        <div class="our-goal-images">
            <div class="text-container">
                <p>At [Library Name], our goal is to create a user-friendly and efficient platform that simplifies library management and enhances the experience of accessing our vast collection of resources. Our system is designed to streamline the cataloging, borrowing, and returning of books, making it easier for library staff to manage inventory and for patrons to find the materials they need.</p>
            </div>
            <img src="img/home -goal.jpg" alt="Library Image 1" class="image-right">
        </div>
        <div class="our-goal-images">
            <img src="img/home - goal2.jpg" alt="Library Image 2">
            <div class="text-container">
                <p>Whether you're searching for the latest bestseller, researching a topic, or simply exploring new genres, our library management system ensures a seamless and enjoyable experience for all users. Join us in fostering a love for reading and learning in our community.</p>
            </div>
        </div>
    </div>

    <section class="last-news-update">
    <h2>Latest News and Updates</h2>
    <div class="news-container">
        <div class="news-item">
            <div class="news-date">NOV 16</div>
            <img src="img/home -goal.jpg" alt="News Image 1">
            <p>Text here</p>
        </div>
        <div class="news-item">
            <div class="news-date">NOV 16</div>
            <img src="img/home -goal.jpg" alt="News Image 2">
            <p>Text here</p>
        </div>
        <div class="news-item">
            <div class="news-date">NOV 16</div>
            <img src="img/home -goal.jpg" alt="News Image 3">
            <p>Text here</p>
        </div>
    </div>
</section>

    
    <?php
        include "footer.php";
    ?>
</body>

</html>