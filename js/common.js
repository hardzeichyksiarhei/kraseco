$(function() {

    let tabs = $('.login-tabs, .registration-tabs');

    if (tabs.length) {
        tabs.tabslet({
            mouseevent: 'click',
            attribute: 'href'
        });
    }

    let requestTabs = $('.request-tabs');

    if (requestTabs.length) {
        requestTabs.tabslet({
            mouseevent: 'click',
            attribute: 'href'
        });
    }

    $('.header-account__icon-mobile').on('click', function() {
        $(this).parent('.header-account').toggleClass('active');
    })
    

    $('.alert__close').on('click', function() {
        $(this).parent('.alert').hide();
    });

    $("form").on("change", ".file-upload-field", function(){ 
        $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, '') );
    });
})