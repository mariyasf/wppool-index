document.querySelector('.navbar-drop-btn').addEventListener('click', function () {
    document.body.classList.toggle('active');
});


// sticky navbar
window.onscroll = function () {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        document.body.classList.add("nav_sticky");
    } else {
        document.body.classList.remove("nav_sticky");
    }
};




