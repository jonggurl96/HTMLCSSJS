$.ajax({
    url: 'https://baconipsum.com/api/?type=meat-and-filler',
    type: 'get',
    dataType: 'json',
    success: (data) => {
        $('#lorem').html(data);
    }
});

$('#modal-btn').on("click", () => {
    const modalWindow = $('.modal-window')
    $('.modal-background').css("display", "block");
    modalWindow.css({
        "display": "block",
        "top": (($(window).outerHeight() - modalWindow.outerHeight()) / 2) + "px",
        "left": (($(window).outerWidth() - modalWindow.outerWidth()) / 2) + "px"
    });
});

$('.modal-background').on("click", () => {
    $('.modal-window').css("display", "none");
    $('.modal-background').css("display", "none");
});