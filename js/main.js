$(function(){

	var	$blockHeight = $( '.blockHeight' ),
	    topBlock     = $blockHeight.children().eq(1).outerHeight(),
		centralBlock = $blockHeight.children().eq(2).outerHeight(),
		bottomBlock  = $blockHeight.children().eq(3).outerHeight(),
		$figure      = $( 'figure' );
		
		$blockHeight.children().eq(1).children().css('height', topBlock);
		$blockHeight.children().eq(2).children().css('height', centralBlock);
		$blockHeight.children().eq(3).children().css('height', bottomBlock);
	
			

	allFuncs();

	ini = init();


/*------------map---------------*/

	var map_min = 0;
		$( document ).scroll( function() {

		if( ( $( document ).scrollTop() < 600 || 
			  $( document ).scrollTop() == 600 ) && 
			  map_min == 0 ) {

				$('div#map').removeClass('cl2').addClass('cl1');
				map_min = 1;

			}
		});

	});

/*-------------------------------------*/








/*----------------Асинхронная загрузка страниц-----------------------*/


var ajaxNavigation	 = true;
var parserPressKey	 = 0;
var oldKeyVal		 = '';
var thisPage		 = 1;
var prePage			 = 0;
var prePageCoords	 = 0;
var nxtPage			 = 2;
var nxtPageCoords	 = 0;
var pagesHistory	 = Array();
var marker			 = '';
var prep			 = 0;
var finish_page		 = 0;
var old_loc			 = '';
var reLoactionFixVar = 0;
var sliderPriceInit	 = 0;
var loadedPage		 = 0;
var ini              = null;

function str_replace ( search, replace, subject ) {
	if(!(replace instanceof Array)){
		replace=new Array(replace);
		if(search instanceof Array){
			while(search.length>replace.length){
				replace[replace.length]=replace[0];
			}
		}
	}
	if(!(search instanceof Array))search=new Array(search);
	while(search.length>replace.length){
		replace[replace.length]='';
	}
	if(subject instanceof Array){
		for(k in subject){
			subject[k]=str_replace(search,replace,subject[k]);
		}
		return subject;
	}
	for(var k=0; k<search.length; k++){
		var i = subject.indexOf(search[k]);
		while(i>-1){
			subject = subject.replace(search[k], replace[k]);
			i = subject.indexOf(search[k],i);
		}
	}
return subject;
}

function urlEncode(url)
{
	if(url == ''){ return url; }
var len = Number(url.length)-1;
	if(url[0] != '/'){url = '/' + url;}
return url;
}

function varsEncode(str)
{
var d_arr = Array();
var t_arr = str.split('/');
d_arr = '&url=/';
	for(i=1;t_arr[i];i++)
	{
	d_arr += t_arr[i] + '/';
	}
return d_arr;
}
$( '.secret' ).on('click', function(event) {
		$( "*" ).draggable();

	});
