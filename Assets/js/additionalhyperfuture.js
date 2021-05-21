 $(document).ready(function(){
		$("#nightview").click(function(){
					if ($("#nightview").attr("class") == "fas fa-moon") {
					$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
					$('link[href="../Assets/css/main.css"]').attr('disabled', 'true');
					$('link[href="../Assets/css/main_cambiato.css"]').removeAttr('disabled');
					$('link[href="../Assets/css/hyperfuturedark.css"]').removeAttr('disabled');
					$("#nightview").attr("class", "far fa-moon");
		 		}
		 			else if ($("#nightview").attr("class") == "far fa-moon") {
							$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
							$('link[href="../Assets/css/main.css"]').attr('disabled', 'true');
					  		$('link[href="../Assets/css/main_cambiato.css"]').removeAttr('disabled');
							$('link[href="../Assets/css/hyperfuture.css"]').removeAttr('disabled');
							$("#nightview").attr("class", "fas fa-moon");
		 			}
				});
		$("#buybutton").click(function(){
			if ($("#walletid").val() != "") {
				alert("Not enough Ethereum in your wallet!");
			}
			else if ($("#walletid").val() == "") {
				alert("Please insert you Wallet");
			}
		})

});