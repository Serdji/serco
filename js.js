// $(function(){



// 	    var topBlock     	= $( '.blockHeight' ).children().eq(1).outerHeight(),
// 			centralBlock 	= $( '.blockHeight' ).children().eq(2).outerHeight(),
// 			bottomBlock  	= $( '.blockHeight' ).children().eq(3).outerHeight();
			
// 					$( '.blockHeight' ).children().eq(1).children().css('height', topBlock);
// 					$( '.blockHeight' ).children().eq(2).children().css('height', centralBlock);
// 					$( '.blockHeight' ).children().eq(3).children().css('height', bottomBlock);
	
			

// 	allFuncs();



// 	initialize_google();

// 	ini = init();


// /*------------map---------------*/

// 	var map_min = 0;
// 	initialize_google();
// 		$(document).scroll(function(){
// 		if(($(document).scrollTop() < 600 || $(document).scrollTop() == 600) && map_min == 0)
// 			{
// 			$('div#map').removeClass('cl2').addClass('cl1');
// 			map_min = 1;
// 			}/*

// 			else if(($(document).scrollTop() > 300 || $(document).scrollTop() == 300) && map_min == 1)
// 			{
// 			$('div#map').removeClass('cl1').addClass('cl2');
// 			$('div#map').next('div').css('padding-top','0px');
// 			$('div#mainloads').css('margin-top','600px');
// 			map_min = 0;
// 			}
// 			$( document ).on( 'scroll', function() {

// 				$('div#mainloads').addClass('content');
// 			});*/
// 		});

// 	});

// /*-------------------------------------*/

// function initialize_google() {
// 	navigator.geolocation.getCurrentPosition(function(position)
// 	{
// 	var latitude = position.coords.latitude;
// 	var longitude = position.coords.longitude;
// 	var haightAshbury = new google.maps.LatLng(latitude,longitude);
// 	var mapOptions = {zoom:13,center: haightAshbury,mapTypeId:google.maps.MapTypeId.TERRAIN,scrollwheel:false}
// 	map = new google.maps.Map(document.getElementById("map"), mapOptions);
// 	var lat = [];
// 	lat = $('input#lat').val().split('|');
// 		for(i=0;typeof lat[i] !== 'undefined';i++){lat[i]=Number(lat[i])/1000;}
// 	var lng = [];
// 	lng = $('input#lng').val().split('|');
// 		for(i=0;typeof lng[i] !== 'undefined';i++){lng[i]=Number(lng[i])/1000;}
// 	micon = $('input#micon').val().split('|');	
// 	markers = [];
// 	/*
// 		for(id=0;typeof lat[id] !== 'undefined';id++)
// 		{
// 		var point = new google.maps.LatLng(parseFloat(lat[id]),parseFloat(lng[id]));
// 		var contentString = '<div id="balloon">....</div>';
// 		var infowindow = new google.maps.InfoWindow({content: contentString});			
// 		markers[id] = new google.maps.Marker({icon:'/source/micons/'+micon[id]+'.png',position:point,map:map,title:'Тайтл '});		
// 		google.maps.event.addListener(markers[id],'click', function(){infowindow.open(map,markers[id])});
// 		}
// 	*/
	
// 	/*----Scroll----*/
// 	$('html, body').scrollTop(600);
// 	return google;
// 	});
// 	/*--------------*/
	


   
//     $( "#tabs" ).tabs({
//       beforeLoad: function( event, ui ) {
//         ui.jqXHR.fail(function() {
//           ui.panel.html(
//             "Couldn't load this tab. We'll try to fix this as soon as possible. " +
//             "If this wouldn't be a demo." );
//         });
//       }
//     });
 


   

// 	/*----------Исчезает карта JQuery-----------*/

// 	/*$(window).on('scroll', function (){
// 		if ($(this).scrollTop() < 600)
// 			$('#map').fadeIn();
// 		else
// 			$('#map').fadeOut(500);
// 	});
// 		};*/

// 	/*-----------------------------------*/

// 	/*----------Исчезает меню JQuery-----------*/

// 	/*$(window).on('scroll', function (){
// 		if ($(this).scrollTop() < 1000 )
// 			$('.navbar-inverse').stop().animate({opacity: 1}, 800);
// 		else
// 			$('.navbar-inverse').stop().animate({opacity: 0.3}, 800);

// 	});

// 	$('.navbar-inverse').on('mouseover', function(){
// 			$(this).animate({opacity: 1}, 100);
// 	});*/

// 	/*-----------------------------------*/

	


// 	/*------------------------------------------------------------------*/

	

// }





// /*----------------Асинхронная загрузка страниц-----------------------*/


// var ajaxNavigation	 = true;
// var parserPressKey	 = 0;
// var oldKeyVal		 = '';
// var thisPage		 = 1;
// var prePage			 = 0;
// var prePageCoords	 = 0;
// var nxtPage			 = 2;
// var nxtPageCoords	 = 0;
// var pagesHistory	 = Array();
// var marker			 = '';
// var prep			 = 0;
// var finish_page		 = 0;
// var old_loc			 = '';
// var reLoactionFixVar = 0;
// var sliderPriceInit	 = 0;
// var loadedPage		 = 0;
// var ini = null;

// function str_replace ( search, replace, subject ) {
// 	if(!(replace instanceof Array)){
// 		replace=new Array(replace);
// 		if(search instanceof Array){
// 			while(search.length>replace.length){
// 				replace[replace.length]=replace[0];
// 			}
// 		}
// 	}
// 	if(!(search instanceof Array))search=new Array(search);
// 	while(search.length>replace.length){
// 		replace[replace.length]='';
// 	}
// 	if(subject instanceof Array){
// 		for(k in subject){
// 			subject[k]=str_replace(search,replace,subject[k]);
// 		}
// 		return subject;
// 	}
// 	for(var k=0; k<search.length; k++){
// 		var i = subject.indexOf(search[k]);
// 		while(i>-1){
// 			subject = subject.replace(search[k], replace[k]);
// 			i = subject.indexOf(search[k],i);
// 		}
// 	}
// return subject;
// }

// function urlEncode(url)
// {
// 	if(url == ''){ return url; }
// var len = Number(url.length)-1;
// 	if(url[0] != '/'){url = '/' + url;}
// return url;
// }

// function varsEncode(str)
// {
// var d_arr = Array();
// var t_arr = str.split('/');
// d_arr = '&url=/';
// 	for(i=1;t_arr[i];i++)
// 	{
// 	d_arr += t_arr[i] + '/';
// 	}
// return d_arr;
// }

