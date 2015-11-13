<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{description}">
    <meta name="keywords" content="{keywords}">
    <meta name="author" content="">
    <link rel="icon" type="image/png" href="/favicon.png">
    <title>{title} ₽</title>
    <link href="{folder}css/bootstrap.min.css" rel="stylesheet">
    <link href="{folder}css/bootstrap-theme.min.css" rel="stylesheet">
    <link href="{folder}css/jquery-ui.theme.min.css" rel="stylesheet">
    <link href="{folder}css/jquery-ui.structure.min.css" rel="stylesheet">
    <link href="{folder}css/jquery-ui.min.css" rel="stylesheet">
    <link href="{folder}css/main.css" rel="stylesheet">
    <link href="{folder}css/classic.css" rel="stylesheet">
    <link href="{folder}css/submain.css" rel="stylesheet">
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body role="document">
    <input type="hidden" value="{lat}" id="lat">
    <input type="hidden" value="{lng}" id="lng">
    <input type="hidden" value="{micon}" id="micon">
<!-- INCLUDE header.tpl -->
    <div class="container theme-showcase" id="mainload" role="main">
<!-- INCLUDE main.tpl -->
    </div>
<!-- INCLUDE footer.tpl -->
  </body>
</html>