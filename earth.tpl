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
						<h1>Отраслевой Промышленно - Экономический Каталог </h1>
						<div class="serko-shadow">
							<div class="se"></div>
							<div class="erko"></div>
							<strong class="ser"><b>Сер</b></strong><strong class="ko"><b>Ко</b></strong><strong class="r"><b>&reg;</b></strong>
						</div>
					</header>
				</section>
			</div>
		</div>
		
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
						<div class="btn-group btn-group-justified button-shadow">
					      						<a class="btn btn-default btn-success button-footer" role="button" data-toggle="modal" data-target="#entrance">Участникам</a>
					      						<!-- Modal -->
							<div class="modal fade" id="entrance" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
							    <div class="modal-dialog">
								    <div class="modal-content">
								      	<div class="modal-header">
									        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
									        <h4 class="modal-title" id="myModalLabel">Вход в систему</h4>
								      	</div>
								        <div class="modal-body">
				
											<form role="form">
												<div class="form-group">
													<label for="exampleInputEmail1">Email</label>
													<input type="email" class="form-control" id="exampleInputEmail1" placeholder="email">
												</div>
												<div class="form-group">
													<label for="exampleInputPassword1">Пароль</label>
													<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
												</div>
										        <button type="submit" class="btn btn-primary">Войти</button>
										        <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
											</form>
											<br>
										    <span class="reg">Регистрация</span>
										    <div class="register">
										    	<hr>
											    <form role="form">
													<div class="form-group">
														<label for="exampleInputEmail2">Email</label>
														<input type="email" class="form-control" id="exampleInputEmail2" placeholder="email">
													</div>
													<div class="form-group">
														<label for="exampleInputName1">Имя</label>
														<input type="email" class="form-control" id="exampleInputName1" placeholder="name">
													</div>
													<div class="form-group">
														<label for="exampleInputPassword2">Пароль</label>
														<input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password">
													</div>
											        <button type="submit" class="btn btn-primary register">Зарегистрироваться</button>
												</form>
										    </div>
				
								        </div>
								    </div>
							  	</div>
							</div>

      						<a class="btn btn-default btn-success button-footer" role="button"data-toggle="modal" data-target="#information">Информация</a>
				      						<!-- Modal -->
							<div class="modal fade" id="information" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
							    <div class="modal-dialog modal-lg">
								    <div class="modal-content">
								        <div class="modal-header">
									        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
									        <h4 class="modal-title" id="myModalLabel">Информация</h4>
								      	</div>
								        <div class="modal-body">
								        	<h2>ООО «Проект Кунашир ОПЭК СерКо».</h2>
								        	<br>
								        		<p>Система ОПЭК СерКо представляет собой единое электронное информационное поле с индивидуальной конвертацией поступающих и исходящих данных под конкретного пользователя, выступающего участником экономических взаимоотношений в качестве: Производитель, Продавец, Покупатель.<img src="/tpl/default/img/1.jpg" alt="Карта мира" class="modalImg"></p>
								        		<p>Для конечного покупателя система представлена в виде Отраслевого Промышленно-Экономического Каталога предприятий в сфере производства, торговли, услуг. Ресурс имеет скоординированную систему отбора по признакам: территориальный, отраслевой, по секторам отраслей, товарным группам, по видам товаров, их свойствам, ценам, услугам. С помощью совмещенного с нашей системой, сервиса геолокации, покупатель может по конкретному производителю или товару мгновенно получить всю информацию о торговых организациях, их расположении, ценах, услугах, условиях поставки. </p>
								        		<p>Система позволяет покупателю в одном заказе оформить все необходимые товары и услуги в одной или нескольких организациям одновременно. Покупатель может выбрать магазин по наилучшим для него  параметрам: расположение, цена, ассортимент, наличие товара на складе, условия сервиса, что существенно сократит ваше время на покупку товара.</p>
								        		<p>Для предприятий производства и торговли ОПЭК СерКо является системой создания, управления, развития и анализа бизнеса. Ресурс предоставляет собой унифицированные электронные площадки для юридических и физических лиц, с полным набором инструментов для эффективного ведения всех циклов бизнеса от производства до продажи, а так же поддерживает, развивает, координирует и организует их (электронных площадок) взаимодействие в части наполнения, информации по товарам, услугам, ценам. </p>
								        		<p>В условиях глобализации экономики средний и мелкий бизнес терпит убытки. Зачастую ввиду высоких расходов предприниматели не могут позволить себе так необходимые в наше время сайт, его наполнение и продвижение в интернет, рекламу, не имеют современных систем ведения, учёта и анализа хозяйственной деятельности, что снижает их конкурентоспособность  перед крупными производителями гипермаркетами, сетевыми магазинами. Поэтому очень многие компании попросту закрываются и перестают существовать. <img src="/tpl/default/img/2.jpg" alt="Карта мира" class="modalImg"></p>
								        		<p>В этих условиях Система ОПЭК СерКо, создана для увеличения прибыли, сохранения и развития предприятий мелкого и среднего бизнеса. <img src="/tpl/default/img/3.jpg" alt="Карта мира" class="modalImg"></p>
								        		<p>Наша компания создаёт программное обеспечение с использованием современных инновационных технологий для повышения эффективности работы в следующих экономических цепочках:</p>
								        		<ul>
								        			<li>Производитель - Покупатель;</li>
								        			<li>Производитель - Предприятие Розничной Торговли - Покупатель;</li>
								        			<li>Производитель - Дистрибьютор (оптовик) - Предприятие Розничной Торговли - Покупатель.</li>
								        		</ul>
								        		<p>Предприятиям мелкого и среднего бизнеса в сферах производства торговли и услуг Система ОПЭК СерКо предоставляет  электронный ресурс, способный обеспечить и снабдить предприятия новейшими технологиями в областях: </p>
								        		<ul>
								        			<li>- Маркетинг и реклама;</li>
								        			<li>- Программное обеспечение для управления и ведения бизнеса, его обновление и поддержка;</li>
								        			<li>- Предоставление готовых номенклатурных баз и ресурсов для их ввода производителями;</li>
								        			<li>- Регулирование, анализ и контроль цен;</li>
								        			<li>- Создание сайтов, их наполнение, продвижение, поддержка с учётом развития IT технологий;</li>
								        			<li>- Поиск и анализ новых поставщиков, с более выгодными закупочными ценами;</li>
								        			<li>- Выбор новых сфер деятельности.</li>
								        		</ul>
								        		<br>
								        		<br>
								        		<p>В целях компании на базе платформы Системы ОПЭК СерКо в течение 50 лет создать полноценный Каталог Мировой Промышленности,  ресурсов и их  интеграцию в экономику с охватом большинства стран мира, для ведения деятельности предприятий мелкого и среднего бизнеса, с учётом специфики мировых языковых групп, национальных законодательств, государственных систем налогообложения.</p>
								        		<p>Дата актуализации системы в сети интернет:30.09.2015 года.</p>
								      	</div>
								        <div class="modal-footer">
								        	<button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
								      	</div>
								    </div>
							    </div>
							</div>
					    </div>
					</div>
					<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<p class="right text-footer"><b>Сделанно в России</b></p>
						<p class="right text-footer"><b>Made in Russia</b></p>
					</div>
				</section>
			</div>
			
		
		
		
		
		
		
			<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&sensor=true"></script>
			<script type="text/javascript" src="/tpl/default/js/jquery-1.11.3.min.js"></script> 
			<script type="text/javascript" src="/tpl/default/js/jquery-2.1.4.min.js"></script> 
			<script type="text/javascript" src="/tpl/default/js/jquery-ui.min.js"></script> 
			<script type="text/javascript" src="/tpl/default/js/bootstrap.min.js"></script> 
			<script type="text/javascript" src="/tpl/default/js/earth.js"></script>
		</footer>
	</div>



</body>
</html>