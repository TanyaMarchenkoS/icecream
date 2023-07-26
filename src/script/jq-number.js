var show = true;
var countbox = ".advantages";
jQuery(window).on("scroll load resize", function () {
    if (!show) return false;
    var w_top = jQuery(window).scrollTop();
    var e_top = jQuery(countbox).offset().top; 
    var w_height = jQuery(window).height();
    var d_height = jQuery(document).height();
    var e_height = jQuery(countbox).outerHeight();
    if (w_top + 500 >= e_top ||  w_height + w_top == d_height || e_height + e_top < w_height) {
        jQuery(document).ready(function () {
            jQuery('.advantages__num').css('opacity', '1');
            jQuery('.advantages__num').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
        });
        show = false;
    }
    console.log('DONE!!!!!')
});