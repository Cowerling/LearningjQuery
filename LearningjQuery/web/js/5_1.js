/**
 * Created by dell on 2016-5-27.
 */

$(document).ready(function () {
   $("div.chapter a[href*='wikipedia']").attr({
       rel: "external",
       title: function () {
           return "Learn more about " + $(this).text() + " at Wikipedia.33";
       },
       id: function (index, oldValue) {
           return "wikilink-" + index;
       }
   });
});
