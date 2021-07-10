$(document).ready(function () {
    $('#tab-video').on('click', function () {
        $('#tab_video').addClass('d-block');
        $('#tab_liked').removeClass('d-block');
    });
    $('#tab-liked').on('click', function () {
        $('#tab_liked').addClass('d-block');
        $('#tab_video').removeClass('d-block');
    });

    $("#follow").on("click", function () {
        $("#followed").toggle();
        $("#follow").toggle();
    });
    
    $("#unfollow").on("click", function () {
        $("#followed").toggle();
        $("#follow").toggle();
    });


    $("#bio").on("change", function () {
        $("#bio-save").addClass("active");
    });
    $("#bio").on("keyup", function () {
        $("#bio-save").addClass("active");
    });


    $(".button-set").each(function (index, element) {
        $(element).on("click", function () {
            $(".button-set").each(function (index, element) {
                $(element).removeClass("active");
            });
            $("#btn-" + index).addClass("active");
            $(".tab-setting").each(function (index, element) {
                $(element).addClass("d-none");
            });
            $("#set-" + index).removeClass("d-none");
        });
        
    });
});