



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

