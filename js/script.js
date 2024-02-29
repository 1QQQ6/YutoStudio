$(document).ready(function() {
	//$("input").bind("input", function() {
	//	if (this.value.match(/[^0-9A-Za-z]/g)) {
	//		this.value = this.value.replace(/[^0-9A-Za-z]/g, "");
	//	}
	//});

	$("#submit-button").click(function() {
		var code = $("#code-input").val();
		
		if (code.length < 4) {
			$("#code-input").addClass("input-invalid");

			setTimeout(function() {
				$("#code-input").removeClass("input-invalid");
			}, 3000);

			return false;
		}

		$("#step-1").fadeOut(500, function() {
			$("#step-2").fadeIn();
		});
	});
});