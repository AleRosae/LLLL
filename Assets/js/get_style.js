 		$("#reset").click(function(){
		  	$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
	  });

		$("#soviet").click(function(){
			$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
		  	$('link[href="../Assets/css/soviet.css"]').removeAttr('disabled');
	  });
		
		$("#future").click(function(){
		$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
		$('link[href="../Assets/css/hyperfuture.css"]').removeAttr('disabled');
		FuturePopUp();
		});  

		function FuturePopUp() {
  		var popup = document.getElementById("myPopup");
  		popup.classList.toggle("show");

  		}

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