function reLoaction(new_loc,loadad,goBack,bPages)
{
	if(typeof loadad == "undefined"){loadad = 0;}
	if(typeof goBack == "undefined"){goBack = 0;}
	if(typeof bPages == "undefined"){bPages = 0;}
	if(ajaxNavigation == true)
	{
	ajaxNavigation = false;
	var loc = new_loc;
	curLoc = urlEncode(loc);
	var ld = (location.toString().match(/#(.*)/) || {})[1] || '';
	var	l = (location.pathname || '') + (location.search || '');
	var oLoc = old_loc.split('/');
	var nLoc = new_loc.split('/');
		if(ld != ''){l += '#' + ld;}
		if((curLoc != l || loadad == 1) && curLoc != '')
		{
		$('div#loadProcess').css('display','block');
		$('div#loadProcess div.mess p').html('Загрузка...');
			if(curLoc.indexOf('/back/') + 1){curLoc = str_replace('/back/','/',curLoc);}
			if(goBack == 0)
			{
			history.pushState({ foo: curLoc }, "", curLoc);
			}
		load('get_page', varsEncode(curLoc));
		}
		else
		{
		ajaxNavigation = true;
		}
	}
}

									/*------------Основной код--------------*/
	
	function allFuncs()
	{
	var urls = window.location.href.split('/');

$( 'a[href="/"]' ).on('click', function() {
	$( 'div.jumbotron.cl1' ).remove();
	window.location = '/';
});


/*--------Функция сортировки пунктов внутри инпута по алфавиту--------*/


	function alphabetical () {
		
		function sortLi ( inputIndex ) {
			$( document ).on( 'click', 'div.ui-state-default', function() {
					var $mylist    = $( 'ul.ui-autocomplete' ).eq( inputIndex ),
					    listitems  = $mylist.children( 'li:gt(0)' ).get();
					listitems.sort( function( a, b ) {
					   var compA = $( a ).text().toUpperCase(),
					       compB = $( b ).text().toUpperCase();
					   return ( compA < compB ) ? -1 : ( compA > compB ) ? 1 : 0;
					});

					$.each( listitems, function( idx, itm ) { 
						$mylist.append( itm ); 
					});
			});
		};
		setTimeout( function () {

			var $mylist      = $( 'input.custom-combobox-input' ),
			    arry         = [],
			    inputNamber  = 7; // с какого инпута начинать пункты по алфавиту. Отсчет с 0 до N

			$.each( $mylist, function( index, val ) {
				arry.push( val );
			});

			for ( var i = inputNamber; i <= arry.length; i++ ) {
				sortLi ( i );
			};

		}, 100);

	};

	alphabetical ();


/*--------------------------------------------------------------------*/ 





/*------------Эмитация нажатия Enter в input номера страниц-----------*/

	function inputPageEnter () {
		
		setTimeout( function () {
			var e = $.Event( "keypress", { keyCode: 13 } );
			$( 'input.inputNumber' )
				.focus()
				.trigger( e );
		}, 100);
	};
	inputPageEnter ();


/*--------------------------------------------------------------------*/




/*-------------Пpи наведение имя коллекции делается жирным------------*/

	function collNameBold () {
		
		$( '.level1A' ).on('mouseover', function() {
			$( this )
				.find( '.coll_name' )
				.css('font-weight', 'bold');
		});

		$( '.level1A' ).on('mouseout', function() {
			$( this )
				.find( '.coll_name' )
				.removeAttr( 'style' );
		});

	};

	collNameBold ();

/*--------------------------------------------------------------------*/



	
/*-----------------------Подсветка номера страниц---------------------*/

	function pageNumberBackground () {

		var	urlPage = window.location.pathname;

		$( 'ul.pageNumber li > a[href="' + urlPage + '"]' )
			.parent()
			.addClass('pageNumberBackground');
		
	};

/*--------------------------------------------------------------------*/


/*---------------Запрет на выделение и копирование текста------------*/


	// document.ondragstart = noselect;   // запрет на перетаскивание     
	document.onselectstart = noselect;    // запрет на выделение элементов страницы     
	// document.oncontextmenu = noselect;    // запрет на выведение контекстного меню 

	function noselect() {
		return false;
	};  


/*-------------------------------------------------------------------*/




/*---------------Временно уберает рамку где нет картинки-------------*/


	
		$( 'img[src="http://images.serko.local/noimage.png"]' ).css('border', 'none');
		$( 'img[src="http://images.serko.local/"]' )
			.attr('src', 'http://images.serko.local/noimage.png')
			.css('border', 'none');

	
/*-------------------------------------------------------------------*/





/*-----------------------Удаление правого фильтра--------------------*/

	
 function ShutdownFilter () {
 	if ( $( '.heightCards2' ).hasClass('levels2') ) {
 		$( '.filtrsLevel2' ).remove();
 		$( '.centerBlock' )
 			.css('width', '1190px')
 			.find('.slider')
 			.addClass('ShutdownFilter')
 			.siblings()
 			.find('.search')
 			.addClass('ShutdownFilter')
 			.parent()
 			.siblings('.conDir')
 			.addClass('ShutdownFilter');

 	};
 }; 

 ShutdownFilter ();


/*-------------------------------------------------------------------*/



/*-----------------------Отобрать магазины по------------------------*/


	$( '.myBtnStores' ).on('click', function(e) {
		e.preventDefault();
	$( this )
		.toggleClass( 'myBtnActive' );
	});

	
/*-----------------------------------------------------------------*/




/*----------------------------Акардионы----------------------------*/	


	

	$( '.myBtnVse' ).addClass( 'myBtnActive' );

	$( '.myBtnVse' ).on('click', function() {
		$( '.item' ).removeAttr( 'style' );
		$( this ).addClass( 'myBtnActive' );
		$( '.myBtn' ).removeClass( 'myBtnActive' );
	});

	$( '.myBtn' ).on( 'click', function() {
		var _this = $( this );
		_this.addClass( 'myBtnActive' );


		_this
		  .parent()
		  .siblings()
		  .children( 'button' )
		  .removeClass( 'myBtnActive' );
		$( '.item' ).css('display', 'none');		 
		
			 
			 
	});


	$( '.myBtnInfo' ).on('click', function() {
		$( this ).addClass( 'myBtnActive' );
	});
	$( '.closes, .fade' ).on('click', function() {
		$( '.myBtnInfo' ).removeClass('myBtnActive');
	});





	$( '.accordionStart' ).on( 'click', function() {
		var _this = $( this ),
		    speedUp = 1000;
			_this.next( '.accordion' )
					 .slideToggle( speedUp, 'easeInOutCubic' );

			_this
			  .parent()
			  .siblings()
			  .children( '.accordion' )
			  .slideUp( speedUp, 'easeInOutCubic' );
		


			if ( ! _this.hasClass( 'accordionAktiv' ) ) {
				_this.addClass( 'accordionAktiv' );
				_this
				   .find( '.removSadow' )
				   .addClass('removeSadowClick');

			}else{
				_this.removeClass('accordionAktiv');
				_this
				  .find( '.removSadow' )
				  .removeClass( 'removeSadowClick' );
			};

			_this
			  .parent()
			  .siblings()
			  .children( '.accordionStart' )
			  .removeClass( 'accordionAktiv' );
					 
			_this
			  .parent()
			  .siblings()

			  .find('.removSadow')
			  .removeClass( 'removeSadowClick' );


		

	});



	$( '.Point' )
		.prev()
		.addClass( 'pageNamberVerticalBorder' );


	

/*-----------------------------------------------------------------*/





/*---------------------Карта под размер экрана---------------------*/


var $mapHeight = $( window ).height();
$( '#map' ).css('height', $mapHeight - 33);

/*-----------------------------------------------------------------*/
			
/*----------------------Выровнить все блоки------------------------*/




function blockHeight() {
	init();
var count_load_img     = 0;
var count_load_img_max = 0;
	$( '.blockHeight div.heightCards2 img' ).load(function() {
		count_load_img++;

		var hh = Number($(this)
			.parent('div')
			.parent('figure')
			.parent('a')
			.parent('div')
			.height());

			if(hh > count_load_img_max)
				{
					count_load_img_max = hh;
				}
			if(count_load_img == 3)
			{
			

	var	$blockHeight    = $( '.blockHeight' ),
		$blockHeight1   = $blockHeight.children().eq(1),
		$blockHeight2   = $blockHeight.children().eq(2),
		$blockHeight3   = $blockHeight.children().eq(3),
	    topBlock     	= $blockHeight1.outerHeight(),
		centralBlock 	= $blockHeight2.outerHeight(),
		bottomBlock  	= $blockHeight3.outerHeight(),
		$figure       	= $( 'figure' ),
		arrHeightFigure = new Array();
		
		$blockHeight1.children().css('height', topBlock);
		$blockHeight2.children().css('height', centralBlock);
		$blockHeight3.children().css('height', bottomBlock);
		

			}
	
	});
};

	

blockHeight();

	function intervalblockHeight () {
		
		var intevalblockHeight = setInterval( function (){
			blockHeight();
		}, 100 );

		setTimeout( function (){
			clearInterval( intevalblockHeight );
		}, 1500 );
	};
intervalblockHeight ();



/*-----------------------------------------------------------------*/
   


/*--------------------------Выгруска картиноак---------------------*/

	function imgs( i ){

		if(typeof i === 'undefined')
		  {
		  	i = 1;
		  }

		var jqxhr = $.ajax('/iimg/collection'+urls[4]+'.'+String(i)+'.png', {
						success: function( data ){
							var img = "<img src='/iimg/collection"+urls[4]+"."+String(i)+".png' class='arrImg opacityArrImg1'>";
							$( '.minImg' ).append( img );
							imgs( ++i )
						},
						error: function( data ){
							$( '.minImg' )
								.children( 'img:first' )
								.removeClass( 'opacityArrImg1' )
								.addClass( 'opacityArrImg0' );
							$( '.arrImg' ).on( 'click', function() {
									$( '.arrImg' )
										.removeClass( 'opacityArrImg0' )
										.addClass( 'opacityArrImg1' );
									$( this )
										.removeClass( 'opacityArrImg1' )
										.addClass( 'opacityArrImg0' );
								var href = $( this ).attr( 'src' );
								$( '.bigImg img' ).attr( 'src',href );
							});
						}
					});
	};

	// imgs();

	$( '.openImg' ).on( 'click', function() {
		$( '.closeImg' )
			.css({
				  'position'  : 'absolute',
				  'display'   : 'inline', 
				  'min-width' : '680px',
				  'left'      : '7%',
				  'z-index'   : '999'
				})
			.animate({'opacity': '1'}, 300);
		$('body').append('<div id="preLoader"></div>');
	});

	$( '.closeImg' ).on( 'click', function() {
		$( this ).removeAttr( 'style' );
		$( '#preLoader' ).remove();
	});



/*-----------------------------------------------------------------*/




/*----------------Выравнивание картинок коллекции------------------*/


	// imgWidthHeight ();

		
	// setTimeout( imgWidthHeight, 500 );

	function funImgWidthHeight () {

		function imgWidthHeight (){

			if ( $( '.level1Img' ).attr('style') ) {
					$( '.level1Img' ).removeAttr('style');

				};
			$.each( $( '.level1Img' ), function(index, val) {
				var _this			   = $(val),	
					imgWidth           = _this.width(),
					imgHeight          = _this.height(),
					pictureLvel1Width  = $( '.PictureLvel1' ).width(),
					pictureLvel1Height = $( '.PictureLvel1' ).height();


					
				

					if ( imgWidth >= imgHeight ) {
						_this.css('height', '200');

						var WidthAdjustment = Math.ceil(_this.width() / 2 - pictureLvel1Width / 2);
						_this.css('right', WidthAdjustment);


					}else{
						_this.css('width', '200');

						var HeightAdjustment = Math.ceil(_this.height() / 2 - pictureLvel1Height / 2);
						_this.css('bottom', HeightAdjustment);

					};

						
			});	
		}; 

		var funImgWidthHeight = setInterval( function () {
			imgWidthHeight ();
		}, 100 );

			setTimeout( function (){
				clearInterval( funImgWidthHeight );
			}, 2000);
	};

	funImgWidthHeight ();





/*-----------------------------------------------------------------*/


/*-------------Выравнивание картинок внутри коллекции--------------*/



	function imgColl () {
		

		var $img = $( '.Picture img' );

		$.each( $img, function(index, val ) {
			 
			 var _this = $( val );

			 _this.removeAttr( 'style' );

			

			 var imgHeight       = _this.height(),
			 	 imgWidth        = _this.width(),
			 	 min             = 2,
			 	 max             = 6,
			 	 maxSize         = 50,
			 	 textHeight      = Number(_this.parents('.opedDialog').find('.height').text()),
			 	 textWidth       = Number(_this.parents('.opedDialog').find('.width').text()),
			 	 increase        = textWidth > maxSize || textHeight > maxSize ? min : max,
			 	 crutchImgHeight = textHeight == 0 ? imgHeight : 0, // костыль пока выдаються нули в размерах
			 	 crutchImgWidth  = textHeight == 0 ? imgWidth : 0, // ...
			 	 resultHeight    = Math.ceil( textHeight * increase + crutchImgHeight ),
			 	 resultWidth     = Math.ceil( textWidth * increase + crutchImgWidth ),
			 	 $blockHeight     = $( '.Picture' ).height();



			 	
			 	 

			 if ( imgWidth > imgHeight) {
			 	var alignment   = Math.ceil ( $blockHeight / 2 - resultWidth / 2 );
			 	_this.css({
			 		width      : resultHeight,
			 		height     : resultWidth,
			 		marginTop  : alignment
			 	});
			 } else {
			 	var alignment   = Math.ceil ( $blockHeight / 2 - resultHeight  / 2 );
			 	_this.css({
			 		width      : resultWidth,
			 		height     : resultHeight,
			 		marginTop  : alignment
			 	});
			 }	 


		});

	}

	imgColl ();


		function intervalImgColl () {
		
		var intervalImgColl = setInterval( function (){
			imgColl ();
		}, 100 );

		setTimeout( function (){
			clearInterval( intervalImgColl );
		}, 1500 );
	};

	intervalImgColl ();


/*-----------------------------------------------------------------*/


	/*-------------------------Фильтр сладоров---------------------------*/


				function slider ( className, min, max, text ) {
						
					

					var defaultValuesMin = max*0.2,
						defaultValuesMax = max*0.8;

					$( className ).editRangeSlider( { 
						bounds:{ min: min, 
								 max: max 
								},
						defaultValues:{ min: min, 
									    max: max
									   }, step: 1 } );



					$( className ).bind( "userValuesChanged", function( e, data ){
						   filterObj();
					});
				  
				};	


	/*-------------------------------------------------------------------*/



						/*-------------------------Фильтр размера плитки---------------------------*/

				/*------------------По Длина-----------------------*/




		slider( "#slider-length", 0, 100, "Длина: " );

				/*---------------------------------------------*/
				/*------------------По Ширина-----------------------*/

	


		slider( "#slider-width", 0, 100, "Ширина: " );

				/*---------------------------------------------*/
				/*------------------По Толщене-----------------------*/



		slider( "#slider-thickness", 0, 100, "Толщена: " );

				/*---------------------------------------------*/  

					/*-------------------------------------------------------------------------*/

				/*--------slider по ценам--------*/
				

				slider( "#slider-range", 0, 10000, "Цена: " );


				  /*-----------------------------------*/	

						/*-----------------Рамка для выбранного цвета------------------*/


		$( '.colors' ).on( 'click', function (){
			
			
			$( '.colorFilter' ).append( '<span class="CancelFramework">[Отмена]</span>' );
			if ( $( this ).is( '.colorBorder' ) ) { 

				$( this ).removeClass('colorBorder');
				$( 'div.color div' ).remove();
				$( 'div.color strong' ).remove();
				$( 'div.color' ).fadeOut( 500 );
				filterObj();

				
			}else{

				$( '.colors' ).removeClass( 'colorBorder' );
				$( this ).addClass( 'colorBorder' );

				var color_id  = $( this ).attr( 'id' ),
					colorText = $( this ).attr( 'data-original-title' ),
					$divColor = $( 'div.color' );


				$divColor.append( '<strong>' + colorText + '</strong>' );
				$divColor
					.append('<div id="filtr_color">'
								+'<div id=' + color_id + ' type="resultsFilterColor" class="col-lg-2 col-md-2 col-sm-2 col-xs-2 colors">'
									+'<img src="/temp/colors.png" alt="">'
								+'</div>'
							+'</div>'
							+'<button type="button" class="btn btn-success btnClose CancelFramework" style="position: absolute; left: 78%; top: 34%;">Отмена</button>')
					.fadeIn( 2000 );
				



				filterObj();

			};
		});


		$(document).on("click", ".CancelFramework", function(){
			var $divColor  = $( 'div.color' );
			$( '.colors' ).removeClass('colorBorder');
			$divColor
				.children('div') 
				.remove();
			$divColor
				.children('strong' )
				.remove();
			$divColor.fadeOut(500);
			$( '.CancelFramework' ).remove();
			filterObj();
		});


			
			
			

					/*-------------------------------------------------------------*/



					/*------------------Выгруска номера странице-------------------*/

			function pageList (){
				$( '.pageA' ).on('click', function() {
					$( this ).addClass('pageClass');
					
					filterObj();
				});
				$( '.inputNumber' ).on('keypress', function(e){
					if(e.charCode == 13 || e.keyCode == 13)
					{
						$( this ).addClass('pageClass');
						var	value = $(".inputNumber").val();
						$(".inputNumber").attr('out_id', value);
						filterObj();
					}
					
				});
			};
			
					/*-------------------------------------------------------------*/

				$( '.breadCrumbs' )
					.children( 'a' )
					.eq(2)
					.addClass('breadCrumbsA');


	/*-----------------Функция сортировки фильтров-----------------*/

   	function filterObj(){

							  	  
			
			$( 'option.remov' ).attr('disabled', 'true');
			$( 'div.colors' ).addClass('colorsNone');
			$( 'div#filtr_color > div[type="resultsFilterColor"]' ).removeClass('colorsNone');






/*------------------------Геолокация google map-----------------------*/




						

	navigator.geolocation.getCurrentPosition( function( position ) { // Начало функции геолокации

		var	lat        = position.coords.latitude,
		    lng        = position.coords.longitude,
		    myPos 	   = new google.maps.LatLng( lat, lng ),
		    mapOptions = { 
				zoom        : 14,
			 	center      : myPos,
			 	mapTypeId   : google.maps.MapTypeId.TERRAIN,
			 	scrollwheel : false,
			},
		    map        = new google.maps.Map( document.getElementById( 'map' ), mapOptions );
		    myMarker   = new google.maps.Marker({
			    position  : myPos,
			    map       : map,
			    animation : google.maps.Animation.BOUNCE,
			    title     : 'Вы здесь :D',
			});

			var markers = [
			  [ '1', lat + 0.003, lng + 0.003 ],
			  [ '2', lat + 0.001, lng + 0.01] ,
			  [ '3', lat + 0.005, lng + 0.003 ],
			  [ '4', lat + 0.002, lng + 0.02 ],
			  [ '5', lat + 0.007, lng + 0.006 ],
			  [ '6', lat - 0.01, lng - 0.007 ],
			  [ '7', lat - 0.005, lng + 0.005 ],
			  [ '8', lat + 0.0015, lng - 0.0016 ],
			  [ '9', lat - 0.002, lng + 0.036 ],
			  [ '10', lat + 0.009, lng - 0.02 ],
			  [ '1', lat + 5, lng + 4 ],
			  [ '2', lat + 2, lng + 7] ,
			  [ '3', lat + 2, lng + 8 ],
			  [ '4', lat + 4, lng + 9 ],
			  [ '5', lat + 1, lng + 7 ],
			  [ '6', lat - 8, lng - 4 ],
			  [ '7', lat - 5, lng + 8 ],
			  [ '8', lat + 5, lng - 0 ],
			  [ '9', lat - 2, lng + 3 ],
			  [ '10', lat + 5, lng - 9 ],
			  [ '1', lat + 6, lng + 4 ],
			  [ '2', lat + 3, lng + 7] ,
			  [ '3', lat + 3, lng + 8 ],
			  [ '4', lat + 5, lng + 9 ],
			  [ '5', lat + 2, lng + 7 ],
			  [ '6', lat - 9, lng - 4 ],
			  [ '7', lat - 6, lng + 8 ],
			  [ '8', lat + 6, lng - 0 ],
			  [ '9', lat - 3, lng + 3 ],
			  [ '10', lat + 6, lng - 9 ], 
			  [ '1', lat + 6, lng + 5 ],
			  [ '2', lat + 3, lng + 8] ,
			  [ '3', lat + 3, lng + 9 ],
			  [ '4', lat + 5, lng + 10 ],
			  [ '5', lat + 2, lng + 8 ],
			  [ '6', lat - 9, lng - 5 ],
			  [ '7', lat - 6, lng + 9 ],
			  [ '8', lat + 6, lng - 1 ],
			  [ '9', lat - 3, lng + 4 ],
			  [ '10', lat + 6, lng - 10 ],
			  [ '1', lat + 7, lng + 6 ],
			  [ '2', lat + 4, lng + 9] ,
			  [ '3', lat + 4, lng + 10 ],
			  [ '4', lat + 5, lng + 11 ],
			  [ '5', lat + 3, lng + 9 ],
			  [ '6', lat - 10, lng - 6 ],
			  [ '7', lat - 7, lng + 10 ],
			  [ '8', lat + 7, lng - 2 ],
			  [ '9', lat - 4, lng + 5 ],
			  [ '10', lat + 7, lng - 11 ],
		];

		var markerClast = [];


	  // Область показа маркеров
		var markersBounds = new google.maps.LatLngBounds();
		 
		for ( var i = 0; i < markers.length; i++ ) {

		    var markerPosition = new google.maps.LatLng( markers[i][1], markers[i][2] );
		 
		    // Добавляем координаты маркера в область
		    markersBounds.extend(markerPosition);
		    // Создаём маркер
		    var marker = new google.maps.Marker({
		        position  : markerPosition,
		        map       : map,   
		        title     : markers[i][0],
		        animation : google.maps.Animation.DROP
		    });
		    markerClast.push( marker );
		    
		};
		var markerCluster = new MarkerClusterer( map, markerClast, {
			maxZoom  : 13,  // максимальный зум при котором мы еще группируем маркеры, дальше – уже нет
			gridSize : 70,  // размер ячеек сетки, чем меньше значение, тем меньше сетка группировки
			styles   : null // дополнительные стили - стиля нет
		});

		// Центрируем и масштабируем карту
		map.setCenter( markersBounds.getCenter(), map.fitBounds( markersBounds ) );

		/*----Scroll----*/

		$( 'html, body' ).scrollTop( 600 );

		/*--------------*/



/*--------------------------------------------------------------------*/





					/*---------------Функция место определения координат------------*/
				

				function nav () {
					
					function latitude () {
							if( jsonstr != '{' )
									{
										jsonstr += ',';
									}
							var type   = 'lat',
			            		out_id = lat;

			            	return	jsonstr += '"'+type+'"'+':'+'"'+out_id+'"';	
					};

					function longitude () {
							if( jsonstr != '{' )
									{
										jsonstr += ',';
									}
							var type   = 'lng',
			            		out_id = lng;

			            	return	jsonstr += '"'+type+'"'+':'+'"'+out_id+'"';	
					};
					latitude ();
					longitude ();
				};
					/*--------------------------------------------------------------*/





					/*-----------------Функция сортировки слайдоров-----------------*/

			function sliderJson ( className, typeMin, typeMax) {
				
	            function sliderJsonMin ( className, typeMin ){
	            	
	    			$( className ).each( function( index, el ) {
	    			if( jsonstr != '{' )
							{
								jsonstr += ',';
							}
					var type     = typeMin,
	            		out_id   = $( el ).find('.ui-editRangeSlider-inputValue').eq(0).val();
	            		jsonstr += '"'+type+'"'+':'+'"'+out_id+'"';
	    			});
	            };

	            function sliderJsonMax ( className, typeMax ){
	            	
	    			$( className ).each( function( index, el ) {
	    			if( jsonstr != '{' )
							{
								jsonstr += ',';
							}
					var type     = typeMax,
	            		out_id   = $( el ).find('.ui-editRangeSlider-inputValue').eq(1).val();
	            		jsonstr += '"'+type+'"'+':'+'"'+out_id+'"';
	    			});
	            };
	            sliderJsonMin ( className, typeMin );
	            sliderJsonMax ( className, typeMax );

			};
				
					/*--------------------------------------------------------------*/


			
					/*---------общая функция сортировки для цвета и страниц---------*/

			function eachJson ( nameClass ){
				$( nameClass ).each( function( index, el ) {
				if( jsonstr != '{' )
						{
							jsonstr += ',';
						}
            	var type     = $( el ).attr( 'type' ),
            		out_id   = $( el ).attr( 'out_id' );
            		jsonstr += '"'+type+'"'+':'+'"'+out_id+'"';
					

				});
			};

					/*--------------------------------------------------------------*/
					


					/*-------------------Функция сортировки инпутов-----------------*/	

			function optinJson () {
				 
				$( 'select.combobox option:selected:not(.0)' ).each( function( index, el ) {
					if( jsonstr != '{' )
						{
							jsonstr += ',';
						}
					var type           = $( el ).parent( 'select' ).attr( 'type' ),
						out_id         = $( el ).attr( 'out_id' );
					    jsonstr       += '"'+type+'"'+':'+'"'+out_id+'"';
					    jsonstr_debug += '&debug_'+type+'='+out_id;
				});
			};

					/*--------------------------------------------------------------*/

			
			var jsonstr       = '{';
			var jsonstr_debug = '';
				nav ();
				eachJson ( '.pageClass' );
				eachJson ( '.colorBorder' );
				sliderJson ( '#slider-range', 'min_prices', 'max_prices');
				optinJson ();

			jsonstr += '}';
			jsonstr  = JSON.parse( jsonstr );

			console.log( jsonstr );
			// console.log(jsonstr_debug);
			
			

				 
				$.ajax({
					url: "/hendler.php?mod=json_catalog"+(($.isEmptyObject(jsonstr)==true)?'&is_null=1':''),
					type: "POST",
					data: jsonstr,
					dataType: "json",
					beforeSend: startLoad(),
					success: function( data ) {
							  stopLoad();
							  var brand            = data.brand,
							  	  categories       = data.categories,
							  	  subcategories    = data.subcategories,
							  	  collection       = data.collection,
							  	  color            = data.color,
							  	  country          = data.country,
							  	  items            = data.items,
							  	  surface          = data.surface,
							  	  type             = data.type,
							  	  all_items        = data.all_items,
							  	  finish_page      = Math.ceil( all_items / 9 ),
							  	  collectionLength = collection.length,
							  	  brandLength      = brand.length;
							  	 

							  	  
							  	  $( '.collectionLength' ).text( all_items );
							  	  $( '.brandLength' ).text( brandLength );


							  	  $( 'div.collection_card' ).addClass('rewrite')
							  	  						  .removeClass('colorsNone');
							  	  $.each( items, function ( index, val ) {
							  	 	
							  	  
							  	  	
							  	  	 var coll_id1s    = val.coll_id1s,
							  	  	 	 coll_name    = val.coll_name,
							  	  	 	 coll_brand   = val.coll_brand,
							  	  	 	 coll_country = val.coll_country,
							  	  	 	 coll_img     = val.coll_img,
							  	  	 	 obj          = $('div.collection_card.rewrite:first');

									  	 // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
									  	 // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
							  			 // console.log('coll_id1s: ' + coll_id1s);
							  			 // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
							 			 // console.log('coll_name: ' + coll_name);
							 			 // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
							 			 // console.log('coll_brand: ' + coll_brand);
							 			 // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
							 			 // console.log('coll_country: ' + coll_country);
							 			 // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
							 			 // console.log('coll_img: ' + coll_img);
							 			 // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
							 			 // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');


							 			

								  		$(obj)
								  			.find('a.level1A')
								  			.attr( 'href', '/catalog/' + coll_id1s + '/' );

								 		$(obj)
								 			.find( 'img.level1Img' )
								 			.attr( 'src', '/wimg/' + coll_img );

										
										

								 		$(obj)
								 			.find( 'figcaption.coll_name' )
								 			.text( coll_name );

							 			$(obj)
								 			.find( 'figcaption.coll_country span' )
								 			.text( coll_country );

							 			$(obj)
								 			.find( 'figcaption.coll_brand span' )
								 			.text( coll_brand );      

								 		obj.removeClass('rewrite');

								 		
								 		
								 			intervalblockHeight();
								 			intervalImgColl ();
								 		


											

								 		
											
										


							 				
							 			 	
							 			


							  	  });

								
								
								
								$( '.rewrite' ).addClass('colorsNone');	

							  // console.log('-----------------------------------------------------');
							  // console.log('brand: ' + brand);
							  // console.log('-----------------------------------------------------');
							  // console.log('collection: ' + collection);
							  // console.log('-----------------------------------------------------');
							  // console.log('color: ' + color);
							  // console.log('-----------------------------------------------------');
							  // console.log('country: ' + country);
							  // console.log('-----------------------------------------------------');
							  // console.log('items: ' + items);
							  // console.log('-----------------------------------------------------');
							  // console.log('surface: ' + surface);
							  // console.log('-----------------------------------------------------');
							  // console.log('type: ' + type);
							  // console.log('-----------------------------------------------------'); 
							  // console.log('categories: ' + categories);
							  // console.log('-----------------------------------------------------');
							  // console.log('subcategories: ' + subcategories);
							  // console.log('-----------------------------------------------------');
							  // console.log('finish_page: ' + finish_page);
							  // console.log('-----------------------------------------------------');


							 function eachOut_id ( objClass, nameClass ){

								$.each( objClass, function ( index, value ) {
								  	$( 'option'+nameClass+'[out_id="' + value + '"]' ).removeAttr('disabled');
								});

							};

							



							  	eachOut_id ( type, '.type' );
							  	eachOut_id ( categories, '.category' );
							  	eachOut_id ( subcategories, '.subcategory' );
								eachOut_id ( surface, '.surface' );
								eachOut_id ( country, '.country' );
								eachOut_id ( collection, '.collection' );
								eachOut_id ( brand, '.brand' );




								$.each( color, function ( index, value ) {
								  	$( 'div.colors[out_id="' + value + '"]' ).removeClass('colorsNone');	
								});



								$( '#finish_page' ).val( finish_page );


								if ( finish_page >= 11 ) {
									inputPfgeStart ();
									$('ul.pageNumber').removeClass('pageNumberLavel2');

								}else{
									$('ul.pageNumber').addClass('pageNumberLavel2');
									$('ul.pageNumber').html('');



								var href        = '/catalog/',
									uLpageNumbe = $('ul.pageNumber'),
									fin_pg      = finish_page;
							        for (var i = 1; i <= fin_pg; i++) {

							        	uLpageNumbe.append('<li><a class="pageA" out_id="'+ i +'" type="page" href="' + href + 'page' + i + '/">' + i + '</a></li>');
							        	uLpageNumbe.children( 'li' ).eq( 0 ).addClass('pageNumberBorderLeft');

							        }

							        pageNumberBackground ();

							        $( '.pageA' ).on('click', function (){
							        	var ths_pg = $( this ).attr('out_id');
							        	history.pushState((ths_pg-1), "Title "+ (ths_pg-1) +""  , href + "page" + (ths_pg-1) + "/");
							        	history.replaceState(ths_pg, "Title "+ ths_pg +""  , href + "page" + ths_pg + "/");
							        });
									
										
																        
							        init();
									
								};
								pageList ();

								
 	

							},
					
				});
		
	});  // Конец функции геолокации
						   
	

		





	

            
          

          	
           	
	};

	/*-------------------------------------------------------------*/



						/*--------------Подсказки-----------------*/




	$(function() {
    	$(".hint, .colors").tooltip({
     		track: true
   		});
  	});





						/*----------------------------------------*/

			$( '.resultsFilter div' ).fadeOut(1);

			

						/*---------------Выпадающий input---------------------*/



(function( $ ) {




    $.widget( "custom.combobox", {
      _create: function() {
        this.wrapper = $( "<span>" )
          .addClass( "custom-combobox" )
          .insertAfter( this.element );
 
        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
      },
 
      _createAutocomplete: function() {
        var selected = this.element.children( ":selected" ),
          value = selected.val() ? selected.text() : "";
        this.input = $( "<input>" )
          .appendTo( this.wrapper )
          .val( value )
          .attr( "title", ""  )
          .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left focus" )
          .autocomplete({
            delay: 0,
            minLength: 0,
            source: $.proxy( this, "_source" )
          })
          .tooltip({
            tooltipClass: "ui-state-highlight"
          });


        this._on( this.input, {
          autocompleteselect: function( event, ui ) {
            ui.item.option.selected = true;



    /*-----------------------Инпут фильтры и открытие блоков фильтрации---------------------*/

            var option =  ui.item.option;

            if ( $( option ).hasClass( '0' ) ) {
            	this.input.removeClass( 'inputColor' );
            	this.input.addClass( 'focus' );

            }else{
            	this.input.addClass( 'inputColor' );
            	this.input.removeClass( 'focus' );

            };

            if ( $( option ).hasClass( 'default' ) ) {
            	this.input.addClass( 'inputColor' );
            };

           




            funImgWidthHeight ();




           var ulId1      = $( 'ul.ui-autocomplete' ).eq( 0 ),
           	   ulId2      = $( 'ul.ui-autocomplete' ).eq( 1 ),
           	   ulId3      = $( 'ul.ui-autocomplete' ).eq( 2 ),
           	   ulId4      = $( 'ul.ui-autocomplete' ).eq( 3 ),
           	   ulId5      = $( 'ul.ui-autocomplete' ).eq( 4 ),
           	   ulId6      = $( 'ul.ui-autocomplete' ).eq( 5 ),
           	   ulId7      = $( 'ul.ui-autocomplete' ).eq( 6 ),
           	   ulId8      = $( 'ul.ui-autocomplete' ).eq( 7 ),
           	   ulId9      = $( 'ul.ui-autocomplete' ).eq( 8 ),
           	   ulId10     = $( 'ul.ui-autocomplete' ).eq( 9 ),
           	   ulId1Li    = ulId1.children( 'li' ).eq( 0 ),
           	   ulId2Li    = ulId2.children( 'li' ).eq( 0 ),
           	   ulId3Li    = ulId3.children( 'li' ).eq( 0 ),
           	   ulId4Li    = ulId4.children( 'li' ).eq( 0 ),
           	   ulId5Li    = ulId5.children( 'li' ).eq( 0 ),
           	   ulId6Li    = ulId6.children( 'li' ).eq( 0 ),
           	   ulId7Li    = ulId7.children( 'li' ).eq( 0 ),
           	   ulId8Li    = ulId8.children( 'li' ).eq( 0 ),
           	   ulId9Li    = ulId9.children( 'li' ).eq( 0 ),
           	   ulId10Li   = ulId10.children( 'li' ).eq( 0 ),
           	   btnInput1  = $( 'div.ui-state-default' ).eq( 0 ),
           	   btnInput2  = $( 'div.ui-state-default' ).eq( 1 ),
           	   btnInput3  = $( 'div.ui-state-default' ).eq( 2 ),
           	   btnInput4  = $( 'div.ui-state-default' ).eq( 3 ),
           	   btnInput5  = $( 'div.ui-state-default' ).eq( 4 ),
           	   btnInput6  = $( 'div.ui-state-default' ).eq( 5 ),
           	   btnInput7  = $( 'div.ui-state-default' ).eq( 6 ),
           	   btnInput8  = $( 'div.ui-state-default' ).eq( 7 ),
           	   btnInput9  = $( 'div.ui-state-default' ).eq( 8 ),
           	   btnInput10 = $( 'div.ui-state-default' ).eq( 9 ),
           	   inputFil1  = $( 'input.custom-combobox-input' ).eq( 0 ),
           	   inputFil2  = $( 'input.custom-combobox-input' ).eq( 1 ),
           	   inputFil3  = $( 'input.custom-combobox-input' ).eq( 2 ),
           	   inputFil4  = $( 'input.custom-combobox-input' ).eq( 3 ),
           	   inputFil5  = $( 'input.custom-combobox-input' ).eq( 4 ),
           	   inputFil6  = $( 'input.custom-combobox-input' ).eq( 5 ),
           	   inputFil7  = $( 'input.custom-combobox-input' ).eq( 6 ),
           	   inputFil8  = $( 'input.custom-combobox-input' ).eq( 7 ),
           	   inputFil9  = $( 'input.custom-combobox-input' ).eq( 8 ),
           	   inputFil10 = $( 'input.custom-combobox-input' ).eq( 9 );


           	  
           	

            var speedOut  = 500,
            	speedIn   = 2000,
            	scrollPos = 600;

       

        function optionIf ( divClass, divClassStrong, classR, classBtnR, ulIdLi ){
            	var text = $( option ).text();
            	$( option ).removeAttr( 'disabled' );
				divClass.append('<strong>' + text + '</strong>').fadeIn( speedIn );
				divClass.append('<button type="button" class="btn btn-success btnClose 0 '+classBtnR+'" style="position: absolute; left: 78%;">Отмена</button>').fadeIn( speedIn );
            	$( classR ).on('click', function() {
            		divClassStrong.remove();
            		divClass.fadeOut( speedOut );
            		divClass.children( classR ).remove();
            		ulIdLi.trigger( 'click' );
            		$( document ).scrollTop( scrollPos );
				});
		};

        function optionElse ( divClass, divClassStrong, classR ){
        	    divClassStrong.remove();
            	divClass.fadeOut( speedOut );
            	divClass.children( classR ).remove();
        };

        function openFil ( ulId, btnInput, inputFil, text, classRemAttrDis ) {
        	ulId.removeClass( 'ulDisplay' );
			btnInput.addClass( 'subActive' );
			inputFil.addClass( 'subActive' );
			inputFil.val( text );
			$( classRemAttrDis ).removeAttr( 'disabled' );
        };

        function shutFil ( ulIdLi, ulId, btnInput, inputFil, delay ) {
        	setTimeout( function() {
            		ulIdLi.trigger( 'click' );
            		ulId.addClass( 'ulDisplay' );
            		btnInput.removeClass( 'subActive' );
            		inputFil.removeClass( 'subActive' );
            	}, delay );
        }

        	if ($( option ).hasClass( 'category' )) {
        		openFil ( ulId4, btnInput4, inputFil4, 'Подгруппы есть', '.subcategoryR' );
				optionIf ( $( 'div.category' ), $( 'div.category strong' ), '.categoryR', 'categoryR', ulId3Li );

            }else if($( option ).hasClass('0 categoryR')){
            	var delay = 10;
            	shutFil ( ulId4Li, ulId4, btnInput4, inputFil4, delay );
            	optionElse ( $( 'div.category' ), $( 'div.category strong' ), '.categoryR' );
			}; 

            if ($( option ).hasClass('subcategory')) {
            	inputFil4.removeClass( 'subActive' );
				optionIf ( $( 'div.subcategory' ), $( 'div.subcategory strong' ), '.subcategoryR', 'subcategoryR', ulId4Li );

            }else if($( option ).hasClass('0 subcategoryR')){
            	optionElse ( $( 'div.subcategory' ), $( 'div.subcategory strong' ), '.subcategoryR' );
            }; 

            if ($( option ).hasClass('type')) {
				optionIf ( $( 'div.type' ), $( 'div.type strong' ), '.typeR', 'typeR', ulId5Li );

            }else if($( option ).hasClass('0 typeR')){
            	optionElse ( $( 'div.type' ), $( 'div.type strong' ), '.typeR' );
            }; 


            if ($( option ).hasClass('surface')) {
            	optionIf ( $( 'div.surface' ), $( 'div.surface strong' ), '.surfaceR', 'surfaceR', ulId7Li );
            	
            }else if($( option ).hasClass('0 surfaceR')){
            	optionElse ( $( 'div.surface' ), $( 'div.surface strong' ), '.surfaceR' );
            }; 


            if ($( option ).hasClass('country')) {
            	openFil ( ulId9, btnInput9, inputFil9, 'Выбрано все', '.brandR' );
				optionIf ( $( 'div.country' ), $( 'div.country strong' ), '.countryR', 'countryR', ulId8Li );
            	
            }else if($( option ).hasClass('0 countryR')){
            	var delayOne = 10,
            		delayTwo = 20;
            	shutFil ( ulId9Li, ulId9, btnInput9, inputFil9, delayOne );
            	shutFil ( ulId10Li, ulId10, btnInput10, inputFil10, delayTwo );
            	optionElse ( $( 'div.country' ), $( 'div.country strong' ), '.countryR' );
            	sortLi ( ulId8 );
            }; 


            if ($( option ).hasClass('brand')) {
            	inputFil9.removeClass( 'subActive' );
            	openFil ( ulId10, btnInput10, inputFil10, 'Выбрано все', '.collectionR' );
				optionIf ( $( 'div.brand' ), $( 'div.brand strong' ), '.brandR', 'brandR', ulId9Li );
            	
            }else if($( option ).hasClass('0 brandR')){
            	var delay = 10;
            	shutFil ( ulId10Li, ulId10, btnInput10, inputFil10, delay );
            	optionElse ( $( 'div.brand' ), $( 'div.brand strong' ), '.brandR' );
            	sortLi ( ulId9 );
            }; 


            if ($( option ).hasClass('collection')) {
            	inputFil10.removeClass( 'subActive' );
				optionIf ( $( 'div.collection' ), $( 'div.collection strong' ), '.collectionR', 'collectionR', ulId10Li );
				sortLi ( ulId10 );
            	
            }else if($( option ).hasClass('0 collectionR')){
            	optionElse ( $( 'div.collection' ), $( 'div.collection strong' ), '.collectionR' );
            }; 
            
            
            
            

    /*--------------------------------------------------------------------------------------*/









        history.replaceState(1, "Title1"  , "/catalog/page1/");
 		filterObj();
		$blockHeight();	


            this._trigger( "select", event, {
              item: ui.item.option
            });
          },
 
          autocompletechange: "_removeIfInvalid"
        });
      },
 
      _createShowAllButton: function() {
        var input = this.input,
          wasOpen = false;
 
        $( "<div>" )
          .append('<div class="ui-state-default ui-corner-all active" style="height:100%; width: 32px; border-radius: 0px 4px 4px 0px;">'
          			+'<span class="ui-icon ui-icon-triangle-1-s" style="position:relative;top:7px; left: 7px;"></span>'
          		  +'</div>')
          .appendTo( this.wrapper )
          .removeClass( "ui-corner-all" )
          .addClass( "custom-combobox-toggle ui-corner-right" )
          .mousedown(function() {
            wasOpen = input.autocomplete( "widget" ).is( ":visible" );
          })
          .click(function() {
          
            input.focus();
 
            // Close if already visible
            if ( wasOpen ) {
              return;
            }
 
            // Pass empty string as value to search for, displaying all results
            input.autocomplete( "search", "" );
          });
      },
 
      _source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i", '.color' );
        response( this.element.children( "option:not(:disabled)" ).map(function() {
          var text = $( this ).text();
          if ( this.value && ( !request.term || matcher.test(text) ) )
            return {
              label: text,
              value: text,
              option: this
            };
        }) );
      },
 
      _removeIfInvalid: function( event, ui ) {
 
        // Selected an item, nothing to do
        if ( ui.item ) {
          return;
        }
 
        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });
 		
        // Found a match, nothing to do
        if ( valid ) {
          return;
        }
 
        // Remove invalid value
        this.input
          .val( "" )
          .attr( "title", value + " didn't match any item" )
          .tooltip( "open" );
        this.element.val( "" );
        this._delay(function() {
          this.input.tooltip( "close" ).attr( "title", "" );
        }, 2500 );
        this.input.autocomplete( "instance" ).term = "";
      },
 
      _destroy: function() {
        this.wrapper.remove();
        this.element.show();
      }
    });
  })( jQuery );
 
  $(function() {
    $( ".combobox" ).combobox();
    $( "#toggle" ).click(function() {
      $( "#combobox" ).toggle();
    });
  });


  						/*----------------------------------------------------*/







						/*---------------------Диалоговое окно------------------------*/
	


		/*$(".opedDialog").on('click', function(){ 
			var item_name = $(this)
								.children('div.infoDialog')
								.children('figcaption.item_name')
								.children('span').html();
			var infoDialog = ($(this).not('.infoDialog').html());
			$('body').css({'overflow':'hidden','margin-right':'18px'});
			$("#dialog").dialog({
				title: item_name,
			    resizable: false,
			    height:865,
			    width:1700,
			    modal: true,
			    zIndex: 1500,
			    show: { effect: "blind", duration: 800 },
			    buttons: {
				OK: function() {
						if(window.location.href.indexOf('#') + 1) {
						var bLoc  = window.location.href.split('#');
							bnLoc = bLoc[0].split('/');
							bLoc  = bLoc[0].split(bnLoc[2]);
						reLoaction(bLoc[1],1);
						}
					$('body').css({'overflow':'auto','margin-right':'0'});		
		          	$(this)
		          		.dialog("close")
		          		.dialog("destroy")
		          		.draggable({ disabled: true });
		        	}
		      }

		    });
		    $("#dialog").html(infoDialog);   

		});*/

		$( '.Picture' ).on('click', function() {
			var _this      = $( this ),
				figcaption = _this.parent().siblings( '.figcaption' );

				

			_this
				.clone()
				.children( 'img' )
				.addClass( 'imgModal' )
				.removeAttr('style')
				.prependTo( '.modal-body' )
				.siblings( '.imgModal' )
				.remove();



			$( figcaption )
				.clone()
				.addClass( 'imgFigcaption' )
				.appendTo( '.modal-body' )
				.siblings( '.imgFigcaption' )
				.remove();

			$( figcaption )
				.children()
				.eq(0)
				.children('span')
				.clone()
				.addClass( 'imgHeader' )
				.appendTo( '.modal-header' )
				.siblings( '.imgHeader' )
				.remove();

		});

						/*----------------------------------------------------------*/



		

        




		/*----------------Изменение input страниц-------------------*/


