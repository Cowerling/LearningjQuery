/**
 * 
 */

$(document).ready(function() {
	$("#selected-plays > li").addClass("horizontal");
	$("#selected-plays li:not(.horizontal)").addClass("sub-level");
});

$(document).ready(function() {
	$("a[href^='mailto:']").addClass("mailto");
	$("a[href$='.pdf']").addClass("pdflink");
	$("a[href^='http'][href*='henry']").addClass("henrylink");
});

$(document).ready(function() {
	$("a").filter(function() {
		return this.hostname && this.hostname != location.hostname;
	}).addClass("external");
});