// function reLoaction(new_loc,loadad,goBack,bPages)
// {
// 	if(typeof loadad == "undefined"){loadad = 0;}
// 	if(typeof goBack == "undefined"){goBack = 0;}
// 	if(typeof bPages == "undefined"){bPages = 0;}
// 	if(ajaxNavigation == true)
// 	{
// 	ajaxNavigation = false;
// 	var loc = new_loc;
// 	curLoc = urlEncode(loc);
// 	var ld = (location.toString().match(/#(.*)/) || {})[1] || '';
// 	var	l = (location.pathname || '') + (location.search || '');
// 	var oLoc = old_loc.split('/');
// 	var nLoc = new_loc.split('/');
// 		if(ld != ''){l += '#' + ld;}
// 		if((curLoc != l || loadad == 1) && curLoc != '')
// 		{
// 		$('div#loadProcess').css('display','block');
// 		$('div#loadProcess div.mess p').html('Загрузка...');
// 			if(curLoc.indexOf('/back/') + 1){curLoc = str_replace('/back/','/',curLoc);}
// 			if(goBack == 0)
// 			{
// 			history.pushState({ foo: curLoc }, "", curLoc);
// 			}
// 		load('get_page', varsEncode(curLoc));
// 		}
// 		else
// 		{
// 		ajaxNavigation = true;
// 		}
// 	}
// }

// 									/*------------Основной код--------------*/
	
// 	function allFuncs()
// 	{
// 	var urls = window.location.href.split('/');

// $( 'a[href="/"]' ).on('click', function() {
// 	$( 'div.jumbotron.cl1' ).remove();
// 	window.location = '/';
// });


// /*----------------------------Акардионы----------------------------*/	

// 	$( '.removSadow' ).on( 'mouseover', function() {
// 		$( this ).removeClass('text-shadow');
// 	});
// 	$( '.removSadow' ).on( 'mouseout', function() {
// 		$( this ).addClass('text-shadow');
// 	});


// 	$( '.accordion' ).hide();

// 	$( '.accordionStart' ).on( 'click', function() {
// 		var speed = 1000;
// 			$( this ).next( '.accordion' )
// 					 .slideToggle( speed );

// 			$( this ).parent()
// 					 .siblings()
// 					 .children( '.accordion' )
// 					 .slideUp( speed );
		


// 			if ( ! $( this ).hasClass( 'accordionAktiv' ) ) {
// 				$( this ).addClass( 'accordionAktiv' );
// 				$( this ).children('.filterLeftPad')
// 						 .children( '.removSadow' )
// 						 .addClass('removeSadowClick');

// 			} else{
// 				$( this ).removeClass('accordionAktiv');
// 				$( this ).children('.filterLeftPad')
// 						 .children( '.removSadow' )
// 						 .removeClass( 'removeSadowClick' );
// 			};

// 			$( this ).parent()
// 					 .siblings()
// 					 .children( '.accordionStart' )
// 					 .removeClass( 'accordionAktiv' );
					 
// 			$( this ).parent()
// 					 .siblings()
// 					 .children( '.accordionStart' )
// 					 .children('.filterLeftPad')
// 					 .children('.removSadow')
// 					 .removeClass( 'removeSadowClick' );


		

// 	});
// /*-----------------------------------------------------------------*/



// /*---------------------Костыль на размер картинак------------------*/
// // Тоже работает
// 		/*$("div.Picture img").load(function() {
//         if( $(this).width() > 200 ){
//         	console.log('test');
//           $(this).css( 'width', '200px');
//         }
//     });*/


// /*-----------------------------------------------------------------*/

// /*---------------------Карта под размер экрана---------------------*/


// var mapHeight = $( window ).height();
// $( '#map' ).css('height', mapHeight - 50);

// /*-----------------------------------------------------------------*/
			
// /*----------------------Выровнить все блоки------------------------*/




// function blockHeight() {
// 	init();
// var count_load_img = 0;
// var count_load_img_max = 0;
// 	$( '.blockHeight div.heightCards2 img' ).load(function() {
// 		count_load_img++;
// 		var hh = Number($(this).parent('div').parent('figure').parent('a').parent('div').height());
// 			if(hh > count_load_img_max)
// 				{
// 					count_load_img_max = hh;
// 				}
// 			if(count_load_img == 3)
// 			{
// 			/*count_load_img = 0;
// 			$(this).parent('div').parent('figure').parent('a').parent('div').parent('div').children('div').css('height',String(count_load_img_max)+'px');*/

// 	var topBlock     	= $( '.blockHeight' ).children().eq(1).outerHeight(),
// 		centralBlock 	= $( '.blockHeight' ).children().eq(2).outerHeight(),
// 		bottomBlock  	= $( '.blockHeight' ).children().eq(3).outerHeight(),
// 		figure       	= $( 'figure' ),
// 		arrHeightFigure = new Array();
		
// 		$( '.blockHeight' ).children().eq(1).children().css('height', topBlock);
// 		$( '.blockHeight' ).children().eq(2).children().css('height', centralBlock);
// 		$( '.blockHeight' ).children().eq(3).children().css('height', bottomBlock);
		
// 		/*$.each(figure, function(index, val) {
// 			var heightFigure = $(val).outerHeight();
// 			arrHeightFigure[index]  = Number(heightFigure);
// 		});

			
// 			var maxHeihtFigure = Math.max.apply(null, arrHeightFigure);
		
			 
// 		if ( ( maxHeihtFigure > topBlock )     || 
// 			 ( maxHeihtFigure > centralBlock ) || 
// 			 ( maxHeihtFigure > bottomBlock ) ) 
// 			{
// 				$( '.blockHeight' ).children().eq(1).children('div.levels1').css('height', maxHeihtFigure + 15);
// 				$( '.blockHeight' ).children().eq(2).children('div.levels1').css('height', maxHeihtFigure + 15);
// 				$( '.blockHeight' ).children().eq(3).children('div.levels1').css('height', maxHeihtFigure + 15);

// 			}else{
// 				$( '.blockHeight' ).children().eq(1).children('div.levels1').css('height', topBlock + 15);
// 				$( '.blockHeight' ).children().eq(2).children('div.levels1').css('height', centralBlock + 15);
// 				$( '.blockHeight' ).children().eq(3).children('div.levels1').css('height', bottomBlock + 15);
				
// 			};*/




// 			}
	
// 	});
// };

	

// blockHeight();

// $(document).on('load', function(event) {
// 	blockHeight();
// });



// /*-----------------------------------------------------------------*/
   


// /*--------------------------Выгруска картиноак---------------------*/

// 	function imgs(i){

// 		if(typeof i === 'undefined')
// 		  {
// 		  	i = 1;
// 		  }

