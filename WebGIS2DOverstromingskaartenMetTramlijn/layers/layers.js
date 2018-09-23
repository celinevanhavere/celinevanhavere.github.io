var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var lyr_T100jHuidigKlimaat_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "T100j Huidig Klimaat",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T100jHuidigKlimaat_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [486539.970684, 6654779.176037, 494633.365030, 6664191.430185]
                            })
                        });var lyr_T25jHuidigKlimaat_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "T25j Huidig Klimaat",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T25jHuidigKlimaat_1.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [486539.970684, 6654779.176037, 494633.365030, 6664191.430185]
                            })
                        });var lyr_T10jHuidigKlimaat_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "T10j Huidig Klimaat",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T10jHuidigKlimaat_2.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [486539.970684, 6654779.176037, 494633.365030, 6664191.430185]
                            })
                        });var lyr_T2jHuidigKlimaat_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "T2j Huidig Klimaat",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T2jHuidigKlimaat_3.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [486539.970684, 6654779.176037, 494633.365030, 6664191.430185]
                            })
                        });var lyr_T100jMiddenScenario_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "T100j Midden Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T100jMiddenScenario_4.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [486539.970684, 6654779.176037, 494633.365030, 6664191.430185]
                            })
                        });var lyr_T25jMiddenScenario_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "T25j Midden Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T25jMiddenScenario_5.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [486539.970684, 6654779.176037, 494633.365030, 6664191.430185]
                            })
                        });var lyr_T10jMiddenScenario_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "T10j Midden Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T10jMiddenScenario_6.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [486539.970684, 6654779.176037, 494633.365030, 6664191.430185]
                            })
                        });var lyr_T2jMiddenScenario_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "T2j Midden Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T2jMiddenScenario_7.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [486539.970684, 6654779.176037, 494633.365030, 6664191.430185]
                            })
                        });var lyr_T100jHoogZomerScenario_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "T100j Hoog Zomer Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T100jHoogZomerScenario_8.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [486539.970684, 6654779.176037, 494633.365030, 6664191.430185]
                            })
                        });var lyr_T25jHoogZomerScenario_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "T25j Hoog Zomer Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T25jHoogZomerScenario_9.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [486539.970684, 6654779.176037, 494633.365030, 6664191.430185]
                            })
                        });var lyr_T10jHoogZomerScenario_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "T10j Hoog Zomer Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T10jHoogZomerScenario_10.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [486539.970684, 6654779.176037, 494633.365030, 6664191.430185]
                            })
                        });var lyr_T2jHoogZomerScenario_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "T2j Hoog Zomer Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T2jHoogZomerScenario_11.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [486539.970684, 6654779.176037, 494633.365030, 6664191.430185]
                            })
                        });var format_Tramlijnen_12 = new ol.format.GeoJSON();
var features_Tramlijnen_12 = format_Tramlijnen_12.readFeatures(json_Tramlijnen_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tramlijnen_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tramlijnen_12.addFeatures(features_Tramlijnen_12);var lyr_Tramlijnen_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tramlijnen_12, 
                style: style_Tramlijnen_12,
                title: '<img src="styles/legend/Tramlijnen_12.png" /> Tramlijnen'
            });

lyr_T100jHuidigKlimaat_0.setVisible(false);lyr_T25jHuidigKlimaat_1.setVisible(false);lyr_T10jHuidigKlimaat_2.setVisible(false);lyr_T2jHuidigKlimaat_3.setVisible(false);lyr_T100jMiddenScenario_4.setVisible(false);lyr_T25jMiddenScenario_5.setVisible(false);lyr_T10jMiddenScenario_6.setVisible(false);lyr_T2jMiddenScenario_7.setVisible(false);lyr_T100jHoogZomerScenario_8.setVisible(false);lyr_T25jHoogZomerScenario_9.setVisible(false);lyr_T10jHoogZomerScenario_10.setVisible(false);lyr_T2jHoogZomerScenario_11.setVisible(true);lyr_Tramlijnen_12.setVisible(false);
var layersList = [baseLayer,lyr_T100jHuidigKlimaat_0,lyr_T25jHuidigKlimaat_1,lyr_T10jHuidigKlimaat_2,lyr_T2jHuidigKlimaat_3,lyr_T100jMiddenScenario_4,lyr_T25jMiddenScenario_5,lyr_T10jMiddenScenario_6,lyr_T2jMiddenScenario_7,lyr_T100jHoogZomerScenario_8,lyr_T25jHoogZomerScenario_9,lyr_T10jHoogZomerScenario_10,lyr_T2jHoogZomerScenario_11,lyr_Tramlijnen_12];
lyr_Tramlijnen_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'objectid': 'objectid', 'shape': 'shape', 'id': 'id', 'strat_ruim': 'strat_ruim', 'status': 'status', 'naam': 'naam', 'strat_prog': 'strat_prog', 'programma': 'programma', 'strat_proj': 'strat_proj', 'project': 'project', 'hefboomact': 'hefboomact', 'opp': 'opp', 'omtrek': 'omtrek', 'status07': 'status07', 'shape_length': 'shape_length', });
lyr_Tramlijnen_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'objectid': 'TextEdit', 'shape': 'TextEdit', 'id': 'TextEdit', 'strat_ruim': 'TextEdit', 'status': 'TextEdit', 'naam': 'TextEdit', 'strat_prog': 'TextEdit', 'programma': 'TextEdit', 'strat_proj': 'TextEdit', 'project': 'TextEdit', 'hefboomact': 'TextEdit', 'opp': 'TextEdit', 'omtrek': 'TextEdit', 'status07': 'TextEdit', 'shape_length': 'TextEdit', });
lyr_Tramlijnen_12.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'objectid': 'no label', 'shape': 'no label', 'id': 'no label', 'strat_ruim': 'no label', 'status': 'no label', 'naam': 'no label', 'strat_prog': 'no label', 'programma': 'no label', 'strat_proj': 'no label', 'project': 'no label', 'hefboomact': 'no label', 'opp': 'no label', 'omtrek': 'no label', 'status07': 'no label', 'shape_length': 'no label', });
lyr_Tramlijnen_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});