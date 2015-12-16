$(function() {
			/*-------------------------Добавление карты-------------------------*/
	function initialize_google() {
		navigator.geolocation.getCurrentPosition(function(position)
		{
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var haightAshbury = new google.maps.LatLng(latitude,longitude);
		var mapOptions = {zoom:13,center: haightAshbury,mapTypeId:google.maps.MapTypeId.TERRAIN,scrollwheel:false}
		new google.maps.Map(document.getElementById('map'), mapOptions);	
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
		var pl = $( '.search' ).attr( 'placeholder' ),
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