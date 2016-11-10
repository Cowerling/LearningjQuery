/**
 * Created by dell on 2016-11-4.
 */
$(document).ready(function () {
    $("div.member").on("mouseenter mouseleave", function (event) {
        var size = event.type == "mouseenter" ? 85 : 75;
        var padding = event.type == "mouseenter" ? 0 : 5;
        $(this).find("img").stop().animate({
            width: size,
            height: size,
            paddingTop: padding,
            paddingLeft: padding
        });
    });

    $("#fx-toggle").show().on("click", function () {
        $.fx.off = !$.fx.off;
    });
});

$(document).ready(function () {
    $.fx.speeds._default = 250;

    function showDetails() {
        $(this).find("div").css({
            display: "block",
            left: -300,
            top: 0
        }).each(function (index) {
            $(this).animate({
                left: 0,
                top: 25 * index
            });
        });
    }

    $("div.member").click(showDetails);
});