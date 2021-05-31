
$(document).ready(function(){
    $("#result").click(function(){
        $("#article1_box").find("h3").each(function(index, h3){
    
            var id = $(h3).attr("id");
            
            var title = $(h3).text();
            
            $("#result").append('<a href="#'+id+'">'+title+'</a>');
        });
    });
});




