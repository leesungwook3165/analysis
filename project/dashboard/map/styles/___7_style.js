var size = 0;
var placement = 'point';
function categories____7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.3)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(96,154,229,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '(감지해변 배후지)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,251,0,0.3)', lineDash: [19.0,3.8], lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(253,232,6,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '(예비군 훈련장 이전적지)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,251,0,0.3)', lineDash: [19.0,3.8], lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(35,247,5,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '(중리해변 배후지)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(242,250,28,0.3)', lineDash: [19.0,3.8], lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(3,77,255,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style____7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("name");
    var labelFont = "16.900000000000002px \'Noto Sans KR Black\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("name") !== null && resolution > 0 && resolution < 7) {
        labelText = String(feature.get("name"));
    }
    
    var style = categories____7(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
