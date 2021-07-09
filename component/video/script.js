$(document).ready(function () {
    $(".btn-like").on("click", function (param) {
        $(this).addClass('liked');
    });


    $(".heart").each(function (index, element) {
        $(element).on("click", function () {
            $(this).toggleClass("active");
        });
        
    });
});