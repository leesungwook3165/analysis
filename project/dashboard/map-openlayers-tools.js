(function () {
    function buildCoordinateData(mapWindow, coordinate) {
        var projection = mapWindow.map.getView().getProjection();
        var wgs84 = mapWindow.ol.proj.transform(coordinate, projection, 'EPSG:4326');

        return {
            rawX: coordinate[0],
            rawY: coordinate[1],
            lng: wgs84[0],
            lat: wgs84[1]
        };
    }

    function waitForMapFrame(frame, options) {
        var settings = options || {};
        var attempt = 0;
        var maxAttempts = settings.maxAttempts || 120;
        var intervalMs = settings.intervalMs || 250;

        return new Promise(function (resolve, reject) {
            function tryResolve() {
                attempt += 1;

                try {
                    var mapWindow = frame.contentWindow;
                    if (mapWindow && mapWindow.map && mapWindow.ol) {
                        resolve(mapWindow);
                        return;
                    }
                } catch (error) {
                    reject(error);
                    return;
                }

                if (attempt >= maxAttempts) {
                    reject(new Error('map-frame-timeout'));
                    return;
                }

                window.setTimeout(tryResolve, intervalMs);
            }

            tryResolve();
        });
    }

    function bindMapInteractions(options) {
        var frame = options.frame;
        var mapWindow = options.mapWindow;
        var mapObject = mapWindow.map;
        var viewport = mapObject.getViewport();
        var parentDocument = options.parentDocument || document;
        var onCoordinate = options.onCoordinate || function () {};
        var onContextMenu = options.onContextMenu || function () {};
        var onOutsidePointerDown = options.onOutsidePointerDown || function () {};

        function handleSingleClick(evt) {
            onCoordinate(buildCoordinateData(mapWindow, evt.coordinate));
        }

        function handleContextMenu(evt) {
            evt.preventDefault();
            evt.stopPropagation();

            var pixel = mapObject.getEventPixel(evt);
            var coordinate = mapObject.getCoordinateFromPixel(pixel);
            var coordinateData = buildCoordinateData(mapWindow, coordinate);
            var frameRect = frame.getBoundingClientRect();

            onCoordinate(coordinateData);
            onContextMenu({
                coordinateData: coordinateData,
                clientX: frameRect.left + evt.clientX,
                clientY: frameRect.top + evt.clientY
            });
        }

        function handlePointerDown(evt) {
            onOutsidePointerDown(evt);
        }

        mapObject.on('singleclick', handleSingleClick);
        viewport.addEventListener('contextmenu', handleContextMenu);
        parentDocument.addEventListener('pointerdown', handlePointerDown);

        return function cleanup() {
            mapObject.un('singleclick', handleSingleClick);
            viewport.removeEventListener('contextmenu', handleContextMenu);
            parentDocument.removeEventListener('pointerdown', handlePointerDown);
        };
    }

    window.MapOpenLayersTools = {
        waitForMapFrame: waitForMapFrame,
        bindMapInteractions: bindMapInteractions
    };
})();