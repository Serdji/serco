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
				
											<div class="authorization">
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
												<hr>
											</div>
										    <span class="reg">Регистрация</span>
										    <span class="aut">Авторизация</span>
										    <div class="register">
										    	<hr>
											    <form role="form" id="regForm">
													<div class="form-group">
														<label for="firstname">Имя</label>
														<input type="text" name="firstname" class="form-control" id="firstname" placeholder="Ваше имя" required>
													</div>
													<div class="form-group">
														<label for="lastname">Фамилия</label>
														<input type="text" name="lastname" class="form-control" id="lastname" placeholder="Ваша фамилия" required>
													</div>
													<div class="form-group">
														<label for="lastname">Login</label>
														<input type="text" name="login" class="form-control" id="login" placeholder="Ваш login" required>
													</div>
													<div class="form-group">
														<label for="email">Email</label>
														<input type="email" name="email" class="form-control" id="email" placeholder="Ваш email" required>
													</div>
													<div class="form-group">
														<label for="password">Пароль</label>
														<input type="password" name="password" class="form-control" id="password" placeholder="Ваш пароль" required>
													</div>
													<div class="form-group">
														<label for="confirm_password">Повторите пароль</label>
														<input type="password" name="confirm_password" class="form-control" id="confirm_password" placeholder="Повторите ваш пароль" required>
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
						<p class="right text-footer"><b>Прототип Альфа (демонстрационная версия)</b></p>
						<p class="right text-footer"><b>Сделанно в России</b></p>
						<p class="right text-footer"><b>Made in Russia</b></p>
					</div>
				</section>
			</div>
			
		
		
		
		
		
		
			<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&sensor=true"></script>
			<script type="text/javascript" src="/tpl/default/js/jquery-1.11.3.min.js"></script> 
			<script type="text/javascript" src="/tpl/default/js/jquery-2.1.4.min.js"></script>
			<script type="text/javascript" src="/tpl/default/js/jquery.validate.min.js"></script> 
			<script type="text/javascript" src="/tpl/default/js/jquery-ui.min.js"></script> 
			<script type="text/javascript" src="/tpl/default/js/bootstrap.min.js"></script> 
			<script type="text/javascript" src="/tpl/default/js/earth.js"></script>
		</footer>
	</div>



</body>
</html>