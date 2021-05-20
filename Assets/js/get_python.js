	$(document).ready(main);

	function main(){
		      $.ajax({
		      method:"GET",
              url :'sent_analysis.py', 
              dataType : 'py', 
              success : function(data) {
                console.log(data)
                },
              error: function(){
              	alert("error: no data python available")
              }
              });
}


