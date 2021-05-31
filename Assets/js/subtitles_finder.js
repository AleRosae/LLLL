
$(document).ready(function(){
    
    $("#result1").click(function(){
        if($("#result1").attr("active")== "1"){
        $("#article1_box").find("h2").each(function(index, h2){

            var id = $(h2).attr("id");

            var title = $(h2).text();

            $("#doot1").append('<a href="#'+id+'">'+title+'</a>');
            
        });  
        $("#article1_box").find("h3").each(function(index, h3){
    
            var id = $(h3).attr("id");
            
            var title = $(h3).text();
            
            $("#doot1").append('<a href="#'+id+'">'+title+'</a>');
        
        });
        $("#result1").attr("active", "0");
    }
    });
    $("#result2").click(function(){
        if($("#result2").attr("active")== "1"){
        $("#article2_box").find("h2").each(function(index, h2){

            var id = $(h2).attr("id");

            var title = $(h2).text();

            $("#doot2").append('<a href="#'+id+'">'+title+'</a>');
        });  
        $("#article2_box").find("h3").each(function(index, h3){
    
            var id = $(h3).attr("id");
            
            var title = $(h3).text();
            
            $("#doot2").append('<a href="#'+id+'">'+title+'</a>');
            
        });
        $("#result2").attr("active", "0");
    }
    });
    $("#result3").click(function(){
        if($("#result3").attr("active")== "1"){
        
        $("#article3_box").find("h2").each(function(index, h2){

            var id = $(h2).attr("id");

            var title = $(h2).text();

            $("#doot3").append('<a href="#'+id+'">'+title+'</a>');
        });  
        $("#article3_box").find("h3").each(function(index, h3){
    
            var id = $(h3).attr("id");
            
            var title = $(h3).text();
            
            $("#doot3").append('<a href="#'+id+'">'+title+'</a>');
            
        });
        $("#result3").attr("active", "0");
    }
    });
});




