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

document.getElementById('themeSwitch').addEventListener('change', function(event){
  (event.target.checked) ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
});