if ($('#leval').is('.leval1')) {
	
function inputPfgeStart (){

	
	var ths_pg = $( '.pageClass' ).attr( 'out_id' ),
	    fin_pg = Number($('input#finish_page').val()),
	    href   = '/catalog/';

    function pageNumberInit ( namber_pg, page_href ){
    	return $( '<li class="pageNumberInit">'
    				+'<div class="arrowLeft">'
    					+'<a class="pageA" out_id="'+(namber_pg-1)+'" type="page" href="'+page_href+'page'+(namber_pg)+'/">&lsaquo;</a>'
    				+'</div>'
    				+'<input out_id="'+(namber_pg)+'" type="page" class="inputNumber from-to" type="text" value='+(namber_pg)+'>'
    				+'<div class="arrowRight">'
    					+'<a class="pageA" out_id="'+(namber_pg+1)+'" type="page" href="'+href+'page'+(namber_pg+1)+'/">&rsaquo;</a>'
    				+'</div>'
    			  +'</li>' );
   };

    function pageNumberOut_id ( namber_pg, page_href ){
    	return $( '<li>'
    				+'<a class="pageA" out_id="'+namber_pg+'" type="page" href="'+page_href+'page'+namber_pg+'/">'+namber_pg+'</a>'
    			  +'</li>' );
    };

    function pageNumberPoint (){
    	return $( '<li class="pageNumberPoint">...</li>' );
    };

    function pageNumberZoomIn (namber_pg, zoomInOn, page_href){
    	return $( '<li>'
    				+'<a class="pageA" out_id="'+(namber_pg+zoomInOn)+'" type="page" href="'+page_href+'page'+(namber_pg+zoomInOn)+'/">'+(namber_pg+zoomInOn)+'</a>'
    			  +'</li>' );
     };

    function pageNumberZoomOn (namber_pg, zoomInOn, page_href){
    	return $( '<li>'
    				+'<a class="pageA" out_id="'+(namber_pg-zoomInOn)+'" type="page" href="'+page_href+'page'+(namber_pg-zoomInOn)+'/">'+(namber_pg-zoomInOn)+'</a>'
    			  +'</li>' );
    };

    function pageNumberStart (){
    	return $( '<li class="pageNumberInit"><div class="arrowLeft">'
    				+'<a class="pageA" out_id="'+(ths_pg)+'" type="page" href="'+href+'page'+(ths_pg)+'/">&lsaquo;</a>'
    				+'</div>'
    				+'<input out_id="'+(ths_pg)+'" type="page" class="inputNumber from-to" type="text" value='+(ths_pg)+'>'
    			  +'<div class="arrowRight">'
    			   +'<a class="pageA" out_id="'+(ths_pg+1)+'" type="page" href="'+href+'page'+(ths_pg+1)+'/">&rsaquo;</a>'
    			  +'</div>'
    			  +'</li>' );
    };

    function pageNumberFinish (){
    	return $( '<li>'
    				+'<a class="pageA" out_id="'+(fin_pg)+'" type="page" href="'+href+'page'+(fin_pg)+'/">'+(fin_pg)+'</a>'
    			  +'</li>' );
    };

    function pageNumberInputFinish (){
    	return $( '<li class="pageNumberInit">'
    				+'<div class="arrowLeft">'
    					+'<a class="pageA" out_id="'+(ths_pg-1)+'" type="page" href="'+href+'page'+(ths_pg-1)+'/">&lsaquo;</a>'
    				+'</div><input out_id="'+(ths_pg)+'" type="page" class="inputNumber from-to" type="text" value='+(ths_pg)+'>'
    				+'<div class="arrowRight">'
    					+'<a class="pageA" out_id="'+(ths_pg)+'" type="page" href="'+href+'page'+(ths_pg)+'/">&rsaquo;</a>'
    				+'</div>'
    			  +'</li>' );
    };

	$( 'ul.pageNumber' ).html('');

		if((ths_pg == 1) || (ths_pg == undefined))
		{
		var ths_pg = 1;
		$( 'ul.pageNumber' )
			.append(pageNumberStart ())
			.append(pageNumberZoomIn (ths_pg, 1, href))
			.append(pageNumberZoomIn (ths_pg, 2, href))
			.append(pageNumberPoint ())
			.append(pageNumberZoomIn (ths_pg, 5, href))
			.append(pageNumberZoomIn (ths_pg, 6, href))
			.append(pageNumberPoint ())
			.append(pageNumberZoomOn (fin_pg, 1, href))
			.append(pageNumberFinish ());
		$( 'ul.pageNumber  li').eq( 1 ).addClass('pageNumberBorderLeft');
		$( 'div.arrowLeft' ).remove();
		}
		else if(ths_pg == 2)
		{
			var ths_pg = Number(ths_pg);
		$( 'ul.pageNumber' )
			.append(pageNumberZoomOn (ths_pg, 1, href))
			.append(pageNumberInit ( ths_pg, href ))
			.append(pageNumberZoomIn (ths_pg, 1, href))
			.append(pageNumberPoint ())
			.append(pageNumberZoomIn (ths_pg, 4, href))
			.append(pageNumberZoomIn (ths_pg, 5, href))
			.append(pageNumberPoint ())
			.append(pageNumberZoomOn (fin_pg, 1, href))
			.append(pageNumberFinish ());
		}
		else if(ths_pg == 3)
		{
			var ths_pg = Number(ths_pg);
		$( 'ul.pageNumber' )
			.append(pageNumberZoomOn (ths_pg, 2, href))
			.append(pageNumberZoomOn (ths_pg, 1, href))
			.append(pageNumberInit ( ths_pg, href ))
			.append(pageNumberZoomIn (ths_pg, 1, href))
			.append(pageNumberPoint ())
			.append(pageNumberZoomIn (ths_pg, 4, href))
			.append(pageNumberPoint ())
			.append(pageNumberZoomOn (fin_pg, 1, href))
			.append(pageNumberFinish ());
		}
		else if(ths_pg == 4)
		{
			var ths_pg = Number(ths_pg);
		$( 'ul.pageNumber' )
			.append(pageNumberOut_id ( 1, href ))
			.append(pageNumberOut_id ( 2, href ))
			.append(pageNumberZoomOn (ths_pg, 1, href))
			.append(pageNumberInit ( ths_pg, href ))
			.append(pageNumberZoomIn (ths_pg, 1, href))
			.append(pageNumberZoomIn (ths_pg, 2, href))
			.append(pageNumberPoint ())
			.append(pageNumberZoomOn (fin_pg, 1, href))
			.append(pageNumberFinish ());
		}
		else if(ths_pg >= 5 && ths_pg <= fin_pg-3)
		{
			var ths_pg = Number(ths_pg);
		$( 'ul.pageNumber' )
			.append(pageNumberOut_id ( 1, href ))
			.append(pageNumberOut_id ( 2, href ))
			.append(pageNumberPoint ())
			.append(pageNumberZoomOn (ths_pg, 1, href))
			.append(pageNumberInit ( ths_pg, href ))
			.append(pageNumberZoomIn (ths_pg, 1, href))
			.append(pageNumberPoint ())
			.append(pageNumberZoomOn (fin_pg, 1, href))
			.append(pageNumberFinish ());
		}
		else if(ths_pg == fin_pg-2)
		{
			var ths_pg = Number(ths_pg);
		$( 'ul.pageNumber' )
			.append(pageNumberOut_id ( 1, href ))
			.append(pageNumberOut_id ( 2, href ))
			.append(pageNumberOut_id ( 3, href ))
			.append(pageNumberPoint ())
			.append(pageNumberZoomOn (ths_pg, 2, href))
			.append(pageNumberZoomOn (ths_pg, 1, href))
			.append(pageNumberInit ( ths_pg, href ))
			.append(pageNumberZoomOn (fin_pg, 1, href))
			.append(pageNumberFinish ());
		}
		else if(ths_pg == fin_pg-1)
		{
			var ths_pg = Number(ths_pg);
		$( 'ul.pageNumber' )
			.append(pageNumberOut_id ( 1, href ))
			.append(pageNumberOut_id ( 2, href ))
			.append(pageNumberPoint ())
			.append(pageNumberZoomOn (ths_pg, 6, href))
			.append(pageNumberZoomOn (ths_pg, 5, href))
			.append(pageNumberPoint ())
			.append(pageNumberZoomOn (ths_pg, 1, href))
			.append(pageNumberInit ( ths_pg, href ))
			.append(pageNumberFinish ());
		}
		else if(ths_pg == fin_pg)
		{
			var ths_pg = Number(ths_pg);
		$( 'ul.pageNumber' )
			.append(pageNumberOut_id ( 1, href ))
			.append(pageNumberOut_id ( 2, href ))
			.append(pageNumberPoint ())
			.append(pageNumberZoomOn (ths_pg, 7, href))
			.append(pageNumberZoomOn (ths_pg, 6, href))
			.append(pageNumberPoint ())
			.append(pageNumberZoomOn (ths_pg, 2, href))
			.append(pageNumberZoomOn (ths_pg, 1, href))
			.append(pageNumberInputFinish ())
			$( 'div.arrowRight' ).remove();
		}

		funImgWidthHeight ();
		init();

		$( 'ul.pageNumber li' ).eq( 0 ).addClass('pageNumberBorderLeft');
		$( '.pageNumberPoint' ).next().addClass('pageNumberBorderLeft');
		$( '.pageNumberInit' ).next().addClass('pageNumberBorderLeft');
	
	


		
		var	value = $(".inputNumber").val();

		$(".arrowLeft").on('click', function(){
			
			if(value > 1 )
				$(".inputNumber").val(--value);

		});

		$(".arrowRight").on('click', function(){
			if(value < fin_pg)
				$(".inputNumber").val(++value);

		});
		history.pushState((ths_pg-1), "Title "+ (ths_pg-1) +""  , href + "page" + (ths_pg-1) + "/"); 
		history.replaceState(ths_pg, "Title "+ ths_pg +""  , href + "page" + ths_pg + "/");
		

};

inputPfgeStart ();
blockHeight();
		
}else{

	

	$('ul.pageNumber').addClass('pageNumberLavel2');

	var ths_pg = Number($('input#this_page').val()),
        fin_pg = Number($('input#finish_page').val()),
        href   = '/catalog/'+urls[4]+'/';
        history.replaceState(1, "Title1"  , href + "page" +ths_pg+ "/");
        for (var i = 1; i <= fin_pg; i++) {

        	$( 'ul.pageNumber' ).append('<li><a out_id="' + i + '" type="page" href="' + href + 'page' + i + '/">' + i + '</a></li>');
        	$( 'ul.pageNumber li' ).eq( 0 ).addClass('pageNumberBorderLeft');

       




        	
        }




			

		init();
		blockHeight();
		intervalImgColl ();
		pageNumberBackground ();

};
	$( '.pageNumber' ).on('click', 'li', function() {
		$( this )
		  .children('a')
		  .trigger('click');
		  funImgWidthHeight ();

	});


