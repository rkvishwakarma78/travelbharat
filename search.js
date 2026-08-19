/**
 * TRAVELBHARAT - SEARCH & AUTO-SUGGEST ENGINE (js/search.js)
 * Debounced in-memory indexing, keyboard shortcuts, and instant auto-suggestions.
 */

const TravelBharatSearch = {
  debounceTimer: null,

  /**
   * Initialize Global Search Auto-suggestions on any input element
   */
  initSuggestions: function(inputId, containerId) {
    const input = document.getElementById(inputId);
    const container = document.getElementById(containerId);
    if (!input || !container) return;

    // Debounced input handler
    input.addEventListener('input', (e) => {
      clearTimeout(this.debounceTimer);
      const val = e.target.value.trim();

      if (val.length < 2) {
        container.classList.remove('active');
        container.innerHTML = '';
        return;
      }

      this.debounceTimer = setTimeout(() => {
        this.renderLiveSuggestions(val, container);
      }, 200);
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !container.contains(e.target)) {
        container.classList.remove('active');
      }
    });

    // Enter key submits to search.html
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const query = input.value.trim();
        if (query) {
          window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
      }
    });
  },

  /**
   * Render Live Auto-suggestions Grouped by Destinations, Cities, States
   */
  renderLiveSuggestions: function(query, container) {
    const q = query.toLowerCase();
    
    // Query items
    const allPlaces = TravelBharatData.getAllDestinations();
    const allCities = TravelBharatData.getAllCities();
    const allStates = TravelBharatData.getAllStates();

    const matchedPlaces = allPlaces.filter(p => 
      p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    ).slice(0, 4);

    const matchedCities = allCities.filter(c => 
      c.name.toLowerCase().includes(q)
    ).slice(0, 3);

    const matchedStates = allStates.filter(s => 
      s.name.toLowerCase().includes(q)
    ).slice(0, 2);

    const totalMatches = matchedPlaces.length + matchedCities.length + matchedStates.length;

    if (totalMatches === 0) {
      container.innerHTML = `
        <div style="padding: 1.25rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          No destinations found matching "<strong>${query}</strong>".<br/>
          <a href="search.html?q=${encodeURIComponent(query)}" style="color: var(--primary); font-weight: 600; margin-top: 0.5rem; display: inline-block;">
            Open Advanced Search &rarr;
          </a>
        </div>
      `;
      container.classList.add('active');
      return;
    }

    let html = '';

    // 1. Destinations Group
    if (matchedPlaces.length > 0) {
      html += `<div class="suggestion-group-title">Tourist Destinations</div>`;
      matchedPlaces.forEach(p => {
        const city = TravelBharatData.getCityById(p.cityId);
        const cityName = city ? city.name : '';
        html += `
          <a href="place.html?id=${p.id}" class="suggestion-item">
            <div class="suggestion-icon">📍</div>
            <div class="suggestion-details">
              <div class="suggestion-title">${p.name}</div>
              <div class="suggestion-meta">${cityName} • ${p.category}</div>
            </div>
            <span style="color: var(--text-light); font-size: 0.8rem;">&rarr;</span>
          </a>
        `;
      });
    }

    // 2. Cities Group
    if (matchedCities.length > 0) {
      html += `<div class="suggestion-group-title">Cities & Regions</div>`;
      matchedCities.forEach(c => {
        const state = TravelBharatData.getStateById(c.stateId);
        const stateName = state ? state.name : '';
        html += `
          <a href="city.html?city=${c.id}" class="suggestion-item">
            <div class="suggestion-icon" style="color: var(--secondary);">🏙️</div>
            <div class="suggestion-details">
              <div class="suggestion-title">${c.name}</div>
              <div class="suggestion-meta">${stateName} • ${c.knownAs || 'City'}</div>
            </div>
            <span style="color: var(--text-light); font-size: 0.8rem;">&rarr;</span>
          </a>
        `;
      });
    }

    // 3. States Group
    if (matchedStates.length > 0) {
      html += `<div class="suggestion-group-title">States & UTs</div>`;
      matchedStates.forEach(s => {
        html += `
          <a href="state.html?state=${s.id}" class="suggestion-item">
            <div class="suggestion-icon" style="color: var(--accent-emerald);">🗺️</div>
            <div class="suggestion-details">
              <div class="suggestion-title">${s.name}</div>
              <div class="suggestion-meta">${s.type === 'ut' ? 'Union Territory' : s.region + ' India'}</div>
            </div>
            <span style="color: var(--text-light); font-size: 0.8rem;">&rarr;</span>
          </a>
        `;
      });
    }

    html += `
      <a href="search.html?q=${encodeURIComponent(query)}" style="display: block; padding: 0.75rem; text-align: center; background: var(--bg-alt); font-size: 0.8125rem; font-weight: 600; color: var(--primary);">
        View all results for "${query}" &rarr;
      </a>
    `;

    container.innerHTML = html;
    container.classList.add('active');
  }
};
