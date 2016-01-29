$(function() {
			/*-------------------------Добавление карты-------------------------*/
	function initialize_google() {
		navigator.geolocation.getCurrentPosition( function( position ) { // Начало функции геолокации

			var	lat        = position.coords.latitude,
			    lng        = position.coords.longitude,
			    myPos 	   = new google.maps.LatLng(  lat, lng ),
			    mapOptions = { 
					zoom        : 3,
				 	center      : myPos,
				 	// mapTypeId   : google.maps.MapTypeId.TERRAIN,
				 	scrollwheel : false,
				},
			    map        = new google.maps.Map( document.getElementById( 'map' ), mapOptions );
			    myMarker   = new google.maps.Marker({
				    position  : myPos,
				    map       : map,
				    animation : google.maps.Animation.BOUNCE,
				    title     : 'Вы здесь :D',
				});

				var obj  = { 
					 		  'lat' : lat,
					 		  'lng' : lng,
					 		  'pid' : 0
				 	   	};

				$.ajax({
					url        : "/hendler.php?mod=json_points",
					type       : "POST",
					data       : obj,
					dataType   : "json",
					error      : function ( date ) {

								if ( window.location.hostname == 'www.xn--e1akmgd.xn--p1ai' ) {
									
									var status = date.status;

									if ( status == 500 ) {

										window.location.replace( 'http://www.серко.рф/500.php' );
									};
								};

					},
					success    : function( data ) {

						var shops       = data.shops,
							arryMarkers = [],
							markerClast = [];

						
						

							$.each( shops, function( i, val ) {
								 
								var adress = val.adress,
								 	lat    = val.lat,
								 	lng    = val.lon,
								 	name   = val.name;

								arryMarkers.push( [ name, lat, lng, adress ] ); 	
							});


							 // Область показа маркеров
								var markersBounds = new google.maps.LatLngBounds();
								 
								$.each( arryMarkers, function( index, val ) {

								    	// Область показа маркеров
									 
									    var markerPosition = new google.maps.LatLng( val[1], val[2] );

									    // Добавляем координаты маркера в область
									    markersBounds.extend( markerPosition );

									    // Создаём маркер
									    var marker = new google.maps.Marker({
									        position  : markerPosition,
									        map       : map,   
									        title     : val[0],
									        animation : google.maps.Animation.DROP
									    });

									    var contentString = '<div id="content">'  + val[3] + '</div>';
									    var infowindow    = new google.maps.InfoWindow({
									    	content : contentString
									    });
										google.maps.event.addListener( marker, 'click', function() {
										   infowindow.open( map, marker );
										});

								markerClast.push( marker );

								});


								var markerCluster = new MarkerClusterer( map, markerClast, {
									maxZoom  : 13,  // максимальный зум при котором мы еще группируем маркеры, дальше – уже нет
									gridSize : 70,  // размер ячеек сетки, чем меньше значение, тем меньше сетка группировки
									styles   : null // дополнительные стили - стиля нет
								});

								// Центрируем и масштабируем карту
								// map.setCenter( markersBounds.getCenter(), map.fitBounds( markersBounds ) );

					}
				});		
			});
	};
			/*------------------------------------------------------------------*/




			/*--------------------------Строка поиска--------------------------*/


    $( '.search' ).autocomplete({
      source: 'hendler.php?mod=helper&type=search',
      delay: 100,
      minLength: 1,
      search: function(){
      	$( '.loading' ).removeClass( 'loadingNone' );
      	
      },

      open: function(){
      	$( '.loading' ).addClass( 'loadingNone' );
      	
      },

      close: function(){
      	$( '.loading' ).addClass( 'loadingNone' );
      	
      },

      select: function( event, ui ) {
      	$(this).val(ui.item.value);
        $( '#serchForm' ).submit();
      }
    });
    $( '.search' ).autocomplete( 'widget' ).addClass( 'search-item' );

			/*-----------------------------------------------------------------*/



			/*---------------------------Вызов карты----------------------------*/
	$( '.search' ).one('click', function(){

		var pl   = $( '.search' ).attr( 'placeholder' ),
			text = 'Керамическая плитка, Керамический гранит, Мозаика, Искусственный и Природный камень, Клеевые смеси, Затирки, Сопутствующие материалы';

				$( '.otrasl' ).append(' ' + pl );
				$( '.search' ).attr( 'placeholder', text );
				$( '.sektor' ).append( ' ' + text ).addClass( 'text-shadow' );
				$( '.content' ).prepend( '<div class="jumbotron cl2" id="map"></div>')
                
                setTimeout( function () {
                	initialize_google();
                }, 500);
				
	});
			/*-----------------------------------------------------------------*/



			

});