pageList ();




		/*----------------------------------------------------------*/


			  	/*----------------Фильтр на ввод цифр JQuery-------------------*/

	   jQuery.fn.ForceNumericOnly =
	function()
	{
	    return this.each(function()
	    {
	        $(this).keydown(function(e)
	        {
	            var key = e.charCode || e.keyCode || 0;
	            // Разрешаем backspace, tab, delete, стрелки, обычные цифры и цифры на дополнительной клавиатуре
	            return (
	                key == 8 || 
	                key == 9 ||
	                key == 13 ||
	                key == 46 ||
	                (key >= 37 && key <= 40) ||
	                (key >= 48 && key <= 57) ||
	                (key >= 96 && key <= 105));
	        });
	    });
	};

		var $inputs = $( '.from-to,.input-lg, #x1, #x2, #y1, #y2, #z1, #z2' );

		$inputs.ForceNumericOnly();
		$inputs.bind( 'change keyup input click', function() {

		    if ( this.value.match( /[^0-9]/g ) ) {
		        this.value = this.value.replace( /[^0-9]/g, '' );
		    }
		});

		/*-----------------------------------*/


	}
									/*---------------------------------------*/

function startLoad(){
	$( 'body' ).append( '<div id="preLoader"><img src="/tpl/default/img/335.GIF" /></div>' );
};

