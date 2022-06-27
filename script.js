
let trollMode = localStorage.getItem('trollMode'); 

const trollModeToggle = document.querySelector('#troll-mode-toggle');

const enableTrollMode = () => {
  document.body.classList.add('trollmode');
  document.getElementById("entire").style.display = "none"; 
  document.getElementById("trolltext").style.display = "inherit"
  document.getElementById("trolltext").style.animation = "trollrgb infinite 0.1s"
  localStorage.setItem('trollMode', 'enabled');
}

const disableTrollMode = () => {
  document.body.classList.remove('trollmode');
  localStorage.setItem('trollMode', null);

}

function endtroll() {
  
}
 

if (trollMode === 'enabled') {
  enableTrollMode();
}

trollModeToggle.addEventListener('click', () => {
  trollMode = localStorage.getItem('trollMode'); 
  
  if (trollMode !== 'enabled') {
    enableTrollMode(); 
  } else {  
    disableTrollMode(); 
  }
});



var first_click = true;
function troll() {
    if (first_click) {
        document.getElementById("troll-mode-toggle").style.display = "inherit"
		document.getElementById("troll-text").style.display = "inherit"
		document.getElementById("dark-mode-toggle").style.display = "none"
		document.getElementById("mode-text").style.display = "none"
		document.getElementById("actual-mode").style.display = "none"
		document.getElementById("dark").style.display = "none"
		document.getElementById("light").style.display = "none"
		document.getElementById("troll").style.marginTop = "70px"
		document.getElementById("troll").innerHTML = "Nie to miałem na myśli."
		
        first_click = false;
    } else {
        document.getElementById("troll-mode-toggle").style.display = "none"
		document.getElementById("troll-text").style.display = "none"
		document.getElementById("dark-mode-toggle").style.display = "unset"
		document.getElementById("mode-text").style.display = "inherit"
		document.getElementById("actual-mode").style.display = "inherit"
		document.getElementById("dark").style.display = "none"
		document.getElementById("light").style.display = "none"
		document.getElementById("troll").style.marginTop = "50px"
		document.getElementById("troll").innerHTML = "Nie możesz się zdecydować?"

		first_click = true;
    }
}
