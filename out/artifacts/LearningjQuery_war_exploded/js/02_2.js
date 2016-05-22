/**
 * 
 */
$(document).ready(function() {
	$("tr:nth-child(odd)").addClass("alt");
	//$("tr:contains(Henry)").addClass("highlight");
});

$(document).ready(function() {
	//$("td:contains(Henry)").parent().children().addClass("highlight");
	$("td:contains(Henry)")
	.parent()
	.find("td:eq(1)")
	.addClass("highlight")
	.end()
	.find("td:eq(2)")
	.addClass("highlight");
});