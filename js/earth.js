$(function() {

		


			/*-------------------------Добавление карты-------------------------*/
	function initialize_google() {
		navigator.geolocation.getCurrentPosition(function(position)
		{
			var latitude = position.coords.latitude;
			var longitude = position.coords.longitude;
			var haightAshbury = new google.maps.LatLng(latitude,longitude);
			var mapOptions = {zoom:13,center: haightAshbury,mapTypeId:google.maps.MapTypeId.TERRAIN,scrollwheel:false}
			map = new google.maps.Map(document.getElementById('map'), mapOptions);
		// var lat = [];
		// lat = $('input#lat').val().split('|');
		// 	for(i=0;typeof lat[i] !== 'undefined';i++){lat[i]=Number(lat[i])/1000;}
		// var lng = [];
		// lng = $('input#lng').val().split('|');
		// 	for(i=0;typeof lng[i] !== 'undefined';i++){lng[i]=Number(lng[i])/1000;}
		// micon = $('input#micon').val().split('|');	
		// markers = [];
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
    $( '.serko-shadow, .russia' ).on( 'click', function(){
    	// $( '.search' ).autocomplete( 'search' );
    	window.location = '/catalog/';
    });
			/*-----------------------------------------------------------------*/



			/*---------------------------Вызов карты----------------------------*/
	$( '.search' ).one('click', function(){
		var pl = $( '.search' ).attr( 'placeholder' ),
			text = 'Керамическая плитка, Керамический гранит, Мозаика, Искусственный и Природный камень, Клеевые смеси, Затирки, Сопутствующие материалы';
				$( '.otrasl' ).append(' ' + pl );
				$( '.search' ).attr( 'placeholder', text );
				$( '.sektor' ).append( ' ' + text ).addClass( 'text-shadow' );
				$( '.content' ).prepend( '<div class="jumbotron cl2" id="map"></div>' );
				initialize_google();		
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
			email        : $( 'input#email' ),
			password     : $( 'input#password' ),
			conPassword  : $( 'input#confirm_password' ),
			var          : function() {
							var	firstnameForm    = this.firstname.val() == '' 
									? this.firstname
										.parent( '.form-group' )
										.addClass('has-error') 
									: this.firstname
										.parent( '.form-group' )
										.removeClass('has-error')
										.addClass('has-success'),
								lastnameForm    = this.lastname.val()   == '' 
									? this.lastname
										.parent( '.form-group' )
										.addClass('has-error') 
									: this.lastname
										.parent( '.form-group' )
										.removeClass('has-error')
										.addClass('has-success'),
								emailForm       = this.email.val()      == '' 
									? this.email
										.parent( '.form-group' )
										.addClass('has-error') 
									: this.email
										.parent( '.form-group' )
										.removeClass('has-error')
										.addClass('has-success'),
								passwordForm    = this.password.val()   == '' 
									? this.password
										.parent( '.form-group' )
										.addClass('has-error') 
									: this.password
										.parent( '.form-group' )
										.removeClass('has-error')
										.addClass('has-success'),
								conPasswordForm = this.conPassword.val() == '' 
									? this.conPassword
										.parent( '.form-group' )
										.addClass('has-error') 
									: this.conPassword
										.parent( '.form-group' )
										.removeClass('has-error')
										.addClass('has-success');
			},
			load         : $( '#regForm' ).validate({
								rules : {
									firstname        : "required",
									lastname         : "required",
									email            : "required",
									password         : "required",
									confirm_password : "required",
									firstname        : {
											required      : true,
									},
									lastname         : {
											required      : true,
									},
									email            : {
											required      : true,
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
			}),


							/*function() {

							if ( ( this.firstname.val()    == '' ) || 
							     ( this.lastname.val()     == '' ) || 
							 	 ( this.email.val()        == '' ) || 
								 ( this.password.val()     == '' ) ||
								 ( this.conPassword.val()  == '' ) ) {

									
									this.var();
									

								} else {

									this.var();

										$.ajax({
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
										});
										

									console.log(this.firstname.val());
									console.log(this.lastname.val());
									console.log(this.email.val());
									console.log(this.password.val());
									console.log(this.conPassword.val());
								}	
			},*/
			buttonStart  : $( 'button.register' ).on('click', function(e) {
				e.preventDefault();
				// REG.load();
				
			})

		};

		

		/*-----------------------------------------------------------------*/








});