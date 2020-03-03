var $ppid = $("#pp-id").text();

$( "li.task-list-item" ).click(function() {
  var $itemId = $(this).text().replace(/[^A-Z0-9]/ig, "").toLowerCase();
  console.log( $ppid + $itemId );
  $( this ).children('input').each(function(){
     $(this).prop('checked', !$(this)[0].checked);
  });                         
});
