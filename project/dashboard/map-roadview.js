(function () {
    var config = window.MAP_INTEGRATION_CONFIG || {};
    var params = new URLSearchParams(window.location.search);
    var lat = Number(params.get('lat'));
    var lng = Number(params.get('lng'));
    var statusElement = document.getElementById('roadviewStatus');
    var metaElement = document.getElementById('roadviewMeta');
    var externalRoadviewButton = document.getElementById('externalRoadviewButton');
    var closeWindowButton = document.getElementById('closeWindowButton');
    var canvas = document.getElementById('roadviewCanvas');

    function setStatus(text) {
        statusElement.textContent = text;
    }

    function directRoadviewUrl() {
        return 'https://map.kakao.com/link/roadview/' + lat + ',' + lng;
    }

    function navigateToDirectRoadview() {
        window.location.replace(directRoadviewUrl());
    }

    function isEmbeddedRoadviewSupported() {
        return window.location.protocol === 'http:' || window.location.protocol === 'https:';
    }

    function loadKakaoSdk() {
        return new Promise(function (resolve, reject) {
            if (!config.kakaoJavascriptKey) {
                reject(new Error('missing-kakao-key'));
                return;
            }

            if (!isEmbeddedRoadviewSupported()) {
                reject(new Error('unsupported-origin'));
                return;
            }

            if (window.kakao && window.kakao.maps) {
                resolve(window.kakao);
                return;
            }

            var script = document.createElement('script');
            var timeoutId = window.setTimeout(function () {
                reject(new Error('sdk-timeout'));
            }, 8000);

            script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=' + encodeURIComponent(config.kakaoJavascriptKey) + '&autoload=false';
            script.onload = function () {
                if (!window.kakao || !window.kakao.maps || !window.kakao.maps.load) {
                    window.clearTimeout(timeoutId);
                    reject(new Error('sdk-init-failed'));
                    return;
                }

                window.kakao.maps.load(function () {
                    window.clearTimeout(timeoutId);
                    resolve(window.kakao);
                });
            };
            script.onerror = function () {
                window.clearTimeout(timeoutId);
                reject(new Error('sdk-load-failed'));
            };
            document.head.appendChild(script);
        });
    }

    function initRoadview() {
        if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
            setStatus('좌표가 올바르지 않아 로드뷰를 열 수 없습니다.');
            return;
        }

        metaElement.textContent = '위도 ' + lat.toFixed(6) + ' / 경도 ' + lng.toFixed(6);
        setStatus('카카오 로드뷰를 불러오는 중입니다.');

        loadKakaoSdk()
            .then(function (kakao) {
                var position = new kakao.maps.LatLng(lat, lng);
                var roadview = new kakao.maps.Roadview(canvas);
                var roadviewClient = new kakao.maps.RoadviewClient();
                var radius = Number(config.roadviewSearchRadius || 50);

                roadviewClient.getNearestPanoId(position, radius, function (panoId) {
                    if (!panoId) {
                        if (config.roadviewFallbackToDirectUrl !== false) {
                            setStatus('주변 로드뷰를 찾지 못해 카카오 로드뷰 페이지로 전환합니다.');
                            window.setTimeout(navigateToDirectRoadview, 600);
                            return;
                        }

                        setStatus('주변 ' + radius + 'm 안에서 로드뷰를 찾지 못했습니다. 아래 버튼으로 카카오맵을 직접 열 수 있습니다.');
                        return;
                    }

                    roadview.setPanoId(panoId, position);
                    setStatus('로드뷰를 표시했습니다.');
                });
            })
            .catch(function (error) {
                if (error && error.message === 'missing-kakao-key') {
                    setStatus('map-integration.config.js에 카카오 JavaScript 키를 입력하면 이 팝업에 로드뷰가 직접 표시됩니다.');
                    if (config.roadviewFallbackToDirectUrl !== false) {
                        window.setTimeout(navigateToDirectRoadview, 1000);
                    }
                    return;
                }

                if (error && error.message === 'unsupported-origin') {
                    setStatus('현재 파일 직접 열기 환경에서는 카카오 SDK 임베드가 제한되어 카카오 로드뷰 페이지로 전환합니다.');
                    if (config.roadviewFallbackToDirectUrl !== false) {
                        window.setTimeout(navigateToDirectRoadview, 800);
                    }
                    return;
                }

                if (config.roadviewFallbackToDirectUrl !== false) {
                    setStatus('카카오 SDK 로딩에 실패해 카카오 로드뷰 페이지로 전환합니다.');
                    window.setTimeout(navigateToDirectRoadview, 800);
                    return;
                }

                setStatus('카카오 로드뷰 로딩에 실패했습니다. 아래 버튼으로 카카오맵에서 직접 열 수 있습니다.');
            });
    }

    externalRoadviewButton.addEventListener('click', function () {
        window.open(directRoadviewUrl(), '_blank', 'noopener');
    });

    closeWindowButton.addEventListener('click', function () {
        window.close();
    });

    initRoadview();
})();