		function initialize() {
		  var map = new google.maps.Map(
			document.getElementById('map-canvas'), {
			  center: new google.maps.LatLng(43.60879898071289,1.4298615455627441),
			  scrollwheel: false,
			  zoom: 17,
			  mapTypeId: google.maps.MapTypeId.ROADMAP
			  
		  });

		  var marker = new google.maps.Marker({
				position: new google.maps.LatLng(43.60879898071289,1.4298615455627441),
				map: map
		  });

		}
		google.maps.event.addDomListener(window, 'load', initialize);