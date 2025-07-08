ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([670665.385216, 5921115.387161, 679003.967799, 5926328.554663]);
var wms_layers = [];


        var lyr_HereWegoTerrain_0 = new ol.layer.Tile({
            'title': 'Here Wego Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://developer.here.com/documentation/map-tile/dev_guide/topics/resource-copyright.html">Map tiles by Here Wego</a>',
                url: 'https://1.aerial.maps.ls.hereapi.com/maptile/2.1/maptile/newest/terrain.day/{z}/{x}/{y}/256/png8?app_id=eAdkWGYRoc4RfxVo0Z4B&app_code=TrLJuXVK62IQk0vuXFzaig&lg=eng'
            })
        });
var format_REGIONBIOBIO_1 = new ol.format.GeoJSON();
var features_REGIONBIOBIO_1 = format_REGIONBIOBIO_1.readFeatures(json_REGIONBIOBIO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_REGIONBIOBIO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIONBIOBIO_1.addFeatures(features_REGIONBIOBIO_1);
var lyr_REGIONBIOBIO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIONBIOBIO_1, 
                style: style_REGIONBIOBIO_1,
                popuplayertitle: 'REGIONBIOBIO',
                interactive: true,
                title: '<img src="styles/legend/REGIONBIOBIO_1.png" /> REGIONBIOBIO'
            });
var format_COMUNASSELECCIONADAS_2 = new ol.format.GeoJSON();
var features_COMUNASSELECCIONADAS_2 = format_COMUNASSELECCIONADAS_2.readFeatures(json_COMUNASSELECCIONADAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_COMUNASSELECCIONADAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNASSELECCIONADAS_2.addFeatures(features_COMUNASSELECCIONADAS_2);
var lyr_COMUNASSELECCIONADAS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMUNASSELECCIONADAS_2, 
                style: style_COMUNASSELECCIONADAS_2,
                popuplayertitle: 'COMUNASSELECCIONADAS',
                interactive: true,
                title: '<img src="styles/legend/COMUNASSELECCIONADAS_2.png" /> COMUNASSELECCIONADAS'
            });
var format_Indicadores_barrios_AMC_3 = new ol.format.GeoJSON();
var features_Indicadores_barrios_AMC_3 = format_Indicadores_barrios_AMC_3.readFeatures(json_Indicadores_barrios_AMC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Indicadores_barrios_AMC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indicadores_barrios_AMC_3.addFeatures(features_Indicadores_barrios_AMC_3);
var lyr_Indicadores_barrios_AMC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indicadores_barrios_AMC_3, 
                style: style_Indicadores_barrios_AMC_3,
                popuplayertitle: 'Indicadores_barrios_AMC',
                interactive: true,
                title: '<img src="styles/legend/Indicadores_barrios_AMC_3.png" /> Indicadores_barrios_AMC'
            });
var format_BARRIOS_SELECCIONADOS_4 = new ol.format.GeoJSON();
var features_BARRIOS_SELECCIONADOS_4 = format_BARRIOS_SELECCIONADOS_4.readFeatures(json_BARRIOS_SELECCIONADOS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_BARRIOS_SELECCIONADOS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRIOS_SELECCIONADOS_4.addFeatures(features_BARRIOS_SELECCIONADOS_4);
var lyr_BARRIOS_SELECCIONADOS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BARRIOS_SELECCIONADOS_4, 
                style: style_BARRIOS_SELECCIONADOS_4,
                popuplayertitle: 'BARRIOS_SELECCIONADOS',
                interactive: true,
                title: '<img src="styles/legend/BARRIOS_SELECCIONADOS_4.png" /> BARRIOS_SELECCIONADOS'
            });
