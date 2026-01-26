var wms_layers = [];


        var lyr_vworldsat_0 = new ol.layer.Tile({
            'title': 'vworld sat',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://xdworld.vworld.kr:8080/2d/Satellite/201710/{z}/{x}/{y}.jpeg'
            })
        });
var format_yeongdolsmd_adm_sect_umd_26_202512_1 = new ol.format.GeoJSON();
var features_yeongdolsmd_adm_sect_umd_26_202512_1 = format_yeongdolsmd_adm_sect_umd_26_202512_1.readFeatures(json_yeongdolsmd_adm_sect_umd_26_202512_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yeongdolsmd_adm_sect_umd_26_202512_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yeongdolsmd_adm_sect_umd_26_202512_1.addFeatures(features_yeongdolsmd_adm_sect_umd_26_202512_1);
var lyr_yeongdolsmd_adm_sect_umd_26_202512_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_yeongdolsmd_adm_sect_umd_26_202512_1, 
                style: style_yeongdolsmd_adm_sect_umd_26_202512_1,
                popuplayertitle: 'yeongdo — lsmd_adm_sect_umd_26_202512',
                interactive: true,
                title: '<img src="styles/legend/yeongdolsmd_adm_sect_umd_26_202512_1.png" /> yeongdo — lsmd_adm_sect_umd_26_202512'
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
var format_20251223212456__3 = new ol.format.GeoJSON();
var features_20251223212456__3 = format_20251223212456__3.readFeatures(json_20251223212456__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20251223212456__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20251223212456__3.addFeatures(features_20251223212456__3);
var lyr_20251223212456__3 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_20251223212456__3, 
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
                title: '20251223212456_지역별 방문자 수'
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
                title: '영도 운영중인 숙박업체'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
cluster__6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource__6
});
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:cluster__6,
maxResolution:7.00111653806549,
 minResolution:0.14002233076130982,

                style: style__6,
                popuplayertitle: '영도 운영중인 숙박업체 클러스터링',
                interactive: true,
                title: '영도 운영중인 숙박업체 클러스터링'
            });