// 		var jqxhr = $.ajax('/iimg/collection'+urls[4]+'.'+String(i)+'.png', {
// 						success: function(data){
// 							var img = "<img src='/iimg/collection"+urls[4]+"."+String(i)+".png' class='arrImg opacityArrImg1'>";
// 							$( '.minImg' ).append( img );
// 							imgs(++i)
// 						},
// 						error: function(data){
// 							$( '.minImg' ).children( 'img:first' )
// 										  .removeClass( 'opacityArrImg1' )
// 										  .addClass( 'opacityArrImg0' );
// 							$( '.arrImg' ).on( 'click', function() {
// 									$( '.arrImg' ).removeClass( 'opacityArrImg0' )
// 												  .addClass( 'opacityArrImg1' );
// 									$( this ).removeClass( 'opacityArrImg1' )
// 											 .addClass( 'opacityArrImg0' );
// 								var href = $( this ).attr( 'src' );
// 								$( '.bigImg img' ).attr( 'src',href );
// 							});
// 						}
// 					});
// 	};

// 	imgs();

// 	$( '.openImg' ).on( 'click', function() {
// 		$( '.closeImg' ).css({
// 							  'position'  : 'absolute',
// 							  'display'   : 'inline', 
// 							  'min-width' : '680px',
// 							  'left'      : '7%',
// 							  'z-index'   : '999'
// 							})
// 						.animate({'opacity': '1'}, 300);
// 		$('body').append('<div id="preLoader"></div>');
// 	});

// 	$( '.closeImg' ).on( 'click', function() {
// 		$( this ).removeAttr( 'style' );
// 		$( '#preLoader' ).remove();
// 	});



// /*-----------------------------------------------------------------*/




// /*---------------------Выравнивание картинок-----------------------*/

// 	function imgWidthHeight (){
// 		$.each( $( '.level1Img' ), function(index, val) {
// 			var imgWidth   = $(val).width(),
// 				imgHeight  = $(val).height();
// 			if ( $( '.level1Img' ).attr('style') ) {
// 				$( '.level1Img' ).removeAttr('style');

// 			}else{

// 				if ( imgWidth >= imgHeight ) {
// 					$( this ).css('height', '200');
// 				}else{
// 					$( this ).css('width', '200');			
// 				};
// 			};		
// 		});		
// 	};

// 	imgWidthHeight ();

// 	$( 'img' ).on('load', function(event) {
// 		imgWidthHeight ();
// 	});




// /*-----------------------------------------------------------------*/




// 				/*--------slider по ценам JQuery UI--------*/
					
					
// 				    $( "#slider-range" ).slider({
// 				      range: true,
// 				      min: 0,
// 				      max: 9999,
// 				      values: [ 3000, 7000 ],
// 				      slide: function( event, ui ) {
// 				        $( "#amount1" ).val(ui.values[ 0 ]);
// 						$( "#amount2" ).val(ui.values[ 1 ]);
// 				      }
// 				    });
// 				    $( "#amount1" ).val($( "#slider-range" ).slider( "values", 0 ));
// 					$( "#amount2" ).val($( "#slider-range" ).slider( "values", 1 )); 
				  
// 				  /*-----------------------------------*/	





// 						/*-------------------------Фильтр размера плитки---------------------------*/

// 				/*------------------По X-----------------------*/

// 	$( "#slider-tilesX" ).slider({
// 	      range: true,
// 	      min: 0,
// 	      max: 100,
// 	      values: [ 20, 80 ],
// 	      slide: function( event, ui ) {
// 	        $( "#x1" ).val(ui.values[ 0 ]);
// 			$( "#x2" ).val(ui.values[ 1 ]);
// 	      }
// 	    });
// 	    $( "#x1" ).val($( "#slider-tilesX" ).slider( "values", 0 ));
// 		$( "#x2" ).val($( "#slider-tilesX" ).slider( "values", 1 ));

// 				/*---------------------------------------------*/
// 				/*------------------По Y-----------------------*/

	
// 		$( "#slider-tilesY" ).slider({
// 		  orientation: "vertical",
// 	      range: true,
// 	      min: 0,
// 	      max: 100,
// 	      values: [ 20, 80 ],
// 	      slide: function( event, ui ) {
// 	        $( "#y1" ).val(ui.values[ 0 ]);
// 			$( "#y2" ).val(ui.values[ 1 ]);
// 	      }
// 	    });
// 	    $( "#y1" ).val($( "#slider-tilesY" ).slider( "values", 0 ));
// 		$( "#y2" ).val($( "#slider-tilesY" ).slider( "values", 1 ));

// 				/*---------------------------------------------*/
// 				/*------------------По Z-----------------------*/

// 	$( "#slider-tilesZ" ).slider({
// 	      range: true,
// 	      min: 0,
// 	      max: 100,
// 	      values: [ 20, 80 ],
// 	      slide: function( event, ui ) {
// 	        $( "#z1" ).val(ui.values[ 0 ]);
// 			$( "#z2" ).val(ui.values[ 1 ]);
// 	      }
// 	    });
// 	    $( "#z1" ).val($( "#slider-tilesX" ).slider( "values", 0 ));
// 		$( "#z2" ).val($( "#slider-tilesX" ).slider( "values", 1 ));

// 				/*---------------------------------------------*/  

// 					/*-------------------------------------------------------------------------*/


// 						/*-----------------Рамка для выбранного цвета------------------*/


// 		$(".colors").on("click", function(){
		
// 			if ( $( this ).is( '.colorBorder' ) ) {

// 				$( this ).removeClass('colorBorder');
// 				$( 'div.color div' ).remove();
// 				$( 'div.color strong' ).remove();
// 				$( 'div.color' ).fadeOut(500);
// 				filterObj();

				
// 			}else{

// 				$( '.colors' ).removeClass('colorBorder');
// 				$( this ).addClass('colorBorder ');

// 				var color_id  = $( this ).attr( 'id' ),
// 					colorText = $( this ).attr( 'data-original-title' );

// 				$( 'div.color' ).append( '<strong>' + colorText + '</strong>' );
// 				$( 'div.color' ).append('<div id="filtr_color"><div id=' + color_id + ' type="resultsFilterColor" class="col-lg-2 col-md-2 col-sm-2 col-xs-2 colors"><img src="/temp/colors.png" alt=""></div></div>')
// 								.fadeIn(2000);
				



// 				filterObj();

// 			};
// 		});


// 		$(".CancelFramework").on("click", function(){
// 			$( '.colors' ).removeClass('colorBorder');
// 			$( 'div.color div' ).remove();
// 			$( 'div.color strong' ).remove();
// 			$( 'div.color' ).fadeOut(500);
// 			filterObj();
// 		});


			
			
			

// 					/*-------------------------------------------------------------*/




// 					/*------------------Выгруска номера странице-------------------*/

