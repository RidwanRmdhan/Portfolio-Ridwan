// Navbar Fixed
// Menambahkan event listener ketika halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan elemen header
    const header = document.querySelector('header');
    // Menambahkan kelas 'navbar-fixed' ke header
    header.classList.add('navbar-fixed');
});



// Hamburger
const Hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

Hamburger.addEventListener('click', function() {
    Hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden');
})