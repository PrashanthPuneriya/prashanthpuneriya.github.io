const toggleNavbarBtn = document.getElementsByClassName('toggle-navbar-btn')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleNavbarBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