// 			function pageList (){
// 				$( '.pageA' ).on('click', function() {
// 					$( this ).addClass('pageClass');
					
// 					filterObj();
// 				});
// 				$( '.inputNumber' ).on('keypress', function(e){
// 					if(e.charCode == 13 || e.keyCode == 13)
// 					{
// 						$( this ).addClass('pageClass');
// 						var	value = $(".inputNumber").val();
// 						$(".inputNumber").attr('out_id', value);
// 						filterObj();
// 					}
					
// 				});
// 			};
			
// 					/*-------------------------------------------------------------*/

// 				$( '.breadCrumbs' ).children( 'a' ).eq(2).addClass('breadCrumbsA')


// 					/*-----------------Функция сортировки фильтров-----------------*/

//            function filterObj(){

							  	  
			
// 			$( 'option.remov' ).attr('disabled', 'true');
// 			$( 'div.colors' ).addClass('colorsNone');
// 			$( 'div#filtr_color > div[type="resultsFilterColor"]' ).removeClass('colorsNone');




          
			

			

			
// 			var jsonstr = '{';
// 			var jsonstr_debug = '';
// 			$.each($( '.pageClass' ), function(index, el) {
				
// 				if(jsonstr!='{')
// 						{
// 							jsonstr+=',';
// 						}
//             	var type = $(el).attr('type'),
//             		out_id = $(el).attr('out_id');
//             		jsonstr +='"'+type+'"'+':'+'"'+out_id+'"';
// 			});
//             $( '.colorBorder' ).each(function(index, el) {
//             	if(jsonstr!='{')
// 						{
// 							jsonstr+=',';
// 						}
//             	var type = $(el).attr('type'),
//             		out_id = $(el).attr('out_id');
//             		jsonstr +='"'+type+'"'+':'+'"'+out_id+'"';

//             });
// 				$('select.combobox option:selected:not(.0)').each(function(index, el) {
// 					if(jsonstr!='{')
// 						{
// 							jsonstr+=',';
// 						}
// 					var type = $(el).parent('select').attr('type'),
// 						out_id = $(el).attr('out_id');
// 					    jsonstr +='"'+type+'"'+':'+'"'+out_id+'"';
// 					    jsonstr_debug += '&debug_'+type+'='+out_id;
// 				});
// 			jsonstr += '}';
// 			jsonstr = JSON.parse(jsonstr);

// 			// console.log(jsonstr);
// 			// console.log(jsonstr_debug);
			
			

				 
// 				$.ajax({
// 					url: "/hendler.php?mod=json_catalog"+(($.isEmptyObject(jsonstr)==true)?'&is_null=1':''),
// 					type: "POST",
// 					data: jsonstr,
// 					dataType: "json",
// 					beforeSend: startLoad(),
// 					success: function( data ) {
// 							  stopLoad();
// 							  var brand       = data.brand,
// 							  	  collection  = data.collection,
// 							  	  color       = data.color,
// 							  	  country     = data.country,
// 							  	  items       = data.items,
// 							  	  surface     = data.surface,
// 							  	  type        = data.type,
// 							  	  finish_page = Math.ceil((collection.length/9));
							  	  
// 							  	  $('div.collection_card').addClass('rewrite')
// 							  	  						  .removeClass('colorsNone');
// 							  	  $.each( items, function ( index, val ) {
							  	 
// 							  	  	 var coll_id1s = val.coll_id1s,
// 							  	  	 	 coll_name = val.coll_name,
// 							  	  	 	 obj       = $('div.collection_card.rewrite:first');

// 							  	  	 	 /*console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// 							  	  	 	 console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// 							  			 console.log('coll_id1s: ' + coll_id1s);
// 							  			 console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// 							 			 console.log('coll_name: ' + coll_name);
// 							 			 console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// 							 			 console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');*/


							 			

// 								  		$(obj).children('a.level1A').attr( 'href', '/catalog/' + coll_id1s + '/' );

// 								 		$(obj).children('a.level1A')
// 								 		      .children('figure')
// 								 		      .children('div')
// 								 		      .children( 'img.level1Img' ).attr( 'src', '/iimg/collection' + coll_id1s + '.1.png' );

// 								 		$(obj).children('a.level1A')
// 								 		      .children('figure')
// 								 		      .children('div')
// 								 		      .children( 'figcaption.coll_name' ).text( coll_name );

// 								 		obj.removeClass('rewrite');
								 		

							 				
							 			 	
							 			


// 							  	  });

								
								
// 								$( '.rewrite' ).addClass('colorsNone');	

// 							  // console.log('-----------------------------------------------------');
// 							  // console.log('brand: ' + brand);
// 							  // console.log('-----------------------------------------------------');
// 							  // console.log('collection: ' + collection);
// 							  // console.log('-----------------------------------------------------');
// 							  // console.log('color: ' + color);
// 							  // console.log('-----------------------------------------------------');
// 							  // console.log('country: ' + country);
// 							  // console.log('-----------------------------------------------------');
// 							  // console.log('items: ' + items);
// 							  // console.log('-----------------------------------------------------');
// 							  // console.log('surface: ' + surface);
// 							  // console.log('-----------------------------------------------------');
// 							  // console.log('type: ' + type);
// 							  // console.log('-----------------------------------------------------'); 
// 							  // console.log('finish_page: ' + finish_page);
// 							  // console.log('-----------------------------------------------------');

// 								$.each( type, function ( index, value ) {

// 								  	$( 'option.type[out_id="' + value + '"]' ).removeAttr('disabled');

// 								});
							  	
// 								$.each( surface, function ( index, value ) {

// 								  	$( 'option.surface[out_id="' + value + '"]' ).removeAttr('disabled');
								  	
// 								});
								
// 								$.each( country, function ( index, value ) {

// 								  	$( 'option.country[out_id="' + value + '"]' ).removeAttr('disabled');
								  	
// 								});
								
// 								$.each( collection, function ( index, value ) {

// 								  	$( 'option.collection[out_id="' + value + '"]' ).removeAttr('disabled');
								  	
// 								});
								
// 								$.each( brand, function ( index, value ) {

// 								  	$( 'option.brand[out_id="' + value + '"]' ).removeAttr('disabled');
								  		
// 								});	

// 								$.each( color, function ( index, value ) {

// 								  	$( 'div.colors[out_id="' + value + '"]' ).removeClass('colorsNone');
								  		
// 								});

// 								$( '#finish_page' ).val( finish_page );

// 								if ( finish_page >= 11 ) {
// 									inputPfgeStart ();
// 									$('ul.pageNumber').removeClass('pageNumberLavel2');

// 								}else{
// 									$('ul.pageNumber').addClass('pageNumberLavel2');
// 									$('ul.pageNumber').html('');


