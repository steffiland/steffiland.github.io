$( "li.task-list-item" ).click(function() {
  console.log( $(this).text() );
  $( this ).children('input').each(function () {
    this.prop("checked", !this.prop("checked"));
  }
                              
});
