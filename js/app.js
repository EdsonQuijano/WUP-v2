function initApp() {
    console.log('Initializing WUP Interactive Map...');
    console.log('Loading buildings as polygons + small locations as markers...');

    try {
        initMap();

        if (typeof CAMPUS_BUILDINGS !== 'undefined' && typeof addBuildingPolygons === 'function') {
            addBuildingPolygons(CAMPUS_BUILDINGS.features);
            console.log(`${CAMPUS_BUILDINGS.features.length} buildings loaded as polygons`);
        } else {
            console.warn('Building polygons not available');
        }

        if (typeof CAMPUS_LOCATIONS !== 'undefined' && typeof addAllMarkers === 'function') {
            addAllMarkers(CAMPUS_LOCATIONS);
            console.log(`${CAMPUS_LOCATIONS.length} locations loaded as markers`);
        } else {
            console.warn('Location markers not available');
        }

        initUIHandlers();

        console.log('WUP Interactive Map loaded successfully');
        
        displayWelcomeMessage();

    } catch (error) {
        console.error('Error initializing application:', error);
        displayErrorMessage('Failed to load map. Please refresh the page.');
    }
}

function displayWelcomeMessage() {
    console.log('%c Welcome to WUP Interactive Map! ', 'background: #2d5f3f; color: white; font-size: 14px; padding: 5px;');
    console.log('Buildings shown as colored polygons');
    console.log('Small locations shown as pin markers');
    console.log('Search for buildings, click on shapes/markers, or use filters to explore the campus.');
}

function displayErrorMessage(message) {
    console.error('Error:', message);
    alert(message);
}

function checkDependencies() {
    const required = {
        'Leaflet': typeof L !== 'undefined',
        'CONFIG': typeof CONFIG !== 'undefined',
        'CAMPUS_BOUNDARY': typeof CAMPUS_BOUNDARY !== 'undefined'
    };

    const optional = {
        'CAMPUS_BUILDINGS': typeof CAMPUS_BUILDINGS !== 'undefined',
        'CAMPUS_LOCATIONS': typeof CAMPUS_LOCATIONS !== 'undefined'
    };

    let allRequiredLoaded = true;
    
    for (const [name, loaded] of Object.entries(required)) {
        if (!loaded) {
            console.error(`${name} not loaded (REQUIRED)`);
            allRequiredLoaded = false;
        } else {
            console.log(`${name} loaded`);
        }
    }

    for (const [name, loaded] of Object.entries(optional)) {
        if (!loaded) {
            console.warn(`${name} not loaded (optional)`);
        } else {
            console.log(`${name} loaded`);
        }
    }

    return allRequiredLoaded;
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded. Checking dependencies...');
    
    if (checkDependencies()) {
        initApp();
    } else {
        console.error('Missing required dependencies. Please check file loading order.');
        displayErrorMessage('Failed to load required files. Please check the console for details.');
    }
});

window.addEventListener('resize', function() {
    if (map) {
        map.invalidateSize();
    }
});

window.addEventListener('beforeunload', function() {
    console.log('Cleaning up...');
});