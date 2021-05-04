 $(document).ready(function(){
 		$("#reset").click(function(){
		  	$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
		  	$("#nightview").attr("class", "");

	  });

		$("#soviet").click(function(){
			$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
		  	$('link[href="../Assets/css/soviet.css"]').removeAttr('disabled');
		  	$("#nightview").attr("class", "");
	  });
		
		$("#future").click(function(){
		$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
		$('link[href="../Assets/css/hyperfuture.css"]').removeAttr('disabled');
		$("#nightview").attr("class", "fas fa-moon");
		});  



		$("#nightview").click(function(){
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
		});

		$("#victorian").click(function(){
		$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
		$('link[href="../Assets/css/victorian.css"]').removeAttr('disabled');
		}); 

		$("#trashy90").click(function(){
		$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
		$('link[href="../Assets/css/trashy90s.css"]').removeAttr('disabled');
		}); 

		$("#beasty_medieval").click(function(){
			$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
			$('link[href="../Assets/css/beasty_medieval.css"]').removeAttr('disabled');
			}); 

		$("#groovy70s").click(function(){
			$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
			$('link[href="../Assets/css/groovy70s.css"]').removeAttr('disabled');
				}); 

});