$('#article1_box').scroll(function() {
    console.log("ciao");
    var currY = $(this).scrollTop();
    var postHeight = $(this).height();
	var scrollHeight = $('.colonne_variabili').height();
    // Current percentual position
	var scrollPercent = Math.round((currY / (scrollHeight - postHeight)) * 100);

    $('.percentage').text(scrollPercent +"%"  );
    $(".circle").attr("stroke-dasharray", scrollPercent+", 100")
    
});