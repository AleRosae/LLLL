$(document).ready(function () {

  function resetmetadata() {
    $.ajax({
      method: "GET",
      url: 'articlelist.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        addArticles(data);
      },
      error: function () {
        alert("error:no metadata available")
      }
    });
  }

  function addArticles(obj) {
    for (i in obj.articles) {

      $("#infobox" + obj.articles[i].number + " .card-text").append("<div class=\"card-text\"><p id=\"author\"></p><p id=\"authordescr\"></p><p id=\"date\"></p><p id=\"source\"></p> <p id=\"journal\"></p></div>")
      $("#infobox" + obj.articles[i].number + " #author").text("Author: " + obj.articles[i].author);
      $("#infobox" + obj.articles[i].number + " #authordescr").text("Author description: " + obj.articles[i].authordescription);
      $("#infobox" + obj.articles[i].number + " #date_article").text("Date of publication: " + obj.articles[i].date_article);
      $("#infobox" + obj.articles[i].number + " #source").append("Original source: \<a href=\"" + obj.articles[i].originalsource + "\"\>Link\</a\>");
      $("#infobox" + obj.articles[i].number + " #journal").text("Journal: " + obj.articles[i].journal);
    }
  }
  $(".callmetadata").click(function () {
    var meta = this.id;
    if ($("#" + meta).attr("active") == "0") {
      $("#" + meta).attr("active", "1");
      $(".infobox .card-text").empty();

      if (meta == "py"){
        $("#infobox1 .card-text").append("<p><a active='0' id=\"commonssent1\" class=\"hvr-grow\" href=\"#\" onclick='get_python(\"sent1\", \"commons\")'>Get</a> 10 most common words:</p><ul id=\"topcommonssent1\"</ul>");
        $("#infobox1 .card-text").append("<p><a active='0' id=\"scoressent1\" class=\"hvr-grow\" href=\"#\" onclick='get_python(\"sent1\", \"scores\")'>Get</a> sentimental scores:</p><ul id=\"topscoressent1\"</ul>");
        $("#infobox2 .card-text").append("<p><a active='0' id=\"commonssent2\" class=\"hvr-grow\" href=\"#\" onclick='get_python(\"sent2\", \"commons\")'>Get</a> 10 most common words:</p><ul id=\"topcommonssent2\"</ul>");
        $("#infobox2 .card-text").append("<p><a active='0' id=\"scoressent2\" class=\"hvr-grow\" href=\"#\" onclick='get_python(\"sent2\", \"scores\")'>Get</a> sentimental scores:</p><ul id=\"topscoressent2\"</ul>");
        $("#infobox3 .card-text").append("<p><a active='0' id=\"commonssent3\" class=\"hvr-grow\" href=\"#\" onclick='get_python(\"sent3\", \"commons\")'>Get</a> 10 most common words:</p><ul id=\"topcommonssent3\"</ul>");
        $("#infobox3 .card-text").append("<p><a active='0' id=\"scoressent3\" class=\"hvr-grow\" href=\"#\" onclick='get_python(\"sent3\", \"scores\")'>Get</a> sentimental scores:</p><ul id=\"topscoressent3\"</ul>");

        

      }

      else {

      var lista_nomi1 = [];
      var lista_nomi2 = [];
      var lista_nomi3 = [];

      $("#article1_box ." + meta).each(function () {

        if (jQuery.inArray($(this).attr("about"), lista_nomi1) == -1) {
          lista_nomi1.push($(this).attr("about"));
        }

      });
      $("#article2_box ." + meta).each(function () {

        if (jQuery.inArray($(this).attr("about"), lista_nomi2) == -1) {
          lista_nomi2.push($(this).attr("about"));
        }
      });
      $("#article3_box ." + meta).each(function () {

        if (jQuery.inArray($(this).attr("about"), lista_nomi3) == -1) {
          lista_nomi3.push($(this).attr("about"));
        }
      });


      var uniq_1 = [];
      $.each(lista_nomi1, function (i, el) {
        if ($.inArray(el, uniq_1) === -1) uniq_1.push(el);
      });

      var uniq_2 = [];
      $.each(lista_nomi2, function (i, el) {
        if ($.inArray(el, uniq_2) === -1) uniq_2.push(el);
      });

      var uniq_3 = [];
      $.each(lista_nomi3, function (i, el) {
        if ($.inArray(el, uniq_3) === -1) uniq_3.push(el);
      });


      $("#infobox1 .card-text").append("<ul id=\"elencoNomi1\"></ul>");
      var rowNum = 0;
      for (i in uniq_1) {
      $("#elencoNomi1").append("<li>" + "<span active='1' id='element-" + rowNum + "' class='highlight hvr-grow'>" + uniq_1[i] + "</span>" + "</li>" + '<a target="_blank" href="http://en.wikipedia.org/wiki/' + uniq_1[i] + '"> (Wikipedia) </a>');
      rowNum++;
      
    }

    $("#elencoNomi1 span").click(function () {
      
      if($(this).attr("active") == "1"){
        $("#elencoNomi1 span").attr("active", "1");
        $(this).attr("active", "0");
        var thingy = $(this).html();
        console.log(thingy);
        var txt = thingy.toString();
        
        if (hasWhiteSpace(txt)){ 
          var txtn = txt.split(" ");
          console.log(txtn);
          $(".ArticleBody").highlight(txtn[txtn.length -1]); 
          
          $([document.documentElement, document.body]).animate({
            scrollTop: $("#ArticleBody").offset().top
        }, 100);
          
        }
        else {
          $(".ArticleBody").highlight(txt);
          $([document.documentElement, document.body]).animate({
            scrollTop: $("#ArticleBody").offset().top
        }, 100);
        }
        
        
        
      }
      else{
        $(".ArticleBody").removeHighlight();
        $(this).attr("active", "1");
        
      }
      
      
    });

      $("#infobox2 .card-text").append("<ul id=\"elencoNomi2\"></ul>");

        var rowNum = 0;
        for (i in uniq_2) {
        $("#elencoNomi2").append("<li >" + "<span active='1' id='element-" + rowNum + "' class='highlight hvr-grow'>" + uniq_2[i] + "</span>" + "</li>" + '<a target="_blank" href="http://en.wikipedia.org/wiki/' + uniq_2[i] + '"> (Wikipedia) </a>');
        rowNum++;
      }

      

      $("#elencoNomi2 span").click(function () {

        if($(this).attr("active") == "1"){
          $("#elencoNomi2 span").attr("active", "1");
          $(this).attr("active", "0");
          var thingy = $(this).html();
          console.log(thingy);
          var txt = thingy.toString();
          
          if (hasWhiteSpace(txt)){ 
            var txtn = txt.split(" ");
            console.log(txtn);
            $(".ArticleBody").highlight(txtn[txtn.length -1]); 
            
            $([document.documentElement, document.body]).animate({
              scrollTop: $("#ArticleBody").offset().top
          }, 100);
            
          }
          else {
            $(".ArticleBody").highlight(txt);
            $([document.documentElement, document.body]).animate({
              scrollTop: $("#ArticleBody").offset().top
          }, 100);
          }
          
          
          
        }
        else{
          $(".ArticleBody").removeHighlight();
          $(this).attr("active", "1");
          
        }
        
        
        
      });

      $("#infobox3 .card-text").append("<ul id=\"elencoNomi3\"></ul>");

        var rowNum=0; 
        for (i in uniq_3) {
        $("#elencoNomi3").append("<li >" + "<span active='1' id='element-" + rowNum + "' class='highlight hvr-grow'>" + uniq_3[i] + "</span>" + "</li>" + '<a target="_blank" href="http://en.wikipedia.org/wiki/' + uniq_3[i] + '"> (Wikipedia) </a>');
        rowNum++;
      }

      $("#elencoNomi3 span").click(function () {

        if($(this).attr("active") == "1"){
          $("#elencoNomi3 span").attr("active", "1");
          $(this).attr("active", "0");
          var thingy = $(this).html();
          console.log(thingy);
          var txt = thingy.toString();
          
          if (hasWhiteSpace(txt)){ 
            var txtn = txt.split(" ");
            console.log(txtn);
            $(".ArticleBody").highlight(txtn[txtn.length -1]); 
            
            $([document.documentElement, document.body]).animate({
              scrollTop: $("#ArticleBody").offset().top
          }, 100);
            
          }
          else {
            $(".ArticleBody").highlight(txt);
            $([document.documentElement, document.body]).animate({
              scrollTop: $("#ArticleBody").offset().top
          }, 100);
          }
          
          
          
        }
        else{
          $(".ArticleBody").removeHighlight();
          $(this).attr("active", "1");
          
        }
        
        
      });
}
    }
    else {
      $("#" + meta).attr("active", "0");
      $(".infobox .card-text").empty();
      resetmetadata();
    }
  });





});


//ancillary checking whitespace 
function hasWhiteSpace(s) {
  return s.indexOf(' ') >= 0;
}



