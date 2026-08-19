/**
 * TRAVELBHARAT - CITY DETAIL VIEW CONTROLLER (js/city.js)
 * Manages city.html dynamic view, top attractions, travel essentials, how-to-reach, and map integration.
 */

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const cityId = urlParams.get('city') || urlParams.get('id');

  const mainContent = document.getElementById('cityMainContent');
  const errorContainer = document.getElementById('cityErrorContainer');

  if (!cityId) {
    showCityError("No city was specified in the URL. Please browse cities from the explore menu.");
    return;
  }

  const city = TravelBharatData.getCityById(cityId);
  if (!city) {
    showCityError(`City "${cityId}" was not found in our database.`);
    return;
  }

  const state = TravelBharatData.getStateById(city.stateId);
  const stateName = state ? state.name : 'India';

  // Render City Details
  renderCityDetail(city, state);

  function showCityError(message) {
    if (mainContent) mainContent.style.display = 'none';
    if (errorContainer) {
      errorContainer.style.display = 'block';
      const msgEl = document.getElementById('cityErrorMessage');
      if (msgEl) msgEl.textContent = message;
    }
  }

  function renderCityDetail(city, state) {
    // 1. Title & Meta
    document.title = `${city.name} Travel Guide, ${stateName} – Places to Visit | TravelBharat`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `Explore ${city.name} in ${stateName}. Find top tourist attractions, travel essentials, how to reach by air/train, best time to visit, and maps.`);
    }

    // 2. Breadcrumbs
    const breadcrumbsContainer = document.getElementById('cityBreadcrumbs');
    if (breadcrumbsContainer) {
      breadcrumbsContainer.innerHTML = TravelBharatUI.createBreadcrumbs([
        { label: 'Home', url: 'index.html' },
        { label: state ? state.name : 'States', url: state ? `state.html?state=${state.id}` : 'states.html' },
        { label: city.name, url: `city.html?city=${city.id}` }
      ]);
    }

    // 3. Back Button
    const backBtn = document.getElementById('cityBackBtn');
    if (backBtn && state) {
      backBtn.href = `state.html?state=${state.id}`;
      backBtn.innerHTML = `&larr; Back to ${state.name}`;
    }

    // 4. Hero Banner
    const bannerEl = document.getElementById('cityHeroBanner');
    if (bannerEl) {
      bannerEl.style.backgroundImage = `linear-gradient(180deg, rgba(15, 23, 42, 0.65) 0%, rgba(15, 23, 42, 0.9) 100%), url('${city.heroImage}')`;
    }

    const cityNameEl = document.getElementById('cityName');
    if (cityNameEl) cityNameEl.textContent = city.name;

    const cityKnownAsEl = document.getElementById('cityKnownAs');
    if (cityKnownAsEl) cityKnownAsEl.textContent = city.knownAs || `${stateName} • Travel Destination`;

    const cityStateBadgeEl = document.getElementById('cityStateBadge');
    if (cityStateBadgeEl) cityStateBadgeEl.textContent = `${stateName}, India`;

    // 5. City Overview
    const overviewEl = document.getElementById('cityOverviewText');
    if (overviewEl) overviewEl.textContent = city.overview;

    // 6. Travel Essentials
    const bestTimeEl = document.getElementById('cityBestTime');
    if (bestTimeEl) bestTimeEl.textContent = city.bestTime || 'October to March';

    const durationEl = document.getElementById('cityIdealDuration');
    if (durationEl) durationEl.textContent = city.idealDuration || '2-3 Days';

    const weatherEl = document.getElementById('cityWeatherInfo');
    if (weatherEl) weatherEl.textContent = city.weatherInfo || 'Pleasant winter months, warm summers.';

    // How to Reach
    if (city.howToReach) {
      const airEl = document.getElementById('reachAir');
      if (airEl) airEl.textContent = city.howToReach.air || 'Connected via nearest domestic airport.';

      const trainEl = document.getElementById('reachTrain');
      if (trainEl) trainEl.textContent = city.howToReach.train || 'Connected via main railway division.';

      const roadEl = document.getElementById('reachRoad');
      if (roadEl) roadEl.textContent = city.howToReach.road || 'Well connected by National & State Highways.';
    }

    // 7. Top Attractions in this City
    const placesContainer = document.getElementById('cityPlacesGrid');
    const places = TravelBharatData.getPlacesByCity(city.id);
    const placesCountLabel = document.getElementById('cityPlacesCountLabel');
    if (placesCountLabel) placesCountLabel.textContent = `(${places.length} Must-Visit Spots)`;

    if (placesContainer) {
      if (places.length === 0) {
        placesContainer.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1.5rem; background: #fff; border-radius: var(--radius-md); border: 1px dashed var(--border-color); color: var(--text-muted);">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📍</div>
            <h3 style="font-size: 1.15rem; color: var(--text-main); margin-bottom: 0.25rem;">Attractions Being Curated</h3>
            <p>Detailed landmark itineraries for ${city.name} are currently being added. Check out nearby places below!</p>
          </div>
        `;
      } else {
        placesContainer.innerHTML = places.map(p => TravelBharatUI.createPlaceCard(p)).join('');
      }
    }

    // 8. Map Integration & Coordinates
    const mapEmbed = document.getElementById('cityMapEmbed');
    const gmapsBtn = document.getElementById('openGoogleMapsBtn');
    const mapQuery = `${city.name}, ${stateName}, India`;

    if (mapEmbed) {
      mapEmbed.src = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    }

    if (gmapsBtn) {
      gmapsBtn.href = `https://maps.google.com/?q=${encodeURIComponent(mapQuery)}`;
    }

    // 9. Nearby Sister Cities in the Same State
    const sisterCitiesContainer = document.getElementById('nearbyCitiesGrid');
    if (sisterCitiesContainer && state) {
      const allSisterCities = TravelBharatData.getCitiesByState(state.id).filter(c => c.id !== city.id);
      if (allSisterCities.length === 0) {
        sisterCitiesContainer.innerHTML = `
          <div style="grid-column: 1/-1; color: var(--text-muted); font-size: 0.9rem;">
            Explore other regions in <a href="states.html" style="color: var(--primary); font-weight: 600;">All Indian States &rarr;</a>
          </div>
        `;
      } else {
        sisterCitiesContainer.innerHTML = allSisterCities.slice(0, 3).map(c => TravelBharatUI.createCityCard(c)).join('');
      }
    }
  }
});