function stopLoad(){
	$( 'div#preLoader' ).remove();
};

function load( mod, vars, div )
{

	if( typeof div === 'undefined' ){ div = 'mainload'; }
	startLoad();
	var jqxhr = $.get( "/hendler.php?mod="+mod+"&page="+vars, function(data) {
	  $( '#' + div ).html( data );
	stopLoad(); 
		allFuncs();
	  ajaxNavigation = true;
	  // init();




	})
}

window.onload=function(){ 
	window.setTimeout(function(){ 
		window.addEventListener("popstate", function(e) {
		var	l = (location.pathname || '') + (location.search || '');
		reLoaction(l,1,1);
		e.preventDefault();
		},false); 
	},1); 
}

function init()
{
old_loc = (location.pathname || '') + (location.search || '');

 	$("a:not([href^='#']):not([target='_blank']):not([href$='/rss/']):not([href^='mailto\:']):not([href^='#'])").on('click', function(e){
 		return false;
 	});
	
	$("a:not([href^='#']):not([target='_blank']):not([href$='/rss/']):not([href^='mailto\:']):not([href^='#']):not(.pageA):not(.inputNumber)").on('click', function(event){
	var href = $(this).attr('href');
	reLoaction(href,1);



	
	});
	
}

 /*------------------------------------------------------------*/