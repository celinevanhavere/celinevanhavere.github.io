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
                                imageExtent: [484288.123663, 6654932.150999, 497607.643682, 6664275.715371]
                            })
                        });var lyr_T25jHuidigKlimaat_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "T25j Huidig Klimaat",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T25jHuidigKlimaat_1.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [484288.123663, 6654932.150999, 497607.643682, 6664275.715371]
                            })
                        });var lyr_T10jHuidigKlimaat_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "T10j Huidig Klimaat",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T10jHuidigKlimaat_2.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [484288.123663, 6654932.150999, 497607.643682, 6664275.715371]
                            })
                        });var lyr_T2jHuidigKlimaat_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "T2j Huidig Klimaat",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T2jHuidigKlimaat_3.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [484288.123663, 6654932.150999, 497607.643682, 6664275.715371]
                            })
                        });var lyr_T100jMiddenScenario_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "T100j Midden Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T100jMiddenScenario_4.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [484288.123663, 6654932.150999, 497607.643682, 6664275.715371]
                            })
                        });var lyr_T25jMiddenScenario_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "T25j Midden Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T25jMiddenScenario_5.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [484288.123663, 6654932.150999, 497607.643682, 6664275.715371]
                            })
                        });var lyr_T10jMiddenScenario_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "T10j Midden Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T10jMiddenScenario_6.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [484288.123663, 6654932.150999, 497607.643682, 6664275.715371]
                            })
                        });var lyr_T2jMiddenScenario_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "T2j Midden Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T2jMiddenScenario_7.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [484288.123663, 6654932.150999, 497607.643682, 6664275.715371]
                            })
                        });var lyr_T100jHoogZomerScenario_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "T100j Hoog Zomer Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T100jHoogZomerScenario_8.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [484288.123663, 6654932.150999, 497607.643682, 6664275.715371]
                            })
                        });var lyr_T25jHoogZomerScenario_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "T25j Hoog Zomer Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T25jHoogZomerScenario_9.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [484288.123663, 6654932.150999, 497607.643682, 6664275.715371]
                            })
                        });var lyr_T10jHoogZomerScenario_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "T10j Hoog Zomer Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T10jHoogZomerScenario_10.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [484288.123663, 6654932.150999, 497607.643682, 6664275.715371]
                            })
                        });var lyr_T2jHoogZomerScenario_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "T2j Hoog Zomer Scenario",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/T2jHoogZomerScenario_11.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [484288.123663, 6654932.150999, 497607.643682, 6664275.715371]
                            })
                        });

lyr_T100jHuidigKlimaat_0.setVisible(false);lyr_T25jHuidigKlimaat_1.setVisible(false);lyr_T10jHuidigKlimaat_2.setVisible(false);lyr_T2jHuidigKlimaat_3.setVisible(false);lyr_T100jMiddenScenario_4.setVisible(false);lyr_T25jMiddenScenario_5.setVisible(false);lyr_T10jMiddenScenario_6.setVisible(false);lyr_T2jMiddenScenario_7.setVisible(false);lyr_T100jHoogZomerScenario_8.setVisible(false);lyr_T25jHoogZomerScenario_9.setVisible(false);lyr_T10jHoogZomerScenario_10.setVisible(false);lyr_T2jHoogZomerScenario_11.setVisible(true);
var layersList = [baseLayer,lyr_T100jHuidigKlimaat_0,lyr_T25jHuidigKlimaat_1,lyr_T10jHuidigKlimaat_2,lyr_T2jHuidigKlimaat_3,lyr_T100jMiddenScenario_4,lyr_T25jMiddenScenario_5,lyr_T10jMiddenScenario_6,lyr_T2jMiddenScenario_7,lyr_T100jHoogZomerScenario_8,lyr_T25jHoogZomerScenario_9,lyr_T10jHoogZomerScenario_10,lyr_T2jHoogZomerScenario_11];
