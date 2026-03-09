var wms_layers = [];


        var lyr_vworldsat_0 = new ol.layer.Tile({
            'title': 'vworld sat',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://xdworld.vworld.kr:8080/2d/Satellite/201710/{z}/{x}/{y}.jpeg'
            })
        });
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1, 
                style: style___1,
                popuplayertitle: '영도_행정구역선',
                interactive: true,
                title: '<img src="styles/legend/__1.png" /> 영도_행정구역선'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2,
maxResolution:7.00111653806549,
 
                style: style__2,
                popuplayertitle: '부산명소 국문 정보',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 부산명소 국문 정보'
            });
var format___3 = new ol.format.GeoJSON();
var features___3 = format___3.readFeatures(json___3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___3.addFeatures(features___3);
var lyr___3 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource___3, 
                radius: 10 * 2,
                gradient: ['#f7fcf5', '#e5f5e0', '#c6ebbe', '#9dde96', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = '기초지자체 방문자 수';
        var featureWeight = feature.get(weightField);
        var maxWeight = 5038562;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: '영도_지역별 방문자 수(열지도)'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: '글램핑후보지',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 글램핑후보지'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource__5,
maxResolution:140.0223307613098,
 minResolution:7.029121004217753,

                radius: 10 * 2,
                gradient: ['#ffffff', '#f08b5d', '#eb9250', '#f14410', '#f35836', '#f35446', '#ee373c', '#ed272f', '#ff0000'],
                blur: 15,
                shadow: 250,
                title: '영도 운영중인 숙박업체(열지도)'
            });
var format____6 = new ol.format.GeoJSON();
var features____6 = format____6.readFeatures(json____6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____6.addFeatures(features____6);
var lyr____6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource____6, 
                style: style____6,
                popuplayertitle: '영도_중리산권_관광벨트',
                interactive: true,
    title: '영도_중리산권_관광벨트<br />\
    <img src="styles/legend/___6_0.png" /> <br />\
    <img src="styles/legend/___6_1.png" /> (감지해변 배후지)<br />\
    <img src="styles/legend/___6_2.png" /> (예비군 훈련장 이전적지)<br />\
    <img src="styles/legend/___6_3.png" /> (중리해변 배후지)<br />' });
var format____7 = new ol.format.GeoJSON();
var features____7 = format____7.readFeatures(json____7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____7.addFeatures(features____7);
var lyr____7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource____7, 
                style: style____7,
                popuplayertitle: '영도_중리산권_부산남고',
                interactive: true,
    title: '영도_중리산권_부산남고<br />\
    <img src="styles/legend/___7_0.png" /> <br />' });

lyr_vworldsat_0.setVisible(true);lyr___1.setVisible(true);lyr__2.setVisible(true);lyr___3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr____6.setVisible(true);lyr____7.setVisible(true);
var layersList = [lyr_vworldsat_0,lyr___1,lyr__2,lyr___3,lyr__4,lyr__5,lyr____6,lyr____7];
lyr___1.set('fieldAliases', {'fid': 'fid', 'EMD_CD': 'EMD_CD', 'COL_ADM_SE': 'COL_ADM_SE', 'EMD_NM': 'EMD_NM', 'SGG_OID': 'SGG_OID', });
lyr__2.set('fieldAliases', {'콘텐츠ID': '콘텐츠ID', '콘텐츠명': '콘텐츠명', '구군': '구군', '위도': '위도', '경도': '경도', '여행지': '여행지', '제목': '제목', '부제목': '부제목', '주소': '주소', '연락처': '연락처', '홈페이지': '홈페이지', '교통정보': '교통정보', '운영일': '운영일', '휴무일': '휴무일', '운영 및 시간': '운영 및 시간', '이용요금': '이용요금', '편의시설': '편의시설', '이미지URL': '이미지URL', '썸네일이미지URL': '썸네일이미지URL', '상세내용': '상세내용', });
lyr__4.set('fieldAliases', {'id': 'id', 'nm': 'nm', 'x': 'x', 'y': 'y', 'url': 'url', });
lyr____6.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr____7.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr___1.set('fieldImages', {'fid': 'TextEdit', 'EMD_CD': 'TextEdit', 'COL_ADM_SE': 'TextEdit', 'EMD_NM': 'TextEdit', 'SGG_OID': 'Range', });
lyr__2.set('fieldImages', {'콘텐츠ID': 'Range', '콘텐츠명': 'TextEdit', '구군': 'TextEdit', '위도': 'TextEdit', '경도': 'TextEdit', '여행지': 'TextEdit', '제목': 'TextEdit', '부제목': 'TextEdit', '주소': 'TextEdit', '연락처': 'TextEdit', '홈페이지': 'TextEdit', '교통정보': 'TextEdit', '운영일': 'TextEdit', '휴무일': 'TextEdit', '운영 및 시간': 'TextEdit', '이용요금': 'TextEdit', '편의시설': 'TextEdit', '이미지URL': 'TextEdit', '썸네일이미지URL': 'TextEdit', '상세내용': 'TextEdit', });
lyr__4.set('fieldImages', {'id': 'TextEdit', 'nm': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'url': 'TextEdit', });
lyr____6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr____7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr___1.set('fieldLabels', {'fid': 'no label', 'EMD_CD': 'no label', 'COL_ADM_SE': 'no label', 'EMD_NM': 'no label', 'SGG_OID': 'no label', });
lyr__2.set('fieldLabels', {'콘텐츠ID': 'no label', '콘텐츠명': 'inline label - always visible', '구군': 'no label', '위도': 'no label', '경도': 'no label', '여행지': 'no label', '제목': 'no label', '부제목': 'no label', '주소': 'no label', '연락처': 'no label', '홈페이지': 'no label', '교통정보': 'no label', '운영일': 'no label', '휴무일': 'header label - always visible', '운영 및 시간': 'no label', '이용요금': 'no label', '편의시설': 'no label', '이미지URL': 'no label', '썸네일이미지URL': 'no label', '상세내용': 'no label', });
lyr__4.set('fieldLabels', {'id': 'no label', 'nm': 'inline label - always visible', 'x': 'no label', 'y': 'no label', 'url': 'header label - always visible', });
lyr____6.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr____7.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr____7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});