// 								var href = '/catalog/',
// 									fin_pg = finish_page;
// 							        for (var i = 1; i <= fin_pg; i++) {

// 							        	$('ul.pageNumber').append('<li><a class="pageA" out_id="'+ i +'" type="page" href="' + href + 'page' + i + '/">' + i + '</a></li>');

// 							        }




// 							        $( '.pageA' ).on('click', function (){
// 							        	var ths_pg = $( this ).attr('out_id');
// 							        	history.pushState((ths_pg-1), "Title "+ (ths_pg-1) +""  , href + "page" + (ths_pg-1) + "/");
// 							        	history.replaceState(ths_pg, "Title "+ ths_pg +""  , href + "page" + ths_pg + "/");
// 							        });
// 							        init();
									
// 								};
// 								pageList ();	
								
 	

// 							},
					
// 				});


            
          

          	
           	
// 			};

// 					/*-------------------------------------------------------------*/



// 						/*--------------Подсказки-----------------*/




// 	$(function() {
//     	$(".hint, .colors").tooltip({
//      		track: true
//    		});
//   	});





// 						/*----------------------------------------*/

// 			$( '.resultsFilter div' ).fadeOut(1);


// 						/*---------------Выпадающий input---------------------*/

// (function( $ ) {




//     $.widget( "custom.combobox", {
//       _create: function() {
//         this.wrapper = $( "<span>" )
//           .addClass( "custom-combobox" )
//           .insertAfter( this.element );
 
//         this.element.hide();
//         this._createAutocomplete();
//         this._createShowAllButton();
//       },
 
//       _createAutocomplete: function() {
//         var selected = this.element.children( ":selected" ),
//           value = selected.val() ? selected.text() : "";
 
//         this.input = $( "<input>" )
//           .appendTo( this.wrapper )
//           .val( value )
//           .attr( "title", "" )
//           .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left focus" )
//           .autocomplete({
//             delay: 0,
//             minLength: 0,
//             source: $.proxy( this, "_source" )
//           })
//           .tooltip({
//             tooltipClass: "ui-state-highlight"
//           });


//         this._on( this.input, {
//           autocompleteselect: function( event, ui ) {
//             ui.item.option.selected = true;

//             var option =  ui.item.option;

            



//             if ($(option).hasClass('0') ) {
//             	this.input.removeClass('inputColor');

//             }else{
//             	this.input.addClass('inputColor');

//             };








//             if ($( option ).hasClass('type')) {
//             	var typeText = $( option ).text();
// 				$( 'div.type' ).append('<strong>' + typeText + '</strong>').fadeIn(2000);
            	
//             }else if($( option ).hasClass('0 typeR')){
//             	$( 'div.type strong' ).remove();
//             	$( 'div.type' ).fadeOut(500);

//             }; 

//             if ($( option ).hasClass('surface')) {
//             	var surfaceText = $( option ).text();
// 				$( 'div.surface' ).append('<strong>' + surfaceText + '</strong>').fadeIn(2000);
            	
//             }else if($( option ).hasClass('0 surfaceR')){
//             	$( 'div.surface strong' ).remove();
//             	$( 'div.surface' ).fadeOut(500);

//             }; 

//             if ($( option ).hasClass('country')) {
//             	var countryText = $( option ).text();
// 				$( 'div.country' ).append('<strong>' + countryText + '</strong>').fadeIn(2000);
            	
//             }else if($( option ).hasClass('0 countryR')){
//             	$( 'div.country strong' ).remove();
//             	$( 'div.country' ).fadeOut(500);

//             }; 

//             if ($( option ).hasClass('brand')) {
//             	var brandText = $( option ).text();
// 				$( 'div.brand' ).append('<strong>' + brandText + '</strong>').fadeIn(2000);
            	
//             }else if($( option ).hasClass('0 brandR')){
//             	$( 'div.brand strong' ).remove();
//             	$( 'div.brand' ).fadeOut(500);

//             }; 

//             if ($( option ).hasClass('collection')) {
//             	var collectionText = $( option ).text();
// 				$( 'div.collection' ).append('<strong>' + collectionText + '</strong>').fadeIn(2000);
            	
//             }else if($( option ).hasClass('0 collectionR')){
//             	$( 'div.collection strong' ).remove();
//             	$( 'div.collection' ).fadeOut(500);

//             }; 

            











//         history.replaceState(1, "Title1"  , "/catalog/page1/");
//  		filterObj();
// 		blockHeight();	


//             this._trigger( "select", event, {
//               item: ui.item.option
//             });
//           },
 
//           autocompletechange: "_removeIfInvalid"
//         });
//       },
 
//       _createShowAllButton: function() {
//         var input = this.input,
//           wasOpen = false;
 
//         $( "<div>" )
//           // .attr( "tabIndex", -1 )
//           // .attr( "title", "Открыть список стран" )
//           // .tooltip()
//           .append('<div class="ui-state-default ui-corner-all active" style="height:100%; border-radius: 0px 4px 4px 0px;"><span class="ui-icon ui-icon-triangle-1-s" style="position:relative;top:7px;"></span></div>')
//           .appendTo( this.wrapper )
//           // .button({
//           //   icons: {
//           //     primary: "ui-icon ui-icon-triangle-1-s"
//           //   },
//           //   text: false
//           // })
//           .removeClass( "ui-corner-all" )
//           .addClass( "custom-combobox-toggle ui-corner-right" )
//           .mousedown(function() {
//             wasOpen = input.autocomplete( "widget" ).is( ":visible" );
//           })
//           .click(function() {
          
//             input.focus();
 
//             // Close if already visible
//             if ( wasOpen ) {
//               return;
//             }
 
//             // Pass empty string as value to search for, displaying all results
//             input.autocomplete( "search", "" );
//           });
//       },
 
//       _source: function( request, response ) {
//         var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i", '.color' );
//         response( this.element.children( "option:not(:disabled)" ).map(function() {
//           var text = $( this ).text();
//           if ( this.value && ( !request.term || matcher.test(text) ) )
//             return {
//               label: text,
//               value: text,
//               option: this
//             };
//         }) );
//       },
 
//       _removeIfInvalid: function( event, ui ) {
 
//         // Selected an item, nothing to do
//         if ( ui.item ) {
//           return;
//         }
 
//         // Search for a match (case-insensitive)
//         var value = this.input.val(),
//           valueLowerCase = value.toLowerCase(),
//           valid = false;
//         this.element.children( "option" ).each(function() {
//           if ( $( this ).text().toLowerCase() === valueLowerCase ) {
//             this.selected = valid = true;
//             return false;
//           }
//         });
 		
