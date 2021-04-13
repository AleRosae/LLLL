 		$("#reset").click(function(){
		  	$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
	  });

		$("#style1").click(function(){
			$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
		  	$('link[href="../Assets/css/style1.css"]').removeAttr('disabled');
	  });
		$("#style2").click(function(){
		$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
		$('link[href="../Assets/css/style2.css"]').removeAttr('disabled');
		});  