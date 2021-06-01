
$(document).ready(function(){
    $("#result1").click(function(){
        if($("#result1").attr("active")== "1"){
        $("#article1_box").find("h2").each(function(index, h2){
            var id = $(h2).attr("id");
            var title = $(h2).text();
            $("#doot1").append('<li><a class="red" href="#'+id+'">'+title+'</a></li>');
        });  
        $("#article1_box").find("h3").each(function(index, h3){
            var id = $(h3).attr("id"); 
            var title = $(h3).text();
            $("#doot1").append('<li><a href="#'+id+'">'+title+'</a></li>');
        });
        $("#result1").attr("active", "0");
        
    }
        else{
            $("#doot1").empty();
            $("#result1").attr("active", "1");
        }
    });


    $("#result2").click(function(){
        if($("#result2").attr("active")== "1"){
        $("#article2_box").find("h2").each(function(index, h2){
            var id = $(h2).attr("id");
            var title = $(h2).text();
            $("#doot2").append('<li><a class="red" href="#'+id+'">'+title+'</a></li>');
        });  
        $("#article2_box").find("h3").each(function(index, h3){
            var id = $(h3).attr("id");
            var title = $(h3).text();
            $("#doot2").append('<li><a href="#'+id+'">'+title+'</a></li>');
        });
        $("#result2").attr("active", "0");
    }
    else{
        $("#doot2").empty();
        $("#result2").attr("active", "1");
    }
    });

    $("#result3").click(function(){
        if($("#result3").attr("active")== "1"){
        $("#article3_box").find("h2").each(function(index, h2){
            var id = $(h2).attr("id");
            var title = $(h2).text();
            $("#doot3").append('<li><a class="red" href="#'+id+'">'+title+'</a></li>');
        });  
        $("#article3_box").find("h3").each(function(index, h3){
            var id = $(h3).attr("id");
            var title = $(h3).text();
            $("#doot3").append('<li><a href="#'+id+'">'+title+'</a></li>');
        });
        $("#result3").attr("active", "0");
    }
    else{
        $("#doot3").empty();
        $("#result3").attr("active", "1");
    }
    });
});




