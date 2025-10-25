let activeFilter = null;
let searchResults = [];
let selectedResultIndex = -1;

function initUIHandlers() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const clearFilterBtn = document.getElementById('clearFilter');
    const searchInput = document.getElementById('searchInput');
    const closePopupBtn = document.getElementById('closePopup');
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterType = btn.getAttribute('data-filter');
            handleFilterClick(filterType);
        });
    });
    
    if (clearFilterBtn) {
        clearFilterBtn.addEventListener('click', clearFilter);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            handleSearchInput(query);
        });
        
        searchInput.addEventListener('keydown', (e) => {
            handleSearchKeydown(e);
        });
        
        searchInput.addEventListener('focus', () => {
            if (searchInput.value.trim()) {
                showSearchDropdown();
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-wrapper')) {
                hideSearchDropdown();
            }
        });
    }
    
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', () => {
            const popup = document.getElementById('buildingPopup');
            if (popup) {
                popup.style.display = 'none';
            }
        });
    }
    
    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
            if (map) map.zoomIn();
        });
    }
    
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
            if (map) map.zoomOut();
        });
    }
}

function handleSearchInput(query) {
    if (!query) {
        hideSearchDropdown();
        performSearch('');
        return;
    }
    
    searchResults = searchAllLocations(query);
    selectedResultIndex = -1;
    updateSearchDropdown();
    showSearchDropdown();
}

function handleSearchKeydown(e) {
    const dropdown = document.getElementById('searchDropdown');
    const isDropdownActive = dropdown && dropdown.classList.contains('active');
    
    switch (e.key) {
        case 'ArrowDown':
            if (isDropdownActive) {
                e.preventDefault();
                navigateSearchResults(1);
            }
            break;
        case 'ArrowUp':
            if (isDropdownActive) {
                e.preventDefault();
                navigateSearchResults(-1);
            }
            break;
        case 'Enter':
            e.preventDefault();
            selectSearchResult();
            break;
        case 'Escape':
            hideSearchDropdown();
            break;
    }
}

function navigateSearchResults(direction) {
    if (searchResults.length === 0) return;
    
    selectedResultIndex += direction;
    
    if (selectedResultIndex < 0) {
        selectedResultIndex = searchResults.length - 1;
    } else if (selectedResultIndex >= searchResults.length) {
        selectedResultIndex = 0;
    }
    
    updateSearchDropdownSelection();
    scrollToSelectedResult();
}

function selectSearchResult() {
    const searchInput = document.getElementById('searchInput');
    
    if (selectedResultIndex >= 0 && selectedResultIndex < searchResults.length) {
        const selectedResult = searchResults[selectedResultIndex];
        performSearch(selectedResult.name);
    } else if (searchInput && searchInput.value.trim()) {
        performSearch(searchInput.value.trim());
    }
    
    hideSearchDropdown();
}

function searchAllLocations(query) {
    const lowerQuery = query.toLowerCase();
    const results = [];
    
    if (typeof CAMPUS_BUILDINGS !== 'undefined') {
        CAMPUS_BUILDINGS.features.forEach(building => {
            const props = building.properties;
            if (props.name.toLowerCase().includes(lowerQuery)) {
                results.push({
                    type: 'building',
                    data: building,
                    name: props.name,
                    office: props.office,
                    category: props.category
                });
            }
        });
    }
    
    if (typeof CAMPUS_LOCATIONS !== 'undefined') {
        CAMPUS_LOCATIONS.forEach(location => {
            if (location.name.toLowerCase().includes(lowerQuery)) {
                results.push({
                    type: 'location',
                    data: location,
                    name: location.name,
                    office: location.office,
                    category: location.type
                });
            }
        });
    }
    
    results.sort((a, b) => a.name.localeCompare(b.name));
    
    return results;
}

function updateSearchDropdown() {
    const dropdown = document.getElementById('searchDropdown');
    if (!dropdown) return;
    
    if (searchResults.length === 0) {
        dropdown.innerHTML = '<div class="search-dropdown-empty">No results found</div>';
        return;
    }
    
    let html = '';
    let currentCategory = '';
    
    searchResults.forEach((result, index) => {
        const category = result.type === 'building' ? 'Buildings' : 'Locations';
        
        if (category !== currentCategory) {
            html += `<div class="search-dropdown-category">${category}</div>`;
            currentCategory = category;
        }
        
        const isActive = index === selectedResultIndex;
        html += `
            <div class="search-dropdown-item ${isActive ? 'active' : ''}" data-index="${index}">
                <div class="search-item-name">${result.name}</div>
                <div class="search-item-details">
                    <span class="search-item-type">${result.category || 'General'}</span>
                    ${result.office ? `<span class="search-item-office">${result.office}</span>` : ''}
                </div>
            </div>
        `;
    });
    
    dropdown.innerHTML = html;
    
    dropdown.querySelectorAll('.search-dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.getAttribute('data-index'));
            selectedResultIndex = index;
            selectSearchResult();
        });
    });
}

function updateSearchDropdownSelection() {
    const dropdown = document.getElementById('searchDropdown');
    if (!dropdown) return;
    
    dropdown.querySelectorAll('.search-dropdown-item').forEach((item, index) => {
        if (index === selectedResultIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function scrollToSelectedResult() {
    const dropdown = document.getElementById('searchDropdown');
    const selectedItem = dropdown.querySelector('.search-dropdown-item.active');
    
    if (selectedItem) {
        selectedItem.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth'
        });
    }
}

function showSearchDropdown() {
    const dropdown = document.getElementById('searchDropdown');
    if (dropdown) {
        dropdown.classList.add('active');
    }
}

function hideSearchDropdown() {
    const dropdown = document.getElementById('searchDropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
    selectedResultIndex = -1;
}

function handleFilterClick(type) {
    if (!map) return;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const clickedBtn = document.querySelector(`[data-filter="${type}"]`);
    if (clickedBtn) clickedBtn.classList.add('active');

    activeFilter = type;

    if (type === 'all') {
        clearMarkers();
        showBuildingPolygons();
        addBuildingPolygons();
    } else {
        hideBuildingPolygons();
        filterMarkers(type);
    }
}

function clearFilter() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    activeFilter = null;

    addAllMarkers();
    showBuildingPolygons();
    addBuildingPolygons();
}

function performSearch(query) {
    if (!query || query.trim() === '') {
        clearFilter();
        hideSearchDropdown();
        return;
    }

    clearMarkers();
    hideBuildingPolygons();

    const markerResults = searchAndDisplayMarkers(query);
    const buildingResults = searchAndDisplayBuildings(query);

    if (markerResults.length > 0) {
        const firstResult = markerResults[0];
        if (map) {
            map.setView([firstResult.lat, firstResult.lng], 17);
        }
    } else if (buildingResults.length > 0) {
        const firstBuilding = buildingResults[0];
        const center = getBuildingCenter(firstBuilding.geometry);
        if (map) {
            map.setView(center, 17);
        }
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    activeFilter = null;
    
    hideSearchDropdown();
}