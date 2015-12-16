<!-- IF e404 -->
      <div class="page-header">
        <h1>[lang:404_h1]</h1>
       [lang:404_text]
      </div>
<!-- ELSE e404 -->
<!-- IF pg_catalog -->

<div class="breadCrumbs">
<!-- BEGIN bradCrumbs -->
  <strong>&rarr;</strong>
  <a href="{bc_name}">{bc_href}</a>
<!-- END bradCrumbs -->
</div>
<div></div>


<div class="row">
            <section class="col-xs-3 col-sm-3 col-md-3 col-lg-3 blockFilterLeft">
            
                <div class="leftFilterBlock">
                  <div>
                    <div class="">
                      <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 border filtr_bay_region filters" id="filtr_bay_region">
                        <div class="hint" title="Выберите регион покупателя">?</div>
                          <div class="ui-widget">
                            <select class="combobox comboboxFil" type="type" >
                              <option class="0 default" out_id="0" type="bay_country">Россия</option>
                            </select>
                            <select class="combobox comboboxFil" type="type">
                              <option class="0 default" out_id="0" type="bay_region" disabled="disabled">Регионы отсутствуют</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

<!-- INCLUDE leftAcco.tpl -->
                

                <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 border filterLeft">


                 <div class="hint" title="?">?</div>




                </div>
                <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 pageNamberVertical border">
                  <ul>
                    
                  </ul>
                </div>
            </section>


          



  <section class="col-lg-6 col-md-6 col-sm-6 col-xs-6 border centerBlock">

    <form id="serchForm" action="/catalog/" method="post">
      <input name="search" class="search" placeholder="Поиск">
      <input name="s" class="searchs" placeholder="Поиск">
    </form>
<!-- INCLUDE catalog.topline.tpl -->
   

<!-- IF collection --> 
  <div class="blockHeight">
  <div class="row">
<!-- BEGIN items -->
<!-- IF%3 -->
    </div><div class="row rowHeight leval2">
<!-- END%3 -->
    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 border  Description cardProduct heightCards2 levels2">
      <figure class="opedDialog">
          <div class="infoDialog">
            <div class="Picture"><img src="/wimg/{item_img}" data-toggle="modal" data-target="#img"></div>
          </div>
            <div class="clear"></div>
            <hr>
              <div class="figcaption">
                <figcaption class="item_name"><b>Название</b>: <span>{item_name}</span>.</figcaption>
                <figcaption class="item_size"><b>Размеры</b>: <span>Длина:</span><span class="height"> {item_lng} </span><span>x</span> <span>Ширана:</span> <span class="width">{item_wid} </span>x <span>Толщина:</span><span> {item_thick} .см</span> </figcaption>
                <figcaption class="item_amount"><b>Количество</b>: {item_unit}</figcaption>
                <figcaption class="item_color"><b>Цвета</b>: {item_color}.</figcaption>
                <figcaption class="item_cover"><b>Поверхность</b>: {item_cover}.</figcaption>
                <figcaption class="item_country"><b>Страна</b>: {item_country}.</figcaption>
                <figcaption class="item_brand"><b>Бренд</b>: {item_brand}.</figcaption>
                <figcaption class="item_type"><b>Вид товара</b>: {item_type}.</figcaption>
                <hr>
            </div>
          <br>
        <div class="priceBlock">
          <form role="form" class="price">
            <div class="form-group  has-success has-feedback">
              <label class="control-label" for="inputSuccess2">{item_price} ₽ за м<sup>2</sup></label>
              <input type="text" class="form-control input-lg" id="exampleInputEmail1" placeholder="шт. 0.08 м2">
            </div>
            <button type="button" class="btn btn-primary btn-sm myBtnInfo">Добавить в корзину</button>
          </form>
        </div>
          <!-- Modal -->
          <div class="modal fade bs-example-modal-lg" id="img" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close closes" data-dismiss="modal" aria-hidden="true">&times;</button>
                  
                </div>
                <div class="modal-body">
                  


                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary btn-sm myBtnActive" data-dismiss="modal">Закрыть</button>
                </div>
              </div>
            </div>
          </div>
      </figure>
    </div>
  
