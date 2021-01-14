//Navigation Header//
window.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})

///Hamburger Menu//
const navSlide = () => {
	const hamburger = document.querySelector('.hamburger');
	const nav = document.querySelector('nav ul');
	const navLinks = document.querySelectorAll('ul li');

	hamburger.addEventListener('click', () => {

		nav.classList.toggle('nav-collapsed');

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
        });
        
		hamburger.classList.toggle('toggle');
    });
    
}

navSlide();

/* Video */

document.getElementById('video').play();