lyr_vworldsat_0.setVisible(true);lyr_yeongdolsmd_adm_sect_umd_26_202512_1.setVisible(true);lyr__2.setVisible(true);lyr_20251223212456__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);
var layersList = [lyr_vworldsat_0,lyr_yeongdolsmd_adm_sect_umd_26_202512_1,lyr__2,lyr_20251223212456__3,lyr__4,lyr__5,lyr__6];
lyr_yeongdolsmd_adm_sect_umd_26_202512_1.set('fieldAliases', {'fid': 'fid', 'EMD_CD': 'EMD_CD', 'COL_ADM_SE': 'COL_ADM_SE', 'EMD_NM': 'EMD_NM', 'SGG_OID': 'SGG_OID', });
lyr__2.set('fieldAliases', {'콘텐츠ID': '콘텐츠ID', '콘텐츠명': '콘텐츠명', '구군': '구군', '위도': '위도', '경도': '경도', '여행지': '여행지', '제목': '제목', '부제목': '부제목', '주소': '주소', '연락처': '연락처', '홈페이지': '홈페이지', '교통정보': '교통정보', '운영일': '운영일', '휴무일': '휴무일', '운영 및 시간': '운영 및 시간', '이용요금': '이용요금', '편의시설': '편의시설', '이미지URL': '이미지URL', '썸네일이미지URL': '썸네일이미지URL', '상세내용': '상세내용', });
lyr__4.set('fieldAliases', {'id': 'id', 'nm': 'nm', 'x': 'x', 'y': 'y', 'url': 'url', });
lyr__6.set('fieldAliases', {'번호': '번호', '개방서�': '개방서�', '개방��': '개방��', '개방자�': '개방자�', '관리번�': '관리번�', '인허가�': '인허가�', '인허��': '인허��', '영업상�': '영업상�', '영업��': '영업��', '상세영�': '상세영�', '상세��': '상세��', '폐업일�': '폐업일�', '휴업시�': '휴업시�', '휴업종�': '휴업종�', '재개업�': '재개업�', '소재지�': '소재지�', '소재��_1': '소재��_1', '소재��': '소재��', '소재��_1_1': '소재��_1_1', '도로명�': '도로명�', '도로��': '도로��', '사업장�': '사업장�', '최종수�': '최종수�', '데이터�': '데이터�', '데이��': '데이��', '업태구�': '업태구�', '좌표정�': '좌표정�', '좌표��': '좌표��', '위생업�': '위생업�', '건물지�': '건물지�', '건물��_1': '건물��_1', '사용시�': '사용시�', '사용끝�': '사용끝�', '사용��': '사용��', '사용��_1': '사용��_1', '한실수': '한실수', '양실수': '양실수', '조건부�': '조건부�', '조건��': '조건��', '조건��_1': '조건��_1', '건물소�': '건물소�', '여성종�': '여성종�', '남성종�': '남성종�', '다중이�': '다중이�', });
lyr_yeongdolsmd_adm_sect_umd_26_202512_1.set('fieldImages', {'fid': 'TextEdit', 'EMD_CD': 'TextEdit', 'COL_ADM_SE': 'TextEdit', 'EMD_NM': 'TextEdit', 'SGG_OID': 'Range', });
lyr__2.set('fieldImages', {'콘텐츠ID': 'Range', '콘텐츠명': 'TextEdit', '구군': 'TextEdit', '위도': 'TextEdit', '경도': 'TextEdit', '여행지': 'TextEdit', '제목': 'TextEdit', '부제목': 'TextEdit', '주소': 'TextEdit', '연락처': 'TextEdit', '홈페이지': 'TextEdit', '교통정보': 'TextEdit', '운영일': 'TextEdit', '휴무일': 'TextEdit', '운영 및 시간': 'TextEdit', '이용요금': 'TextEdit', '편의시설': 'TextEdit', '이미지URL': 'TextEdit', '썸네일이미지URL': 'TextEdit', '상세내용': 'TextEdit', });
lyr__4.set('fieldImages', {'id': 'TextEdit', 'nm': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'url': 'TextEdit', });
lyr__6.set('fieldImages', {'번호': 'TextEdit', '개방서�': 'TextEdit', '개방��': '', '개방자�': 'TextEdit', '관리번�': 'TextEdit', '인허가�': 'DateTime', '인허��': '', '영업상�': 'TextEdit', '영업��': '', '상세영�': 'TextEdit', '상세��': '', '폐업일�': 'DateTime', '휴업시�': 'TextEdit', '휴업종�': 'TextEdit', '재개업�': 'TextEdit', '소재지�': 'TextEdit', '소재��_1': 'TextEdit', '소재��': '', '소재��_1_1': '', '도로명�': 'TextEdit', '도로��': '', '사업장�': 'TextEdit', '최종수�': 'DateTime', '데이터�': 'TextEdit', '데이��': '', '업태구�': 'TextEdit', '좌표정�': 'TextEdit', '좌표��': '', '위생업�': 'TextEdit', '건물지�': 'TextEdit', '건물��_1': '', '사용시�': 'TextEdit', '사용끝�': 'TextEdit', '사용��': '', '사용��_1': 'TextEdit', '한실수': 'TextEdit', '양실수': 'TextEdit', '조건부�': 'TextEdit', '조건��': '', '조건��_1': 'TextEdit', '건물소�': 'TextEdit', '여성종�': 'TextEdit', '남성종�': 'TextEdit', '다중이�': 'TextEdit', });
lyr_yeongdolsmd_adm_sect_umd_26_202512_1.set('fieldLabels', {'fid': 'no label', 'EMD_CD': 'no label', 'COL_ADM_SE': 'no label', 'EMD_NM': 'no label', 'SGG_OID': 'no label', });
lyr__2.set('fieldLabels', {'콘텐츠ID': 'no label', '콘텐츠명': 'inline label - always visible', '구군': 'no label', '위도': 'no label', '경도': 'no label', '여행지': 'no label', '제목': 'no label', '부제목': 'no label', '주소': 'no label', '연락처': 'no label', '홈페이지': 'no label', '교통정보': 'no label', '운영일': 'no label', '휴무일': 'no label', '운영 및 시간': 'no label', '이용요금': 'no label', '편의시설': 'no label', '이미지URL': 'no label', '썸네일이미지URL': 'no label', '상세내용': 'no label', });
lyr__4.set('fieldLabels', {'id': 'no label', 'nm': 'inline label - always visible', 'x': 'no label', 'y': 'no label', 'url': 'header label - always visible', });
lyr__6.set('fieldLabels', {'번호': 'no label', '개방서�': 'header label - visible with data', '개방��': 'inline label - always visible', '개방자�': 'no label', '관리번�': 'no label', '인허가�': 'no label', '인허��': 'no label', '영업상�': 'no label', '영업��': 'no label', '상세영�': 'no label', '상세��': 'no label', '폐업일�': 'no label', '휴업시�': 'no label', '휴업종�': 'no label', '재개업�': 'no label', '소재지�': 'no label', '소재��_1': 'no label', '소재��': 'no label', '소재��_1_1': 'no label', '도로명�': 'no label', '도로��': 'no label', '사업장�': 'no label', '최종수�': 'no label', '데이터�': 'no label', '데이��': 'no label', '업태구�': 'no label', '좌표정�': 'no label', '좌표��': 'no label', '위생업�': 'no label', '건물지�': 'no label', '건물��_1': 'no label', '사용시�': 'no label', '사용끝�': 'no label', '사용��': 'no label', '사용��_1': 'no label', '한실수': 'no label', '양실수': 'no label', '조건부�': 'no label', '조건��': 'no label', '조건��_1': 'no label', '건물소�': 'no label', '여성종�': 'no label', '남성종�': 'no label', '다중이�': 'no label', });
lyr__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});