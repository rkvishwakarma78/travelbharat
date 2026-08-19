/**
 * TRAVELBHARAT - TOURIST DESTINATION DETAIL VIEW CONTROLLER (js/place.js)
 * Manages place.html dynamic view, gallery lightbox, timings, fees, Google Maps, and nearby spots.
 */

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const placeId = urlParams.get('id') || urlParams.get('place');

  const mainContent = document.getElementById('placeMainContent');
  const errorContainer = document.getElementById('placeErrorContainer');

  if (!placeId) {
    showPlaceError("No destination was specified in the URL. Please select a landmark from our explore catalog.");
    return;
  }

  const place = TravelBharatData.getPlaceById(placeId);
  if (!place) {
    showPlaceError(`Tourist destination "${placeId}" was not found in our database.`);
    return;
  }

  const state = TravelBharatData.getStateById(place.stateId);
  const city = TravelBharatData.getCityById(place.cityId);
  const stateName = state ? state.name : 'India';
  const cityName = city ? city.name : 'City';

  // Render Place Details
  renderPlaceDetail(place, state, city);

  function showPlaceError(message) {
    if (mainContent) mainContent.style.display = 'none';
    if (errorContainer) {
      errorContainer.style.display = 'block';
      const msgEl = document.getElementById('placeErrorMessage');
      if (msgEl) msgEl.textContent = message;
    }
  }

  function renderPlaceDetail(place, state, city) {
    const categoryLower = (place.category || 'heritage').toLowerCase();

    // 1. Page Title & Meta
    document.title = `${place.name}, ${cityName} – Timings, Entry Fee, History | TravelBharat`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `Visit ${place.name} in ${cityName}, ${stateName}. Verified opening hours, entry fee, history, best time to visit, and Google Maps location.`);
    }

    // 2. Breadcrumbs
    const breadcrumbsContainer = document.getElementById('placeBreadcrumbs');
    if (breadcrumbsContainer) {
      breadcrumbsContainer.innerHTML = TravelBharatUI.createBreadcrumbs([
        { label: 'Home', url: 'index.html' },
        { label: state ? state.name : 'States', url: state ? `state.html?state=${state.id}` : 'states.html' },
        { label: city ? city.name : 'City', url: city ? `city.html?city=${city.id}` : '#' },
        { label: place.name, url: `place.html?id=${place.id}` }
      ]);
    }

    // 3. Back Link
    const backBtn = document.getElementById('placeBackBtn');
    if (backBtn && city) {
      backBtn.href = `city.html?city=${city.id}`;
      backBtn.innerHTML = `&larr; Back to ${city.name}`;
    }

    // 4. Hero Banner Details
    const heroImageEl = document.getElementById('placeHeroImage');
    if (heroImageEl) {
      heroImageEl.src = place.image;
      heroImageEl.alt = `${place.name} in ${cityName}`;
      heroImageEl.onerror = () => TravelBharatUI.handleImageError(heroImageEl, categoryLower);
    }

    const nameEl = document.getElementById('placeName');
    if (nameEl) nameEl.textContent = place.name;

    const locationBadge = document.getElementById('placeLocationBadge');
    if (locationBadge) locationBadge.textContent = `${cityName}, ${stateName}`;

    const catBadge = document.getElementById('placeCategoryBadge');
    if (catBadge) catBadge.textContent = place.category;

    // Tags
    const tagsContainer = document.getElementById('placeTagsContainer');
    if (tagsContainer && Array.isArray(place.tags)) {
      tagsContainer.innerHTML = place.tags.map(t => `<span class="quick-tag-item" style="background: rgba(255,255,255,0.2);">${t}</span>`).join('');
    }

    // 5. Overview & History
    const descEl = document.getElementById('placeDescription');
    if (descEl) descEl.textContent = place.description;

    const historyEl = document.getElementById('placeHistory');
    if (historyEl) {
      historyEl.textContent = place.history || 'Historical and architectural details are preserved in regional archives. Please verify with local guides during your visit.';
    }

    // 6. Visiting Information & Practical Details
    const bestTimeEl = document.getElementById('placeBestTime');
    if (bestTimeEl) bestTimeEl.textContent = place.bestTime || 'October to March';

    const timingsEl = document.getElementById('placeTimings');
    if (timingsEl) timingsEl.textContent = place.timings || 'Information unavailable. Please check at local ticket counter.';

    const entryFeeEl = document.getElementById('placeEntryFee');
    if (entryFeeEl) entryFeeEl.textContent = place.entryFee || 'Information unavailable. Please check locally.';

    const addressEl = document.getElementById('placeAddress');
    if (addressEl) addressEl.textContent = place.location || `${cityName}, ${stateName}`;

    // 7. Google Maps Integration
    const mapEmbed = document.getElementById('placeMapEmbed');
    const gmapsBtn = document.getElementById('placeGoogleMapsBtn');
    const query = place.latitude && place.longitude 
      ? `${place.latitude},${place.longitude}` 
      : `${place.name}, ${cityName}, ${stateName}`;

    if (mapEmbed) {
      mapEmbed.src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    }

    if (gmapsBtn) {
      gmapsBtn.href = place.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(query)}`;
    }

    // 8. Photo Gallery
    const galleryContainer = document.getElementById('placeGalleryGrid');
    const allGalleryImages = [place.image, ...(place.gallery || [])];

    if (galleryContainer) {
      galleryContainer.innerHTML = allGalleryImages.map((imgUrl, idx) => `
        <div style="height: 220px; border-radius: var(--radius-md); overflow: hidden; cursor: pointer; box-shadow: var(--shadow-sm);" onclick="openLightbox('${imgUrl}', '${place.name}')">
          <img 
            src="${imgUrl}" 
            alt="${place.name} Gallery ${idx+1}" 
            loading="lazy" 
            style="width: 100%; height: 100%; object-fit: cover; transition: transform var(--transition-normal);"
            onmouseover="this.style.transform='scale(1.05)'"
            onmouseout="this.style.transform='scale(1)'"
            onerror="TravelBharatUI.handleImageError(this, '${categoryLower}')"
          />
        </div>
      `).join('');
    }

    // 9. Nearby Attractions
    const nearbyContainer = document.getElementById('nearbyAttractionsGrid');
    if (nearbyContainer) {
      let nearbyPlaces = [];
      if (Array.isArray(place.nearbyPlaces) && place.nearbyPlaces.length > 0) {
        nearbyPlaces = place.nearbyPlaces.map(id => TravelBharatData.getPlaceById(id)).filter(Boolean);
      }
      if (nearbyPlaces.length === 0) {
        // Fallback: other places in the same city or state
        nearbyPlaces = TravelBharatData.getPlacesByCity(place.cityId).filter(p => p.id !== place.id);
        if (nearbyPlaces.length === 0) {
          nearbyPlaces = TravelBharatData.getPlacesByState(place.stateId).filter(p => p.id !== place.id);
        }
      }

      if (nearbyPlaces.length === 0) {
        nearbyContainer.innerHTML = `
          <div style="grid-column: 1/-1; color: var(--text-muted); font-size: 0.9rem;">
            Explore more spots in <a href="city.html?city=${place.cityId}" style="color: var(--primary); font-weight: 600;">${cityName} Guide &rarr;</a>
          </div>
        `;
      } else {
        nearbyContainer.innerHTML = nearbyPlaces.slice(0, 3).map(p => TravelBharatUI.createPlaceCard(p)).join('');
      }
    }
  }

  // Lightbox functionality
  window.openLightbox = function(imageUrl, title) {
    let lightbox = document.getElementById('galleryLightboxModal');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.id = 'galleryLightboxModal';
      lightbox.style.cssText = 'position:fixed; inset:0; background:rgba(15,23,42,0.92); z-index:9999; display:flex; align-items:center; justify-content:center; padding:1.5rem; backdrop-filter:blur(8px); cursor:pointer;';
      lightbox.innerHTML = `
        <div style="position:relative; max-width:900px; max-height:85vh; cursor:default;" onclick="event.stopPropagation();">
          <button type="button" style="position:absolute; top:-40px; right:0; color:#fff; font-size:2rem; background:none; border:none; cursor:pointer;" onclick="closeLightbox()">&times;</button>
          <img id="lightboxImg" src="" alt="" style="max-width:100%; max-height:80vh; border-radius:var(--radius-md); box-shadow:var(--shadow-xl); object-fit:contain;" />
          <p id="lightboxCaption" style="color:#fff; text-align:center; margin-top:0.75rem; font-weight:600;"></p>
        </div>
      `;
      lightbox.onclick = closeLightbox;
      document.body.appendChild(lightbox);
    }

    const img = document.getElementById('lightboxImg');
    const cap = document.getElementById('lightboxCaption');
    if (img) img.src = imageUrl;
    if (cap) cap.textContent = title;
    lightbox.style.display = 'flex';
  };

  window.closeLightbox = function() {
    const lightbox = document.getElementById('galleryLightboxModal');
    if (lightbox) lightbox.style.display = 'none';
  };
});
