$(function () {

    let header = $("#header");
    let introH = $("#intro").innerHeight();
    let scrollOfSet = $(window).scrollTop();
    checkScroll(scrollOfSet);

    /* Fixed Header */
    $(window).on("scroll", function () {
        scrollOfSet = $(this).scrollTop();

        checkScroll(scrollOfSet);
    });

    function checkScroll(scrollOfSet) {
        scrollOfSet = $(this).scrollTop() + 5;

        if (scrollOfSet >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    }

    /* Smooth Scroll*/
    $("[data-scroll]").on("click",function (event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data('scroll');
        let blockOfSet = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOfSet
        }, 500);
    });

    /* Menu Nav Toggle */
    $("#nav_toggle, #nav a").on("click", function (event) {
        event.preventDefault();

        $("#nav_toggle").toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Collapse */
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data('collapse');

        $this.toggleClass("active");
    });

    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});