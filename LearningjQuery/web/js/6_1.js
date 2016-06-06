/**
 * Created by dell on 2016-5-31.
 */

$(document).ready(function () {
    $("#letter-a a").click(function (event) {
        event.preventDefault();
        /*$("#dictionary").hide().load("6_a.html", function () {
            $(this).fadeIn();
        });*/
        $.ajaxSetup({
            url: "6_a.html",
            type: "POST",
            dataType: "html"
        });
        $.ajax({
            type: "GET",
            success: function (data) {
                $("#dictionary").hide().html(data).fadeIn();
            }
        });
    });
});

$(document).ready(function () {
    $("#letter-b a").click(function (event) {
        event.preventDefault();
        $.getJSON("json/6_b.json", function (data) {
            var html = "";
            $.each(data, function (entryIndex, entry) {
                html += "<div class='entry'>";
                html += "<h3 class='term'>" + entry.term + "</h3>";
                html += "<div class='part'>" + entry.part + "</div>";
                html += "<div class='definition'>" + entry.definition;
                if (entry.quote) {
                    html += "<div class='quote'>";
                    $.each(entry.quote, function (lineIndex, line) {
                        html += "<div class='quote-line'>" + line + "</div>";
                    });
                    if (entry.author) {
                        html += "<div class='quote-author'>" + entry.author + "</div>";
                    }
                    html += "</div>";
                }
                html += "</div>";
                html += "</div>";
            });
            $("#dictionary").html(html);
        });
    });
});

$(document).ready(function () {
    $("#letter-c a").click(function (event) {
        event.preventDefault();
        $.getScript("js/6_c.js");
    });
});

$(document).ready(function () {
    $("#letter-d a").click(function (event) {
        event.preventDefault();
        $.get("xml/6_d.xml", function (data) {
            $("#dictionary").empty();
            $(data).find("entry").each(function () {
                var $entry = $(this);
                var html = "<div class='entry'>";
                html += "<h3 class='term'>" + $entry.attr("term") + "</h3>";
                html += "<div class='part'>" + $entry.attr("part") + "</div>";
                html += "<div class='definition'>";
                html += $entry.find("definition").text();
                var $quote = $entry.find("quote");
                if ($quote.length) {
                    html += "<div class='quote'>";
                    $quote.find("line").each(function () {
                        html += "<div class='quote-line'>" + $(this).text() + "</div>";
                    });
                    if($quote.attr("author")) {
                        html += "<div class='quote-author'>" + $quote.attr("author") + "</div>";
                    }
                    html += "</div>";
                }
                html += "</div>";
                html += "</div>";
                $("#dictionary").append($(html));
            });
        });
    });
});

$(document).ready(function () {
    $("#letter-e a").click(function (event) {
        event.preventDefault();
        var requestData = {term: $(this).text()};
        /*$.post("GetDictionaryTerm", requestData, function (data) {
            $("#dictionary").html(data);
        });*/
        /*$("#dictionary").load("GetDictionaryTerm", requestData);*/
        $.get("GetDictionaryTerm", requestData, function (data) {
            $("#dictionary").html(data);
        }).fail(function (jqXHR) {
            $("#dictionary").html("An error occured: " + jqXHR.status).append(jqXHR.responseText); 
        });
    });
});

$(document).ready(function () {
    $("#letter-f form").submit(function (event) {
        event.preventDefault();
        var formValues = $(this).serialize();
        $.get("GetDictionaryTerm", formValues, function (data) {
            $("#dictionary").html(data);
        });
    });
});

$(document).ready(function () {
    var $loading = $("<div id='loading'>Loading...</div>").insertBefore("#dictionary");
    $(document).ajaxStart(function () {
        $loading.show();
    }).ajaxStop(function () {
        $loading.hide();
    });
});

$(document).ready(function () {
    $("body").on("click", "h3.term", function () {
        $(this).siblings(".definition").slideToggle();
    });
});

$(document).ready(function () {
    var url = "http://examples.learningjquery.com/jsonp/g.php";
    $("#letter-g a").click(function (event) {
        event.preventDefault();
        $.getJSON(url + "?callback=?", function (data) {
            var html = "";
            $.each(data, function (entryIndex, entry) {
                html += "<div class='entry'>";
                html += "<h3 class='term'>" + entry.term + "</h3>";
                html += "<div class='part'>" + entry.part + "</div>";
                html += "<div class='definition'>" + entry.definition;
                if (entry.quote) {
                    html += "<div class='quote'>";
                    $.each(entry.quote, function (lineIndex, line) {
                        html += "<div class='quote-line'>" + line + "</div>";
                    });
                    if (entry.author) {
                        html += "<div class='quote-author'>" + entry.author + "</div>";
                    }
                    html += "</div>";
                }
                html += "</div>";
                html += "</div>";
            });
            $("#dictionary").html(html);
        }).fail(function (jqXHR) {
            $("#dictionary").html("An error occured: " + jqXHR.status).append(jqXHR.responseText);
        });
    });
});