//         // Found a match, nothing to do
//         if ( valid ) {
//           return;
//         }
 
//         // Remove invalid value
//         this.input
//           .val( "" )
//           .attr( "title", value + " didn't match any item" )
//           .tooltip( "open" );
//         this.element.val( "" );
//         this._delay(function() {
//           this.input.tooltip( "close" ).attr( "title", "" );
//         }, 2500 );
//         this.input.autocomplete( "instance" ).term = "";
//       },
 
//       _destroy: function() {
//         this.wrapper.remove();
//         this.element.show();
//       }
//     });
//   })( jQuery );
 
//   $(function() {
//     $( ".combobox" ).combobox();
//     $( "#toggle" ).click(function() {
//       $( "#combobox" ).toggle();
//     });
//   });


//   						/*----------------------------------------------------*/






// 						/*---------------------Диалоговое окно------------------------*/
	


// 		$(".opedDialog").on('click', function(){ 
// 			var item_name = $(this).children('div.infoDialog')
// 								   .children('figcaption.item_name')
// 								   .children('span').html();
// 			var infoDialog = ($(this).not('.infoDialog').html());
// 			$('body').css({'overflow':'hidden','margin-right':'18px'});
// 			$("#dialog").dialog({
// 				title: item_name,
// 			    resizable: false,
// 			    height:865,
// 			    width:1700,
// 			    modal: true,
// 			    zIndex: 1500,
// 			    show: { effect: "blind", duration: 800 },
// 			    buttons: {
// 				OK: function() {
// 						if(window.location.href.indexOf('#') + 1) {
// 						var bLoc = window.location.href.split('#');
// 						bnLoc = bLoc[0].split('/');
// 						bLoc = bLoc[0].split(bnLoc[2]);
// 						reLoaction(bLoc[1],1);
// 						}
// 					$('body').css({'overflow':'auto','margin-right':'0'});		
// 		          	$(this).dialog("close").dialog("destroy").draggable({ disabled: true });
// 		        	}
// 		      }

// 		    });
// 		    $("#dialog").html(infoDialog);   

// 		});



// 						/*----------------------------------------------------------*/



		

        




// 		/*----------------Изменение input страниц-------------------*/


// if ($('#leval').is('.leval1')) {
	
// function inputPfgeStart (){

// 	console.log( $( '.pageClass' ).attr( 'out_id' ) );
// 	var ths_pg = $( '.pageClass' ).attr( 'out_id' ),
// 	    fin_pg = Number($('input#finish_page').val()),
// 	    href = '/catalog/';


// 	$('ul.pageNumber').html('');

