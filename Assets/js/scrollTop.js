$(document).ready(function(){
  $("#article1_box button").click(function(){
    $("html, body").animate({
      scrollTop: $("#Title").offset().scrollTop}, 2000);
    });
  });
    
