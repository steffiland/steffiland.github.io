function weekOfMonth(wday, mday) {
    var d = new Date();
    if ( !wday ) { wday  = d.getDay(); }
    //wday = 0 [Sun] ... 6 [Sat] (day of week)
    if (!mday)  { mday= d.getDate(); }
    //mday = 1 ... 31 (day of month)

    //we start counting weeks with 1:
    var wnum = 1;
    var add = 2;
    // if the month starts on a monday: ...
    if (((mday - wday) %7) == 0 ) { add = 1; }

    // if (mday < wday) { wnum = 1; }
    if (mday >= wday) {
        wnum = Math.floor((mday -wday)/7) + add;
    }
    return wnum; 

}

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
        $(this).prop('checked', ( $value == 1 ? true : false));
      });
      console.log( $ppid + '.' + $itemId + " = " + $value + ( $value == 1 ? true : false));
    }
  });
});
