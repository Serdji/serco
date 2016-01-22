<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title>Страница 1</title>
	<link href='http://fonts.googleapis.com/css?family=Tinos:700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Russo+One&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="/tpl/default/css/earth.css">
	<link rel="stylesheet" href="/tpl/default/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="/tpl/default/css/bootstrap.min.css">
	<link rel="stylesheet" href="/tpl/default/css/jquery-ui.css">
</head>
<body>
	<div class="content">
		<div class="container">
			<div class="row">
				<section>
					<header>
						<figure>
							<div class="earch-frame">
								<img src="/tpl/default/img/earth.gif" alt="Карта мира" class="earth">
							</div>
								<img src="/tpl/default/img/russia.gif" alt="Карта мира" class="russia">
						</figure>
						<h1>Отраслевой Промышленно - Экономический Каталог </h1><br>
                        <a href="/catalog/page1/"><img src="/tpl/default/img/logo.png" alt="ОПЭК СерКо"></a>
					</header>
				</section>
			</div>
		</div>
		<br>
		<div class="container">
			<div class="row">
				<section>
					<div>
						<p class="otrasl"><b>Отрасль:</b></p>
					</div>
					<div>
						<p class="sektor"><b>Сектор:</b></p>
					</div>
						<div>
							<form id="serchForm" action="/catalog/" method="post">
								<input name="search" class="search" placeholder="Строительные материалы">
							</form>
							<div class="loading loadingNone"><img src="/tpl/default/img/335.GIF" /></div>
						</div>
				</section>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div id="log"></div>
				</div>
			</div>
		</div>
	
	
		<footer class="footer">
			<div class="row">
				<section>
					<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<p class="text-footer"><b>Система Международной Деглобализации</b></p>
						<p class="text-footer"><b>World Deglobalizer System</b></p>
					</div>
					<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					</div>
					<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<p class="right text-footer"><b>АО "Кунаширская компания ОПЭК СерКо"</b></p>
						<p class="right text-footer"><b>Прототип Альфа (демонстрационная версия)</b></p>
					</div>
				</section>
			</div>
			
		
		
		
		
		
		
			<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXrtpz-8fkwhsdrUupL2t8AkjnNujluH4&libraries=places"></script>
			<script type="text/javascript" src="/tpl/default/js/jquery-1.11.3.min.js"></script> 
			<script type="text/javascript" src="/tpl/default/js/jquery-2.1.4.min.js"></script>
			<script type="text/javascript" src="/tpl/default/js/jquery.validate.min.js"></script> 
			<script type="text/javascript" src="/tpl/default/js/jquery-ui.min.js"></script>
			<script type="text/javascript" src="/tpl/default/js/markerclusterer.js"></script> 
			<script type="text/javascript" src="/tpl/default/js/bootstrap.min.js"></script> 
			<script type="text/javascript" src="/tpl/default/js/earth.js"></script>
		</footer>
	</div>



</body>
</html>