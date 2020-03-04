$( document ).ready(function() {
  var $ppid = $("#pp-id").text();

  $( "li.task-list-item" ).click(function() {
    var $itemId = $(this).text().replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var $value;
    $( this ).children('input').each(function(){
      $(this).prop('checked', !$(this)[0].checked);
      $value = $(this)[0].checked ? 1 : 0;
    });
    console.log( $ppid + '.' + $itemId + " := " + $value);
    localStorage.setItem($ppid + '.' + $itemId , $value);
  });
  
  $( ".ppclear" ).click(function() {
    for (var i = 0; i < localStorage.length; i++){
      if ( localStorage.key(i).indexOf($ppid + '.') == 0 ) {
        localStorage.removeItem(localStorage.key(i));
      }
    }
  });

  $( "li.task-list-item" ).each(function() {
    var $itemId = $(this).text().replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var $value = localStorage.getItem($ppid + '.' + $itemId);
    if ( $value != null ) {
      $( this ).children('input').each(function(){
        $(this).prop('checked', ( $value ? true : false));
      });
      console.log( $ppid + '.' + $itemId + " = " + $value + ( $value ? true : false));
    }
  });
});