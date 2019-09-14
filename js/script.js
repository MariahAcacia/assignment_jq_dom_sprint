
var manipulate = function() {

  $("h1").html("Something Cheeky");

  var $myNewList = $("<ol><li>foo</li><li>man</li><li>chu</li></ol>");

  $myNewList.appendTo(".info-box");

  var $sadClasses = $(".sad");

  $sadClasses.addClass("happy")
             .removeClass("sad");

 $("#annoying-popup a").attr('href', "http://www.cashcats.biz");

 var $popup = $("#annoying-popup")
 var position = $popup.position();
 var $newTop = position.top + 30

 $popup.attr("style", "top:" + $newTop + "px; right:0px;");

 var $elipses = $(".suggested-topics ul").children().last().prev();

 $elipses.html("BOOOOO");

 $('input', 'form').first().replaceWith("<textarea>");

}

manipulate();
