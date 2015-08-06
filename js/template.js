(function($) {
    "use strict"; // Start of use strict

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    
    //Script to activate carousel
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
    
    // Offset for Main Navbar
    $('nav').affix({
        offset: {
            top: $('#top-promotion-banner').height()
        }
    });  


})(jQuery); // End of use strict