var menuBtn = document.getElementById('menuBtn')
var sideNav = document.getElementById('sideNav')
var menu = document.getElementById('menu')

sideNav.style.right = "-270px";

menuBtn.onclick = function() {
    if(sideNav.style.right == "-270px"){
        sideNav.style.right = "0";
        menu.src = "images/close.png";
    }
    else{
        sideNav.style.right = "-270px";
        menu.src = "images/menu.png";
    }
}