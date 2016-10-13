/**
 * Created by dell on 2016-10-13.
 */
$(document).ready(function () {
    var pageNumber = 1;

    $("#more-photos").click(function (event) {
        event.preventDefault();

        var $link = $(this);
        var url = $link.attr("href");
        if(url) {
            $.get(url, function (data) {
                $("#gallery").append(data);
            });

            pageNumber++;
            if(pageNumber < 20) {
                $link.attr("href", "pages/" + pageNumber + ".html");
            } else {
                $link.remove();
            }
        }
    });
});

$(document).ready(function () {
    $("#gallery").on("mouseover mouseout", function (event) {
        console.log(event.target);
    });
});