// 		if((ths_pg == 1) || (ths_pg == undefined))
// 		{
// 		var ths_pg = 1;
// 		$('ul.pageNumber')
// 		.append('<li class="pageNumberInit"><div class="arrowLeft"><a class="pageA" out_id="'+(ths_pg)+'" type="page" href="'+href+'page'+(ths_pg)+'/">&lsaquo;</a></div><input out_id="'+(ths_pg)+'" type="page" class="inputNumber from-to" type="text" value='+(ths_pg)+'><div class="arrowRight"><a class="pageA" out_id="'+(ths_pg+1)+'" type="page" href="'+href+'page'+(ths_pg+1)+'/">&rsaquo;</a></div></li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg+1)+'" type="page" href="'+href+'page'+(ths_pg+1)+'/">'+(ths_pg+1)+'</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg+2)+'" type="page" href="'+href+'page'+(ths_pg+2)+'/">'+(ths_pg+2)+'</a></li>')
// 		.append('<li class="pageNumberPoint">...</li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg+5)+'" type="page" href="'+href+'page'+(ths_pg+5)+'/">'+(ths_pg+5)+'</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg+6)+'" type="page" href="'+href+'page'+(ths_pg+6)+'/">'+(ths_pg+6)+'</a></li>')
// 		.append('<li class="pageNumberPoint">...</li>')
// 		.append('<li><a class="pageA" out_id="'+(fin_pg-1)+'" type="page" href="'+href+'page'+(fin_pg-1)+'/">'+(fin_pg-1)+'</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(fin_pg)+'" type="page" href="'+href+'page'+(fin_pg)+'/">'+(fin_pg)+'</a></li>');
// 		}
// 		else if(ths_pg == 2)
// 		{
// 			var ths_pg = Number(ths_pg);
// 		$('ul.pageNumber')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg-1)+'" type="page" href="'+href+'page'+(ths_pg-1)+'/">'+(ths_pg-1)+'</a></li>')
// 		.append('<li class="pageNumberInit"><div class="arrowLeft"><a class="pageA" out_id="'+(ths_pg-1)+'" type="page" href="'+href+'page'+(ths_pg-1)+'/">&lsaquo;</a></div><input out_id="'+(ths_pg)+'" type="page" class="inputNumber from-to" type="text" value='+(ths_pg)+'><div class="arrowRight"><a class="pageA" out_id="'+(ths_pg+1)+'" type="page" href="'+href+'page'+(ths_pg+1)+'/">&rsaquo;</a></div></li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg+1)+'" type="page" href="'+href+'page'+(ths_pg+1)+'/">'+(ths_pg+1)+'</a></li>')
// 		.append('<li class="pageNumberPoint">...</li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg+4)+'" type="page" href="'+href+'page'+(ths_pg+4)+'/">'+(ths_pg+4)+'</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg+5)+'" type="page" href="'+href+'page'+(ths_pg+5)+'/">'+(ths_pg+5)+'</a></li>')
// 		.append('<li class="pageNumberPoint">...</li>')
// 		.append('<li><a class="pageA" out_id="'+(fin_pg-1)+'" type="page" href="'+href+'page'+(fin_pg-1)+'/">'+(fin_pg-1)+'</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(fin_pg)+'" type="page" href="'+href+'page'+(fin_pg)+'/">'+(fin_pg)+'</a></li>');
// 		}
// 		else if(ths_pg == 3)
// 		{
// 			var ths_pg = Number(ths_pg);
// 		$('ul.pageNumber')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg-2)+'" type="page" href="'+href+'page'+(ths_pg-2)+'/">'+(ths_pg-2)+'</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg-1)+'" type="page" href="'+href+'page'+(ths_pg-1)+'/">'+(ths_pg-1)+'</a></li>')
// 		.append('<li class="pageNumberInit"><div class="arrowLeft"><a class="pageA" out_id="'+(ths_pg-1)+'" type="page" href="'+href+'page'+(ths_pg-1)+'/">&lsaquo;</a></div><input out_id="'+(ths_pg)+'" type="page" class="inputNumber from-to" type="text" value='+(ths_pg)+'><div class="arrowRight"><a class="pageA" out_id="'+(ths_pg+1)+'" type="page" href="'+href+'page'+(ths_pg+1)+'/">&rsaquo;</a></div></li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg+1)+'" type="page" href="'+href+'page'+(ths_pg+1)+'/">'+(ths_pg+1)+'</a></li>')
// 		.append('<li class="pageNumberPoint">...</li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg+4)+'" type="page" href="'+href+'page'+(ths_pg+4)+'/">'+(ths_pg+4)+'</a></li>')
// 		.append('<li class="pageNumberPoint">...</li>')
// 		.append('<li><a class="pageA" out_id="'+(fin_pg-1)+'" type="page" href="'+href+'page'+(fin_pg-1)+'/">'+(fin_pg-1)+'</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(fin_pg)+'" type="page" href="'+href+'page'+(fin_pg)+'/">'+(fin_pg)+'</a></li>');
// 		}
// 		else if(ths_pg == 4)
// 		{
// 			var ths_pg = Number(ths_pg);
// 		$('ul.pageNumber')
// 		.append('<li><a class="pageA" out_id="1" type="page" href="'+href+'page1/">1</a></li>')
// 		.append('<li><a class="pageA" out_id="2" type="page" href="'+href+'page2/">2</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg-1)+'" type="page" href="'+href+'page'+(ths_pg-1)+'/">'+(ths_pg-1)+'</a></li>')
// 		.append('<li class="pageNumberInit"><div class="arrowLeft"><a class="pageA" out_id="'+(ths_pg-1)+'" type="page" href="'+href+'page'+(ths_pg-1)+'/">&lsaquo;</a></div><input out_id="'+(ths_pg)+'" type="page" class="inputNumber from-to" type="text" value='+(ths_pg)+'><div class="arrowRight"><a class="pageA" out_id="'+(ths_pg+1)+'" type="page" href="'+href+'page'+(ths_pg+1)+'/">&rsaquo;</a></div></li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg+1)+'" type="page" href="'+href+'page'+(ths_pg+1)+'/">'+(ths_pg+1)+'</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg+2)+'" type="page" href="'+href+'page'+(ths_pg+2)+'/">'+(ths_pg+2)+'</a></li>')
// 		.append('<li class="pageNumberPoint">...</li>')
// 		.append('<li><a class="pageA" out_id="'+(fin_pg-1)+'" type="page" href="'+href+'page'+(fin_pg-1)+'/">'+(fin_pg-1)+'</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(fin_pg)+'" type="page" href="'+href+'page'+(fin_pg)+'/">'+(fin_pg)+'</a></li>');
// 		}
// 		else if(ths_pg >= 5 && ths_pg <= fin_pg-3)
// 		{
// 			var ths_pg = Number(ths_pg);
// 		$('ul.pageNumber')
// 		.append('<li><a class="pageA" out_id="1" type="page" href="'+href+'page1/">1</a></li>')
// 		.append('<li><a class="pageA" out_id="2" type="page" href="'+href+'page2/">2</a></li>')
// 		.append('<li class="pageNumberPoint">...</li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg-1)+'" type="page" href="'+href+'page'+(ths_pg-1)+'/">'+(ths_pg-1)+'</a></li>')
// 		.append('<li class="pageNumberInit"><div class="arrowLeft"><a class="pageA" out_id="'+(ths_pg-1)+'" type="page" href="'+href+'page'+(ths_pg-1)+'/">&lsaquo;</a></div><input out_id="'+(ths_pg)+'" type="page" class="inputNumber from-to" type="text" value='+(ths_pg)+'><div class="arrowRight"><a class="pageA" out_id="'+(ths_pg+1)+'" type="page" href="'+href+'page'+(ths_pg+1)+'/">&rsaquo;</a></div></li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg+1)+'" type="page" href="'+href+'page'+(ths_pg+1)+'/">'+(ths_pg+1)+'</a></li>')
// 		.append('<li class="pageNumberPoint">...</li>')
// 		.append('<li><a class="pageA" out_id="'+(fin_pg-1)+'" type="page" href="'+href+'page'+(fin_pg-1)+'/">'+(fin_pg-1)+'</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(fin_pg)+'" type="page" href="'+href+'page'+(fin_pg)+'/">'+(fin_pg)+'</a></li>');
// 		}
// 		else if(ths_pg == fin_pg-2)
// 		{
// 			var ths_pg = Number(ths_pg);
// 		$('ul.pageNumber')
// 		.append('<li><a class="pageA" out_id="1" type="page" href="'+href+'page1/">1</a></li>')
// 		.append('<li><a class="pageA" out_id="2" type="page" href="'+href+'page2/">2</a></li>')
// 		.append('<li><a class="pageA" out_id="3" type="page" href="'+href+'page3/">3</a></li>')
// 		.append('<li class="pageNumberPoint">...</li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg-2)+'" type="page" href="'+href+'page'+(ths_pg-2)+'/">'+(ths_pg-2)+'</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg-1)+'" type="page" href="'+href+'page'+(ths_pg-1)+'/">'+(ths_pg-1)+'</a></li>')
// 		.append('<li class="pageNumberInit"><div class="arrowLeft"><a class="pageA" out_id="'+(ths_pg-1)+'" type="page" href="'+href+'page'+(ths_pg-1)+'/">&lsaquo;</a></div><input out_id="'+(ths_pg)+'" type="page" class="inputNumber from-to" type="text" value='+(ths_pg)+'><div class="arrowRight"><a class="pageA" out_id="'+(ths_pg+1)+'" type="page" href="'+href+'page'+(ths_pg+1)+'/">&rsaquo;</a></div></li>')
// 		.append('<li><a class="pageA" out_id="'+(fin_pg-1)+'" type="page" href="'+href+'page'+(fin_pg-1)+'/">'+(fin_pg-1)+'</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(fin_pg)+'" type="page" href="'+href+'page'+(fin_pg)+'/">'+(fin_pg)+'</a></li>');
// 		}
// 		else if(ths_pg == fin_pg-1)
// 		{
// 			var ths_pg = Number(ths_pg);
// 		$('ul.pageNumber')
// 		.append('<li><a class="pageA" out_id="1" type="page" href="'+href+'page1/">1</a></li>')
// 		.append('<li><a class="pageA" out_id="2" type="page" href="'+href+'page2/">2</a></li>')
// 		.append('<li class="pageNumberPoint">...</li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg-6)+'" type="page" href="'+href+'page'+(ths_pg-6)+'/">'+(ths_pg-6)+'</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg-5)+'" type="page" href="'+href+'page'+(ths_pg-5)+'/">'+(ths_pg-5)+'</a></li>')
// 		.append('<li class="pageNumberPoint">...</li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg-1)+'" type="page" href="'+href+'page'+(ths_pg-1)+'/">'+(ths_pg-1)+'</a></li>')
// 		.append('<li class="pageNumberInit"><div class="arrowLeft"><a class="pageA" out_id="'+(ths_pg-1)+'" type="page" href="'+href+'page'+(ths_pg-1)+'/">&lsaquo;</a></div><input out_id="'+(ths_pg)+'" type="page" class="inputNumber from-to" type="text" value='+(ths_pg)+'><div class="arrowRight"><a class="pageA" out_id="'+(ths_pg+1)+'" type="page" href="'+href+'page'+(ths_pg+1)+'/">&rsaquo;</a></div></li>')
// 		.append('<li><a class="pageA" out_id="'+(fin_pg)+'" type="page" href="'+href+'page'+(fin_pg)+'/">'+(fin_pg)+'</a></li>');
// 		}
// 		else if(ths_pg == fin_pg)
// 		{
// 			var ths_pg = Number(ths_pg);
// 		$('ul.pageNumber')
// 		.append('<li><a class="pageA" out_id="1" type="page" href="'+href+'page1/">1</a></li>')
// 		.append('<li><a class="pageA" out_id="2" type="page" href="'+href+'page2/">2</a></li>')
// 		.append('<li class="pageNumberPoint">...</li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg-7)+'" type="page" href="'+href+'page'+(ths_pg-7)+'/">'+(ths_pg-7)+'</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg-6)+'" type="page" href="'+href+'page'+(ths_pg-6)+'/">'+(ths_pg-6)+'</a></li>')
// 		.append('<li class="pageNumberPoint">...</li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg-2)+'" type="page" href="'+href+'page'+(ths_pg-2)+'/">'+(ths_pg-2)+'</a></li>')
// 		.append('<li><a class="pageA" out_id="'+(ths_pg-1)+'" type="page" href="'+href+'page'+(ths_pg-1)+'/">'+(ths_pg-1)+'</a></li>')
// 		.append('<li class="pageNumberInit"><div class="arrowLeft"><a class="pageA" out_id="'+(ths_pg-1)+'" type="page" href="'+href+'page'+(ths_pg-1)+'/">&lsaquo;</a></div><input out_id="'+(ths_pg)+'" type="page" class="inputNumber from-to" type="text" value='+(ths_pg)+'><div class="arrowRight"><a class="pageA" out_id="'+(ths_pg)+'" type="page" href="'+href+'page'+(ths_pg)+'/">&rsaquo;</a></div></li>')
// 		}

