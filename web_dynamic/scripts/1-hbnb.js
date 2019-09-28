$( document ).ready(function() {
  $('input:checkbox').change(
    function(){
        if ($(this).is(':checked')) {
            alert('checked');
        } else {
            alert('unchecked');
        }
    });
});
