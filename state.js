/**
 * TRAVELBHARAT - STATE DETAIL VIEW CONTROLLER (js/state.js)
 * Manages state.html dynamic view, city listings, top attractions, and quick facts.
 */

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const stateId = urlParams.get('state') || urlParams.get('id');

  const mainContent = document.getElementById('stateMainContent');
  const errorContainer = document.getElementById('stateErrorContainer');

  if (!stateId) {
    showStateError("No state was specified in the URL. Please select a state from our catalog.");
    return;
  }

  const state = TravelBharatData.getStateById(stateId);
  if (!state) {
    showStateError(`State or Union Territory "${stateId}" was not found in our database.`);
    return;
  }

  // Populate State Content
  renderStateDetail(state);

  function showStateError(message) {
    if (mainContent) mainContent.style.display = 'none';
    if (errorContainer) {
      errorContainer.style.display = 'block';
      const msgEl = document.getElementById('errorMessage');
      if (msgEl) msgEl.textContent = message;
    }
  }

  function renderStateDetail(state) {
    // 1. Set Page Title & Meta
    document.title = `${state.name} Tourism – Top Cities & Attractions | TravelBharat`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `Explore ${state.name} with TravelBharat. Discover popular cities, heritage forts, temples, best time to visit, and cuisine.`);
    }

    // 2. Breadcrumbs
    const breadcrumbsContainer = document.getElementById('stateBreadcrumbs');
    if (breadcrumbsContainer) {
      breadcrumbsContainer.innerHTML = TravelBharatUI.createBreadcrumbs([
        { label: 'Home', url: 'index.html' },
        { label: 'States & UTs', url: 'states.html' },
        { label: state.name, url: `state.html?state=${state.id}` }
      ]);
    }

    // 3. Hero / Banner Info
    const bannerEl = document.getElementById('stateHeroBanner');
    if (bannerEl) {
      bannerEl.style.backgroundImage = `linear-gradient(180deg, rgba(15, 23, 42, 0.65) 0%, rgba(15, 23, 42, 0.88) 100%), url('${state.bannerImage}')`;
    }

    const stateTitleEl = document.getElementById('stateName');
    if (stateTitleEl) stateTitleEl.textContent = state.name;

    const stateTaglineEl = document.getElementById('stateTagline');
    if (stateTaglineEl) stateTaglineEl.textContent = state.tagline;

    const stateBadgeEl = document.getElementById('stateTypeBadge');
    if (stateBadgeEl) {
      stateBadgeEl.textContent = state.type === 'ut' ? 'Union Territory of India' : `${state.region} India • State`;
    }

    // 4. Quick Facts
    const capitalEl = document.getElementById('factCapital');
    if (capitalEl) capitalEl.textContent = state.capital || 'Information unavailable';

    const bestTimeEl = document.getElementById('factBestTime');
    if (bestTimeEl) bestTimeEl.textContent = state.bestTimeToVisit || 'October to March';

    const cuisineEl = document.getElementById('factCuisine');
    if (cuisineEl) {
      cuisineEl.textContent = Array.isArray(state.popularDishes) ? state.popularDishes.join(', ') : 'Regional Specialties';
    }

    const airportsEl = document.getElementById('factAirports');
    if (airportsEl) {
      airportsEl.textContent = Array.isArray(state.majorAirports) ? state.majorAirports.join(', ') : 'Major Regional Hubs';
    }

    // 5. Overview Text
    const overviewEl = document.getElementById('stateOverviewText');
    if (overviewEl) overviewEl.textContent = state.overview;

    // 6. Popular Cities in this State
    const citiesContainer = document.getElementById('stateCitiesGrid');
    const cities = TravelBharatData.getCitiesByState(state.id);
    const citiesCountLabel = document.getElementById('stateCitiesCountLabel');
    if (citiesCountLabel) citiesCountLabel.textContent = `(${cities.length} Curated Cities)`;

    if (citiesContainer) {
      if (cities.length === 0) {
        citiesContainer.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 2rem; background: #fff; border-radius: var(--radius-md); border: 1px solid var(--border-color); color: var(--text-muted);">
            City guides for ${state.name} are currently being curated. Explore top attractions below!
          </div>
        `;
      } else {
        citiesContainer.innerHTML = cities.map(c => TravelBharatUI.createCityCard(c)).join('');
      }
    }

    // 7. Top Tourist Places in this State
    const placesContainer = document.getElementById('statePlacesGrid');
    const allStatePlaces = TravelBharatData.getPlacesByState(state.id);
    const placesCountLabel = document.getElementById('statePlacesCountLabel');
    if (placesCountLabel) placesCountLabel.textContent = `(${allStatePlaces.length} Attractions)`;

    function renderPlaces(category = 'all') {
      if (!placesContainer) return;
      let filtered = allStatePlaces;
      if (category !== 'all') {
        filtered = allStatePlaces.filter(p => p.category.toLowerCase() === category.toLowerCase());
      }

      if (filtered.length === 0) {
        placesContainer.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1.5rem; background: #fff; border-radius: var(--radius-md); border: 1px dashed var(--border-color); color: var(--text-muted);">
            No attractions found under "${category}" in ${state.name}. View all highlights above.
          </div>
        `;
      } else {
        placesContainer.innerHTML = filtered.map(p => TravelBharatUI.createPlaceCard(p)).join('');
      }
    }

    renderPlaces('all');

    // Place Filter Tabs
    const placeTabs = document.querySelectorAll('#statePlaceTabs .tab-btn');
    placeTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        placeTabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-category');
        renderPlaces(cat);
      });
    });
  }
});
