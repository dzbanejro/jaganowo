let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const enableDarkMode = () => {
	document.body.classList.remove('normalmode')
	document.body.classList.add('darkmode');
	if (document.body.classList.contains = 'trollmode') {
		document.body.classList.remove('trollmode');
	}
	document.getElementById("light").style.display = "none"
	document.getElementById("dark").style.display = "initial"
	document.getElementById("bnr1img").src = "baner1.png"
	document.getElementById("bnr2img").src = "baner2.png"
	document.getElementById("bnr3img").src = "baner3.png"
	document.getElementById("bnr4img").src = "baner4.png"
	document.getElementById("gearimg").src = "gear.png";
	document.getElementById("skullimg").src = "skull.png";
	document.getElementById("userimg").src = "user.png";
	document.getElementById("cartimg").src = "cart2.png";
	document.getElementById("logo").src = "logo.png";
	localStorage.setItem('darkMode', 'enabled');
}
const disableDarkMode = () => {
	document.body.classList.remove('darkmode');
	document.body.classList.add('normalmode');
	if (document.body.classList.contains = 'trollmode') {
		document.body.classList.remove('trollmode');
	}
	document.getElementById("bnr1img").src = "baner1_white.png";
	document.getElementById("bnr2img").src = "baner2_white.png";
	document.getElementById("bnr3img").src = "baner3_white.png";
	document.getElementById("bnr4img").src = "baner4_white.png";
	document.getElementById("light").style.display = "initial";
	document.getElementById("dark").style.display = "none";
	document.getElementById("gearimg").src = "gear_black.png";
	document.getElementById("skullimg").src = "skull_black.png";
	document.getElementById("userimg").src = "user_black.png";
	
	document.getElementById("cartimg").src = "cart1.png";
	document.getElementById("logo").src = "darklogo.png";
	localStorage.setItem('darkMode', null);
}
if (darkMode === 'enabled') {
	enableDarkMode();
}


const whiteImages = () => {
	document.getElementById("bnr1img").src = "baner1_white.png";
	document.getElementById("bnr2img").src = "baner2_white.png";
	document.getElementById("bnr3img").src = "baner3_white.png";
	document.getElementById("bnr4img").src = "baner4_white.png";
}

if (document.body.classList == 'normalmode') {
	whiteImages();
}



 

darkModeToggle.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');
	if (darkMode !== 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});