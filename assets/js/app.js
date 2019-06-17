function toggleNav() {
    console.log("👌")
	if ($("nav").hasClass("hidden")) {
		$("nav").removeClass("hidden")
		$("nav").addClass("visible")
	} else if ($("nav").hasClass("visible")) {
		$("nav").removeClass("visible")
		$("nav").addClass("hidden")
	}
}