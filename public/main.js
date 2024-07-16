// Start mobile  navbar //
function togglehamburger() {
    var x = document.getElementById("mobileNavbar");
    x.classList.toggle('hidden');

}
// ./End mobile  navbar //

// mobile dropdowm menu //
$(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".mobile-menu").click(function () {
        var t = e(this).parents(".mobile-button").children(".dropdownContent").is(":hidden");
        e(".mobile-button .dropdownContent").hide();
        if (t) {
            e(this).parents(".mobile-button").children(".dropdownContent").toggle()
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("mobile-button")) e(".mobile-button .dropdownContent").hide();
    });
});
// mobile dropdowm menu //
$(document).ready(function () {
$('.main-slider').slick({
    infinite: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: true
});
});