var format_AtractivosTuristicos_5 = new ol.format.GeoJSON();
var features_AtractivosTuristicos_5 = format_AtractivosTuristicos_5.readFeatures(json_AtractivosTuristicos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_AtractivosTuristicos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtractivosTuristicos_5.addFeatures(features_AtractivosTuristicos_5);
var lyr_AtractivosTuristicos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AtractivosTuristicos_5, 
                style: style_AtractivosTuristicos_5,
                popuplayertitle: 'AtractivosTuristicos',
                interactive: true,
    title: 'AtractivosTuristicos<br />\
    <img src="styles/legend/AtractivosTuristicos_5_0.png" /> Casa de Salud<br />\
    <img src="styles/legend/AtractivosTuristicos_5_1.png" /> Cerro Amarrillo<br />\
    <img src="styles/legend/AtractivosTuristicos_5_2.png" /> Estadio Ester Roa Rebolledo<br />\
    <img src="styles/legend/AtractivosTuristicos_5_3.png" /> Humedal Urbano Paicaví-Tucapel Bajo<br />\
    <img src="styles/legend/AtractivosTuristicos_5_4.png" /> Mercado de Talcahuano<br />\
    <img src="styles/legend/AtractivosTuristicos_5_5.png" /> Museo de la Historia de Penco<br />\
    <img src="styles/legend/AtractivosTuristicos_5_6.png" /> Museo de sitio mina chiflón del diablo<br />\
    <img src="styles/legend/AtractivosTuristicos_5_7.png" /> Nonguen Zoo<br />\
    <img src="styles/legend/AtractivosTuristicos_5_8.png" /> Parque Humedal Los Batros<br />\
    <img src="styles/legend/AtractivosTuristicos_5_9.png" /> Parque Las Tres Pascualas<br />\
    <img src="styles/legend/AtractivosTuristicos_5_10.png" /> Picada el Sauce<br />\
    <img src="styles/legend/AtractivosTuristicos_5_11.png" /> Pinacoteca<br />\
    <img src="styles/legend/AtractivosTuristicos_5_12.png" /> Plaza de Armas Arturo Prat Tomé<br />\
    <img src="styles/legend/AtractivosTuristicos_5_13.png" /> Plaza de Armas Coronel<br />\
    <img src="styles/legend/AtractivosTuristicos_5_14.png" /> Plaza de la Independencia de Concepción<br />\
    <img src="styles/legend/AtractivosTuristicos_5_15.png" /> Plaza España<br />\
    <img src="styles/legend/AtractivosTuristicos_5_16.png" /> Plaza Perú<br />\
    <img src="styles/legend/AtractivosTuristicos_5_17.png" /> Strip Center Paseo Altas Cumbres<br />\
    <img src="styles/legend/AtractivosTuristicos_5_18.png" /> Teatro Enrique Molina<br />\
    <img src="styles/legend/AtractivosTuristicos_5_19.png" /> Templo Pedro de Valdivia<br />\
    <img src="styles/legend/AtractivosTuristicos_5_20.png" /> <br />' });

lyr_HereWegoTerrain_0.setVisible(true);lyr_REGIONBIOBIO_1.setVisible(true);lyr_COMUNASSELECCIONADAS_2.setVisible(true);lyr_Indicadores_barrios_AMC_3.setVisible(true);lyr_BARRIOS_SELECCIONADOS_4.setVisible(true);lyr_AtractivosTuristicos_5.setVisible(true);
var layersList = [lyr_HereWegoTerrain_0,lyr_REGIONBIOBIO_1,lyr_COMUNASSELECCIONADAS_2,lyr_Indicadores_barrios_AMC_3,lyr_BARRIOS_SELECCIONADOS_4,lyr_AtractivosTuristicos_5];
lyr_REGIONBIOBIO_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_COMUNASSELECCIONADAS_2.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_Indicadores_barrios_AMC_3.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_BARRIOS_SELECCIONADOS_4.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_AtractivosTuristicos_5.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'BARRIO': 'BARRIO', 'VIDEO': 'VIDEO', 'InfoSitio': 'InfoSitio', 'Horario': 'Horario', });
lyr_REGIONBIOBIO_1.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_COMUNASSELECCIONADAS_2.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_Indicadores_barrios_AMC_3.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_BARRIOS_SELECCIONADOS_4.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_AtractivosTuristicos_5.set('fieldImages', {'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'BARRIO': 'TextEdit', 'VIDEO': 'TextEdit', 'InfoSitio': 'TextEdit', 'Horario': 'TextEdit', });
lyr_REGIONBIOBIO_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_COMUNASSELECCIONADAS_2.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_Indicadores_barrios_AMC_3.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_BARRIOS_SELECCIONADOS_4.set('fieldLabels', {'Id': 'no label', 'Nombre': 'inline label - always visible', 'Area': 'inline label - always visible', 'hab_m2': 'inline label - always visible', 'Sum_Poblac': 'inline label - always visible', 'av_hab': 'inline label - always visible', 'Long_tLic': 'inline label - always visible', 'Long_tNLic': 'inline label - always visible', 'Suma_Trans': 'inline label - always visible', 'porc_cober': 'inline label - always visible', 'Distance': 'inline label - always visible', 'LongcicloK': 'inline label - always visible', 'Long_rvial': 'header label - always visible', });
lyr_AtractivosTuristicos_5.set('fieldLabels', {'NOMBRE': 'inline label - always visible', 'TIPO': 'inline label - always visible', 'BARRIO': 'inline label - always visible', 'VIDEO': 'inline label - visible with data', 'InfoSitio': 'inline label - always visible', 'Horario': 'inline label - always visible', });
lyr_AtractivosTuristicos_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});