<!-- END items -->
  </div>
  </div>
<!-- END collection -->
<!-- IF out_collection -->
<div class="blockHeight item">
<div class="row">
<!-- BEGIN collections -->
<!-- IF%3 -->
  </div>
  <div class="row rowHeight leval1">
<!-- END%3 -->
<strong id="leval" class="leval1"></strong>
  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 border heightCards2 collection_card levels1" id="{coll_id1s}">
    <figure>
      <a class = "level1A" coll_code="{coll_id1s}" coll_id="{coll_id}"  href="/catalog/{coll_id1s}/">
          <div>
            <figcaption class="coll_name">{coll_name}</figcaption>
          </div>
        <hr>
        <br>
          <div class="PictureLvel1"><img src="/wimg/{coll_img}" class="level1Img"></div>
      </a>
      <br>
      <hr>
      <figcaption class="coll_brand"><b>Бренд</b>: <span>{coll_brand}</span>.</figcaption>
      <figcaption class="coll_country"><b>Страна</b>: <span>{coll_country}</span>.</figcaption>
    </figure>

  </div>
<!-- END collections -->
</div>
</div>
<!-- END out_collection -->
  <div class="dialogDis">
    <div id="dialog" title="">
          Содержимое, которое будет отображаться в диалоговом окне. К этому <b>содержимому</b> могут применяться <em>стили</em>.
    </div>
  </div>


  </section>

  


  <section class="col-lg-3 col-md-3 col-sm-3 col-xs-3 border filtrsLevel2">

<!-- INCLUDE filter_rule.tpl -->


  </section>
        
        
        
    </div>         
  <input type="hidden" id="this_page" value="{this_page}">
  <input type="hidden" id="finish_page" value="{finish_page}">

    
    <section>
      <div>
        <ul class="pageNumber">
        </ul>
      </div>
    </section>
 <div class="secret"></div>   
 <div id="result"></div>
</div>    

