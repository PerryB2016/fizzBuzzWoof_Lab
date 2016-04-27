//jquery
$(document).ready(function(){
  $('li').hover(function() {
    $(this).fadeTo(100,0.25);
  },
  function() {
    $(this).fadeTo(100,1);
  });
    var savetext = $(this).text();
  $('li').click(function(){
      $(this).css("background-color","yellow");
          if ($(this).text() === "clicked"){
            $(this).text(savetext);
            console.log(savetext);
          }
          else {
              $(this).text("clicked");
              console.log("something else");
          }
});
});
