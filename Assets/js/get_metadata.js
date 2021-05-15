$(document).ready(function () {
    $(".callmetadata").click(function () {
        var meta = this.id;
        if($("#"+meta).attr("active")=="0"){
            $("#"+meta).attr("active", "1");
            $(".infobox .card-text").empty();

            if (meta == "deafultmetadata") {
               $.ajax({
              method:"GET",
              url : 'articlelist.json', 
              dataType : 'json', 
              cache : false, 
              success : function(data) {
                addArticles(data);
                },
              error: function(){
                alert("error:no data available")
              }
              });

        function addArticles(obj) {
            for (i in obj.articles) { 

                $("#infobox"+obj.articles[i].number+" .card-text").append("<div class=\"card-text\"><p id=\"author\"></p><p id=\"authordescr\"></p><p id=\"date\"></p><p id=\"source\"></p> <p id=\"journal\"></p></div>")
                $("#infobox"+obj.articles[i].number+" #author").text("Author: "+obj.articles[i].author);
                $("#infobox"+obj.articles[i].number+" #authordescr").text("Author description: "+obj.articles[i].authordescription);
                $("#infobox"+obj.articles[i].number+" #date").text("Date of publication: "+obj.articles[i].date);
                $("#infobox"+obj.articles[i].number+" #source").append("Original source: \<a href=\""+obj.articles[i].originalsource+"\"\>Link\</a\>");
                $("#infobox"+obj.articles[i].number+" #journal").text("Journal: "+obj.articles[i].journal); 


          }
        
   }
            }
            else {

                var lista_nomi1 = [];
                var lista_nomi2 = [];
                var lista_nomi3 = [];
                $("#article1_box ."+meta).each(function () {

                    if (jQuery.inArray($(this).text(), lista_nomi1) == -1) {
                        lista_nomi1.push($(this).text());
                    }

                });
                $("#article2_box ."+meta).each(function () {

                    if (jQuery.inArray($(this).text(), lista_nomi2) == -1) {
                        lista_nomi2.push($(this).text());
                    }
                });
                $("#article3_box ."+meta).each(function () {

                    if (jQuery.inArray($(this).text(), lista_nomi3) == -1) {
                        lista_nomi3.push($(this).text());
                    }
                });
                $("#infobox1 .card-text").append("<ul id=\"elencoNomi1\"></ul>");
                for (i in lista_nomi1) {
                    $("#elencoNomi1").append("<li>" + lista_nomi1[i] + "</li>");
                }
                $("#infobox2 .card-text").append("<ul id=\"elencoNomi2\"></ul>");
                for (i in lista_nomi2) {
                    $("#elencoNomi2").append("<li>" + lista_nomi2[i] + "</li>");
                }

                $("#infobox3 .card-text").append("<ul id=\"elencoNomi3\"></ul>");
                for (i in lista_nomi3) {
                    $("#elencoNomi3").append("<li>" + lista_nomi3[i] + "</li>");
                }
            }
    }
    else {
        $("#"+meta).attr("active", "0");
        if (meta != "deafultmetadata") {
        $(".infobox .card-text").empty();
    }
    }   
    });
});