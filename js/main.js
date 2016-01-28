$(function(){

	var	$blockHeight = $( '.blockHeight' ),
	    topBlock     = $blockHeight.children().eq( 1 ).outerHeight(),
		centralBlock = $blockHeight.children().eq( 2 ).outerHeight(),
		bottomBlock  = $blockHeight.children().eq( 3 ).outerHeight(),
		$figure      = $( 'figure' );
		
		$blockHeight.children().eq( 1 ).children().css( 'height', topBlock );
		$blockHeight.children().eq( 2 ).children().css( 'height', centralBlock );
		$blockHeight.children().eq( 3 ).children().css( 'height', bottomBlock );



		/*----Scroll----*/

		$( document ).scrollTop( 300 );

		/*--------------*/
	
			

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
$( '.secret' ).on('click', function() {
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


	$( '.info' ).on( 'click', function(e) {
		
		e.preventDefault();
		document.location.replace( 'http://info.serko.local/' );
	});

	
	function allFuncs()
	{
	var urls = window.location.href.split('/');

$( 'a[href="/"]' ).on('click', function() {
	$( 'div.jumbotron.cl1' ).remove();
	window.location = '/';
});




/*--------------------Открытие большой фотки на клик-------------------*/



	function slidersImg () {

		
		$( document ).on('click', '.sliders', function() {

			$( 'body' ).append( '<div id="preLoader" class="PLI">'+
									'<a id="thisImgClose">X</a>'+
								'</div>' );
			
	 	    $( this )
				.clone()
				.removeClass( 'sliders' )
				.addClass( 'slidersImg' )
				.appendTo( '#preLoader' );

			$( '#preLoader' ).siblings( '.PLI' ).remove();	

			$( 'html, body' ).css( 'overflow', 'hidden' );

		var	widthDoc  = ( $( window ).width() / 2 ),
			heightDoc = ( $( window ).height() / 2 ),
			widthImg  = ( $( '.slidersImg' ).width() / 2 ),
			heightImg = ( $( '.slidersImg' ).height() / 2 ),
			left      = widthDoc - widthImg,
			top       = heightDoc - heightImg;
		
		$('#preLoader a').css( 'margin', '-' + ( heightImg + 11 ) + 'px 0 0 ' + ( widthImg - 10 ) + 'px' );

		$( '.slidersImg' ).css({
			top: top,
			left: left
		});

		});

		$( document ).on('click', '.slidersImg', function() {
			$( '.slidersImg' )
				.parent()
				.remove();

		$( 'html, body' ).css( 'overflow', 'auto' );		
			
		});

		$( document ).on('click', '.PLI', function() {
			$( this ).remove();
			$( 'html, body' ).css( 'overflow', 'auto' );
		});
	};
	slidersImg ();



/*---------------------------------------------------------------------*/




/*---------------Переключение номера странице в аккордионе-------------*/


	function accoPage () {
		
		$( document ).on( 'click', '.verticallPageLi', function(e) {
			e.preventDefault();
			var _this = $( this );

			if ( !_this.hasClass( 'pageNumberBackground' ) ) {

				var accoPage         = _this.children().attr( 'id' ),
				    $accordionRemove = $( '.accordionRemove' ),
				    indexNam         = ( accoPage - 1 ) * 9,
					stNam 			 = indexNam == 0 ? 0 : ( accoPage * 10 ) - 10,
					fnNam 			 = ( accoPage * 10 );

				_this
					.addClass( 'pageNumberBackground' )
					.siblings( '.verticallPageLi' )
					.removeClass( 'pageNumberBackground' );

				$( '.accordionRemove' )
					.fadeOut( 'slow' )
					.slice( stNam, fnNam )
					.fadeIn( 'slow' );
			};			
		});
	};

	accoPage ();

	function ajaxOC () {
		
		

		if ( $( '.heightCards2' ).is( '.levels1' ) ) {
			
			filterObj();	
			history.replaceState( 1, "Title1"  , "/catalog/page1/" );
		} else {

			// ajaxColl ( namPage, coll_code, coll_id, coll_href, idPid );
		}
	};

	ajaxOC ();
	



/*---------------------------------------------------------------------*/




/*------------------------Делает пустой инпут--------------------------*/

	function focusBlur () {
		
		$( document ).on( 'focus', 'input.custom-combobox-input', function () {
			var _this       = $( this ),
				defaultView = _this.val();

			if ( !_this.hasClass( 'inputColor' ) ) {
				_this.val( '' );
			};

			$( _this ).on( 'blur',  function() {
				if ( _this.val() == '' && !_this.hasClass( 'inputColor' ) ) {
					_this.val( defaultView );
				};
			});
		});
	};
	
	focusBlur ();
	
		
	


/*---------------------------------------------------------------------*/





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
			    arryInput    = [],
			    inputNamber  = 7; // с какого инпута начинать. Отсчет с 0 до N

			$.each( $mylist, function( index, val ) {
				arryInput.push( val );
			});

			for ( var i = inputNamber; i <= arryInput.length; i++ ) {
				sortLi ( i );
			};

		}, 100);

	};
	alphabetical ();	

	


/*--------------------------------------------------------------------*/ 





/*------------Эмитация нажатия Enter в input номера страниц-----------*/

	function inputPageEnter () {

		var namberPage = urls[4].split( 'e' ),
			namber     = namberPage[1] == undefined || namberPage[1] == '' ? 1 : namberPage[1];

		setTimeout( function () {
			var e = $.Event( "keypress", { keyCode : 13 } );
			$( 'input.inputNumber' )
				.val( namber )
				.focus()
				.trigger( e );
		}, 100);
	};
	// inputPageEnter ();


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
		

		$( 'ul.pageNumberLavel2 li > a[href="' + urlPage + '"]' )
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

 // ShutdownFilter ();


/*-------------------------------------------------------------------*/



/*-----------------------Отобрать магазины по------------------------*/


	$( '.myBtnStores' ).on('click', function(e) {
		e.preventDefault();
	$( this )
		.toggleClass( 'myBtnActive' );
	});

	
/*-----------------------------------------------------------------*/



									
/*-------------------Открытие и закрытие акардиона-----------------*/	



	function accordions () {

	

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


		$( document ).on('click', '.myBtnInfo', function() {
			$( this ).addClass( 'myBtnActive' );
			$( '.myBtnVse' ).removeClass( 'myBtnActive' );
		});

		$( document ).on('click', '.myBtnVse', function() {
			$( this ).addClass( 'myBtnActive' );
		});

		$( document ).on('click', '.closes, .fade', function() {
			$( '.myBtnInfo' ).removeClass( 'myBtnActive' );
			$( '.myBtnVse' ).addClass( 'myBtnActive' );
		});

		




		$( document ).on( 'click', '.accordionStart', function() {
			var _this   = $( this ),
			    speedUp = 1000;

				_this
					.next( '.accordion' )
					.slideToggle( speedUp, 'easeInOutCubic' );

				_this
				  .parent()
				  .siblings()
				  .children( '.accordion' )
				  .slideUp( speedUp, 'easeInOutCubic' );
			


				if ( ! _this.hasClass( 'accordionAktiv' ) ) {
					_this
						.addClass( 'accordionAktiv' )
						.parent()
						.addClass( 'accordionRemoveAktiv' )
						.siblings( '.accordionRemove' )
						.removeClass( 'accordionRemoveAktiv' );

					_this
					   .find( '.removSadow' )
					   .addClass( 'removeSadowClick' );

				}else{
					
					setTimeout( function () {
						_this.removeClass( 'accordionAktiv' );
					}, speedUp );

					_this
						.parent()
						.removeClass( 'accordionRemoveAktiv' );

					_this
					  .find( '.removSadow' )
					  .removeClass( 'removeSadowClick' );
				};

				_this
				  .parent()
				  .siblings()
				  .children( '.accoStart' )
				  .removeClass( 'accordionAktiv' );
						 
				_this
				  .parent()
				  .siblings()
				  .find( '.removSadow' )
				  .removeClass( 'removeSadowClick' );

				 

				if ( _this.closest( '.filterLeft' ).hasClass( 'filterLeftLevel2' ) ) {

					var namPage   = location.pathname.split( '/' )[3].split( 'e' )[1],
					    coll_code = _this.closest( '.filterLeft' ).attr( 'coll_code' ),
					    coll_id   = _this.closest( '.filterLeft' ).attr( 'coll_id' ),
					    coll_href = _this.closest( '.filterLeft' ).attr( 'coll_href' ),
					    idPid     = _this.parent( '.accordionRemoveAktiv' ).attr( 'id' );

					ajaxColl ( namPage, coll_code, coll_id, coll_href, idPid );
					// intervalImgColl ();

				} else {

					filterObj();
					
				};

					


			

		});



		$( '.Point' )
			.prev()
			.addClass( 'pageNamberVerticalBorder' );



	
	};
	accordions ();




				function ajaxAcco ( arry ) {
		
	
					var $divName        = $( 'div.name' ),
				  		$accordionStart = $( 'div.accoStart' ),
				  		verticallPage   = Math.ceil( arry.length / 10 );

				  	  	


			  	  		$( 'div.pageNamberVertical ul li' ).remove();

			  	  		for ( var i = 1; i <= verticallPage; i++ ) {

			  	  			$( 'div.pageNamberVertical ul' ).append('<li class="verticallPageLi"><a href="#" class="verticallPage" id="' + i + '">' + i + '</a></li>');

			  	  		};

			  	  		$( '.verticallPageLi' )
			  	  			.first()
			  	  			.addClass( 'pageNumberBackground' );


				  	  	function generAcco ( arryLength ) {

				  	  		for ( var i = 0; i < arryLength; i++ ) {

								$( 'div.filterLeft' )
					  	  	 		.append('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 accordionRemove" id="' + arry[i][2] + '">'+
		  	  	 								'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 filterLeftCon accordionStart accoStart">'+
								                     '<div class="filterLeftPad">'+
								                       	'<p><b>' + arry[i][0] + '</b></p><p class="text-shadow removSadow">' + arry[i][1] + '</p>'+
								                     '</div>'+
							                    '</div>'+
							                    '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 filterLeftCon accordion">'+
							                    	'<div class="filterLeftPad">'+
							                    		'<button class="btn btn-primary btn-sm myBtnVse myBtnActive" data-toggle="modal">'+
							                    			'Полный каталог товаров'+
							                    		'</button>'+	
							                    	'</div>'+
							                    	'<div class="filterLeftPad">'+
							                    		'<button class="btn btn-primary btn-sm myBtnVse" data-toggle="modal">'+
							                    			'Каталог товаров выставленных на витрине'+
							                    		'</button>'+	
							                    	'</div>'+
							                    	'<div class="filterLeftPad">'+
							                    		'<button class="btn btn-primary btn-sm myBtnVse" data-toggle="modal">'+
							                    			'Каталог товаров по Акции'+
							                    		'</button>'+	
							                    	'</div>'+
							                    	'<div class="filterLeftPad">'+
							                    		'<button class="btn btn-primary btn-sm myBtnInactive">'+
							                    			'О компани'+
							                    		'</button>'+
							                    		'<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
							                    			'<div class="modal-dialog modal-lg">'+
							                    				'<div class="modal-content">'+
							                    					'<div class="modal-header">'+
							                    						'<button type="button" class="close closes" data-dismiss="modal" aria-hidden="true">&times;</button>'+
							                    						'<h4 class="modal-title" id="myModalLabel">О компани</h4>'+
							                    					'</div>'+
							                    					'<div class="modal-body' + i + '">'+
							                    						'' + i + ''+
							                    					'</div>'+
							                    					'<div class="modal-footer">'+
							                    						'<button type="button" class="btn btn-default closes" data-dismiss="modal">Закрыть</button>'+
							                    					'</div>'+
							                    				'</div>'+
							                    			'</div>'+
							                    		'</div>'+	
							                    	'</div>'+
							                    	'<div class="filterLeftPad">'+
							                    		'<button class="btn btn-primary btn-sm myBtnInfo">'+
							                    			'Контакты'+
							                    		'</button>'+
							                    		'<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
							                    			'<div class="modal-dialog modal-lg">'+
							                    				'<div class="modal-content">'+
							                    					'<div class="modal-header">'+
							                    						'<button type="button" class="close closes" data-dismiss="modal" aria-hidden="true">&times;</button>'+
							                    						'<h4 class="modal-title" id="myModalLabel">Контакты</h4>'+
							                    					'</div>'+
							                    					'<div class="modal-body' + i + '">'+
							                    						'' + i + ''+
							                    					'</div>'+
							                    					'<div class="modal-footer">'+
							                    						'<button type="button" class="btn btn-default closes" data-dismiss="modal">Закрыть</button>'+
							                    					'</div>'+
							                    				'</div>'+
							                    			'</div>'+
							                    		'</div>'+	
							                    	'</div>'+
							                    	'<div class="filterLeftPad">'+
							                    		'<button class="btn btn-primary btn-sm myBtnInactive">'+
							                    			'Для покупателей'+
							                    		'</button>'+
							                    		'<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
							                    			'<div class="modal-dialog modal-lg">'+
							                    				'<div class="modal-content">'+
							                    					'<div class="modal-header">'+
							                    						'<button type="button" class="close closes" data-dismiss="modal" aria-hidden="true">&times;</button>'+
							                    						'<h4 class="modal-title" id="myModalLabel">Для покупателей</h4>'+
							                    					'</div>'+
							                    					'<div class="modal-body' + i + '">'+
							                    						'' + i + ''+
							                    					'</div>'+
							                    					'<div class="modal-footer">'+
							                    						'<button type="button" class="btn btn-default closes" data-dismiss="modal">Закрыть</button>'+
							                    					'</div>'+
							                    				'</div>'+
							                    			'</div>'+
							                    		'</div>'+	
							                    	'</div>'+
							                    	'<div class="filterLeftPad">'+
							                    		'<button class="btn btn-primary btn-sm myBtnInactive">'+
							                    			'Скидки'+
							                    		'</button>'+
							                    		'<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
							                    			'<div class="modal-dialog modal-lg">'+
							                    				'<div class="modal-content">'+
							                    					'<div class="modal-header">'+
							                    						'<button type="button" class="close closes" data-dismiss="modal" aria-hidden="true">&times;</button>'+
							                    						'<h4 class="modal-title" id="myModalLabel">Скидки</h4>'+
							                    					'</div>'+
							                    					'<div class="modal-body' + i + '">'+
							                    						'' + i + ''+
							                    					'</div>'+
							                    					'<div class="modal-footer">'+
							                    						'<button type="button" class="btn btn-default closes" data-dismiss="modal">Закрыть</button>'+
							                    					'</div>'+
							                    				'</div>'+
							                    			'</div>'+
							                    		'</div>'+	
							                    	'</div>'+
							                    	'<div class="filterLeftPad">'+
							                    		'<button class="btn btn-primary btn-sm myBtnInactive">'+
							                    			'Доставка'+
							                    		'</button>'+
							                    		'<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
							                    			'<div class="modal-dialog modal-lg">'+
							                    				'<div class="modal-content">'+
							                    					'<div class="modal-header">'+
							                    						'<button type="button" class="close closes" data-dismiss="modal" aria-hidden="true">&times;</button>'+
							                    						'<h4 class="modal-title" id="myModalLabel">Доставка</h4>'+
							                    					'</div>'+
							                    					'<div class="modal-body' + i + '">'+
							                    						'' + i + ''+
							                    					'</div>'+
							                    					'<div class="modal-footer">'+
							                    						'<button type="button" class="btn btn-default closes" data-dismiss="modal">Закрыть</button>'+
							                    					'</div>'+
							                    				'</div>'+
							                    			'</div>'+
							                    		'</div>'+	
							                    	'</div>'+
							                    '</div>'+
	  	  	 								'</div>');
							};

							$( '.accordionRemove' )
								.eq(9)
								.nextAll()
								.hide();

							$( 'div#89' )
								.find( '.myBtnInactive' )
								.removeClass( 'myBtnInactive' ) // Серко все зеленое
								.addClass( 'myBtnInfo' );	
				  	  	};


						function accorRA () {

							if ( $( '.accoStart' ).hasClass( 'accordionAktiv' ) ) {

								setTimeout( function  () {
									$( '.accordionRemove' ).remove();
									generAcco ( arry.length );
								}, 1000 );
							} else {

								$( '.accordionRemove' ).remove();
								generAcco ( arry.length );
							};
						};


						if ( ! $( '.accordionRemove' ).hasClass( 'accordionRemoveAktiv' ) ) {
							accorRA ();
						};	
					};


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
		blockHeight1    = $blockHeight.children().eq(1),
		blockHeight2    = $blockHeight.children().eq(2),
		blockHeight3    = $blockHeight.children().eq(3),
	    topBlock     	= blockHeight1.outerHeight(),
		centralBlock 	= blockHeight2.outerHeight(),
		bottomBlock  	= blockHeight3.outerHeight(),
		$figure       	= $( 'figure' ),
		arrHeightFigure = new Array();
		
		blockHeight1.children().css( 'height', topBlock );
		blockHeight2.children().css( 'height', centralBlock );
		blockHeight3.children().css( 'height', bottomBlock );
		

			}
	
	});
};

	

