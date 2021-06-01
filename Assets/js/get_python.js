function get_python(file, stringa) {
      $.ajax({
        method: 'GET',
        url: file+'.json',
        dataType:"json",
        success: function(d) {

          if (stringa == "commons") {
            if ($('#topcommons'+file+" li").length == 0){
            for (i in d.top10) {
              $("#topcommons"+file).append("<li>"+d.top10[i][0]+"("+d.top10[i][1]+")</li>");
            }
          }
          else  {
            $("#topcommons"+file).empty();
          }
        }
          if (stringa == "scores") {
              if ($("#topscores"+file+" li").length == 0){
              $("#topscores"+file).append("<li>Negative score: "+d.score['neg']+"</li>");
              $("#topscores"+file).append("<li>Neutral score: "+d.score['neu']+"</li>");
              $("#topscores"+file).append("<li>Positive score: "+d.score['pos']+"</li>");
          }
        
          else  {
            $("#topscores"+file).empty();
          }
        }
        },
        error: function() {
          alert('Could not load file '+file)
        }
      });
         }  