$(document).ready(function() {

    var handlerInAction = false;

    // Get default theme colors 
    var bodyStyles = window.getComputedStyle(document.body);
    var primaryColor = bodyStyles.getPropertyValue('--color-primary');
    var primaryColorHover = bodyStyles.getPropertyValue('--color-primary-hover');
    var primaryColorActive = bodyStyles.getPropertyValue('--color-primary-active');
    var backgroundColor = bodyStyles.getPropertyValue('--color-background');
    var fontColor = bodyStyles.getPropertyValue('--color-font');
    var rowHoverColor = bodyStyles.getPropertyValue('--color-row-hover');
    var linkColor = bodyStyles.getPropertyValue('--color-link');
    var menuColor = bodyStyles.getPropertyValue('--color-menu');
    var menuHoverColor = bodyStyles.getPropertyValue('--color-menu-hover');

    // Get theme colors using cookies
    if($.cookie('colorPrimary')) {
        primaryColor = $.cookie('colorPrimary');
        document.querySelector('body').style.setProperty('--color-primary', $.cookie('colorPrimary'));
    }
    if($.cookie('colorPrimaryHover')) {
        primaryColorHover = $.cookie('colorPrimaryHover');
        document.querySelector('body').style.setProperty('--color-primary-hover', $.cookie('colorPrimaryHover'));
    }
    if($.cookie('colorPrimaryActive')) {
        primaryColorActive = $.cookie('colorPrimaryActive');
        document.querySelector('body').style.setProperty('--color-primary-active', $.cookie('colorPrimaryActive'));
    }
    if($.cookie('colorBackground')) {
        backgroundColor = $.cookie('colorBackground');
        document.querySelector('body').style.setProperty('--color-background', $.cookie('colorBackground'));
    }
    if($.cookie('colorFont')) {
        fontColor = $.cookie('colorFont');
        document.querySelector('body').style.setProperty('--color-font', $.cookie('colorFont'));
    }
    if($.cookie('colorRowHover')) {
        rowHoverColor = $.cookie('colorRowHover');
        document.querySelector('body').style.setProperty('--color-row-hover', $.cookie('colorRowHover'));
    }
    if($.cookie('colorLink')) {
        linkColor = $.cookie('colorLink');
        document.querySelector('body').style.setProperty('--color-link', $.cookie('colorLink'));
    }
    if($.cookie('colorMenu')) {
        menuColor = $.cookie('colorMenu');
        document.querySelector('body').style.setProperty('--color-menu', $.cookie('colorMenu'));
    }
    if($.cookie('colorMenuHover')) {
        menuHoverColor = $.cookie('colorMenuHover');
        document.querySelector('body').style.setProperty('--color-menu-hover', $.cookie('colorMenuHover'));
    }

    $("#customizerPrimaryColor").val(primaryColor);
    $("#customizerPrimaryColorHover").val(primaryColorHover);
    $("#customizerPrimaryColorActive").val(primaryColorActive); 
    $("#customizerBackgroundColor").val(backgroundColor); 
    $("#customizerFontColor").val(fontColor); 
    $("#customizerRowHover").val(rowHoverColor); 
    $("#customizerLinkColor").val(linkColor); 
    $("#customizerMenu").val(menuColor); 
    $("#customizerMenuHover").val(menuHoverColor); 


    $('#closeCustomizer').on("click", function() {
        if(!handlerInAction)
        {
            handlerInAction = true;
            handleCustomizer(false);
            setTimeout(function() { handlerInAction = false; }, 500);
        }
    });


    $('.theme-customizer.inactive').on("click", function() {
        if(!handlerInAction)
        {
            handlerInAction = true;
            handleCustomizer(true);
            setTimeout(function() { handlerInAction = false; }, 500);
        }
    });




    /* COLOR PICKERS */
    $("#customizerPrimaryColor").on("change", function() {
        document.querySelector('body').style.setProperty('--color-primary', $(this).val());
        $.cookie('colorPrimary', $(this).val());
    });

    $("#customizerPrimaryColorHover").on("change", function() {
        document.querySelector('body').style.setProperty('--color-primary-hover', $(this).val());
        $.cookie('colorPrimaryHover', $(this).val());
    });

    $("#customizerPrimaryColorActive").on("change", function() {
        document.querySelector('body').style.setProperty('--color-primary-active', $(this).val());
        $.cookie('colorPrimaryActive', $(this).val());
    });

    $("#customizerBackgroundColor").on("change", function() {
        document.querySelector('body').style.setProperty('--color-background', $(this).val());
        $.cookie('colorBackground', $(this).val());
    });

    $("#customizerFontColor").on("change", function() {
        document.querySelector('body').style.setProperty('--color-font', $(this).val());
        $.cookie('colorFont', $(this).val());
    });

    $("#customizerRowHover").on("change", function() {
        document.querySelector('body').style.setProperty('--color-row-hover', $(this).val());
        $.cookie('colorRowHover', $(this).val());
    });

    $("#customizerLinkColor").on("change", function() {
        document.querySelector('body').style.setProperty('--color-link', $(this).val());
        $.cookie('colorLink', $(this).val());
    });

    $("#customizerMenu").on("change", function() {
        document.querySelector('body').style.setProperty('--color-menu', $(this).val());
        $.cookie('colorMenu', $(this).val());
    });

    $("#customizerMenuHover").on("change", function() {
        document.querySelector('body').style.setProperty('--color-menu-hover', $(this).val());
        $.cookie('colorMenuHover', $(this).val());
    });


    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $(".menu a").each(function () {
        var href = $(this).attr('href');
        if (path.substring(0, href.length) === href) {
            $(this).closest('a').addClass('active');
        }
    });

});




function handleCustomizer(customizerActive) {
    if(customizerActive) {
        $(".theme-customizer").removeClass('inactive');
        $(".theme-customizer").addClass('active');
    }
    else {
        $(".theme-customizer").removeClass('active');
        $(".theme-customizer").addClass('inactive');
    }
}