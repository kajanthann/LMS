<header>
        <div class="logo">
            <img src="Logo.jpg" alt="library logo">
        </div>
        <nav>
            <ul id="nav-list">
                <li><a href="">Home</a></li>
                <li><a href="">Opening Hours</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">About</a></li>
                <li><a href="">LMS</a></li>
            </ul>
            <button id="menu-toggle" aria-label="Toggle menu">
                <i class="fas fa-bars"></i>
            </button>
        </nav>
    </header>
    
    <script>
        document.getElementById('menu-toggle').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
});
    </script>