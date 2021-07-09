$(document).ready(function () {
    $('.tab').each(function (index, element) {
        $(element).on('click', function () {
            $('.tab').removeClass('active');
            $(element).addClass('active'); 
        });
    });

    $('#tab-phone').on('click', function () {
        console.log(1);
        $('#phone_number').addClass('d-block');
        $('#poptopid').removeClass('d-block');
    });
    $('#tab-id').on('click', function () {
        console.log(2);
        $('#poptopid').addClass('d-block');
        $('#phone_number').removeClass('d-block');
    });


    //search input
    $('#input_search').on('keyup', function (e) {
        console.log(e.currentTarget.value);
        if (e.currentTarget.value != null) {
            $('.clear-search').addClass('d-block');
        }
    });

    $('.clear-search').on('click', function () {
        $('#input_search').val('');
        $('.clear-search').removeClass('d-block');
    });

    $(".open-notify").on("click", function () {
        $(".wrap-notify").toggle();
    });

    //popup setting
    $("#btn-popup-setting").on("click", function () {
        $(".wrap-setting-popup").toggle();
    })
    // $("#btn-popup-setting").on("mouseenter", function () {
    //     $(".wrap-setting-popup").removeClass("d-block");
    // })
    // $("#btn-popup-setting").on("mouseleave", function () {
    //     $(".wrap-setting-popup").addClass("d-block");
    // })
});