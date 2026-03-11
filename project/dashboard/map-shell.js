(function () {
    var config = window.MAP_INTEGRATION_CONFIG || {};
    var frame = document.getElementById('mapFrame');
    var mapStatus = document.getElementById('mapStatus');
    var mapStatusBody = document.getElementById('mapStatusBody');
    var toggleStatusButton = document.getElementById('toggleStatusButton');
    var coordDisplay = document.getElementById('coordDisplay');
    var copyCoordsButton = document.getElementById('copyCoordsButton');
    var contextMenu = document.getElementById('contextMenu');
    var openRoadviewButton = document.getElementById('openRoadviewButton');
    var copyMenuCoordsButton = document.getElementById('copyMenuCoordsButton');
    var latestCoordinate = null;
    var menuCoordinate = null;
    var cleanupMapBindings = null;
    var isStatusCollapsed = false;

    function setStatus(text) {
        coordDisplay.className = 'map-shell__coord map-shell__coord--empty';
        coordDisplay.textContent = text;
    }

    function renderCoordinateBadge(label, value) {
        return '<span class="map-shell__coord-item">' +
            '<span class="map-shell__coord-key">' + label + '</span>' +
            '<span class="map-shell__coord-value">' + value + '</span>' +
            '</span>';
    }

    function formatCoordinateLabel(coordinateData) {
        var wgs84Group = '<div class="map-shell__coord-group">' +
            '<div class="map-shell__coord-group-label">WGS84 (EPSG:4326) — 카카오 · 로드뷰용</div>' +
            '<div class="map-shell__coord-row">' +
            renderCoordinateBadge('LAT', coordinateData.lat.toFixed(6)) +
            renderCoordinateBadge('LNG', coordinateData.lng.toFixed(6)) +
            '</div></div>';
        var mercGroup = '<div class="map-shell__coord-group">' +
            '<div class="map-shell__coord-group-label">EPSG:3857 (Web Mercator) — OpenLayers 원본</div>' +
            '<div class="map-shell__coord-row">' +
            renderCoordinateBadge('X', coordinateData.rawX.toFixed(3)) +
            renderCoordinateBadge('Y', coordinateData.rawY.toFixed(3)) +
            '</div></div>';
        return wgs84Group + mercGroup;
    }

    function formatCoordinateCopyText(coordinateData) {
        return [
            'lat=' + coordinateData.lat.toFixed(6),
            'lng=' + coordinateData.lng.toFixed(6),
            'x=' + coordinateData.rawX.toFixed(3),
            'y=' + coordinateData.rawY.toFixed(3)
        ].join(', ');
    }

    function hideContextMenu() {
        contextMenu.hidden = true;
        menuCoordinate = null;
    }

    function copyText(text) {
        if (!navigator.clipboard || !navigator.clipboard.writeText) {
            window.prompt('아래 값을 복사하세요.', text);
            return Promise.resolve();
        }

        return navigator.clipboard.writeText(text);
    }

    function updateCoordinate(coordinateData) {
        latestCoordinate = coordinateData;
        coordDisplay.className = 'map-shell__coord';
        coordDisplay.innerHTML = formatCoordinateLabel(coordinateData);
        copyCoordsButton.disabled = false;
    }

    function syncStatusCollapse() {
        mapStatus.classList.toggle('map-shell__status--collapsed', isStatusCollapsed);
        mapStatusBody.hidden = isStatusCollapsed;
        toggleStatusButton.textContent = isStatusCollapsed ? '열기' : '접기';
        toggleStatusButton.setAttribute('aria-expanded', String(!isStatusCollapsed));
    }

    function showContextMenu(menuPosition) {
        var menuWidth = 190;
        var menuHeight = 92;
        var maxLeft = window.innerWidth - menuWidth - 12;
        var maxTop = window.innerHeight - menuHeight - 12;

        contextMenu.style.left = Math.max(12, Math.min(menuPosition.clientX, maxLeft)) + 'px';
        contextMenu.style.top = Math.max(12, Math.min(menuPosition.clientY, maxTop)) + 'px';
        contextMenu.hidden = false;
    }

    function openRoadviewPopup(coordinateData) {
        var popupUrl = new URL(config.roadviewPopupPath || './map-roadview.html', window.location.href);
        popupUrl.searchParams.set('lat', coordinateData.lat.toFixed(6));
        popupUrl.searchParams.set('lng', coordinateData.lng.toFixed(6));

        var width = Math.min(980, window.screen.width * 0.86);
        var height = Math.min(760, window.screen.height * 0.86);
        var left = Math.round((window.screen.width - width) / 2);
        var top = Math.round((window.screen.height - height) / 2);

        var popup = window.open(
            popupUrl.href,
            'KakaoRoadviewPopup',
            'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top + ',resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,status=no'
        );

        if (popup) {
            popup.focus();
            return;
        }

        alert('로드뷰 팝업이 차단되었습니다. 브라우저에서 팝업 허용이 필요합니다.');
    }

    function bindMap() {
        setStatus('지도 로딩 중입니다. 잠시만 기다려주세요.');
        copyCoordsButton.disabled = true;
        hideContextMenu();

        window.MapOpenLayersTools.waitForMapFrame(frame)
            .then(function (mapWindow) {
                if (cleanupMapBindings) {
                    cleanupMapBindings();
                    cleanupMapBindings = null;
                }

                cleanupMapBindings = window.MapOpenLayersTools.bindMapInteractions({
                    frame: frame,
                    mapWindow: mapWindow,
                    onCoordinate: function (coordinateData) {
                        updateCoordinate(coordinateData);
                        hideContextMenu();
                    },
                    onContextMenu: function (menuPayload) {
                        menuCoordinate = menuPayload.coordinateData;
                        showContextMenu(menuPayload);
                    },
                    onOutsidePointerDown: function (evt) {
                        if (!contextMenu.hidden && !contextMenu.contains(evt.target)) {
                            hideContextMenu();
                        }
                    }
                });

                setStatus('지도를 클릭하면 좌표가 표시됩니다. 우클릭 메뉴에서 로드뷰를 열 수 있습니다.');
            })
            .catch(function () {
                setStatus('지도와 분리 스크립트를 연결하지 못했습니다. 같은 출처에서 열어야 합니다.');
            });
    }

    copyCoordsButton.addEventListener('click', function () {
        if (!latestCoordinate) {
            return;
        }

        copyText(formatCoordinateCopyText(latestCoordinate));
    });

    openRoadviewButton.addEventListener('click', function () {
        if (!menuCoordinate) {
            return;
        }

        openRoadviewPopup(menuCoordinate);
        hideContextMenu();
    });

    copyMenuCoordsButton.addEventListener('click', function () {
        if (!menuCoordinate) {
            return;
        }

        copyText(formatCoordinateCopyText(menuCoordinate));
        hideContextMenu();
    });

    toggleStatusButton.addEventListener('click', function () {
        isStatusCollapsed = !isStatusCollapsed;
        syncStatusCollapse();
    });

    window.addEventListener('resize', hideContextMenu);
    document.addEventListener('keydown', function (evt) {
        if (evt.key === 'Escape') {
            hideContextMenu();
        }
    });

    frame.src = new URL(config.mapFramePath || './map/index.html', window.location.href).href;
    frame.addEventListener('load', bindMap);
    syncStatusCollapse();
    bindMap();
})();