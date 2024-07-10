document.querySelector('.navbar-drop-btn').addEventListener('click', function () {
    document.body.classList.toggle('active');
});


// sticky navbar
window.onscroll = function () {
    if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
    ) {
        document.body.classList.add("nav_sticky");
    } else {
        document.body.classList.remove("nav_sticky");
    }
};




