 $(document).ready(function(){
		function NightMode(){
			if ($("#nightview").attr("class") == "fas fa-moon") {
			$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
			$('link[href="../Assets/css/hyperfuturedark.css"]').removeAttr('disabled');
			$("#nightview").attr("class", "far fa-moon");
 		}
 			else if ($("#nightview").attr("class") == "far fa-moon") {
					$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
					$('link[href="../Assets/css/hyperfuture.css"]').removeAttr('disabled');
					$("#nightview").attr("class", "fas fa-moon");

 			}
		};

});