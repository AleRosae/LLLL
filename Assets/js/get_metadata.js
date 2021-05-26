$(document).ready(function () {
            
       function resetmetadata(){
        $.ajax({
          method:"GET",
          url : 'articlelist.json', 
          dataType : 'json', 
          cache : false, 
          success : function(data) {
            addArticles(data);
            },
          error: function(){
            alert("error:no metadata available")
          }
          });
    }

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
    $(".callmetadata").click(function () {
        var meta = this.id;
        if($("#"+meta).attr("active")=="0"){
            $("#"+meta).attr("active", "1");
            $(".infobox .card-text").empty();

                var lista_nomi1 = [];
                var lista_nomi2 = [];
                var lista_nomi3 = [];

                $("#article1_box ."+meta).each(function () {

                    if (jQuery.inArray($(this).attr("about"), lista_nomi1) == -1) {
                        lista_nomi1.push($(this).attr("about"));
                    }
            
                });
                $("#article2_box ."+meta).each(function () {

                    if (jQuery.inArray($(this).attr("about"), lista_nomi2) == -1) {
                        lista_nomi2.push($(this).attr("about"));
                    }
                });
                $("#article3_box ."+meta).each(function () {

                    if (jQuery.inArray($(this).attr("about"), lista_nomi3) == -1) {
                        lista_nomi3.push($(this).attr("about"));
                    }
                });

                
                var uniq_1 = [];
                $.each(lista_nomi1, function(i, el){
                    if($.inArray(el, uniq_1) === -1) uniq_1.push(el);
                });

                var uniq_2 = [];
                $.each(lista_nomi2, function(i, el){
                    if($.inArray(el, uniq_2) === -1) uniq_2.push(el);
                });

                var uniq_3 = [];
                $.each(lista_nomi3, function(i, el){
                    if($.inArray(el, uniq_3) === -1) uniq_3.push(el);
                });
                
                
                $("#infobox1 .card-text").append("<ul id=\"elencoNomi1\"></ul>");
                for (i in uniq_1) {
                    $("#elencoNomi1").append("<li>" + uniq_1[i] + "</li>");
                }
                $("#infobox2 .card-text").append("<ul id=\"elencoNomi2\"></ul>");
                for (i in uniq_2) {
                    $("#elencoNomi2").append("<li>" + uniq_2[i] + "</li>");
                }

                $("#infobox3 .card-text").append("<ul id=\"elencoNomi3\"></ul>");
                for (i in uniq_3) {
                    $("#elencoNomi3").append("<li>" + uniq_3[i] + "</li>");
                }
            
    }
    else {
        $("#"+meta).attr("active", "0");
        $(".infobox .card-text").empty();
        resetmetadata();
    }   
    });
});


/*questa cosa non funziona ci sto lavorando (diocane) */

$(function() {

	$('.about', document.body).each(function() {
	
		var $about = $(this);
		var text = $about.text();
		var wikiLink = '<a href="http://it.wikipedia.org/wiki/' + text + '"></a>';
		
		$abbr.wrap(wikiLink);
		
	
	
	});

}); 

/* COSA PER EVIDENZIARE PAROLE NEL TESTO */

/* $("#txt").keyup(function() {
  var txt=$(this).val();
  var keyword="test";
  if (txt.indexOf(keyword) > -1){
    $("#page").html(txt.replace(/test/g,'<span class="highlight">' + keyword + '</span>'));
  }
  else {
    $("#page").html(txt);
  }
});

body {
  margin:0;
  padding: 0;
  font-family: Inter, sans-serif !important;
}
textarea {
  padding: 12x;
  font-family: Inter, sans-serif;
  font-size: 2em;
  height: 1.4em;
}
.highlight {
  color:red !important;
}

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<textarea name=""id="txt"cols="30"rows="10"></textarea>
<div id="page"></div>

/anykeyword/g --> TROVARE E SOSTITUIRE TUTTE LE OCCORRENZE DI QUALUNQUE COSA TROVI TRA LE BARRE

*/