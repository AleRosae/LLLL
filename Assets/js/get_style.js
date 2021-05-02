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
		if ($("#popUP").children().length == 0) {
  			$("#popUP").append("<div class=\"popup\"><div class=\"popuptext\" id=\"myPopup\"><h1>Welcome User</h1><p>It looks like you are visiting this website through a very old device that is no longer fully supported.</p><p>You device has been recognize as: Computer Desktop</p><p>It also looks like you are not logged in with you Internet Identity. In order to make the internet a safer place, we strongy recomend you to log in with that Internet Identity that you Social Network has provided to you. Remember that starting from January 1st 2031 an Internet Identity will be mandatory in order to browse any website on search engines.</p> 	<p>Due to you unsupported device many features of this website are not going to be fully functional. This may include:</p><ul><li>Interactive ads</li><li>Compatibily with foldable devices and multiscreen devices</li><li>Instant Social Media sharing</li><li>Augmented and Virtual Reality</li></ul><p>If you want to still visit this page please <span id=\"ClosePop\"  onclick=\"CloseFuturePopUp()\">click here</span></p><p>Thank you.</p></div></div>");
  			$("#Articles").attr("id", "ArticlesHidden")
  			$("#nightview").attr("class", "fas fa-moon");
  			}
  		else {

			$("#nightview").attr("class", "");
  			}
  		};

		function CloseFuturePopUp() {
			if ($("#popUP").children().length == 1);
			$("#popUP").empty();
			$("#ArticlesHidden").attr("id", "Articles");
		};

		function NightMode(){
			if ($("#nightview").attr("class") == "fas fa-moon") {
					$("#nightview").attr("class", "far fa-moon");
 		}
 			else if ($("#nightview").attr("class") == "far fa-moon") {
 					$("#nightview").attr("class", "fas fa-moon");

 			}
		};

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