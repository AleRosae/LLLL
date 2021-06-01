function get_python(file, stringa) {
      $.ajax({
        method: 'GET',
        url: '../Assets/experimental/'+file+'.json',
        dataType:"json",
        success: function(d) {
          if (stringa == "commons") {
            for (i in d.top10) {
              $("#topcommons"+file).append("<li>"+d.top10[i][0]+"("+d.top10[i][1]+")</li>");
            }
          }
          if (stringa == "scores") {
              $("#topscores"+file).append("<li>Negative score: "+d.score['neg']+"</li>");
              $("#topscores"+file).append("<li>Neutral score: "+d.score['neu']+"</li>");
              $("#topscores"+file).append("<li>Positive score: "+d.score['pos']+"</li>");
          }
        },
        error: function() {
          alert('Could not load file '+file)
        }
      });
         }  