$( function(){

	function collectionImage(img){

		$( 'body' ).append( '<div id="bigImg">'+
						 		'<div>'+
						 		'</div>'+
						 		'<img src="'+$(img).attr('src')+'">'+
						    '</div>');

		$( '#bigImg' ).css({
				'position'   : 'fixed',
				'top'        : 0,'left':0,
				'width'      : '100%',
				'height'     : '100%',
				'text-align' : 'center',
				'overflow'   : 'auto',
				'z-index'    : 999
			});

		$( '#bigImg div' ).css({
					'position'         : 'fixed',
					'top'              : 0,
					'left'             : 0,
					'width'            : '100%',
					'height'           : '100%',
					'background-color' : '#000',
					'opacity'          : 0.8
				});

		var width  = parseInt( $( '#bigImg img' ).width() ) / 2;
	    var height = parseInt( $( '#bigImg img' ).height() ) / 2;
		$( '#bigImg img' ).css({
					'position' : 'fixed',
					'top'      : '50%',
					'left'     : '50%',
					'margin'   : '-'+height+'px 0 0 -'+width+'px'
				});

		$( 'div#bigImg' ).click( function() {
			$( 'div#bigImg' ).remove();
		});
	}

	$( document ).on( 'click', 'div.coll_Imgs img', function() {
		collectionImage( this );
	});
});
