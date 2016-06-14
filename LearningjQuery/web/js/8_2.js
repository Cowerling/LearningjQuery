/**
 * Created by dell on 2016-6-14.
 */

$(document).ready(function () {
    var $inventory = $("#inventory tbody");
    var quantities = $inventory.find("td:nth-child(2)")
        .map(function (index, quantity) {
            return $(quantity).text();
        }).get();
    var sum = $.mathUtils.sum(quantities);
    $("#sum").find("td:nth-child(2)").text(sum);
});

$(document).ready(function () {
    var $inventory = $("#inventory tbody");
    var prices = $inventory.find("td:nth-child(3)")
        .map(function (index, price) {
            return $(price).text();
        }).get();
    var average = $.mathUtils.average(prices);
    $("#average").find("td:nth-child(3)").text(average.toFixed(2));
});

$(document).ready(function () {
    $("table").click(function () {
        $("tr").swapClass("one", "two");
    });
});
