function collectionImage(img)
{
	$('body').append('<div id="bigImg"><div></div><a id="thisImgClose">X</a><img src="'+$(img).attr('src')+'"></div>');
	$('#bigImg').css({'position':'fixed','top':0,'left':0,'width':'100%','height':'100%','text-align':'center','overflow':'auto','z-index':999});
	$('#bigImg div').css({'position':'fixed','top':0,'left':0,'width':'100%','height':'100%','background-color':'#000','opacity':0.8});
	
	var width  = parseInt($('#bigImg img').width())/2;
    var height = parseInt($('#bigImg img').height())/2;
	$('#bigImg img').css({'position':'fixed','top':'50%','left':'50%','margin':'-'+height+'px 0 0 -'+width+'px'});
	$('#bigImg a').css({'position':'fixed','top':'50%','left':'50%','margin':'-'+(height+11)+'px 0 0 '+(width-10)+'px','z-index':'99','border':'1px solid #000','padding':'0 5px','border-radius':'10px','background-color':'#fff','color':'#000','cursor':'pointer','font-weight':'bold','text-decoration':'none'});
	$('div#bigImg').click(function(e) {
		$('div#bigImg').remove();
	});
}

/*
function inputPfgeClickWin(p)
{
var href = '';
	for(i=0;typeof urls[i] !== 'undefined';i++){if(urls[i].substr(0,4)!='page'){if(href!=''){href+='/'} href += urls[i];}}
alert(href+'page'+pg+'/');
reLoaction(href+'page'+pg+'/',1);
return false;
}

function inputPfgeStartNew(innputNam,allItems){
	var ths_pg   = Number(innputNam),
	    href     = '',
		allPages = Math.ceil(Number(allItems)/9),
		isWrite  = 1;
		
		for(i=0;typeof urls[i] !== 'undefined';i++){if(urls[i].substr(0,4)!='page'){if(href!=''){href+='/'} href += urls[i];}}
		
		for(i=0;i<allPages;i++)
		{
		pg = i+1;
		console.log('PG - '+pg+' isWrite='+isWrite);
			if(isWrite == 0 && (pg > (allPages-3) || pg == ths_pg || pg == ths_pg+1 || pg == ths_pg-1)){isWrite = 1;}
			if(isWrite == 1)
			{
				if(allPages > 9 && pg > 3 && pg < (allPages-2) && pg != ths_pg && pg != ths_pg+1 && pg != ths_pg-1)
				{
				isWrite = 0;
				$('ul.pageNumber').append('<li class="pageNumberPoint">...</li>');
				}
				else
				{
					if(pg == innputNam && allPages > 3)
					{
					$('ul.pageNumber').append('<li class="pageNumberInit">');
						if(pg > 1){$('ul.pageNumber').append('<div class="arrowLeft"><a class="pageA" out_id="'+(pg-1)+'" type="page" href="'+href+'page'+(pg-1)+'/">‹</a></div>');}
					$('ul.pageNumber').append('<input out_id="2" type="page" class="inputNumber from-to" value="'+pg+'" onkeydown="if(event.keyCode==13){inputPfgeClickWin($(this).val())}">');
						if(pg < allPages){$('ul.pageNumber').append('<div class="arrowRight"><a class="pageA" out_id="'+(pg+1)+'" type="page" href="'+href+'page'+(pg+1)+'/">›</a></div>');}
					$('ul.pageNumber').append('</li>');
					}
					else
					{
					$('ul.pageNumber').append('<li class="pageNumberBorderLeft"><a class="pageA" out_id="'+pg+'" type="page" href="'+href+'page'+pg+'/">'+pg+'</a></li>');
					}
				}
			}
		}
}
*/
$(function(){
	urls = window.location.href.split('/');
	$('div.breadCrumbs strong').click(function(e) {

		alert(urls[(urls.length-2)].substr(4));
    });
	
	// $('div.coll_Imgs img').click(function(e) {
 //        collectionImage(this);
 //    });
/*
(250+260+240+270+230+280+220+300)/8
(250+260+240+270+1230+280+220+300)/8

	function supportsLocalStorage() {
	  try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) {
		return false;
	  }
	}
	
	function saveSessionVar(vr,vl) {
		if (!supportsLocalStorage()) { return false; }
		if(typeof vl === 'undefined')
		{
		delete localStorage[vr];
		}
		else
		{
		localStorage[vr] = vl;
		}
	return true;
	}
	
	function getSessionVar(vr,arr) {
		if (!supportsLocalStorage()) { return false; }
		if(typeof localStorage[vr] !== 'undefined')
		{
		return localStorage[vr];
		}
		else if(typeof arr !== 'undefined' && typeof arr[vr] !== 'undefined')
		{
		return arr[vr];
		}
	}
*/


});
