



// Change style of navbar on scroll
window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-navbar" + " w3-card-2" + " w3-animate-top" + " w3-cyan";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-cyan", "");
    }
}

//Transitioning the color of the name 
const firstColor = document.querySelector('.first-name');
const lastColor = document.querySelector('.last-name');
const colorSwitch = 'on';

function nameColor(){
function fColor1(){
    if(colorSwitch === 'on'){
        setTimeout(function (){ firstColor.style.color = 'hotpink'; }, 1000)
    }
    
}

function lColor1(){
    setTimeout(function (){ lastColor.style.color = 'cyan'; }, 3000)
}

fColor1()
lColor1()
}

function myStopFunction() {
    clearTimeout(nameColor);
  }
  myStopFunction()

setInterval(nameColor, 1000)


function stopColor(){
    function fColor2(){
        setTimeout(function (){ firstColor.style.color = 'white'; }, 1000)
    }
    
    function lColor2(){
        setTimeout(function (){ lastColor.style.color = 'white'; }, 3000)
    }
    
    fColor2()
    lColor2()
}


setInterval(stopColor, 6000)