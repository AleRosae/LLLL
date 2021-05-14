$(document).ready(function(){
    $(".callmetadata").click(function(){
        var meta = this.id;
        $(".infobox .card-text").empty();
        switch(meta){
            case "pers":
                var lista_nomi1 =[];
                var lista_nomi2 =[];
                var lista_nomi3 =[];
                $("#article1_box .pers").each(function(){
                    
                    if(jQuery.inArray($(this).text(), lista_nomi1)== -1){
                        lista_nomi1.push($(this).text());
                    } 

                });
                $("#article2_box .pers").each(function(){
                    
                    if(jQuery.inArray($(this).text(), lista_nomi2)== -1){
                        lista_nomi2.push($(this).text());
                    } 
                });
                $("#article3_box .pers").each(function(){
                    
                    if(jQuery.inArray($(this).text(), lista_nomi3)== -1){
                        lista_nomi3.push($(this).text());
                    } 
                });
                $("#infobox1 .card-text").append("<ul id=\"elencoNomi1\"></ul>");
                for(var i=lista_nomi1.length-1; i>=0; i++){
                    $("#elencoNomi1").append("<li>"+lista_nomi1[i]+"</li>");
                }

            //case 
            //case 
        }
        
    });
});