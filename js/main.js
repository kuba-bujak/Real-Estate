//	MENU

const menuBtn = document.querySelector('.menu-btn');
const navBarLinks = document.getElementsByClassName('navigation')[0]
let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		menuOpen = false;
	}
	navBarLinks.classList.toggle('active');
})