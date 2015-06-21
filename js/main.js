/**
 * Created by Yegor on 20.06.2015.
 */


//$(document).ready(function(){
//    $('.switch-button').click(function(){
//        $('.switch-button').removeClass('active-switch');
//        $(this).addClass('active-switch');
//    });
//});
//
//

$(document).ready(function(){
    $('div.tabs__caption').each(function() {
        $(this).find('p').each(function(i) {
            $(this).click(function(){
                $(this).addClass('active-switch').siblings().removeClass('active-switch')
                    .closest('div.tabs').find('div.tabs__content').removeClass('active_content').eq(i).addClass('active_content');
            });
        });
    });
});