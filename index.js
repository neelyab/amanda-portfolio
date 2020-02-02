function hoverLi (){
$('li').hover(function (){
    $(this).css('opacity', '60%').css('font-weight', 'bold');
}, function() {
    $(this).css('opacity', '100%').css('font-weight', 'normal');
});
}
function hoverButton(){
    $('.email-me').hover(function(){
        $(this).addClass('js-email-me-hover');
    }, function(){
        $(this).removeClass('js-email-me-hover');
});
}

function fadeInHello () {
        $('main').hide();
        $('main').fadeIn(1000);
}
function runFunctions (){
    hoverButton();
    hoverLi();
    fadeInHello();
}

$(runFunctions);
