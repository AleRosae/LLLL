 		$("#reset").click(function(){
		  	$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
	  });

		$("#soviet").click(function(){
			$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
		  	$('link[href="../Assets/css/soviet.css"]').removeAttr('disabled');
	  });
		
		$("#style2").click(function(){
		$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
		$('link[href="../Assets/css/style2.css"]').removeAttr('disabled');
		});  
