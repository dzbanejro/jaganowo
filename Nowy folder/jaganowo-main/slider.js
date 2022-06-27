var numer = 1;
        function zmien(){
            numer ++; if (numer>3) numer = 1; 
            var zdjecie = "<img src=\"baner" + numer + ".png\" />"; 
            document.getElementById('slider').innerHTML = zdjecie;
            setTimeout('zmien()', 5000);
        }