<!-- ELSE pg_catalog -->
        <div class="page-header content">
          <h1>{h1} ₽</h1>
        </div>
        <p>
          <button type="button" class="btn btn-lg btn-default">Default</button>
          <button type="button" class="btn btn-lg btn-primary">Primary</button>
          <button type="button" class="btn btn-lg btn-success">Success</button>
          <button type="button" class="btn btn-lg btn-info">Info</button>
          <button type="button" class="btn btn-lg btn-warning">Warning</button>
          <button type="button" class="btn btn-lg btn-danger">Danger</button>
          <button type="button" class="btn btn-lg btn-link">Link</button>
        </p>
        <p>
          <button type="button" class="btn btn-default">Default</button>
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-info">Info</button>
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-link">Link</button>
        </p>
        <p>
          <button type="button" class="btn btn-sm btn-default">Default</button>
          <button type="button" class="btn btn-sm btn-primary">Primary</button>
          <button type="button" class="btn btn-sm btn-success">Success</button>
          <button type="button" class="btn btn-sm btn-info">Info</button>
          <button type="button" class="btn btn-sm btn-warning">Warning</button>
          <button type="button" class="btn btn-sm btn-danger">Danger</button>
          <button type="button" class="btn btn-sm btn-link">Link</button>
        </p>
        <p>
          <button type="button" class="btn btn-xs btn-default">Default</button>
          <button type="button" class="btn btn-xs btn-primary">Primary</button>
          <button type="button" class="btn btn-xs btn-success">Success</button>
          <button type="button" class="btn btn-xs btn-info">Info</button>
          <button type="button" class="btn btn-xs btn-warning">Warning</button>
          <button type="button" class="btn btn-xs btn-danger">Danger</button>
          <button type="button" class="btn btn-xs btn-link">Link</button>
        </p>
      <div class="page-header">
          <h1>Thumbnails</h1>
        </div>
        <img data-src="holder.js/200x200" class="img-thumbnail" alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera">
      <div class="page-header">
          <h1>Dropdown menus</h1>
        </div>
        <div class="dropdown theme-dropdown clearfix">
          <a id="dropdownMenu1" href="#" role="button" class="sr-only dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
          <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
            <li class="active" role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
            <li role="presentation" class="divider"></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
          </ul>
        </div>
      <div class="page-header">
          <h1>Navbars</h1>
        </div>
        <div class="navbar navbar-default">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header">Nav header</li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="navbar navbar-inverse">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header">Nav header</li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="page-header">
          <h1>Alerts</h1>
        </div>
        <div class="alert alert-success">
          <strong>Well done!</strong> You successfully read this important alert message.
        </div>
        <div class="alert alert-info">
          <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
        </div>
        <div class="alert alert-warning">
          <strong>Warning!</strong> Best check yo self, you're not looking too good.
        </div>
        <div class="alert alert-danger">
          <strong>Oh snap!</strong> Change a few things up and try submitting again.
        </div>
        <div class="page-header">
          <h1>Progress bars</h1>
        </div>
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only">40% Complete (success)</span></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"><span class="sr-only">20% Complete</span></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete (warning)</span></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"><span class="sr-only">80% Complete (danger)</span></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-success" style="width: 35%"><span class="sr-only">35% Complete (success)</span></div>
          <div class="progress-bar progress-bar-warning" style="width: 20%"><span class="sr-only">20% Complete (warning)</span></div>
          <div class="progress-bar progress-bar-danger" style="width: 10%"><span class='sr-only'>10% Complete (danger)</span></div>
        </div>
        <div class="page-header">
          <h1>List groups</h1>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <ul class="list-group">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Morbi leo risus</li>
              <li class="list-group-item">Porta ac consectetur ac</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
          <div class="col-sm-4">
            <div class="list-group">
              <a href="#" class="list-group-item active">
                Cras justo odio
              </a>
              <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
              <a href="#" class="list-group-item">Morbi leo risus</a>
              <a href="#" class="list-group-item">Porta ac consectetur ac</a>
              <a href="#" class="list-group-item">Vestibulum at eros</a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="list-group">
              <a href="#" class="list-group-item active">
                <h4 class="list-group-item-heading">List group item heading</h4>
                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              </a>
              <a href="#" class="list-group-item">
                <h4 class="list-group-item-heading">List group item heading</h4>
                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              </a>
              <a href="#" class="list-group-item">
                <h4 class="list-group-item-heading">List group item heading</h4>
                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              </a>
            </div>
          </div>
        </div>
        <div class="page-header">
          <h1>Panels</h1>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Panel title</h3>
              </div>
              <div class="panel-body">
                Panel content
              </div>
            </div>
            <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title">Panel title</h3>
              </div>
              <div class="panel-body">
                Panel content
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="panel panel-success">
              <div class="panel-heading">
                <h3 class="panel-title">Panel title</h3>
              </div>
              <div class="panel-body">
                Panel content
              </div>
            </div>
            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">Panel title</h3>
              </div>
              <div class="panel-body">
                Panel content
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="panel panel-warning">
              <div class="panel-heading">
                <h3 class="panel-title">Panel title</h3>
              </div>
              <div class="panel-body">
                Panel content
              </div>
            </div>
            <div class="panel panel-danger">
              <div class="panel-heading">
                <h3 class="panel-title">Panel title</h3>
              </div>
              <div class="panel-body">
                Panel content
              </div>
            </div>
          </div>
        </div>
        <div class="page-header">
          <h1>Wells</h1>
        </div>
        <div class="well">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
        </div>
<!-- END pg_catalog -->
<!-- END e404 -->
</div>
