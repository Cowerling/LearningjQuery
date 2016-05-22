/**
 * 
 */
$(document).ready(function() {
	$("#switcher").hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	});
	
	var toggleSwitcher = function(event) {
		if(!$(event.target).is("button")) {
			$("#switcher button").toggleClass("hidden");
		}
	}
	
	$("#switcher").on("click", toggleSwitcher);
	$("#switcher").click();
	
	var setBodyClass = function(className) {
		$("body").removeClass().addClass(className);
		$("#switcher button").removeClass("selected");
		$("#switcher-" + className).addClass("selected");
		$("#switcher").off("click", toggleSwitcher);
		if(className == "default") {
			$("#switcher").on("click", toggleSwitcher);
		}
	};
	
	$("#switcher-default").addClass("selected");
	
	var triggers = {
		D: "default",
		N: "narrow",
		L: "large"
	};
	
	$("#switcher").click(function(event) {
		if($(event.target).is("button")) {
			var bodyClass = event.target.id.split("-")[1];
			setBodyClass(bodyClass);
		}
	});
	
	$(document).keyup(function(event) {
		var key = String.fromCharCode(event.which);
		if(key in triggers) {
			setBodyClass(triggers[key]);
		}
	});
});