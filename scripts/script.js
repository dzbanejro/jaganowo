let trollMode = localStorage.getItem('trollMode');
const trollModeToggle = document.querySelector('#troll-mode-toggle');
var first_click = true;
const rgb = "trollrgb infinite 0.1s";
const enableTrollMode = () => {
	document.body.classList.add('trollmode');
	document.getElementById("navbar").style.animation = rgb;
	document.getElementById("nav-container").style.animation = rgb;
	if (document.getElementById("nav-content")) {
		document.getElementById("nav-content").style.animation = rgb;
	}
	if (document.getElementById("nav-troll")) {
		document.getElementById("nav-troll").style.animation = rgb;
	}
	localStorage.setItem('trollMode', 'enabled');
}
const disableTrollMode = () => {
	document.body.classList.remove('trollmode');

	document.getElementById("navbar").style.animation = "none";
	document.getElementById("nav-container").style.animation = "none";
	if (document.getElementById("nav-content")) {
		document.getElementById("nav-content").style.animation = "none";
	}
	if (document.getElementById("nav-troll")) {
		document.getElementById("nav-troll").style.animation = "none";
	}
	
	localStorage.setItem('trollMode', null);
}

const starttroll = () => {
	if (document.getElementById("nav-content")) {
		document.getElementById("nav-content").setAttribute('id', 'nav-troll');
	}
	document.getElementById("troll-mode-toggle").style.display = "inherit";
	document.getElementById("troll-text").style.display = "inherit";
	document.getElementById("dark-mode-toggle").style.display = "none";
	document.getElementById("mode-text").style.display = "none";
	document.getElementById("actual-mode").style.display = "none";
	document.getElementById("dark").style.display = "none";
	document.getElementById("light").style.display = "none";
	document.getElementById("troll").style.marginTop = "70px";
	document.getElementById("troll").innerHTML = "Nie to miałem na myśli.";
	first_click = false;
}
const realendtroll = () => {
	if (document.getElementById("nav-troll")) {
		document.getElementById("nav-troll").setAttribute('id', 'nav-content');
	}
	document.getElementById("troll-mode-toggle").style.display = "none";
		document.getElementById("troll-text").style.display = "none";
		document.getElementById("dark-mode-toggle").style.display = "unset";
		document.getElementById("mode-text").style.display = "inherit";
		document.getElementById("actual-mode").style.display = "inherit";
		if (document.body.classList == 'normalmode') {
			document.getElementById("light").style.display = "initial";
			document.getElementById("dark").style.display = "none";
		}
		if (document.body.classList == 'darkmode') {
			document.getElementById("light").style.display = "none";
			document.getElementById("dark").style.display = "initial";
		}
		document.getElementById("troll").style.marginTop = "50px";
		document.getElementById("troll").innerHTML = "Nie możesz się zdecydować?";
		first_click = true;
}

function troll() {
	if (first_click) {
		starttroll();
	} else {
		if (document.body.classList == 'darkmode') {
			realendtroll();
		}
		if (document.body.classList == 'normalmode') {
			realendtroll();
		}
	}
}
if (document.body.classList == 'trollmode darkmode') {
	document.getElementById("nav-troll");
}



if (trollMode === 'enabled') {
	enableTrollMode();
}

if (document.getElementById("nav-content").innerHTML) {
	document.getElementById("nav-content").setAttribute('id', 'nav-troll');
}

trollModeToggle.addEventListener('click', () => {
	trollMode = localStorage.getItem('trollMode');
	if (trollMode !== 'enabled') {
		enableTrollMode();
	} else {
		disableTrollMode();
	}
});

if (document.getElementById("nav-troll")) {
	starttroll();
}