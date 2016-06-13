/**
 * Created by dell on 2016-6-7.
 */

$.fn.cycle.defaults.timeout = 10000;
$.fn.cycle.defaults.random = true;

$(document).ready(function () {
    $("#books").cycle({
        timeout: 2000,
        speed: 200,
        pause: true,
        before: function () {
            $("#slider").slider("value", $("#books li").index(this));
        }
    });
});

$(document).ready(function () {
    var $books = $("#books");
    if ($.cookie("cyclePaused") !== "null") {
        $books.cycle("pause");
    }
    var $controls = $("<div id='books-controls'></div>").insertAfter($books);
    $("<button>Pause</button>").click(function (event) {
        event.preventDefault();
        $books.cycle("pause");
        $.cookie("cyclePaused", "y");
    }).button({
        icons: {primary: "ui-icon-pause"}
    }).appendTo($controls);
    $("<button>Resume</button>").click(function (event) {
        event.preventDefault();
        //$books.cycle("resume");
        //$("ul:paused").cycle("resume");
        //$.cookie("cyclePaused", null);
        var $paused = $("ul:paused");
        if($paused.length) {
            $paused.cycle("resume");
        } else {
            $(this).effect("shake", {
                distance: 10
            });
        }
    }).button({
        icons: {primary: "ui-icon-play"}
    }).appendTo($controls);

    $books.hover(function () {
        $books.find(".title").animate({
            backgroundColor: "eee",
            color: "#000"
        }, 1000).resizable({
            handles: "s"
        });
    }, function () {
        $books.find(".title").animate({
            backgroundColor: "000",
            color: "#fff"
        }, 1000);
    });

    $("<div id='slider'></div>").slider({
        min: 0,
        max: $("#books li").length - 1,
        slide: function (event, ui) {
            $books.cycle(ui.value);
        }
    }).appendTo($controls);
});

$(document).ready(function () {
    $("h1").click(function () {
        $(this).toggleClass("highlighted", "slow", "easeInExpo");
    });
});

$(document).ready(function () {
    $("button").button();
});