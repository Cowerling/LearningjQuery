/**
 * Created by dell on 2016-6-7.
 */

$.fn.cycle.defaults.timeout = 10000;
$.fn.cycle.defaults.random = true;

$(document).ready(function () {
    $("#books").cycle({
        timeout: 2000,
        speed: 200,
        pause: true
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
    }).appendTo($controls);
    $("<button>Resume</button>").click(function (event) {
        event.preventDefault();
        //$books.cycle("resume");
        $("ul:paused").cycle("resume");
        $.cookie("cyclePaused", null);
    }).appendTo($controls);

    $books.hover(function () {
        $books.find(".title").animate({
            backgroundColor: "eee",
            color: "#000"
        }, 1000);
    }, function () {
        $books.find(".title").animate({
            backgroundColor: "000",
            color: "#fff"
        }, 1000);
    });
});

$(document).ready(function () {
    $("h1").click(function () {
        $(this).toggleClass("highlighted", "slow", "easeInExpo");
    });
});