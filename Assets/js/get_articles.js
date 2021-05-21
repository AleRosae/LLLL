
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
                addIssueDetails(data);
                load("article1.html");
                load("article2.html")
                load("article3.html")
                },
              error: function(){
              	alert("error:no articles available")
              }
              });

        function addArticles(obj) {
            for (i in obj.articles) { 
            	$("#infobox"+obj.articles[i].number+" .card-title").text(obj.articles[i].title);
            	$("#infobox"+obj.articles[i].number+" #author").text("Author: "+obj.articles[i].author);
	           	$("#infobox"+obj.articles[i].number+" #authordescr").text("Author description: "+obj.articles[i].authordescription);
	           	$("#infobox"+obj.articles[i].number+" #date").text("Date of publication: "+obj.articles[i].date);
	           	$("#infobox"+obj.articles[i].number+" #source").append("Original source: \<a href=\""+obj.articles[i].originalsource+"\"\>Link\</a\>");
	           	$("#infobox"+obj.articles[i].number+" #journal").text("Journal: "+obj.articles[i].journal);	
	           	$("#articlescheckbox").append("<div class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"checkarticle"+obj.articles[i].number+"\"onclick='load(\""+obj.articles[i].url+"\")' checked><label class=\"form-check-label\" for=\"\">"+obj.articles[i].title+"</label></div>");		


          }
       	
   }

        function addIssueDetails(obj) {
            for (i in obj.issue) { 
            	$("#issuedetails .card-header .card-title").text(obj.issue[i].topic+" issue details");
            	$("#issuedetails #issue-theme").text("Theme: "+obj.issue[i].description);
            	$("#issuedetails #issue-keywords").text("Keywords: "+obj.issue[i].keywords);
            	$("#issuedetails #issue-editor").text("Editor: "+obj.issue[i].editor);

          }
          	
   }


 }

//*this function gets the json with all the articles of the issues and load them when the user clicks on each checkbox. The code is suppoed to workdinamycally: it checks the number of columns and adjust the size using the bootstrap classes (i.e. col-4, 6 and 12). It also manages to put the right articlesunder the right cardbox with its own metadata//*
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
							$("#article1_box").attr("class","col-"+col+" colonne_variabili order-first");
							$("#article3_box").attr("class","col-"+col+" colonne_variabili order-last");

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