var $jq = jQuery.noConflict();
$jq(document).ready(function () {
  $jq('.customer').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dotsClass: 'slider-dots',
  });
});
