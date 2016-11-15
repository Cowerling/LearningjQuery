/**
 * Created by cowerling on 16-11-14.
 */
$(document).ready(function () {
    var $ajaxForm = $("#ajax-form"),
        $response = $("#response"),
        noresults = "There were no search results",
        failed = "Sorry, but the request could not reach its destination. Try again later.";

    var buildItem = function (item) {
        var title = item.name,
            args = [item.owner.id, item.owner.login, item.owner.type],
            output = "<li>";

        title += "(" + args.join(", ") + ")";
        output += "<h3><img src='https://avatars3.githubusercontent.com/u/" + args[0] + "?v=3&s=24'><a href='" + item.html_url + "'>" + title + "</a></h3>";
        output += "<div>" + item.created_at + " " + item.updated_at + " " + item.pushed_at + "</div>";
        output += "<div>" + item.description + "</div>";
        output += "</li>";

        return output;
    };

    var response = function (json) {
        var output = "";
        if (json && json.data && json.data.length) {
            output += "<ol>";
            $.each(json.data, function (index, value) {
                output += buildItem(value);
            });
            output += "</ol>";
        } else {
            output += noresults;
        }

        $response.html(output);
    };

    var api = {};

    $ajaxForm.on("submit", function (event) {
        event.preventDefault();

        $response.empty();

        var search = $("#title").val();
        if (search == "") {
            return;
        }

        $response.addClass("loading");

        if (!api[search]) {
            api[search] = $.ajax({
                url: "https://api.github.com/users/" + $("#title").val() + "/repos",
                dataType: "jsonp",
                data: {
                    title: $("#title").val()
                },
                timeout: 15000
            });
        }

        api[search].done(response).fail(function () {
            $response.html(failed);
        }).always(function () {
            $response.removeClass("loading");
        });
    });

    var searchTimeout, searchDelay = 300;

    $("#title").on("keyup", function (event) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(function () {
            $ajaxForm.triggerHandler("submit");
        }, searchDelay);
    });

    $.ajaxSetup({
        accepts: {
            yaml: "application/x-yaml, text/yaml"
        },
        contents: {
            yaml: /yaml/
        },
        converters: {
            "text yaml": function (textValue) {
                var result = YAML.eval(textValue);
                var errors = YAML.getErrors();
                if (errors.length) {
                    throw errors;
                }
                return result;
            }
        }
    });
    
    $.getScript("js/yaml.js").done(function () {
        $.ajax({
            url: "categories.yml",
            dataType: "yaml"
        }).done(function (data) {
            var categories = "";
            $.each(data, function (category, subcategories) {
                categories += "<li><a href='#'>" + category + "</a></li>"
            });

            $(document).ready(function () {
                var $categories = $("#categories").removeClass("hide");
                $("<ul></ul>", {
                    html: categories
                }).appendTo($categories);
            });
        });
    });

    $(document).on("click", "#categories a", function (event) {
        event.preventDefault();
        $(this).parent().toggleClass("active").siblings(".active").removeClass("active");
        $("#ajax-form").triggerHandler("submit");
    });
});
