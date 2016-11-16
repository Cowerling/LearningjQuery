/**
 * Created by dell on 2016-11-16.
 */
$(document).ready(function () {
    $("#selected-plays > li").addClass("horizontal");
    $("a[href^='mailto:']").addClass("mailto");
    $("a[href$='.pdf']").addClass("pdflink");
});