// 		init();
	
	


		
// 		var	value = $(".inputNumber").val();

// 		$(".arrowLeft").on('click', function(){
			
// 			if(value > 1 )
// 				$(".inputNumber").val(--value);

// 		});

// 		$(".arrowRight").on('click', function(){
// 			if(value < fin_pg)
// 				$(".inputNumber").val(++value);

// 		});
// 		history.pushState((ths_pg-1), "Title "+ (ths_pg-1) +""  , href + "page" + (ths_pg-1) + "/"); 
// 		history.replaceState(ths_pg, "Title "+ ths_pg +""  , href + "page" + ths_pg + "/");
		

// };

// inputPfgeStart ();
// blockHeight();
		
// }else{


// 	$('ul.pageNumber').addClass('pageNumberLavel2');

// 	var ths_pg = Number($('input#this_page').val()),
//         fin_pg = Number($('input#finish_page').val()),
//         href = '/catalog/'+urls[4]+'/';
//         history.replaceState(1, "Title1"  , href + "page1/");
//         for (var i = 1; i <= fin_pg; i++) {

//         	$('ul.pageNumber').append('<li><a out_id="' + i + '" type="page" href="' + href + 'page' + i + '/">' + i + '</a></li>')
        	
        	
//         }
// 		init();
// 		blockHeight();

// };
// pageList ();




// 		/*----------------------------------------------------------*/


// 			  	/*----------------Фильтр на ввод цифр JQuery-------------------*/

// 	   jQuery.fn.ForceNumericOnly =
// 	function()
// 	{
// 	    return this.each(function()
// 	    {
// 	        $(this).keydown(function(e)
// 	        {
// 	            var key = e.charCode || e.keyCode || 0;
// 	            // Разрешаем backspace, tab, delete, стрелки, обычные цифры и цифры на дополнительной клавиатуре
// 	            return (
// 	                key == 8 || 
// 	                key == 9 ||
// 	                key == 13 ||
// 	                key == 46 ||
// 	                (key >= 37 && key <= 40) ||
// 	                (key >= 48 && key <= 57) ||
// 	                (key >= 96 && key <= 105));
// 	        });
// 	    });
// 	};

// 		$(".from-to,.input-lg, #x1, #x2, #y1, #y2, #z1, #z2").ForceNumericOnly();


// 		$(".from-to,.input-lg, #x1, #x2, #y1, #y2, #z1, #z2").bind("change keyup input click", function() {
// 	    if (this.value.match(/[^0-9]/g)) {
// 	        this.value = this.value.replace(/[^0-9]/g, '');
// 	    }
// 		});

// 		/*-----------------------------------*/


// 	}
// 									/*---------------------------------------*/

// function startLoad(){
// 	$('body').append('<div id="preLoader"><img src="/tpl/default/img/335.GIF" /></div>');
// };

// function stopLoad(){
// 	$('div#preLoader').remove();
// };

// function load(mod,vars,div)
// {

// 	if(typeof div === 'undefined'){div = 'mainload';}
// 	startLoad();
// 	var jqxhr = $.get( "/hendler.php?mod="+mod+"&page="+vars, function(data) {
// 	  $('#'+div).html(data);
// 	stopLoad();  
// 		allFuncs();
// 	  ajaxNavigation = true;
// 	  // init();




// 	})
// }

// window.onload=function(){ 
// 	window.setTimeout(function(){ 
// 		window.addEventListener("popstate", function(e) {
// 		var	l = (location.pathname || '') + (location.search || '');
// 		reLoaction(l,1,1);
// 		e.preventDefault();
// 		},false); 
// 	},1); 
// }

// function init()
// {
// old_loc = (location.pathname || '') + (location.search || '');

//  	$("a:not([href^='#']):not([target='_blank']):not([href$='/rss/']):not([href^='mailto\:']):not([href^='#'])").on('click', function(e){
//  		return false;
//  	});
	
// 	$("a:not([href^='#']):not([target='_blank']):not([href$='/rss/']):not([href^='mailto\:']):not([href^='#']):not(.pageA):not(.inputNumber)").on('click', function(event){
// 	var href = $(this).attr('href');
// 	reLoaction(href,1);



	
// 	});
	
// }

//  /*------------------------------------------------------------*/
//  