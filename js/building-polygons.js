let buildingLayers = [];
let buildingLayerGroup;

const LABEL_ZOOM_THRESHOLD = 16;

function initializeBuildingLayerGroup() {
    if (!buildingLayerGroup && map) {
        buildingLayerGroup = L.layerGroup().addTo(map);
    }
}

function addBuildingPolygons(buildings = CAMPUS_BUILDINGS.features) {
    if (!map) {
        console.error("Map not initialized yet. Call addBuildingPolygons after initMap()");
        return;
    }

    initializeBuildingLayerGroup();
    clearBuildingPolygons();

    buildings.forEach(building => {
        addBuildingPolygon(building);
    });

    console.log(`Added ${buildings.length} building polygons to map`);
}

function addBuildingPolygon(building) {
    const props = building.properties;

    const style = {
        color: props.color || '#2d5f3f',
        weight: 2,
        opacity: 1,
        fillColor: props.fillColor || '#4a8f5f',
        fillOpacity: props.fillOpacity || 0.6
    };

    const polygon = L.geoJSON(building, {
        style: style,
        onEachFeature: function(feature, layer) {
            layer.bindTooltip(props.name, {
                permanent: false,
                direction: 'center',
                className: 'building-label'
            });

            layer.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.8, weight: 3 });
                if (map.getZoom() >= LABEL_ZOOM_THRESHOLD) this.openTooltip();
            });

            layer.on('mouseout', function() {
                this.setStyle({ fillOpacity: props.fillOpacity || 0.6, weight: 2 });
                this.closeTooltip();
            });

            layer.on('click', function() {
                showBuildingInfo(props);
                updateSelectedLocation(props);
                highlightBuilding(building);
            });
        }
    });

    polygon.addTo(buildingLayerGroup);
    buildingLayers.push(polygon);
}

function clearBuildingPolygons() {
    if (buildingLayerGroup) {
        buildingLayerGroup.clearLayers();
    }
    buildingLayers = [];
}

function showBuildingPolygons() {
    if (buildingLayerGroup && map) {
        if (!map.hasLayer(buildingLayerGroup)) {
            map.addLayer(buildingLayerGroup);
        }
    }
}

function hideBuildingPolygons() {
    if (buildingLayerGroup && map) {
        if (map.hasLayer(buildingLayerGroup)) {
            map.removeLayer(buildingLayerGroup);
        }
    }
}

function filterBuildingPolygons(type) {
    clearMarkers();
    showBuildingPolygons();
    
    const filtered = getBuildingsByType(type);
    addBuildingPolygons(filtered);
    console.log(`Filtered to ${filtered.length} buildings of type: ${type}`);
}

function highlightBuilding(building) {
    const center = getBuildingCenter(building.geometry);
    map.setView(center, 18);
    showBuildingInfo(building.properties);
}

function searchAndDisplayBuildings(query) {
    if (!query || query.trim() === '') {
        addBuildingPolygons(CAMPUS_BUILDINGS.features);
        return CAMPUS_BUILDINGS.features;
    }

    const results = searchBuildings(query);
    
    clearBuildingPolygons();
    if (buildingLayerGroup && map) {
        if (!map.hasLayer(buildingLayerGroup)) {
            map.addLayer(buildingLayerGroup);
        }
    }
    
    results.forEach(building => {
        addBuildingPolygon(building);
    });

    if (results.length > 0) {
        const center = getBuildingCenter(results[0].geometry);
        map.setView(center, 17);
    }

    console.log(`Building search for "${query}" found ${results.length} results:`, results.map(b => b.properties.name));
    return results;
}

function showBuildingInfo(props) {
    console.log('Building selected:', props.name || props.title);
    
    const popup = document.getElementById('buildingPopup');
    if (popup) {
        const nameEl = document.getElementById('buildingName');
        const detailsEl = document.getElementById('buildingDetails');
        
        if (nameEl) {
            nameEl.textContent = props.name || props.title || 'Unknown';
        }
        
        if (detailsEl) {
            detailsEl.innerHTML = `
                <div class="detail-item">
                    <span class="detail-label">Type:</span>
                    <span class="detail-value">${props.type || props.category || 'N/A'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Description:</span>
                    <span class="detail-value">${props.description || 'No description available'}</span>
                </div>
            `;
        }
        
        popup.style.display = 'block';
    }
}

function updateSelectedLocation(props) {
    const locationCard = document.querySelector('.location-card');
    if (locationCard) {
        const nameEl = locationCard.querySelector('.location-name');
        const descEl = locationCard.querySelector('.location-description');
        
        if (nameEl) {
            nameEl.textContent = props.name || props.title || 'Unknown Location';
        }
        
        if (descEl) {
            descEl.textContent = props.description || 'No description available';
        }
    }
}

function getBuildingCenter(geometry) {
    if (geometry.type === 'Polygon') {
        const coords = geometry.coordinates[0];
        let lat = 0, lng = 0;
        coords.forEach(coord => {
            lng += coord[0];
            lat += coord[1];
        });
        return [lat / coords.length, lng / coords.length];
    }
    return [CONFIG.mapCenter.lat, CONFIG.mapCenter.lng];
}

function searchBuildings(query) {
    if (!CAMPUS_BUILDINGS || !CAMPUS_BUILDINGS.features) {
        return [];
    }
    
    query = query.toLowerCase().trim();
    const queryWords = query.split(' ').filter(word => word.length > 0);
    
    console.log(`BUILDING SEARCH: "${query}" → words: [${queryWords.join(', ')}]`);
    
    const results = CAMPUS_BUILDINGS.features.filter(building => {
        const props = building.properties;
        const buildingName = props.name.toLowerCase();
        
        const nameContainsAllWords = queryWords.every(word => buildingName.includes(word));
        
        if (nameContainsAllWords) {
            console.log(`NAME MATCH: "${props.name}" contains all words`);
            return true;
        }
        
        return false;
    });
    
    console.log(`FINAL Building results: ${results.length}`);
    return results;
}

function getBuildingsByType(type) {
    if (!CAMPUS_BUILDINGS || !CAMPUS_BUILDINGS.features) {
        return [];
    }
    
    return CAMPUS_BUILDINGS.features.filter(building => 
        building.properties.category === type || building.properties.type === type
    );
}