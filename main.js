
$(document).ready(function(){

  $("#front-title").fadeIn(3000);

  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    if (this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 750, function(){
   
        window.location.hash = hash;
      });
    }
  });
})

$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

function myMap() {

	let myCenter = new google.maps.LatLng(52.948121, -1.171632);
	let mapProp = {center:myCenter, zoom:12, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
	let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	let marker = new google.maps.Marker({position:myCenter});
	
	marker.setMap(map);
}

