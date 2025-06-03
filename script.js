// ajoute d'une classe navBarDark au moment du scroll de la navbar
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navBarDark');
    }
    else {
        header.classList.remove('navBarDark');
    }
}