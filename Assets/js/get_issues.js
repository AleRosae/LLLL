	$(document).ready(main);

	function main(){
		      $.ajax({
		      method:"GET",
              url : 'filelist.json', 
              dataType : 'json', 
              cache : false, 
              success : function(data) {
                createIssues(data);
                },
              error: function(){
              	alert("error: no data available")
              }
              });

            function createIssues(obj) {
                for (i in obj.issues) {
                    $("#dropdownMenu").append("<a class='dropdown-item' href='" + obj.issues[i].pageLink  + obj.issues[i].topic + "</a>");
                    $("#IssuesBox").append("<div class=\"card\" style=\"width: 18rem;\" id=\"issue"+obj.issues[i].issue+"\"></div>");
                    $("#issue"+obj.issues[i].issue).append("<img src=\""+obj.issues[i].img+"\" class=\"card-img-top\" alt=\"...\">");   
                    $("#issue"+obj.issues[i].issue).append("<div class=\"card-body\" id=\"CardBody"+obj.issues[i].issue+"\"></div>");
                    $("#CardBody"+obj.issues[i].issue).append("<p class=\"card-text\">"+obj.issues[i].description+"</p>");   
					$("#CardBody"+obj.issues[i].issue).append("<h5 class=\"card-title\">"+obj.issues[i].topic+"</h5>");                                          
                    $("#CardBody"+obj.issues[i].issue).append("<a class=\btn btn-primary\" href=\""+obj.issues[i].pageLink+"\"><button>Check the issue </button></a>");
              }

            }
}


