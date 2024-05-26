$(function(){

$('.leave-feedback').click(function(){
    $('#sign-in').fadeIn();
})

$('#open-register').click(function(){
    $('#register').fadeIn();
    $('#sign-in').fadeOut();
})

$('#open-signin').click(function(){
    $('#register').fadeOut();
    $('#sign-in').fadeIn();
})

$('.dashboard__section-item').click(function(){
    $(this).toggleClass('active');
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


document.querySelectorAll('.reviews-col').forEach(col => {
    const popup = col.querySelector('.rating-popup');
    
    col.addEventListener('mouseenter', () => {
        popup.classList.remove('hide-popup');
        popup.style.pointerEvents = 'auto';
    });

    col.addEventListener('mouseleave', () => {
        popup.classList.add('hide-popup');
        setTimeout(() => {
            popup.style.pointerEvents = 'none';
        }, 500); // 2500ms = 2s (задержка) + 0.5s (время анимации)
    });
});