// blockHeight();

	function intervalblockHeight () {
		
		var intevalblockHeight = setInterval( function (){
			blockHeight();
		}, 100 ); 

		setTimeout( function (){
			clearInterval( intevalblockHeight );
		}, 1500 );
	};
// intervalblockHeight ();



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

	/*$( '.openImg' ).on( 'click', function() {
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
	});*/



/*-----------------------------------------------------------------*/




/*----------------Выравнивание картинок коллекции------------------*/


	// imgWidthHeight ();

		
	// setTimeout( imgWidthHeight, 500 );

	function funImgWidthHeight () {

		function imgWidthHeight (){

			if ( $( '.level1Img' ).attr( 'style' ) ) {
					$( '.level1Img' ).removeAttr( 'style' );

				};
			$.each( $( '.level1Img' ), function( index, val ) {
				var _this			   = $( val ),	
					imgWidth           = _this.width(),
					imgHeight          = _this.height(),
					pictureLvel1Width  = $( '.PictureLvel1' ).width(),
					pictureLvel1Height = $( '.PictureLvel1' ).height();


					
				

					if ( imgWidth >= imgHeight ) {
						_this.css( 'height', '200' );

						var WidthAdjustment = Math.ceil( _this.width() / 2 - pictureLvel1Width / 2 );
						_this.css( 'right', WidthAdjustment );


					} else {
						_this.css( 'width', '200' );

						var HeightAdjustment = Math.ceil( _this.height() / 2 - pictureLvel1Height / 2 );
						_this.css( 'bottom', HeightAdjustment );

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

		$.each( $img, function( index, val ) {
			 
			 var _this = $( val );

			 _this.removeAttr( 'style' );

			

			 var imgHeight       = _this.height(),
			 	 imgWidth        = _this.width(),
			 	 min             = 2,
			 	 max             = 4,
			 	 maxSize         = 50,
			 	 textHeight      = Number( _this.closest( '.opedDialog' ).find( '.height' ).text() ),
			 	 textWidth       = Number( _this.closest( '.opedDialog' ).find( '.width' ).text() ),
			 	 increase        = textWidth > maxSize || textHeight > maxSize ? min : max,
			 	 crutchImgHeight = textHeight == 0 ? imgHeight : 0, // костыль пока выдаються нули в размерах
			 	 crutchImgWidth  = textHeight == 0 ? imgWidth : 0, // ...
			 	 resultHeight    = Math.ceil( textHeight * increase + crutchImgHeight ),
			 	 resultWidth     = Math.ceil( textWidth * increase + crutchImgWidth ),
			 	 blockHeight     = $( '.Picture' ).height();



			 	
			 	 

			 if ( imgWidth > imgHeight) {
			 	var alignment   = Math.ceil ( blockHeight / 2 - resultWidth / 2 );
			 	_this.css({
			 		width      : resultHeight,
			 		height     : resultWidth,
			 		marginTop  : alignment
			 	});
			 } else {
			 	var alignment   = Math.ceil ( blockHeight / 2 - resultHeight  / 2 );
			 	_this.css({
			 		width      : resultWidth,
			 		height     : resultHeight,
			 		marginTop  : alignment
			 	});
			 }	 


		});

	}

	// imgColl ();


		function  intervalImgColl () {
		
		var intervalImgColl = setInterval( function (){
			imgColl ();
		}, 100 );

		setTimeout( function (){
			clearInterval( intervalImgColl );
		}, 1500 );
	};

	// intervalImgColl ();


/*-----------------------------------------------------------------*/


	/*-------------------------Фильтр сладоров---------------------------*/


				function slider ( className, min, max, text ) {
						
					

					var defaultValuesMin = max*0.2,
						defaultValuesMax = max*0.8;

					$( className ).editRangeSlider( { 
						bounds        : { min : min, 
								          max : max 
								         },
						defaultValues : { min : min, 
									      max : max
									     }, step : 1 } );



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
			
			var _this     = $( this );
				

			if ( _this.hasClass( '.colorBorder' ) ) { 

				_this.removeClass( 'colorBorder' );
				$( 'div.color div' ).remove();
				$( 'div.color strong' ).remove();
				$( 'div.color' ).fadeOut( 500 );
				filterObj();

				
			}else{

				$( '.colors' ).removeClass( 'colorBorder' );
				_this.addClass( 'colorBorder' );

				filterObj();

			};
		});


		$( document ).on( 'click', '.colorBtn', function(){
			var $divColor  = $( 'div.color' );

			$( '.colors' ).removeClass( 'colorBorder' );

			$divColor
				.children( 'div' ) 
				.remove();

			$divColor
				.children( 'strong' )
				.remove();

			$divColor.fadeOut(500);

			$( '.info' ).html('');

			filterObj();
		});


			
			
			

					/*-------------------------------------------------------------*/




		

	
$( '#colorsDisNone, #surfaceDisNone, #sliderLWTDisNone, #sliderRDisNone, #matterDisNone, #subcategoryDisNon, #matterDisNone, #brandDisNone, #addPropertiesDisNone, #theFormDisNone, #sizeFormDisNone' ).fadeOut();
	


	/*--------------------------------Ajax запрос на получение коллеций-------------------------------*/



function ajaxColl ( namPage, coll_code, coll_id, coll_href, idPid ) {


		navigator.geolocation.getCurrentPosition( function( position ) { 

			var	lat  = position.coords.latitude,
			    lng  = position.coords.longitude,
			    page = namPage == undefined ? 1 : namPage,
			    pid  = idPid == undefined ? 0 : idPid,
			    URL  = "/hendler.php?mod=json_collection",
				obj  = { 
						  'coll_code' : coll_code,
				 		  'coll_id'   : coll_id,
				 		  'lat'       : lat,
				 		  'lng'       : lng,
				 		  'page'      : page,
				 		  'pid'		  : pid
				 	   };
				

				

				history.replaceState( 1, "Title1"  , coll_href + 'page' + page +'/');

							
				
				

			$.ajax({ 
				url        : URL,
			    type       : 'POST',
			    dataType   : 'json',
			    data       : obj,
			    beforeSend : startLoad(),
			    /*error      : function ( date ) {

					var status = date.status;

					if ( status == 500 ) {

						window.location.replace( 'http://www.серко.рф/500.php' );
					};
				},*/
			    success    : function( data ) {


			    	$( 'div#toplinecatalog' ).css( { 'display' : 'none' } );

			
					stopLoad();

					var allItems 	= data.allItems,
						items    	= data.items,
						prt      	= data.prt,
						shops    	= data.shops,
						photos   	= data.photos,
						prt      	= data.prt,
						htmlTeg  	='', 
						$item    	= $( 'div.item' ),
						$FL      	= $( '.filtrsLevel2' ),
						arryPrt   	= [],
						arryMarkers = [],
						markerClast = [],
						arryPid     = [],
						arryAccord  = [];



					$item.removeClass( 'leval1 row' );
					$item.html('');

/*----------------------------------Прорисовка карты в коллекции---------------------------------*/

			navigator.geolocation.getCurrentPosition( function( position ) { // Начало функции геолокации

					var	lat        = position.coords.latitude,
					    lng        = position.coords.longitude,
					    myPos 	   = new google.maps.LatLng(  lat, lng ),
					    mapOptions = { 
							zoom        : 14,
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

					$.each( prt, function( i, val ) {
						 
						var adress = val.adress,
						 	dist   = val.dist,
						 	lat    = val.lat,
						 	lng    = val.lon,
						 	name   = val.name,
						 	pid    = val.pid;

						arryAccord.push( [ name, adress, pid ] );
						arryPrt.push( [ name, lat, lng, adress ] );

					});


					ajaxAcco ( arryAccord );


					// Область показа маркеров
					var markersBounds = new google.maps.LatLngBounds();

					$.each( arryPrt, function( i, val ) {

						if( i <= 9 ) {

				    	// Область показа маркеров
					    var markerPosition = new google.maps.LatLng( val[1], val[2] );

					    // Добавляем координаты маркера в область
					    markersBounds.extend( markerPosition );
				
						};
					});
						 	



					$.each( shops, function( i, val ) {
						 
						var adress = val.adress,
						 	dist   = val.dist,
						 	lat    = val.lat,
						 	lng    = val.lon,
						 	name   = val.name,
						 	pid    = val.pid;

						arryMarkers.push( [ name, lat, lng, adress, dist ] ); 	
					});


					$.each( arryMarkers, function( i, val ) {

				    // Создаём маркер
				    var marker = new google.maps.Marker({
				        position  : { lat: +val[1], lng: +val[2] },
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
				
				markersBounds.extend( myPos );

				var markerCluster = new MarkerClusterer( map, markerClast, {
					maxZoom  : 13,  // максимальный зум при котором мы еще группируем маркеры, дальше – уже нет
					gridSize : 70,  // размер ячеек сетки, чем меньше значение, тем меньше сетка группировки
					styles   : null // дополнительные стили - стиля нет
				});

				// Центрируем и масштабируем карту
				map.setCenter( markersBounds.getCenter(), map.fitBounds( markersBounds ) );

			});	// Конец функции геолокации

/*-----------------------------------------------------------------------------------------------*/



					$.each( items, function( i, val ) {

						var item_img        = val.item_img,
							name            = val.name,
							lng             = val.lng,
							lng2            = val.lng2,
							wid             = val.wid,
							thick           = val.thick,
							unit            = val.unit,
							color           = val.color,
							cover           = val.cover,
							country         = val.country,
							brand           = val.brand,
							type            = val.type,
							brand_id        = val.brand_id,
							collection      = val.collection,
							collection_id1s = val.collection_id1s,
							collection_img  = val.collection_img,
							id              = val.id,
							id1s            = val.id1s,
							thick           = val.thick,
							weig            = val.weig;
							prices 	        = val.prices[0],
							properties      = val.properties,
							arryProperties  = [];

							if ( prices !== undefined ) {

								var	count  		  = prices.count,
									fors   		  = prices.for,
									part_id 	  = prices.part_id,
									price   	  = prices.price,
									running_meter = prices.running_meter,
									square_meter  = prices.square_meter,
									weight        = prices.weight,
									pieces        = count == 1 ? ' ' : ' 1 уп. | ',
									weightPieces  = weight == 0 ? ' ' : '| ' + weight + ' кг.',
									twoPrice      = +price / +count,
									twoPrice      = Math.ceil( ( twoPrice ) * 100 ) / 100;

									
									
							};
							



						$.each( properties, function( i, val ) {
							 arryProperties.push( ' ' + val );
						});

						var properties = arryProperties;

							if( i%3 == 0 ){
								$( 'div.pEll' ).removeClass( 'pEll' );
								$item.append('<div class="row rowHeight leval2 pEll"></div>');
							};

						 $( 'div.pEll' ).append('<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 border  Description cardProduct heightCards2 levels2">'+
												 		'<figure class="opedDialog">'+
												 			'<div class="infoDialog">'+
												 				'<div class="Picture"><img src="/wimg/' + item_img + '" data-toggle="modal" data-target="#img">'+
												 				'</div>'+
												 			'</div>'+
												 			'<div class="clear">'+
												 			'</div>'+
												 			'<div class="figcaption">'+
												 				'<figcaption class="item_name"><b>Название</b>: <span>' + name +'</span>.</figcaption>'+
												 				'<figcaption class="item_brand"><b>Бренд</b>: ' + brand + '.</figcaption>'+
												 				'<figcaption class="item_country"><b>Страна</b>: ' + country + '.</figcaption>'+
												 				'<figcaption class="item_size"><b>Размеры</b>: <span>Длина:</span><span class="height"> '+ lng + ' </span><span>x</span> <span>Ширана:</span> <span class="width"> ' + wid + ' </span>x <span>Толщина:</span><span class="thickness"> ' + thick + ' .см</span> </figcaption>'+
												 				'<figcaption class="item_pre-packing"><b>Фасовка</b>: ' + pieces + '' + count + ' шт. | ' + square_meter + '  м2 ' + weightPieces + '</figcaption>'+
												 				'<figcaption class="item_color"><b>Цвета</b>: ' + color + '.</figcaption>'+
												 				'<figcaption class="item_cover"><b>Поверхность</b>: ' + cover + '.</figcaption>'+
												 				'<figcaption class="item_type"><b>Вид товара</b>: ' + type + '.</figcaption>'+
												 				'<figcaption class="properties figDisNone"><b>Свойства</b>:<span> '  + properties + '</span></figcaption>'+
												 				'<hr>'+
												 			'</div>'+
												 			'<br>'+
												 			'<div class="priceBlock">'+
												 				'<form role="form" class="price">'+
												 					'<div class="form-group price has-success has-feedback purchase">'+
												 						'<label class="control-label prices twoPrice" for="inputSuccess2">Цена за <b> м2: ' + twoPrice + ' </b> ₽</label>'+
												 						'<label class="control-label prices" for="inputSuccess2"><b>'+ price +'</b> ₽ за ' + fors + '</label>'+
												 						'<div></div>'+
												 						'<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 inputPrice">'+
												 							'<input type="text" class="form-control input-lg" id="exampleInputEmail1" placeholder="' + count + ' ' + fors + '">'+
												 						'</div>'+
												 						'<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 buttomPrice">'+
												 							'<button type="button" title="Добавить в корзину" class="btn btn-primary btn-sm myBtnInfo btnBasket glyphicon glyphicon-shopping-cart"></button>'+
												 						'</div>'+
												 					'</div>'+
												 				'</form>'+	
												 			'</div>'+
												 			'<!-- Modal -->'+
												 			'<div class="modal fade bs-example-modal-lg" id="img" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
												 				'<div class="modal-dialog modal-lg">'+
												 					'<div class="modal-content">'+
												 						'<div class="modal-header">'+
												 							'<button type="button" class="close closes" data-dismiss="modal" aria-hidden="true">&times;</button>'+
												 						'</div>'+
												 						'<div class="modal-body">'+
												 						'</div>'+
												 						'<div class="modal-footer">'+
												 							'<button type="button" class="btn btn-primary btn-sm myBtnActive" data-dismiss="modal">Закрыть</button>'+
												 						'</div>'+
												 					'</div>'+
												 				'</div>'+
												 			'</div>'+
												 		'</figure>'+
												'</div>');


					
				    	$( '.myBtnInfo' ).tooltip({
				     		track: true
				   		});
				  	
						if ( color == null ) {

							$( '.item_color' ).hide();
						};
					});

					$.each( $( '.prices' ), function( i, val ) {

						var priceText      = $( val ).text(),
							priceNamber    = parseInt( priceText ),
							twoPriceArr    = $( val ).prev().text().split( ':' ),
							twoPriceNamber = parseInt( twoPriceArr[1] );

						if ( priceNamber == twoPriceNamber ) {
							$( val )
								.prev()
								.hide();
						};	
					});


					function hidePrices ( className, textUnd ) {
						
						$.each( $( className ), function( i, val ) {
							 var text = $( val ).html();

							 if ( text == textUnd ) {
							 	
							 	$( val )
							 		.html( '<br>' )
							 		.siblings()
							 		.children( 'input' )
							 		.val( ' ' );

							 	$( val )
							 		.closest( '.priceBlock' )
							 		.siblings( '.figcaption' )
							 		.children( '.item_pre-packing' )
							 		.hide();	

							 }
						});
					};

					hidePrices ( '.prices', '<b>undefined</b> ₽ за undefined' );
					hidePrices ( '.twoPrice', 'Цена за <b> м2: undefined </b> ₽' );


					$.each(	$( '.properties span' ), function(i, val) {

						var text = $( val ).text();

						if ( text == ' ' ) {

							$( val ).parent().hide();
						};
					});

					$.each(	$( '.item_size .height' ), function(i, val) {

						var namber = $( val ).text();

						if ( namber == 0 ) {

							$( val ).parent().hide();
						};
					});

					
					$FL.html('');
						
					$.each( photos, function( i, val ) {

						$FL.append('<div class="coll_Imgs">'+
								     '<img class="sliders" src="/wimg/' + val + '">'+
								   '</div>');
					});

				

		  	  		$( 'a[href="/catalog/"]' ).attr('href', '/catalog/' + urls[4] + '/');

					inputPfgeStartNew( urls[(urls.length-2)].substr(4), allItems )
					// intervalImgColl ();




						/*---------------------Диалоговое окно------------------------*/
	




		$( document ).on('click', '.Picture', function() {
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
				.find( '.properties' )
				.removeClass( 'figDisNone' )
				.parent()
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



				}
			});

		});
		
};



	/*------------------------------------------------------------------------------------------------*/

	$( document ).on( 'click', 'a[href^="/catalog/page"]', function(e) {

		var href = $( this ).attr('href');
		history.replaceState( 1, "Title1"  , href );
	});



	/*----------------------------------Вход в коллекцию------------------------------*/



	$( 'a.level1A' ).on( 'click',  function(e) {



		var _this     = $( this ),
			nameColl  = _this.find( '.coll_name' ).text(),
			coll_code = _this.attr( 'coll_code' ),
			coll_id   = _this.attr( 'coll_id' ),
			coll_href = _this.attr( 'href' );

		$( '.pageNumber' )
			.addClass( 'pageNumberLavel2' )
			.attr({
				coll_id   : coll_id,
				coll_code : coll_code,
				coll_href : coll_href
			});

		$( '.filterLeft' )
					.attr({
							coll_id   : coll_id,
							coll_code : coll_code,
							coll_href : coll_href
						})
					.addClass( 'filterLeftLevel2' );			

		$( '.breadCrumbs' ).append( '<strong>&rarr;</strong><a href="{bc_name}">' + nameColl + '</a>' );

		
		// $( '.accordionRemove' ).addClass( 'accordionRemoveLvel2' );
			
		e.preventDefault();

	ajaxColl ( 1, coll_code, coll_id, coll_href );
	// intervalImgColl ();
	});	



	/*--------------------------------------------------------------------------------*/






	/*-----------------Функция сортировки фильтров-----------------*/

   	function filterObj(){


		urls = window.location.href.split('/');
			$( 'option.remov' ).parent( 'select' ).each( function( i, val ){

			var selectOpId = $( val ).children( 'option:selected' ).attr( 'inner_id' );

				if( typeof selectOpId === 'undefined' ){

					$( val ).children('option.remov').attr( 'disabled', 'true' );
				};
			});
			$( 'div.colors' ).addClass( 'colorsNone' );
			$( 'div#filtr_color > div[type="resultsFilterColor"]' ).removeClass( 'colorsNone' );





/*------------------------Геолокация google map-----------------------*/




						

	navigator.geolocation.getCurrentPosition( function( position ) { // Начало функции геолокации

		var	lat        = position.coords.latitude,
		    lng        = position.coords.longitude,
		    myPos 	   = new google.maps.LatLng(  lat, lng ),
		    mapOptions = { 
				zoom        : 14,
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

		



/*--------------------------------------------------------------------*/


					/*------------------Функция отправляет setmem-------------------*/

    			function setJson () {

					if( jsonstr != '{' )
							{
								jsonstr += ',';
							}
					var	urlPage  = window.location.pathname,
					    setmem  = $( 'input.inputNumber' ).attr( 'setmem' ) == undefined ?
							      $( 'ul.pageNumber li > a[href="' + urlPage + '"]' ).attr( 'setmem' ) : 
	            				  $( 'input.inputNumber' ).attr( 'setmem' ),
    					setmem1 = 1;
					jsonstr += '"'+setmem+'"'+':'+'"'+setmem1+'"';		
				};

					/*--------------------------------------------------------------*/	


					/*------------------Функция отправляет ID ПРТ-------------------*/




				function prtJson () {

					if( jsonstr != '{' )
							{
								jsonstr += ',';
							}

	            	var type     = 'pid',
	            		urlPage  = window.location.pathname,
	            		id       = $( 'div.accordionRemoveAktiv' ).attr( 'id' ),
	            		out_id   = id == undefined ? 0 : id,
	            		page     = $( 'input.inputNumber' ).attr( 'type' ) == undefined ?
	            				   $( 'ul.pageNumber li > a[href="' + urlPage + '"]' ).attr( 'type' ) : 
	            				   $( 'input.inputNumber' ).attr( 'type' ),
	            		namber   = $( 'input.inputNumber' ).attr( 'out_id' ) == undefined ? 
	            		           $( 'ul.pageNumber li > a[href="' + urlPage + '"]' ).attr( 'out_id' ) : 
	            		           $( 'input.inputNumber' ).attr( 'out_id' );          

	            		jsonstr += '"'+type+'"'+':'+'"'+out_id+'"'+','+'"'+page+'"'+':'+'"'+namber+'"';


				};


					/*--------------------------------------------------------------*/



				

					/*---------------Функция место определения координат------------*/
				

				function navJson () {
					
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
				 
				$( 'select.comboboxFil option:selected:not(.0)' ).each( function( index, el ) {
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


			function optinRegionID () {
				 
				$( 'select.comboboxFil[type="region"] option:selected:not(.0)' ).each( function( index, el ) {
					if( jsonstr != '{' )
						{
							jsonstr += ',';
						}
					var region_id      = $( el ).attr( 'inner_id' );
					    jsonstr       += '"region_id"'+':'+'"'+region_id+'"';
					    jsonstr_debug += '&debug_region_id='+region_id;
				});
			};

					/*--------------------------------------------------------------*/

			
			var jsonstr       = '{';
			var jsonstr_debug = '';
				setJson ();
				prtJson ();
				navJson ();
				eachJson ( '.pageClass' );
				eachJson ( '.colorBorder' );
				sliderJson ( '#slider-range', 'min_prices', 'max_prices');
				optinJson ();
				optinRegionID ();

			jsonstr += '}';
			jsonstr  = JSON.parse( jsonstr );

			// console.log( jsonstr );
			// console.log(jsonstr_debug);


			
			
			
		/*--------------------------------Ajax запрос на выгрузку каталога и всех фильтров---------------------------------*/
				 
				$.ajax({
					url        : "/hendler.php?mod=json_catalog" + ( ( $.isEmptyObject( jsonstr ) == true ) ? '&is_null=1' : '' ),
					type       : "POST",
					data       : jsonstr,
					dataType   : "json",
					beforeSend : startLoad(),
					/*error      : function ( date ) {

								console.log( date.status );

								var status = date.status;

								if ( status == 500 ) {

									window.location.replace( 'http://www.серко.рф/500.php' );
								};
					},*/
					success    : function( data ) {

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
							  	  brandLength      = brand.length,
							  	  shops            = data.shops,
							  	  prt              = data.prt,
							  	  mem_vars         = data.mem_vars,
								  arryMarkers      = [],
								  markerClast      = [],
								  arryAccord       = [],
								  arryPrt          = [];

							history.pushState( data, null ); // переход по стрелки назад в каталоп


							


	/*-------------------------------Исчезновение фильтров-----------------------------*/


		 	function filNone () {
		 		
				$.each( $( 'ul.ui-autocomplete' ), function( i, val ) {
				  	$( val ).css('display', 'none');
				});

			  	if ( ! $( 'input.custom-combobox-input' ).hasClass( 'inputColor' ) ) {

			  		
					$( '#colorsDisNone, #surfaceDisNone, #sliderLWTDisNone, #sliderRDisNone, #matterDisNone, #subcategoryDisNon, #matterDisNone, #brandDisNone, #addPropertiesDisNone, #theFormDisNone, #sizeFormDisNone' ).fadeOut();
				};

				$( '.inputColor' )
					.parent()
					.next()
					.fadeIn();
		 	};
		  	
		  	


	/*---------------------------------------------------------------------------------*/






	/*-----------------------------Автоклик по всем кнопкам----------------------------*/	


								
		function btnClick () {
			
			var scrol =  $( document ).scrollTop();


			$.each( $( 'div.ui-state-default' ), function( i, val ) {

				$( 'div.ui-state-default:eq(' + i + ')' ).trigger( 'click' );
			});

			$( '.searchs' ).focus();

			$( document ).scrollTop( scrol );
		};

		
		

		


	/*---------------------------------------------------------------------------------*/	

	setTimeout( function  () {
		btnClick ();
		filNone ()
	}, 200);


	/*-------------------------память фильтров и подсветка input------------------------*/	




		function memOption ( memVars, selectId ) {
			
       		var optionText = $( 'option#' + memVars + '' ).text();

        	if ( memVars != undefined ) { 
        		

        		$( selectId )
        			.next()
        			.children( 'input' )
        			.val( optionText )
        			.removeClass( 'focus' )
        			.addClass( 'inputColor' );

        		$( selectId )
        			.children( 'option#'+ memVars )
        			.attr( 'selected', 'selected' );

        		$( selectId )	
        			.children( '.0' )
        			.removeAttr( 'disabled' );	
        	};
		};

		function memOptionIn ( idIn ) {

			var $inputIn  = $( idIn ).find( '.custom-combobox-input' );
			
			setTimeout( function  () {
				
				if ( $inputIn.hasClass( 'inputColor' ) ) {
					$( idIn ).fadeIn();
					$( '#colorsDisNone, #colorsDisNone, #surfaceDisNone, #sliderLWTDisNone, #addPropertiesDisNone, #theFormDisNone, #sizeFormDisNone' ).fadeIn();
				}
			}, 100);
		};

        
        if( typeof mem_vars !== 'undefined' ) {

        	var $inputTypeS = $( '#typeS' ).next();

			memOptionIn ( '#subcategoryDisNon' );
			memOptionIn ( '#brandDisNone' );
			memOptionIn ( $inputTypeS );
	        memOption ( mem_vars.category, '#categoryS' );	
	        memOption ( mem_vars.subcategory, '#subcategoryS' );	
	        memOption ( mem_vars.type, '#typeS' );	
	        memOption ( mem_vars.surface, '#surfaceS' );	
	        memOption ( mem_vars.country, '#countryS' );	
	        memOption ( mem_vars.brand, '#brandS' );

	        if ( mem_vars.color != undefined ) {

	        	var	$color    = $( 'div#color_' + mem_vars.color + '' ),
		        	colorText = $color.attr( 'data-original-title' );

		        $( '.info' ).html('');	

		        $color.addClass( 'colorBorder' );
				
				$( '.info' ).append( '<span class="colorText"><b>' + colorText + '</b></span>'+
											'<br><button type="button" class="btn btn-primary btn-sm myBtnActive colorBtn" data-dismiss="modal">Отмена</button>' );

	        };

	    var  arryAccoRem = [];

	    setTimeout( function () {
	    	
		    $.each( $( '.accordionRemove' ), function( i, val ) {
		    	 arryAccoRem.push( val );
		    });

	    var AARLength = arryAccoRem.length;

	    	if ( AARLength <= 1 ) {
	    		$( 'div#' + mem_vars.pid + '' )
	        		.find( '.removSadow' )
					.addClass( 'removeSadowClick' );

				$( 'div#' + mem_vars.pid + '' )
	        		.find( '.accoStart' )
					.addClass( 'accordionAktiv' );

				$( 'div#' + mem_vars.pid + '' )
	        		.find( '.accordion' )
					.slideDown( 1000, 'easeInOutCubic' );
	    	};

	    }, 100)


	        /*if ( mem_vars.pid != undefined ){

		        setTimeout(	function () {
		        	
		        	$( 'div#' + mem_vars.pid + '' )
		        		.find( '.removSadow' )
						.addClass( 'removeSadowClick' );

					$( 'div#' + mem_vars.pid + '' )
		        		.find( '.accordionStart' )
						.addClass( 'accordionAktiv' );

					$( 'div#' + mem_vars.pid + '' )
		        		.find( '.accordion' )
						.slideDown( 1000, 'easeInOutCubic' );

		        }, 1000)
	        };*/

    	};


        	
    /*---------------------------------------------------------------------------------*/   





			/*---------------------------------Акардионы ПРТ-----------------------------------*/	


							  	  $.each( prt, function( index, val ) {
							  	  	
							  	  	var lat    = val.lat,
							  	  		lng    = val.lon,
							  	  		dist   = val.dist,
							  	  		adress = val.adress,
							  	  		name   = val.name,
							  	  		pid    = val.pid;

							  	  	arryAccord.push( [ name, adress, pid ] );
							  	  	arryPrt.push( [ name, lat, lng, adress ] );

							  	  	
							  	
							  	  });



							  	 var arryfilterLeft = [];

							  	 setTimeout( function () {
							  	 	
								 	 var filterLeftChil = $( '.filterLeft' ).children();

								  	 $.each( filterLeftChil, function( i, val ) {
								  	 	
								 		 arryfilterLeft.push( i );
								  	 });

								  	if ( arryAccord.length > 1 || arryfilterLeft.length <= 1) {
								  		
										ajaxAcco ( arryAccord );
								  	};
							  	 }, 100 ); 	






										// Область показа маркеров
										var markersBounds = new google.maps.LatLngBounds();

										$.each( arryPrt, function( i, val ) {

											if( i <= 9 ) {

									    	// Область показа маркеров
										    var markerPosition = new google.maps.LatLng( val[1], val[2] );

										    // Добавляем координаты маркера в область
										    markersBounds.extend( markerPosition );
									
											};
										});
										



						/*----------------------Открытие модальных окон--------------------*/


								$.each( $( '.myBtnInfo' ), function( i, val ) {
									$( val ).attr( 'data-target', '#modals' + i + '' );
									$( val ).next().attr( 'id', 'modals' + i + '' );

									$( '.myBtnInfo[data-target=#modals' + i + ']' ).on('click', function() {
										$( '#modals' + i + '' ).modal( 'show' );

									});

								});


						/*-----------------------------------------------------------------*/





			/*---------------------------------------------------------------------------------*/							





						/*--------------------Выгрузка маркеров на карту-------------------*/ 

							  	  $.each( shops, function( index, val ) {
							  	  	
								  	  	var lat    = val.lat,
								  	  		lng    = val.lon,
								  	  		dist   = val.dist,
								  	  		adress = val.adress,
								  	  		name   = val.name,
								  	  		pid    = val.pid;

								  	  	arryMarkers.push( [ name, lat, lng, adress, dist ] );

								 });
								
									
							    

								 
								$.each( arryMarkers, function( i, val ) {

								    // Создаём маркер
								    var marker = new google.maps.Marker({
								        position  : { lat: +val[1], lng: +val[2] },
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
								
								markersBounds.extend( myPos );

								var markerCluster = new MarkerClusterer( map, markerClast, {
									maxZoom  : 13,  // максимальный зум при котором мы еще группируем маркеры, дальше – уже нет
									gridSize : 70,  // размер ячеек сетки, чем меньше значение, тем меньше сетка группировки
									styles   : null // дополнительные стили - стиля нет
								});

								// Центрируем и масштабируем карту
								map.setCenter( markersBounds.getCenter(), map.fitBounds( markersBounds ) );
								

								

								



						/*-----------------------------------------------------------------*/ 







							  	  
							  	  $( '.collectionLength' ).text( all_items );
							  	  $( '.brandLength' ).text( brandLength );


							  	  $( 'div.collection_card' ).addClass('rewrite')
							  	  						  	.removeClass('colorsNone');
							  	  $.each( items, function ( index, val ) {
							  	 	
							  	  
							  	  	
							  	  	 var coll_id1s    = val.coll_id1s,
							  	  	 	 coll_id      = val.coll_id,
							  	  	 	 coll_name    = val.coll_name,
							  	  	 	 coll_brand   = val.coll_brand,
							  	  	 	 coll_country = val.coll_country,
							  	  	 	 coll_img     = val.coll_img,
							  	  	 	 obj          = $('div.collection_card.rewrite:first');

									  	 // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
									  	 // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
							  			 // console.log('coll_id1s: ' + coll_id1s);
							  			 // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
							  			 // console.log('coll_id1s: ' + coll_id);
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
								  			.find('.level1A')
								  			.attr( 'coll_code', coll_id1s );

								  		$(obj)
								  			.find('.level1A')
								  			.attr( 'coll_id', coll_id );

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

								 		
								 		
								 			// intervalblockHeight();
								 			// intervalImgColl ();
								 		


											

								 		
											
										


							 				
							 			 	
							 			


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
								  	$( 'option' + nameClass + '[out_id="' + value + '"]' ).removeAttr('disabled');
								});

							 };

							$( 'option.region' ).removeAttr( 'disabled' );



							  	eachOut_id ( type, '.type' );
							  	eachOut_id ( categories, '.category' );
							  	eachOut_id ( subcategories, '.subcategory' );
								eachOut_id ( surface, '.surface' );
								eachOut_id ( country, '.country' );
								eachOut_id ( collection, '.collection' );
								eachOut_id ( brand, '.brand' );

								$( 'option#f955bc0e-ac42-11e4-a41c-c86000ccad94' ).attr( 'selected', 'selected' ); // Центральный федеральный округ


								$.each( color, function ( index, value ) {
								  	$( 'div.colors[out_id="' + value + '"]' ).removeClass('colorsNone');	
								});

							$( '#finish_page' ).val( finish_page );

							var pgNam  = $( '.pageClass' ).attr( 'out_id' ),
								innputNam = pgNam == undefined ? urls[(urls.length-2)].substr(4) : pgNam;

							inputPfgeStartNew ( urls[(urls.length-2)].substr(4), all_items );

							if( typeof mem_vars !== 'undefined' ) {
								history.replaceState( 1, 'Title1'  , '/catalog/page' + mem_vars.page + '/' );

							};	

							}
					
				});
		
	});  // Конец функции геолокации
						   
	   	
           	
	};

		/*-----------------------------------------------------------------------------------------------------------------*/

	/*-------------------------------------------------------------*/


	





						/*--------------Подсказки-----------------*/




	$(function() {
    	$(".hint, .colors, .myBtnInfo").tooltip({
     		track: true
   		});
  	});


						/*----------------------------------------*/

			$( '.resultsFilter div' ).fadeOut(1);

			

						/*---------------Выпадающий input---------------------*/

		
			function autoClikcInput () {
				
				$.each( $( 'select' ), function( i, val ) {
						
		  		   $( document ).on('click', '.custom-combobox-input:eq( ' + i + ' )', function() {

		  		   		if ( $( this ).hasClass( 'inputColor' ) ){

		  		   			$( 'ul.ui-autocomplete:eq( ' + i + ' )' )
		  		   				.children()
		  		   				.eq( 0 )
		  		   				.trigger( 'click' );
		  		   				
		  		   		};
		  		   });
				});
			};


			autoClikcInput () ;
			 
		





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




           var $ulId1      	      = $( 'ul.ui-autocomplete' ).eq( 0 ),
           	   $ulId2      	      = $( 'ul.ui-autocomplete' ).eq( 1 ),
           	   $ulId3      	      = $( 'ul.ui-autocomplete' ).eq( 2 ),
           	   $ulId4      	      = $( 'ul.ui-autocomplete' ).eq( 3 ),
           	   $ulId5      	      = $( 'ul.ui-autocomplete' ).eq( 4 ),
           	   $ulId6      	      = $( 'ul.ui-autocomplete' ).eq( 5 ),
           	   $ulId7      	      = $( 'ul.ui-autocomplete' ).eq( 6 ),
           	   $ulId8      	      = $( 'ul.ui-autocomplete' ).eq( 7 ),
           	   $ulId9      	      = $( 'ul.ui-autocomplete' ).eq( 8 ),
           	   $ulId10     	      = $( 'ul.ui-autocomplete' ).eq( 9 ),
           	   $ulId11     	      = $( 'ul.ui-autocomplete' ).eq( 10 ),
           	   $ulId12     	      = $( 'ul.ui-autocomplete' ).eq( 11 ),
           	   $ulId13     	      = $( 'ul.ui-autocomplete' ).eq( 12 ),
           	   $ulId14     	      = $( 'ul.ui-autocomplete' ).eq( 13 ),
           	   $ulId15     	      = $( 'ul.ui-autocomplete' ).eq( 14 ),
           	   $ulId1Li    	      = $ulId1.children( 'li' ).eq( 0 ),
           	   $ulId2Li    	      = $ulId2.children( 'li' ).eq( 0 ),
           	   $ulId3Li    	      = $ulId3.children( 'li' ).eq( 0 ),
           	   $ulId4Li    	      = $ulId4.children( 'li' ).eq( 0 ),
           	   $ulId5Li    	      = $ulId5.children( 'li' ).eq( 0 ),
           	   $ulId6Li    	      = $ulId6.children( 'li' ).eq( 0 ),
           	   $ulId7Li    	      = $ulId7.children( 'li' ).eq( 0 ),
           	   $ulId8Li    	      = $ulId8.children( 'li' ).eq( 0 ),
           	   $ulId9Li    	      = $ulId9.children( 'li' ).eq( 0 ),
           	   $ulId10Li   	      = $ulId10.children( 'li' ).eq( 0 ),
           	   $ulId11Li   	      = $ulId11.children( 'li' ).eq( 0 ),
           	   $ulId12Li   	      = $ulId12.children( 'li' ).eq( 0 ),
           	   $ulId13Li   	      = $ulId13.children( 'li' ).eq( 0 ),
           	   $ulId14Li   	      = $ulId14.children( 'li' ).eq( 0 ),
           	   $ulId15Li   	      = $ulId15.children( 'li' ).eq( 0 ),
           	   $btnInput1  	      = $( 'div.ui-state-default' ).eq( 0 ),
           	   $btnInput2  	      = $( 'div.ui-state-default' ).eq( 1 ),
           	   $btnInput3  	      = $( 'div.ui-state-default' ).eq( 2 ),
           	   $btnInput4  	      = $( 'div.ui-state-default' ).eq( 3 ),
           	   $btnInput5  	      = $( 'div.ui-state-default' ).eq( 4 ),
           	   $btnInput6  	      = $( 'div.ui-state-default' ).eq( 5 ),
           	   $btnInput7  	      = $( 'div.ui-state-default' ).eq( 6 ),
           	   $btnInput8  	      = $( 'div.ui-state-default' ).eq( 7 ),
           	   $btnInput9  	      = $( 'div.ui-state-default' ).eq( 8 ),
           	   $btnInput10 	      = $( 'div.ui-state-default' ).eq( 9 ),
           	   $btnInput11 	      = $( 'div.ui-state-default' ).eq( 10 ),
           	   $btnInput12 	      = $( 'div.ui-state-default' ).eq( 11 ),
           	   $btnInput13 	      = $( 'div.ui-state-default' ).eq( 12 ),
           	   $btnInput14 	      = $( 'div.ui-state-default' ).eq( 13 ),
           	   $btnInput15 	      = $( 'div.ui-state-default' ).eq( 14 ),
           	   $inputFil1  	      = $( 'input.custom-combobox-input' ).eq( 0 ),
           	   $inputFil2  	      = $( 'input.custom-combobox-input' ).eq( 1 ),
           	   $inputFil3  	      = $( 'input.custom-combobox-input' ).eq( 2 ),
           	   $inputFil4  	      = $( 'input.custom-combobox-input' ).eq( 3 ),
           	   $inputFil5  	      = $( 'input.custom-combobox-input' ).eq( 4 ),
           	   $inputFil6  	      = $( 'input.custom-combobox-input' ).eq( 5 ),
           	   $inputFil7  	      = $( 'input.custom-combobox-input' ).eq( 6 ),
           	   $inputFil8  	      = $( 'input.custom-combobox-input' ).eq( 7 ),
           	   $inputFil9  	      = $( 'input.custom-combobox-input' ).eq( 8 ),
           	   $inputFil10 	      = $( 'input.custom-combobox-input' ).eq( 9 ),
           	   $inputFil11 	      = $( 'input.custom-combobox-input' ).eq( 10 ),
           	   $inputFil12 	      = $( 'input.custom-combobox-input' ).eq( 11 ),
           	   $inputFil13 	      = $( 'input.custom-combobox-input' ).eq( 12 ),
           	   $inputFil14 	      = $( 'input.custom-combobox-input' ).eq( 13 ),
           	   $inputFil15 	      = $( 'input.custom-combobox-input' ).eq( 14 ),
           	   arrySubcategory    = [],
           	   arryBrand          = [],
           	   arryAdditionalTepy = [],
           	   arryAddProperties  = [],
           	   arryTheForm        = [],
           	   fadeInFil          = 500;


           	   $.each( $( '.addProperties' ), function(index, val) {
           	   	 console.log(val);
           	   });

           	function optionDis ( hasClass, hasClassR, subClass, idDisNone, hasSubClassR, hasSubClass, arrySubClass ) {
           	   	
	        	if ( $( option ).hasClass( hasClass ) ) {
	        		
	        		$.each( $( subClass ), function( i, val ) {
	        			arrySubClass.push( val ); 
	        		});

	        		if ( arrySubClass != undefined ) {

	        			$( idDisNone ).fadeIn( fadeInFil );
	        		} else {

	        			$( '#colorsDisNone, #surfaceDisNone, #sliderLWTDisNone, #sliderRDisNone, #matterDisNone, #addPropertiesDisNone, #theFormDisNone, #sizeFormDisNone' ).fadeIn( fadeInFil );
	        		}

	        	} else if( $( option ).hasClass( hasSubClassR ) ){

	        		$( idDisNone ).fadeOut( fadeInFil );
	        	} else if( $( option ).hasClass( hasClassR ) ){

	        		$( idDisNone ).fadeOut( fadeInFil );
	        	};

	        	if ( $( option ).hasClass( hasSubClass ) ){

	        		$( '#colorsDisNone, #surfaceDisNone, #sliderLWTDisNone, #sliderRDisNone, #matterDisNone, #addPropertiesDisNone, #theFormDisNone, #sizeFormDisNone' ).fadeIn( fadeInFil );
	        	};

           	};
           	
           	
           	function subCatOut ( subClass ) {
           		
	           	if ( $( option ).hasClass( subClass ) ) {

	           		$( '#colorsDisNone, #surfaceDisNone, #sliderLWTDisNone, #sliderRDisNone, #matterDisNone, #addPropertiesDisNone, #theFormDisNone, #sizeFormDisNone' ).fadeOut( fadeInFil );
	           	}
           	};
           


            var speedOut  = 500,
            	speedIn   = 2000,
            	scrollPos = 600;



			function clickInput ( inputFil, ulIdLi ) {
					inputFil.on( 'click', function() {
				if ( $( this ).hasClass( 'inputColor' ) ) {
		      		ulIdLi.trigger( 'click' );
				};
		      });
		    };        	


         


        function openFil ( ulId, btnInput, inputFil, classRemAttrDis ) {
        	/*ulId.removeClass( 'ulDisplay' );
			btnInput.addClass( 'subActive' );
			inputFil.addClass( 'subActive' );*/
			// inputFil.val( text );
			$( classRemAttrDis ).removeAttr( 'disabled' );
        };

        function shutFil ( ulIdLi, ulId, btnInput, inputFil, delay ) {
        	setTimeout( function() {
            		ulIdLi.trigger( 'click' );
            /*		ulId.addClass( 'ulDisplay' );
            		btnInput.removeClass( 'subActive' );
            		inputFil.removeClass( 'subActive' );*/
            	}, delay );
        };




        	/*clickInput ( $inputFil1, $ulId1Li );
        	clickInput ( $inputFil2, $ulId2Li );
        	clickInput ( $inputFil3, $ulId3Li );
        	clickInput ( $inputFil4, $ulId4Li );
        	clickInput ( $inputFil5, $ulId5Li );
        	clickInput ( $inputFil6, $ulId6Li );
        	clickInput ( $inputFil7, $ulId7Li );
        	clickInput ( $inputFil8, $ulId8Li );
        	clickInput ( $inputFil9, $ulId9Li );
        	clickInput ( $inputFil10, $ulId10Li );
        	clickInput ( $inputFil11, $ulId11Li );
        	clickInput ( $inputFil12, $ulId12Li );*/


           	optionDis ( 'category', 'categoryR', '.subcategory', '#subcategoryDisNon', 'subcategoryR', 'subcategory', arrySubcategory );
           	optionDis ( 'country', 'countryR', '.brand', '#brandDisNone', 'brandR', 'brand', arryBrand );
         


           	subCatOut ( 'subcategoryR' );
           	subCatOut ( 'brandR' );
           	



            /*if ($( option ).hasClass( 'category' )) {
            	openFil ( $ulId4, $btnInput4, $inputFil4, 'Выбрано все', '.subcategoryR' );
            	
            }else if($( option ).hasClass( '0 categoryR' )){
            	var delayOne = 10;
            	shutFil ( $ulId4Li, $ulId4, $btnInput4, $inputFil4, delayOne );
            }; */


        
            if ( $( option ).hasClass( 'type' ) ) {
            	$( '#colorsDisNone, #surfaceDisNone, #sliderLWTDisNone, #sliderRDisNone' ).fadeIn( fadeInFil );
            };


            if ($( option ).hasClass( 'category' )) {
            	openFil ( $ulId7, $btnInput7, $inputFil7, '.subcategoryR' );
            	
            }else if($( option ).hasClass( '0 categoryR' )){
            	var delayOne = 10;
            	shutFil ( $ulId7Li, $ulId7, $btnInput7, $inputFil7, delayOne );
            };


            if ($( option ).hasClass( 'country' )) {
            	openFil ( $ulId15, $btnInput15, $inputFil15, '.brandR' );
            	
            }else if($( option ).hasClass( '0 countryR' )){
            	var delayOne = 10;
            	shutFil ( $ulId15Li, $ulId15, $btnInput15, $inputFil15, delayOne );
            }; 


            
            
            
            
        history.replaceState( 1, "Title1"  , "/catalog/page1/" );



 		if ( $( option ).attr( 'class' ) ) {
 			
 			filterObj();
 		} else {

 			newAccord();
 		};




    /*--------------------------------------------------------------------------------------*/




		// blockHeight();	


            this._trigger( "select", event, {
              item: ui.item.option
            });
          },
 
          autocompletechange: "_removeIfInvalid"
        });
      },
 
      _createShowAllButton: function() {
        var input 	= this.input,
          	wasOpen = false;
 
        $( "<div>" )
          .append('<div class="ui-state-default ui-corner-all active" style="height:100%; width: 48px; border-radius: 0px 4px 4px 0px;">'
          			+'<span class="ui-icon ui-icon-triangle-1-s" style="position:relative;top:15px; left: 15px;"></span>'
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
          .attr( "title", 'По запросу ' + value + ' ничего не найдено' )
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











		

        




		/*----------------Изменение input страниц-------------------*/



function inputPfgeStartNew( innputNam, allItems ) {

	funImgWidthHeight ();

	

	$( 'ul.pageNumber' ).html('');

	var ths_pg   = Number( innputNam ),
		urlLvl2  = location.pathname.split( '/' ),
	    href     = $( '.pageNumber' ).hasClass( 'pageNumberLavel2' ) ? '/' +  urlLvl2[1] + '/' + urlLvl2[2] + '/' : '/catalog/',
		allPages = Math.ceil( Number( allItems ) / 9 ),
		isWrite  = 1;

		

		if( String( ths_pg ) == 'NaN' ) {
			ths_pg = '1'; 
			innputNam = '1';
		};

		/*for( i = 3; typeof urls[i] !== 'undefined'; i++ ) {

			if( urls[i].substr( 0, 4 ) != 'page' ) {

				if( href != '/' ) {
					href += '/'
				}; 

			href += urls[i]; 
			};
		};*/
		
		for( i = 0; i < allPages; i++ ) {

		pg = i+1;

			if( isWrite == 0 && 
				( pg > ( allPages - 3 ) 	|| 
						   pg == ths_pg 	|| 
						   pg == ths_pg + 1 || 
						   pg == ths_pg - 1 ) ) { 

				isWrite = 1; 
			};

			if( isWrite == 1 ) {
				if( allPages > 9          && 
					pg > 3                && 
					pg < ( allPages - 2 ) && 
					pg != ths_pg          && 
					pg != ths_pg + 1      && 
					pg != ths_pg - 1 ) {

						isWrite = 0;

						$('ul.pageNumber').append('<li class="pageNumberPoint">...</li>');

				} else {

					if( pg == innputNam && allPages > 3 ) {

						var	input      = '<li class="pageNumberInit"><input out_id="'+ pg +'" type="page" setmem="setmem" class="inputNumber from-to" value="' + pg + '"></li>',
						    arrowLeft  = '<div class="arrowLeft blPage">'+
								  	 	'<a class="pageA" out_id="' + ( pg - 1 ) + '" type="page" href="' + href + 'page' + ( pg - 1 ) + '/">‹</a>'+
								     '</div>',
							arrowRight = '<div class="arrowRight blPage">'+
										 	'<a class="pageA" out_id="' + ( pg + 1 ) + '" type="page" href="' + href + 'page' + ( pg + 1 ) + '/">›</a>'+
										 '</div>';


						$('ul.pageNumber').append( input );

							if( pg > 1 ) { 
								$( '.pageNumberInit' ).prepend( arrowLeft );
							};

							if( pg < allPages ) {
								$( '.pageNumberInit' ).append( arrowRight );
							};

						$('ul.pageNumber').append('</li>');

					} else {
					$('ul.pageNumber').append('<li class="pageNumberBorderLeft"><a class="pageA" setmem="setmem" out_id="' + pg + '" type="page" href="' + href + 'page' + pg + '/">' + pg + '</a></li>');
					};
				};
			};
		};
		
		$( 'ul.pageNumber li' ).click( function(e) {

			var _this = $( this );
			if( _this.is( '.pageNumberInit' ) ) {

				return true
			} else {

				if ( $( '.pageNumber' ).is( '.pageNumberLavel2' ) ) {

					var namPage   = _this.find( '.pageA' ).text(),
						$PNL      = $( '.pageNumberLavel2' ),
						coll_code = $PNL.attr( 'coll_code' ),
						coll_id   = $PNL.attr( 'coll_id' ),
						coll_href = $PNL.attr( 'coll_href' );
					
					ajaxColl ( namPage, coll_code, coll_id, coll_href );

					
				} else {
					
					$( this )
						.children('a')
						.addClass( 'pageClass' );

					
					history.replaceState( 1, "Title1"  , $( this ).children('a').attr('href') );
					filterObj();

					$('ul.pageNumber div a').click(function(e) {
						$( this ).addClass( 'pageClass' );
						console.log($( this ).attr('href'));
						history.replaceState( 1, "Title1"  , $( this ).attr('href') );
						filterObj();
					return false;
			        });
				}

			};
		return false;
        });


		$( '.inputNumber' ).on( 'keypress', function(e){

			var	value    = $( this ).val(),
				fin_page = $( '.pageA:last' ).text();

			if( e.charCode == 13 || e.keyCode == 13 ) {

				if (  +value <= +fin_page ) {

					$( this ).addClass( 'pageClass' );


					$( ".inputNumber" ).attr( 'out_id', value );

					history.replaceState( 1, "Title1"  , href+ 'page' +value+ '/' );

					filterObj();
				};
			};
		});
	pageNumberBackground ();
};






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
	                key == 8  || 
	                key == 9  ||
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

window.onload = function (){ 
	window.setTimeout( function (){ 
		window.addEventListener( "popstate", function( e ) {
		var	l = ( location.pathname || '' ) + ( location.search || '' );
		reLoaction( l, 1, 1 );
		e.preventDefault();
		}, false ); 
	}, 1 ); 
}

function init(){

var old_loc = (location.pathname || '') + (location.search || '');

 	$( "a:not( [ href^='#' ] ):not( [ target='_blank' ] ):not( [ href$='/rss/' ] ):not( [ href^='mailto\:' ] ):not( [ href='/catalog/' ] ):not( [ href^='#'] )" ).on('click', function(e){
 		return false;
 	});
	
	$( "a:not( [ href^='#' ] ):not( [ target='_blank' ] ):not( [ href$='/rss/' ] ):not( [ href^='mailto\:' ] ):not( [ href='/catalog/' ] ):not( [ href^='#'] ):not( .pageA ):not( .inputNumber ):not( .level1A )" ).on('click', function(){
	var href = $(this).attr('href');
	reLoaction(href,1);

	});
	
}

 /*------------------------------------------------------------*/