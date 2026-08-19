/**
 * TRAVELBHARAT - UNIFIED DATA ACCESS LAYER (DAL) (js/data.js)
 * Clean query interface for States, Cities, Destinations, and Experiences.
 * Future-proof: Easily replaceable with fetch('/api/...') for Node/MongoDB.
 */

const TravelBharatData = {
  // --- States & UTs Queries ---
  getAllStates: function() {
    return typeof TravelBharatStates !== 'undefined' ? TravelBharatStates : [];
  },

  getStateById: function(stateId) {
    if (!stateId) return null;
    const states = this.getAllStates();
    return states.find(s => s.id.toLowerCase() === stateId.toLowerCase()) || null;
  },

  getStatesByRegion: function(region) {
    const states = this.getAllStates();
    if (!region || region.toLowerCase() === 'all') return states;
    if (region.toLowerCase() === 'ut') {
      return states.filter(s => s.type === 'ut');
    }
    return states.filter(s => s.region.toLowerCase() === region.toLowerCase() && s.type !== 'ut');
  },

  // --- Cities Queries ---
  getAllCities: function() {
    return typeof TravelBharatCities !== 'undefined' ? TravelBharatCities : [];
  },

  getCityById: function(cityId) {
    if (!cityId) return null;
    const cities = this.getAllCities();
    return cities.find(c => c.id.toLowerCase() === cityId.toLowerCase()) || null;
  },

  getCitiesByState: function(stateId) {
    if (!stateId) return [];
    const cities = this.getAllCities();
    return cities.filter(c => c.stateId.toLowerCase() === stateId.toLowerCase());
  },

  getMajorCities: function() {
    return this.getAllCities().filter(c => c.tier === 'major');
  },

  getOffbeatCities: function() {
    return this.getAllCities().filter(c => c.tier === 'offbeat');
  },

  // --- Destinations (Places) Queries ---
  getAllDestinations: function() {
    return typeof TravelBharatDestinations !== 'undefined' ? TravelBharatDestinations : [];
  },

  getAllPlaces: function() {
    return this.getAllDestinations();
  },

  getPlaceById: function(placeId) {
    if (!placeId) return null;
    const places = this.getAllDestinations();
    return places.find(p => p.id.toLowerCase() === placeId.toLowerCase()) || null;
  },

  getDestinationById: function(placeId) {
    return this.getPlaceById(placeId);
  },

  getPlacesByCity: function(cityId) {
    if (!cityId) return [];
    return this.getAllDestinations().filter(p => p.cityId.toLowerCase() === cityId.toLowerCase());
  },

  getPlacesByState: function(stateId) {
    if (!stateId) return [];
    return this.getAllDestinations().filter(p => p.stateId.toLowerCase() === stateId.toLowerCase());
  },

  getPlacesByCategory: function(category) {
    if (!category || category.toLowerCase() === 'all') return this.getAllDestinations();
    return this.getAllDestinations().filter(p => p.category.toLowerCase() === category.toLowerCase());
  },

  getPlacesByExperience: function(category) {
    return this.getPlacesByCategory(category);
  },

  getPopularPlaces: function() {
    return this.getAllDestinations().filter(p => p.isPopular);
  },

  getPopularDestinations: function() {
    return this.getPopularPlaces();
  },

  getHiddenGems: function() {
    return this.getAllDestinations().filter(p => p.isHiddenGem);
  },

  // --- Experiences Queries ---
  getAllExperiences: function() {
    return typeof TravelBharatExperiences !== 'undefined' ? TravelBharatExperiences : [];
  },

  getExperienceById: function(expId) {
    if (!expId) return null;
    return this.getAllExperiences().find(e => e.id.toLowerCase() === expId.toLowerCase()) || null;
  },

  // --- Global In-Memory Search & Multi-Filter Query Engine ---
  searchAll: function(query = '', filters = {}) {
    const q = query.trim().toLowerCase();
    const { region, state, category, tier } = filters;

    let places = this.getAllDestinations();

    // 1. Text Search Filter across Name, City, State, Category, and Tags
    if (q) {
      places = places.filter(p => {
        const stateObj = this.getStateById(p.stateId);
        const cityObj = this.getCityById(p.cityId);
        const stateName = stateObj ? stateObj.name.toLowerCase() : '';
        const cityName = cityObj ? cityObj.name.toLowerCase() : '';
        const tagsStr = Array.isArray(p.tags) ? p.tags.join(' ').toLowerCase() : '';

        return (
          p.name.toLowerCase().includes(q) ||
          cityName.includes(q) ||
          stateName.includes(q) ||
          p.category.toLowerCase().includes(q) ||
          tagsStr.includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      });
    }

    // 2. State Filter
    if (state && state !== 'all') {
      places = places.filter(p => p.stateId.toLowerCase() === state.toLowerCase());
    }

    // 3. Category / Experience Filter
    if (category && category !== 'all') {
      places = places.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    // 4. Region Filter
    if (region && region !== 'all') {
      places = places.filter(p => {
        const stateObj = this.getStateById(p.stateId);
        if (!stateObj) return false;
        if (region.toLowerCase() === 'ut') return stateObj.type === 'ut';
        return stateObj.region.toLowerCase() === region.toLowerCase() && stateObj.type !== 'ut';
      });
    }

    return places;
  }
};
