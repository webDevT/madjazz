$(function(){

$('.leave-feedback').click(function(){
    $('#leave-feedback').fadeIn();
})

});

$(document).ready(function() {
    $('.modal-window').on('click', function(e) {
        if ($(e.target).closest('.modal-window__content').length === 0) {
            $(this).fadeOut();
        }
    });
});


$('.save-button').click(function(){
    $(".modal-window").fadeOut();
})

$('.instrument-review-modal').click(function(){
    $('.instrument-review-modal').fadeIn();
})

$('#create-instrument-btn').click(function(){
    $('#add-instrument-modal').fadeIn();
})


