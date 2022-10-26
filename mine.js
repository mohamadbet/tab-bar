$(document).ready(function () {
    $('a').click(function () {
        $('a').removeClass("active");
        $(this).addClass("active");
    });
    $('button').click(function () {
        $('body').toggleClass('dark');
    });
});