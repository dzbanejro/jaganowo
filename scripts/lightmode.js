let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const enableDarkMode = () => {
	document.body.classList.remove('normalmode')
	document.body.classList.add('darkmode');
	document.getElementById("light").style.display = "none"
	document.getElementById("dark").style.display = "initial"
	document.getElementById("bnr1img").src = "images/baner1.png"
	document.getElementById("bnr2img").src = "images/baner2.png"
	document.getElementById("bnr3img").src = "images/baner3.png"
	document.getElementById("bnr4img").src = "images/baner4.png"
	document.getElementById("gearimg").src = "images/gear.png";
	document.getElementById("skullimg").src = "images/skull.png";
	document.getElementById("userimg").src = "images/user.png";
	document.getElementById("cartimg").src = "images/cart2.png";
	document.getElementById("logo").src = "images/logo.png";
	localStorage.setItem('darkMode', 'enabled');
}
const disableDarkMode = () => {
	document.body.classList.remove('darkmode');
	document.body.classList.add('normalmode');
	document.getElementById("bnr1img").src = "images/baner1_white.png";
	document.getElementById("bnr2img").src = "images/baner2_white.png";
	document.getElementById("bnr3img").src = "images/baner3_white.png";
	document.getElementById("bnr4img").src = "images/baner4_white.png";
	document.getElementById("light").style.display = "initial";
	document.getElementById("dark").style.display = "none";
	document.getElementById("gearimg").src = "images/gear_black.png";
	document.getElementById("skullimg").src = "images/skull_black.png";
	document.getElementById("userimg").src = "images/user_black.png";
	document.getElementById("cartimg").src = "images/cart1.png";
	document.getElementById("logo").src = "images/darklogo.png";
	localStorage.setItem('darkMode', null);
}
if (darkMode === 'enabled') {
	enableDarkMode();
}
const whiteImages = () => {
	document.getElementById("bnr1img").src = "images/baner1_white.png";
	document.getElementById("bnr2img").src = "images/baner2_white.png";
	document.getElementById("bnr3img").src = "images/baner3_white.png";
	document.getElementById("bnr4img").src = "images/baner4_white.png";
}
if (document.body.classList == 'normalmode') {
	whiteImages();
	document.getElementById("light").style.display = "initial";
	document.getElementById("dark").style.display = "none";
}
if (document.body.classList == 'darkmode') {
	document.getElementById("light").style.display = "none"
	document.getElementById("dark").style.display = "initial"
}
darkModeToggle.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');
	if (darkMode !== 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
