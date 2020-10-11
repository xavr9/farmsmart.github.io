// CHOOSE IMAGE AND DISPLAY
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#blah').attr('src', e.target.result);
      $('#jx-image').removeClass('jx-hide');
      $('#home').removeClass('fade in');  
	  $('#map').removeClass('fade in');  
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}
$( document ).ready(function() {
    $("#imgInp").change(function() {
	  readURL(this);
	});
});

