$('.colonne_variabili').scroll(function() {
    console.log("ao");
    var currY = $(this).scrollTop();
    var postHeight = $(this).height();
	var scrollHeight = $('#article1_box').height();
    // Current percentual position
	var scrollPercent = Math.round((currY / (scrollHeight - postHeight)) * 100);

    $('.percentage').text(scrollPercent +"%"  );
    $(".circle").attr("stroke-dasharray", scrollPercent+", 100")
    

});