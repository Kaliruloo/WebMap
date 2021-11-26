var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_StationAlmereCentrum_1 = new ol.format.GeoJSON();
var features_StationAlmereCentrum_1 = format_StationAlmereCentrum_1.readFeatures(json_StationAlmereCentrum_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationAlmereCentrum_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationAlmereCentrum_1.addFeatures(features_StationAlmereCentrum_1);
var lyr_StationAlmereCentrum_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StationAlmereCentrum_1, 
                style: style_StationAlmereCentrum_1,
                interactive: true,
                title: '<img src="styles/legend/StationAlmereCentrum_1.png" /> Station Almere Centrum'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_StationAlmereCentrum_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_StationAlmereCentrum_1];
lyr_StationAlmereCentrum_1.set('fieldAliases', {'id': 'id', 'Naam': 'Naam', });
lyr_StationAlmereCentrum_1.set('fieldImages', {'id': 'TextEdit', 'Naam': 'TextEdit', });
lyr_StationAlmereCentrum_1.set('fieldLabels', {'id': 'no label', 'Naam': 'no label', });
lyr_StationAlmereCentrum_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});