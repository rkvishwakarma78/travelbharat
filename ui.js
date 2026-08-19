/**
 * TRAVELBHARAT - UNIVERSAL UI COMPONENT & TEMPLATE ENGINE (js/ui.js)
 * Clean, accessible HTML templates and deterministic live online image fallback handler.
 */

const TravelBharatUI = {
  /**
   * Deterministic Live Online Image Error Handler
   * If primary source fails, automatically swaps to the category online fallback.
   */
  handleImageError: function(imgElement, category = 'default') {
    if (!imgElement || imgElement.dataset.hasFailed) return;
    imgElement.dataset.hasFailed = "true";

    const catKey = (category || 'default').toLowerCase();
    const fallbackMap = (typeof TravelBharatImages !== 'undefined' && TravelBharatImages.fallbacks) 
      ? TravelBharatImages.fallbacks 
      : {};

    const fallbackUrl = fallbackMap[catKey] || fallbackMap['default'] || "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80";
    
    imgElement.src = fallbackUrl;
    imgElement.alt = "TravelBharat Verified India Tourism Destination";
  },

  /**
   * Create Destination Place Card HTML
   */
  createPlaceCard: function(place) {
    if (!place) return '';
    const stateObj = TravelBharatData.getStateById(place.stateId);
    const cityObj = TravelBharatData.getCityById(place.cityId);
    const stateName = stateObj ? stateObj.name : '';
    const cityName = cityObj ? cityObj.name : '';
    const categoryLower = (place.category || 'heritage').toLowerCase();

    return `
      <article class="place-card" data-id="${place.id}" data-category="${categoryLower}">
        <div class="place-card-image-wrap">
          <img 
            src="${place.image}" 
            alt="${place.name} in ${cityName}, ${stateName}" 
            loading="lazy" 
            class="place-card-image"
            onerror="TravelBharatUI.handleImageError(this, '${categoryLower}')"
          />
          <span class="place-badge-category">${place.category}</span>
          ${place.isHiddenGem ? `<span class="place-badge-special">✨ Hidden Gem</span>` : ''}
          ${place.isPopular && !place.isHiddenGem ? `<span class="place-badge-special" style="background: var(--secondary);">🔥 Popular</span>` : ''}
        </div>
        <div class="place-card-body">
          <div class="place-location-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${cityName}, ${stateName}</span>
          </div>
          <h3 class="place-card-title">${place.name}</h3>
          <p class="place-card-desc">${place.description}</p>
          <div class="place-card-footer">
            <div class="place-timing-info">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>${place.bestTime ? place.bestTime.split('(')[0] : 'Year-round'}</span>
            </div>
            <a href="place.html?id=${place.id}" class="place-explore-link" aria-label="Explore details of ${place.name}">
              Explore <span>&rarr;</span>
            </a>
          </div>
        </div>
      </article>
    `;
  },

  /**
   * Create State Card HTML
   */
  createStateCard: function(state) {
    if (!state) return '';
    const citiesCount = TravelBharatData.getCitiesByState(state.id).length;
    const placesCount = TravelBharatData.getPlacesByState(state.id).length;

    return `
      <a href="state.html?state=${state.id}" class="state-card" aria-label="Explore state of ${state.name}">
        <img 
          src="${state.bannerImage}" 
          alt="Tourism in ${state.name}" 
          loading="lazy" 
          class="state-card-image"
          onerror="TravelBharatUI.handleImageError(this, 'heritage')"
        />
        <div class="state-card-overlay">
          <div class="state-card-top">
            <span class="state-region-badge">${state.type === 'ut' ? 'Union Territory' : state.region + ' India'}</span>
          </div>
          <div class="state-card-bottom">
            <h3 class="state-card-title">${state.name}</h3>
            <p class="state-card-tagline">${state.tagline}</p>
            <div class="state-card-meta">
              <span>${citiesCount > 0 ? citiesCount + ' Cities' : 'Explore Cities'} • ${placesCount > 0 ? placesCount + ' Attractions' : 'Destinations'}</span>
              <span>Discover &rarr;</span>
            </div>
          </div>
        </div>
      </a>
    `;
  },

  /**
   * Create City Card HTML
   */
  createCityCard: function(city) {
    if (!city) return '';
    const stateObj = TravelBharatData.getStateById(city.stateId);
    const stateName = stateObj ? stateObj.name : '';
    const placesCount = TravelBharatData.getPlacesByCity(city.id).length;

    return `
      <div class="city-card" data-id="${city.id}">
        <div class="city-card-image-wrap">
          <img 
            src="${city.heroImage}" 
            alt="Explore ${city.name}, ${stateName}" 
            loading="lazy" 
            class="city-card-image"
            onerror="TravelBharatUI.handleImageError(this, 'hills')"
          />
        </div>
        <div class="city-card-body">
          <span class="city-card-state">${stateName}</span>
          <h3 class="city-card-title">${city.name}</h3>
          <p class="city-card-desc">${city.overview}</p>
          <div class="place-card-footer">
            <span style="font-size: 0.8125rem; color: var(--text-muted); font-weight: 500;">
              ${placesCount > 0 ? placesCount + ' Top Spots' : 'Curated Guide'}
            </span>
            <a href="city.html?city=${city.id}" class="place-explore-link" aria-label="View city guide for ${city.name}">
              View Guide &rarr;
            </a>
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Create Experience Theme Card HTML
   */
  createExperienceCard: function(exp) {
    if (!exp) return '';
    return `
      <a href="experiences.html?cat=${exp.id}" class="experience-card" aria-label="Explore ${exp.name} experiences">
        <img 
          src="${exp.banner}" 
          alt="${exp.name} in India" 
          loading="lazy" 
          class="experience-card-bg"
          onerror="TravelBharatUI.handleImageError(this, '${exp.id}')"
        />
        <div class="experience-card-overlay"></div>
        <div class="experience-card-content">
          <span style="font-size: 1.5rem; display: block; margin-bottom: 0.3rem;">${exp.icon}</span>
          <h3 class="experience-card-title">${exp.name}</h3>
          <span class="experience-card-count">${exp.count}</span>
        </div>
      </a>
    `;
  },

  /**
   * Create Accessible Breadcrumbs HTML
   */
  createBreadcrumbs: function(crumbs = []) {
    if (!Array.isArray(crumbs) || crumbs.length === 0) return '';
    
    let html = `<nav aria-label="Breadcrumb" class="breadcrumbs"><ol style="display:flex; align-items:center; flex-wrap:wrap; gap:0.5rem;">`;
    
    crumbs.forEach((crumb, index) => {
      const isLast = index === crumbs.length - 1;
      if (isLast) {
        html += `<li class="breadcrumb-item current" aria-current="page">${crumb.label}</li>`;
      } else {
        html += `
          <li class="breadcrumb-item"><a href="${crumb.url}">${crumb.label}</a></li>
          <span class="breadcrumb-sep" aria-hidden="true">&rsaquo;</span>
        `;
      }
    });
    
    html += `</ol></nav>`;
    return html;
  },

  /**
   * Toast notification utility
   */
  showToast: function(message, duration = 3000) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};
