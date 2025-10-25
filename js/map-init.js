let map;
let boundaryLayer;

function initMap() {
    const campusBounds = CONFIG.getCampusBounds();
    
    map = L.map('map', {
        center: [CONFIG.mapCenter.lat, CONFIG.mapCenter.lng],
        zoom: CONFIG.mapCenter.zoom,
        minZoom: CONFIG.map.minZoom,
        maxZoom: CONFIG.map.maxZoom,
        attributionControl: CONFIG.map.attributionControl,
        zoomControl: true,
        maxBounds: campusBounds,
        maxBoundsViscosity: 1.0
    });
    
    map.zoomControl.setPosition('topright');

    L.tileLayer(CONFIG.tileLayer.url, {
        attribution: CONFIG.tileLayer.attribution,
        maxZoom: CONFIG.map.maxZoom
    }).addTo(map);

    addCampusBoundary();

    map.on('drag', function() {
        map.panInsideBounds(campusBounds, { animate: false });
    });

    console.log('Map initialized successfully with campus bounds restriction');
    return map;
}

function addCampusBoundary() {
    if (typeof CAMPUS_BOUNDARY !== 'undefined') {
        boundaryLayer = L.geoJSON(CAMPUS_BOUNDARY, {
            style: CONFIG.boundaryStyle,
            onEachFeature: function(feature, layer) {
                if (feature.properties && feature.properties.name) {
                    layer.bindPopup(
                        `<strong>${feature.properties.name}</strong><br>` +
                        `${feature.properties.description || ''}`
                    );
                }
            }
        }).addTo(map);

        const boundaryBounds = boundaryLayer.getBounds();
        
        map.setMaxBounds(boundaryBounds);
        
        map.fitBounds(boundaryBounds, {
            padding: [50, 50]
        });

        console.log('Campus boundary added to map with bounds restriction');
    } else {
        console.warn('CAMPUS_BOUNDARY not defined. Skipping boundary layer.');
        
        const campusBounds = CONFIG.getCampusBounds();
        map.setMaxBounds(campusBounds);
    }
}

function setMapCenter(lat, lng, zoom = CONFIG.mapCenter.zoom) {
    if (map) {
        map.setView([lat, lng], zoom);
    }
}

function zoomIn() {
    if (map) {
        map.zoomIn();
    }
}

function zoomOut() {
    if (map) {
        map.zoomOut();
    }
}

function centerMap() {
    if (map) {
        map.setView(
            [CONFIG.mapCenter.lat, CONFIG.mapCenter.lng],
            CONFIG.mapCenter.zoom
        );
    }
}

function getMap() {
    return map;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initMap,
        addCampusBoundary,
        setMapCenter,
        zoomIn,
        zoomOut,
        centerMap,
        getMap
    };
}