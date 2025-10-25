const CONFIG = {
    mapCenter: {
        lat: 15.485025430278021,
        lng: 120.97543199538379,
        zoom: 18
    },
    map: {
        minZoom: 18,
        maxZoom: 20,
        attributionControl: true,
        maxBounds: [
            [15.4800, 120.9700], 
            [15.4900, 120.9800]
        ],
        maxBoundsViscosity: 1.0
    },
    tileLayer: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; OpenStreetMap contributors'
    },

    pinIcons: {
        comfort: {
            iconUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36"%3E%3Cpath fill="%234a90e2" d="M12 0C7.03 0 3 4.03 3 9c0 7.5 9 18 9 18s9-10.5 9-18c0-4.97-4.03-9-9-9z"/%3E%3Ctext x="12" y="11" font-family="Arial" font-size="10" fill="white" text-anchor="middle" font-weight="bold"%3EWC%3C/text%3E%3C/svg%3E',
            iconSize: [25, 37],
            iconAnchor: [12, 37],
            popupAnchor: [0, -37]
        },
        parking: {
            iconUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36"%3E%3Cpath fill="%23f59e0b" d="M12 0C7.03 0 3 4.03 3 9c0 7.5 9 18 9 18s9-10.5 9-18c0-4.97-4.03-9-9-9z"/%3E%3Ctext x="12" y="12" font-family="Arial" font-size="12" fill="white" text-anchor="middle" font-weight="bold"%3EP%3C/text%3E%3C/svg%3E',
            iconSize: [25, 37],
            iconAnchor: [12, 37],
            popupAnchor: [0, -37]
        },
        gates: {
            iconUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36"%3E%3Cpath fill="%236b7280" d="M12 0C7.03 0 3 4.03 3 9c0 7.5 9 18 9 18s9-10.5 9-18c0-4.97-4.03-9-9-9z"/%3E%3Crect x="8" y="5" width="8" height="8" fill="white" stroke="white" stroke-width="0.5"/%3E%3Crect x="9" y="6" width="2.5" height="6" fill="%236b7280"/%3E%3Crect x="12.5" y="6" width="2.5" height="6" fill="%236b7280"/%3E%3C/svg%3E',
            iconSize: [25, 37],
            iconAnchor: [12, 37],
            popupAnchor: [0, -37]
        },
        service: {
            iconUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36"%3E%3Cpath fill="%23dc2626" d="M12 0C7.03 0 3 4.03 3 9c0 7.5 9 18 9 18s9-10.5 9-18c0-4.97-4.03-9-9-9z"/%3E%3Cpath d="M12 5 L12 13 M8 9 L16 9" stroke="white" stroke-width="2" stroke-linecap="round"/%3E%3C/svg%3E',
            iconSize: [25, 37],
            iconAnchor: [12, 37],
            popupAnchor: [0, -37]
        },
        court: {
            iconUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36"%3E%3Cpath fill="%23ea580c" d="M12 0C7.03 0 3 4.03 3 9c0 7.5 9 18 9 18s9-10.5 9-18c0-4.97-4.03-9-9-9z"/%3E%3Ccircle cx="12" cy="9" r="3.5" fill="none" stroke="white" stroke-width="1.2"/%3E%3Cpath d="M12 5.5 L12 12.5" stroke="white" stroke-width="1.2"/%3E%3C/svg%3E',
            iconSize: [25, 37],
            iconAnchor: [12, 37],
            popupAnchor: [0, -37]
        },
        landmark: {
            iconUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36"%3E%3Cpath fill="%2310b981" d="M12 0C7.03 0 3 4.03 3 9c0 7.5 9 18 9 18s9-10.5 9-18c0-4.97-4.03-9-9-9z"/%3E%3Cpath d="M12 5 L14 8 L17 8 L15 10 L16 13 L12 11 L8 13 L9 10 L7 8 L10 8 Z" fill="white"/%3E%3C/svg%3E',
            iconSize: [25, 37],
            iconAnchor: [12, 37],
            popupAnchor: [0, -37]
        },
        cafeteria: {
            iconUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36"%3E%3Cpath fill="%23f59e0b" d="M12 0C7.03 0 3 4.03 3 9c0 7.5 9 18 9 18s9-10.5 9-18c0-4.97-4.03-9-9-9z"/%3E%3Ctext x="12" y="12" font-family="Arial" font-size="10" fill="white" text-anchor="middle" font-weight="bold"%3E🍽️%3C/text%3E%3C/svg%3E',
            iconSize: [25, 37],
            iconAnchor: [12, 37],
            popupAnchor: [0, -37]
        },
        default: {
            iconUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36"%3E%3Cpath fill="%232d5f3f" d="M12 0C7.03 0 3 4.03 3 9c0 7.5 9 18 9 18s9-10.5 9-18c0-4.97-4.03-9-9-9zm0 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/%3E%3C/svg%3E',
            iconSize: [25, 37],
            iconAnchor: [12, 37],
            popupAnchor: [0, -37]
        }
    },

    boundaryStyle: {
        color: '#2d5f3f',
        weight: 3,
        opacity: 0.8,
        fillColor: '#2d5f3f',
        fillOpacity: 0.1,
        dashArray: '10, 5'
    },

    colors: {
        primary: '#2d5f3f',
        secondary: '#3a7a50',
        accent: '#7dad5c',
        background: '#f5f5dc',
        border: '#d4d4b8'
    },
    getCampusBounds: function() {
        if (typeof CAMPUS_BOUNDARY !== 'undefined') {
            try {
                const campusLayer = L.geoJSON(CAMPUS_BOUNDARY);
                return campusLayer.getBounds();
            } catch (error) {
                console.warn('Could not get bounds from CAMPUS_BOUNDARY, using fallback');
            }
        }
        
        return [
            [15.4800, 120.9700],
            [15.4900, 120.9800]
        ];
    }
};

CONFIG.getDynamicCampusBounds = function() {
    return this.getCampusBounds();
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}