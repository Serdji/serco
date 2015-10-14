




    
    <div class="blockFilterRight">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 border TradingGroup filters" id="filtr_color">
            <div class="hint" title="Выбери товарною группу, можно ввести в ручную">?</div>
              <div class="ui-widget">
              <label class="control-label result">Товарная группа, Подгруппа: </label>
                <select class="combobox" type="category">
                  <option class="0 categoryR" out_id="0" type="category">Все товарные группы</option>
<!-- BEGIN filter_categories -->
                  <option class="category remov" id="category_{category_id1s}" inner_id="{category_id}" out_id="{category_id1s}">{category}</option>
<!-- END filter_categories -->
                </select>
                <select class="combobox" type="subcategory">
                <option class="0 subcategoryR" out_id="0" type="subcategory" disabled="disabled">Подгрупп нет</option>
<!-- BEGIN filter_subcategories -->               
                  <option class="subcategory remov" id="subcategory_{subcategory_id1s}" inner_id="{subcategory_id}" out_id="{subcategory_id1s}" disabled="disabled">{subcategory}</option>
<!-- END filter_subcategories -->                 
                </select>
                
              </div>
            </div>
          </div>
      

        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 border TradingGroup trading filters" id="filtr_color">
            <div class="hint" title="Выбери товарною группу, можно ввести в ручную">?</div>
              <div class="ui-widget">
              <label class="control-label result">Товар: </label>
                <select class="combobox" type="type">
                  <option class="0 typeR" out_id="0" type="type">Виды товаров</option>
<!-- BEGIN filter_types -->
                  <option class="type remov" id="type_{type_id1s}" inner_id="{type_id}" out_id="{type_id1s}">{type}</option>
<!-- END filter_types -->
                </select>
                <select class="combobox" type="type">
                  <option class="0 typeR" out_id="0" type="type" disabled="disabled">Свойства товара</option>
                </select>
                 
                
              </div>
            </div>
          </div>
        
        
          
        
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 border  filters colorFilter" id="filtr_color">
            <div class="hint" title="Выбери любой цвет кликнув на него или отмени кликнув на него еще раз, или нажми отмена">?</div>
            <label class="control-label result" for="inputSuccess2">Цвет:</label>
<!-- BEGIN filter_colors -->
            <div id="color_{color_id1s}" type='color' title="{color}" inner_id="{color_id}" out_id="{color_id1s}" class="col-lg-2 col-md-2 col-sm-2 col-xs-2 colors">
              <img src="/temp/colors.png" alt="">
            </div>
<!-- END filter_colors -->
            </div>
          </div>
       
            
        
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 border  filters" id="filtr_color">
        <div class="hint" title="Выбери поверхность, можно ввести в ручную">?</div>
          <div class="ui-widget">
          <label class="control-label result">Поверхность: </label>
            <select class="combobox" type="surface">
              <option class="0 surfaceR" type="surface">Выбрано всё</option>
<!-- BEGIN filter_surfaces -->
              <option class="surface remov" id="surface_{surface_id1s}" inner_id="{surface_id}" out_id="{surface_id1s}">{surface}</option>
<!-- END filter_surfaces -->            
            </select>
          </div>
        </div>
      </div>    
        
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 border  filters FilterTiles">
          <div class="hint" title="Выбери размер плитки От и До по X - Ширине, Y - Длине и Z - Толщине">?</div>
          <form role="form">
            <div class="form-group  has-success">
            <label class="control-label result" for="inputSuccess3">Размер:</label>
                
        
                <strong>Длина:</strong>
        
                  <div id="slider-length"></div>
        
                <strong>Ширина:</strong>
        
                  <div id="slider-width"></div>
        
                <strong>Толщина:</strong>
        
                  <div id="slider-thickness"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
    

    <div class="blockFilterRight">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 border  filters" id="filtr_color">
        <div class="hint" title="Выбери страну, можно ввести в ручную">?</div>
          <div class="ui-widget">
          <label class="control-label result">Страна-производитель: </label>
            <select class="combobox" type="country">
              <option class="0 countryR" type="country">Выбрано всё</option>
<!-- BEGIN filter_countrys -->
              <option class="country remov" id="country_{country_id1s}" inner_id="{country_id}" out_id="{country_id1s}">{country}</option>
<!-- END filter_countrys -->
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 border brandKoleektsiya filters" id="filtr_color">
        <div class="hint" title="Выбери бренд, можно ввести в ручную">?</div>
          <div class="ui-widget">
          <label class="control-label result">Бренд: </label>
            <select class="combobox" type="brand">
              <option class="0 brandR" type="brand" disabled="disabled">Брендов нет</option>
<!-- BEGIN filter_brands -->          
              <option class="brand remov" id="brand_{brand_id1s}" inner_id="{brand_id}" out_id="{brand_id1s}"  disabled="disabled">{brand}</option>
<!-- END filter_brands -->
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 border brandKoleektsiya filters" id="filtr_color">
        <div class="hint" title="Выбери коллекцию, можно ввести в ручную">?</div>
          <div class="ui-widget">
          <label class="control-label result">Название коллекции: </label>
            <select class="combobox" type="collection">
              <option class="0 collectionR" type="collection" disabled="disabled">Коллекций нет</option>
<!-- BEGIN filter_collections -->
              <option class="collection remov" id="collection_{collection_id1s}" inner_id="{collection_id}" out_id="{collection_id1s}" disabled="disabled">{collection}</option>
<!-- END filter_collections -->
            </select>
          </div>
        </div>
      </div>
    </div>


    <div class="blockFilterRight">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 border  filters">
        <div class="hint" title="Выбери диапазон цены">?</div>
          <form role="form">
            <div class="form-group  has-success">
            <label class="control-label result" for="inputSuccess2">Фильтр по цене:</label>
            </div>
          <br>
          <br>
          <div id="slider-range"></div>
          </form>
        </div>
      </div>
    </div>