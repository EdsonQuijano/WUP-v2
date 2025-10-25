let markers = [];
let markerLayer = null;

function createPinIcon(locationType) {
    const iconConfig = CONFIG.pinIcons[locationType] || CONFIG.pinIcons.default;
    return L.icon(iconConfig);
}

function addAllMarkers(locations = CAMPUS_LOCATIONS) {
    clearMarkers();
    markerLayer = L.layerGroup().addTo(map);
    
    locations.forEach(location => {
        addMarker(location);
    });
    
    console.log(`Added ${locations.length} markers to map`);
}

function addMarker(location) {
    const icon = createPinIcon(location.type);
    
    const marker = L.marker([location.lat, location.lng], { 
        icon: icon,
        title: location.name
    });
    
    marker.locationData = location;
    
    marker.on('click', function() {
        showBuildingInfo(location);
        updateSelectedLocation(location);
    });
    
    if (markerLayer) {
        marker.addTo(markerLayer);
    } else {
        marker.addTo(map);
    }
    
    markers.push(marker);
    return marker;
}

function clearMarkers() {
    if (markerLayer) {
        map.removeLayer(markerLayer);
        markerLayer = null;
    }
    
    markers.forEach(marker => {
        if (map.hasLayer(marker)) {
            map.removeLayer(marker);
        }
    });
    
    markers = [];
}

function getLocationsByType(type) {
    if (!type || type === 'all') {
        return CAMPUS_LOCATIONS;
    }
    
    return CAMPUS_LOCATIONS.filter(location => 
        location.type && location.type.toLowerCase() === type.toLowerCase()
    );
}

function getLocationById(locationId) {
    return CAMPUS_LOCATIONS.find(location => location.id === locationId);
}

function filterMarkers(type) {
    console.log('Filter called with type:', type);
    
    if (typeof showBuildingPolygons === 'function') {
        showBuildingPolygons();
    }
    
    const filteredLocations = getLocationsByType(type);
    console.log('Filtered locations:', filteredLocations);
    
    if (filteredLocations.length === 0) {
        console.warn(`No locations found for type: ${type}`);
    }
    
    addAllMarkers(filteredLocations);
    console.log(`Filtered to ${filteredLocations.length} locations of type: ${type}`);
}

function highlightMarker(locationId) {
    const location = getLocationById(locationId);
    if (location) {
        map.setView([location.lat, location.lng], 18);
        showBuildingInfo(location);
    } else {
        console.warn(`Location not found with id: ${locationId}`);
    }
}

function searchAndDisplayMarkers(query) {
    if (!query) {
        addAllMarkers(CAMPUS_LOCATIONS);
        return CAMPUS_LOCATIONS;
    }

    const lowerQuery = query.toLowerCase();
    const results = CAMPUS_LOCATIONS.filter(location =>
        location.name.toLowerCase().includes(lowerQuery) ||
        (location.type || '').toLowerCase().includes(lowerQuery)
    );

    addAllMarkers(results);

    if (results.length > 0) {
        map.setView([results[0].lat, results[0].lng], 17);
    }

    return results;
}
function searchLocations(query) {
    if (!CAMPUS_LOCATIONS) {
        return [];
    }
    
    query = query.toLowerCase().trim();
    const queryWords = query.split(' ').filter(word => word.length > 0);
    
    console.log(`LOCATION SEARCH: "${query}" → words: [${queryWords.join(', ')}]`);
    
    const results = CAMPUS_LOCATIONS.filter(location => {
        const locationName = location.name.toLowerCase();
        
        const nameContainsAllWords = queryWords.every(word => locationName.includes(word));
        
        if (nameContainsAllWords) {
            console.log(`NAME MATCH: "${location.name}" contains all words`);
            return true;
        }
        
        return false;
    });
    
    console.log(`FINAL Location results: ${results.length}`);
    return results;
}