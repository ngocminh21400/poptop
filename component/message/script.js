$(document).ready(function () {
    $("#send-mess").on('click', function (e) {
        e.preventDefault();
        if ($('#text-to-send').val() != "") {
            send();
        }
       
    });

    function send() {
        text = $('#text-to-send').val();
        content = '<li><div class="mess-out"><div class="d-flex justify-content-end">'
        content += '<div class="mess">' + text + '</div> </div></div></li>';
                
        $('.chat-area .list-mess').append(content);
        $('#text-to-send').val('');
            
        $('.chat-area .list-mess').animate({
            "scrollTop": $('.chat-area .list-mess').scrollHeight
        }, "fast");

    }
});