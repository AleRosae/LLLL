
	$(document).ready(main);

	function main() {
		       $.ajax({
		      method:"GET",
              url : 'articlelist.json', 
              dataType : 'json', 
              cache : false, 
              success : function(data) {
                console.log(data);
                addArticles(data);
                },
              error: function(){
              	alert("error:no data available")
              }
              });

        function addArticles(obj) {
            for (i in obj.articles) {
            	$("#articlebox").append("<il><a href='#' id='"+obj.articles[i].title+ "' onclick=\"load('"+obj.articles[i].url+"')\"><button>" +obj.articles[i].title +"</button></a></il>");
          }
          	
   }
 }

          	
		function load(file) {
			$.ajax({
				method: 'GET',
				url: "articlelist.json",
				dataType:"json",
				success: function(d) {
				for (i in d.articles) {
					if (file == d.articles[i].url){
						var col = 0;
						var title = d.articles[i].box;
						if ($("#"+title).length) {
		            	$("#"+title).remove();
						}
						else {
		            	$("#Articles").append("<div class=\"col-"+col+" colonne_variabili\" id='"+title+"'></div>");
		            	$("#"+title).load(file);
							}
						if ($("#Articles").children().length == 1) {
							var col = 12;
							$(".colonne_variabili").attr("class","col-"+col+" colonne_variabili");
						} else if ($("#Articles").children().length == 2) {
							var col = 6;
							$(".colonne_variabili").attr("class","col-"+col+" colonne_variabili");
						} else if ($("#Articles").children().length == 3) {
							var col = 4;
							$(".colonne_variabili").attr("class","col-"+col+" colonne_variabili");
						}
						else if ($("#Articles").children().length > 3) {
							alert("Max number of documents exceeded");
						}
							}
				}
				},
				error: function() {
					alert('Could not load file '+file)
				}
			});
         }  