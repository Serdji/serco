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
			speed       : 1000,
			slide       : $( '.reg' ).on('click', function() {
							$( 'div.register' ).slideToggle( REG.speed, 'easeInOutCubic' );
			}),
			email       : function() { return	$( 'input#exampleInputEmail2' ).val() },
			name        : function() { return	$( 'input#exampleInputName1' ).val() },
			password    : function() { return	$( 'input#exampleInputPassword2' ).val() },
			load        : function () {
							var _reg = this;
								console.log(_reg.email());
			},
			buttonStart : $( 'button.register' ).on('click', function(e) {
				e.preventDefault();
				REG.load();
				
			})

		};

		

		/*-----------------------------------------------------------------*/








});