
$(document).ready(function(){
  var originalText;

  $("li").hover(function() {
    $(this).fadeTo(100,0.25);
  },
  function() {
    $(this).fadeTo(150,1);
  });
    //var savetext = $(this).text();
  $("li").click(function(){
      $(this).css("background-color","yellow");
          if ($(this).text() === "clicked"){
            $(this).text(savetext);
            console.log(originalText);
            $(this).text(originalText);
          }
          else {
              originalText = $(this).text();
              $(this).text("clicked");
              $(this).css("background-color", "yellow");
          }
});
});
