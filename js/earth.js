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
					url        : "/hendler.php?mod=json_catalog" + ( ( $.isEmptyObject( obj ) == true ) ? '&is_null=1' : '' ),
					type       : "POST",
					data       : obj,
					dataType   : "json",
					error      : function ( date ) {

								console.log( date.status );

								var status = date.status;

								if ( status == 500 ) {

									window.location.replace( 'http://www.серко.рф/500.php' );
								};
					},
					success    : function( data ) {

						var shops       = data.shops,
							arryMarkers = [],
							markerClast = [],
							arryPrt     = [];

						
						

							$.each( shops, function( i, val ) {
								 
								var adress = val.adress,
								 	dist   = val.dist,
								 	lat    = val.lat,
								 	lng    = val.lon,
								 	name   = val.name,
								 	pid    = val.pid;

								arryMarkers.push( [ name, lat, lng, adress, dist ] ); 	
							});


							 // Область показа маркеров
								var markersBounds = new google.maps.LatLngBounds();
								 
								$.each( arryMarkers, function( index, val ) {

								    	// Область показа маркеров
									 
									    var markerPosition = new google.maps.LatLng( val[1], val[2] );

									    // Добавляем координаты маркера в область
									    markersBounds.extend(markerPosition);

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
	function log( message ) {
	
     /* $( '<div>' ).text( message ).prependTo( '#log' );
      $( '#log' ).scrollTop( 0 );*/
    }

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
/*
						<div class="serko-shadow">
							<div class="se"></div>
							<div class="erko"></div>
							<strong class="ser"><b>Сер</b></strong><strong class="ko"><b>Ко</b></strong><strong class="r"><b>&reg;</b></strong>
						</div>



    $( '.serko-shadow, .russia' ).on( 'click', function(){
    	// $( '.search' ).autocomplete( 'search' );
    	window.location = '/catalog/';
    });
*/
			/*-----------------------------------------------------------------*/



			/*---------------------------Вызов карты----------------------------*/
	$( '.search' ).one('click', function(){

		var pl   = $( '.search' ).attr( 'placeholder' ),
			text = 'Керамическая плитка, Керамический гранит, Мозаика, Искусственный и Природный камень, Клеевые смеси, Затирки, Сопутствующие материалы';

				$( '.otrasl' ).append(' ' + pl );
				$( '.search' ).attr( 'placeholder', text );
				$( '.sektor' ).append( ' ' + text ).addClass( 'text-shadow' );
				$( '.content' ).prepend( '<div class="jumbotron cl2" id="map"></div>').after(function() {
                	initialize_google();
                });
				
	});
			/*-----------------------------------------------------------------*/



			/*-----------------Увиличение, уменьшени картинок------------------*/

		/*$( '.modalImg' ).on('click', function() {
			var _this  = $( this ),
				top    = _this.position().top,
				left   = _this.position().left,
				height = $(document).height() / 4;

			_this
				.clone()
				.addClass( 'bigImg' )
				.removeClass('modalImg')
				.appendTo( '.modal-body' )
				.css({
					width: '0%',
					top: top,
					left: left
				})
				.animate({
					width: '80%',
					opacity: 1,
					left: 80,
					top: height },
					2000, function() {
					});

			
		});
		
		$( '.modal-content' ).on('click', '.bigImg', function() {
			$( '.bigImg' ).animate({
				opacity: 0},
				1000, function() {
					$( '.bigImg' ).remove();
			});
		});*/


		/*-----------------------------------------------------------------*/




		/*-------------------------форма регистрации-----------------------*/


		var REG = {
			speed        : 1000,
			formCollback : 'easeInOutCubic',
			formReg      : $( '.reg' ).on('click', function() {
							$( 'div.register' ).slideDown( REG.speed, REG.formCollback );
							$( 'div.authorization' ).slideUp( REG.speed, REG.formCollback );
			}),
			formAut      : $( '.aut' ).on('click', function() {
							$( 'div.register' ).slideUp( REG.speed, REG.formCollback );
							$( 'div.authorization' ).slideDown( REG.speed, REG.formCollback );
			}),
			firstname    : $( 'input#firstname' ),
			lastname     : $( 'input#lastname' ),
			login        : $( 'input#login' ),
			email        : $( 'input#email' ),
			password     : $( 'input#password' ),
			conPassword  : $( 'input#confirm_password' ), 
			load         : $( '#regForm' ).validate({
									rules           : {
										firstname        : {
														required      : true,
														minlength     : 3
										},
										lastname         : {
														required      : true,
														minlength     : 3
										},
										login            : {
														required      : true,
														minlength     : 3
										},
										email            : {
														required      : true,
														email         : true,
														minlength     : 3
										},
										password         : {
														required      : true,
														minlength     : 5
										},
										confirm_password : {
														required      : true,
														minlength     : 5,
														equalTo       : '#password'
										}
									},
									messages       : {
										firstname        : {
													   required       : 'Обязательно заполните',
													   minlength      : jQuery.validator.format( 'Введите не мение {0}-х символов' )
										},
										lastname         : {
													   required       : 'Обязательно заполните',
													   minlength      : jQuery.validator.format( 'Введите не мение {0}-х символов' )
										},
										login            : {
													   required       : 'Обязательно заполните',
													   minlength      : jQuery.validator.format( 'Введите не мение {0}-х символов' )
										},
										email            : {
													   required       : 'Обязательно заполните',
													   email          : 'Enail должен содержать символ @',
													   minlength      : jQuery.validator.format( 'Введите не мение {0}-х символов' )
										},
										password         : {
													   required       : 'Обязательно заполните',
													   minlength      : jQuery.validator.format( 'Введите не мение {0}-и символов' )
										},
										confirm_password : {
													   required       : 'Обязательно заполните',
													   minlength      : jQuery.validator.format( 'Введите не мение {0}-и символов' ),
													   equalTo        : 'Пароль не совпадает'
										}
									},
									success       : function(label) {
									    	label.addClass( 'valid' ).text( 'Готово!' );
											label
									    		.parent( '.form-group' )
									    		.removeClass( 'has-error' )
									    		.addClass( 'has-success' );
									},
									submitHandler : function() {


											console.log( 'Имя : ' + REG.firstname.val() );
											console.log( 'Фамилия : ' + REG.lastname.val() );
											console.log( 'email : ' + REG.email.val() );
											console.log( 'Пароль : ' + REG.password.val() );
											console.log( 'Повтор пароля : ' + REG.conPassword.val() );

											/*$.ajax({
												url: '/path/to/file',
												type: 'default GET (Other values: POST)',
												dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
												data: {param1: 'value1'},
											})
											.done(function() {
												console.log("success");
											})
											.fail(function() {
												console.log("error");
											})
											.always(function() {
												console.log("complete");
											});*/
											


											$( 'button.register' ).on('click', function(e) {
												e.preventDefault();
											})
									}
			})
		};
		

		/*-----------------------------------------------------------------*/








});