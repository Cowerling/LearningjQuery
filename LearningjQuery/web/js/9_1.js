/**
 * Created by dell on 2016-6-20.
 */

$(document).ready(function () {
    var $news = $("#news");
    function stripe() {
        $news.find("tr.alt").removeClass("alt");
        $news.find("tbody").each(function () {
            $(this).children(":visible").has("td")
                .filter(function (index) {
                    return (index % 4) < 2;
                }).addClass("alt");
        });
    }
    stripe();
    $("#topics a").click(function (event) {
        event.preventDefault();
        var topic = $(this).text();

        $("#topics a.selected").removeClass("selected");
        $(this).addClass("selected");

        $("#news tr").show();
        if (topic != "All") {
            $("#news").find("tr:has(td)").not(function () {
                return $(this).children(":nth-child(4)").text() == topic;
            }).hide();
        }

        stripe();
    })
});

$(document).ready(function () {
    var $cell = $("#release").nextAll().addBack();
    $cell.addClass("highlight");
    console.log($cell.context);
    console.log($cell.selector);
    console.log($cell.prevObject);
});

$(document).ready(function () {
    $("#news td").click(function () {
        $("#news td.active").removeClass("active");
        $(this).column().addClass("active");
    });
});