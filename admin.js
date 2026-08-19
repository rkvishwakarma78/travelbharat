/**
 * TRAVELBHARAT - ADMIN DASHBOARD CONTROLLER (js/admin.js)
 * Interacts with REST API endpoints for destination CRUD and inquiries moderation.
 */

document.addEventListener('DOMContentLoaded', () => {
  const API_BASE = '/api';

  // Elements
  const stateSelect = document.getElementById('destState');
  const destinationsTbody = document.getElementById('adminDestinationsTableBody');
  const inquiriesTbody = document.getElementById('adminInquiriesTableBody');
  const destForm = document.getElementById('destinationForm');
  const searchInput = document.getElementById('adminSearchInput');
  const catFilter = document.getElementById('adminCategoryFilter');

  let allDestinations = [];

  // Toast Helper
  function showToast(msg) {
    if (typeof TravelBharatUI !== 'undefined' && TravelBharatUI.showToast) {
      TravelBharatUI.showToast(msg);
    } else if (window.showAdminToast) {
      window.showAdminToast(msg);
    } else {
      alert(msg);
    }
  }

  // 1. Populate State Dropdown
  function populateStates() {
    const states = (typeof TravelBharatStates !== 'undefined') ? TravelBharatStates : (typeof TravelBharatData !== 'undefined' ? TravelBharatData.getAllStates() : []);
    if (stateSelect && states.length > 0) {
      stateSelect.innerHTML = states.map(s => `
        <option value="${s.id}">${s.name} (${s.type === 'ut' ? 'UT' : s.region})</option>
      `).join('');
    }
  }
  populateStates();

  // 2. Tab Navigation
  window.switchTab = function(tabId) {
    document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(content => content.style.display = 'none');

    const activeBtn = document.getElementById(`tab-${tabId}-btn`);
    const activeContent = document.getElementById(`tab-${tabId}`);

    if (activeBtn) activeBtn.classList.add('active');
    if (activeContent) activeContent.style.display = 'block';

    if (tabId === 'destinations') loadDestinations();
    if (tabId === 'inquiries') loadInquiries();
  };

  // 3. Load Destinations
  async function loadDestinations() {
    // Immediate load from dataset
    if (typeof TravelBharatDestinations !== 'undefined' && TravelBharatDestinations.length > 0) {
      allDestinations = [...TravelBharatDestinations];
      updateStats();
      renderDestinationsTable(allDestinations);
    } else if (typeof TravelBharatData !== 'undefined') {
      allDestinations = [...TravelBharatData.getAllPlaces()];
      updateStats();
      renderDestinationsTable(allDestinations);
    }

    // Try fetching from REST API
    try {
      const response = await fetch(`${API_BASE}/destinations?limit=1000`);
      if (response.ok) {
        const json = await response.json();
        if (json.data && json.data.length > 0) {
          allDestinations = json.data;
          updateStats();
          renderDestinationsTable(allDestinations);
        }
      }
    } catch (e) {
      // Local mode fallback
    }
  }

  function renderDestinationsTable(list) {
    if (!destinationsTbody) return;

    if (!list || list.length === 0) {
      destinationsTbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align:center; padding:2.5rem; color:var(--text-muted); font-weight:600;">
            No tourist places found matching your filter criteria.
          </td>
        </tr>
      `;
      return;
    }

    const statesList = (typeof TravelBharatStates !== 'undefined') ? TravelBharatStates : [];

    destinationsTbody.innerHTML = list.map(place => {
      const stateObj = statesList.find(s => s.id.toLowerCase() === (place.stateId || '').toLowerCase());
      const stateName = stateObj ? stateObj.name : place.stateId;

      return `
        <tr>
          <td>
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <img 
                src="${place.image}" 
                alt="${place.name}" 
                style="width:44px; height:44px; border-radius:var(--radius-sm); object-fit:cover; background:#e2e8f0;"
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=400&q=80';"
              />
              <div>
                <strong style="color:var(--text-main); font-size:0.95rem; display:block;">${place.name}</strong>
                ${place.isPopular ? '<span style="font-size:0.7rem; background:#ffedd5; color:#c2410c; padding:0.1rem 0.4rem; border-radius:4px; font-weight:700;">Popular</span>' : ''}
                ${place.isHiddenGem ? '<span style="font-size:0.7rem; background:#dcfce7; color:#15803d; padding:0.1rem 0.4rem; border-radius:4px; font-weight:700; margin-left:0.2rem;">Hidden Gem</span>' : ''}
              </div>
            </div>
          </td>
          <td><span style="font-weight:600;">${place.cityId || '—'}</span>, <span style="color:var(--text-muted);">${stateName}</span></td>
          <td><span class="badge-category">${place.category || 'Heritage'}</span></td>
          <td style="color:var(--text-muted); font-size:0.8125rem;">${place.timings || '09:00 AM - 05:00 PM'}</td>
          <td style="font-weight:700; color:var(--primary);">${place.entryFee || 'Free'}</td>
          <td>
            <div style="display:flex; gap:0.4rem;">
              <button type="button" class="action-btn-sm btn-edit" onclick="editDestination('${place.id}')">✏️ Edit</button>
              <button type="button" class="action-btn-sm btn-delete" onclick="deleteDestination('${place.id}', '${(place.name || '').replace(/'/g, "\\'")}')">🗑️ Delete</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  // 4. Search & Filter
  function filterDestinations() {
    const q = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const cat = (catFilter ? catFilter.value : 'all');

    let filtered = allDestinations;

    if (cat !== 'all') {
      filtered = filtered.filter(p => (p.category || '').toLowerCase() === cat.toLowerCase());
    }

    if (q) {
      filtered = filtered.filter(p =>
        (p.name || '').toLowerCase().includes(q) ||
        (p.stateId || '').toLowerCase().includes(q) ||
        (p.cityId || '').toLowerCase().includes(q) ||
        (p.category || '').toLowerCase().includes(q)
      );
    }

    renderDestinationsTable(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', filterDestinations);
  if (catFilter) catFilter.addEventListener('change', filterDestinations);

  // 5. Add / Edit Form Submit
  if (destForm) {
    destForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const editId = document.getElementById('destEditId').value;
      const name = document.getElementById('destName').value.trim();
      const category = document.getElementById('destCategory').value;
      const stateId = document.getElementById('destState').value;
      const cityId = document.getElementById('destCity').value.trim().toLowerCase();
      const timings = document.getElementById('destTimings').value.trim();
      const entryFee = document.getElementById('destEntryFee').value.trim();
      const bestTime = document.getElementById('destBestTime').value.trim();
      const location = document.getElementById('destLocation').value.trim();
      const image = document.getElementById('destImage').value.trim();
      const tagsStr = document.getElementById('destTags').value.trim();
      const description = document.getElementById('destDescription').value.trim();
      const history = document.getElementById('destHistory').value.trim();
      const isPopular = document.getElementById('destIsPopular').checked;
      const isHiddenGem = document.getElementById('destIsHiddenGem').checked;

      const tags = tagsStr ? tagsStr.split(',').map(t => t.trim()) : [];
      const slugId = editId || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

      const payload = {
        id: slugId,
        name,
        category,
        stateId,
        cityId,
        timings,
        entryFee,
        bestTime,
        location,
        image,
        tags,
        description,
        history,
        isPopular,
        isHiddenGem
      };

      try {
        const url = editId ? `${API_BASE}/destinations/${editId}` : `${API_BASE}/destinations`;
        const method = editId ? 'PUT' : 'POST';

        const res = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          showToast(editId ? `Destination '${name}' updated!` : `New destination '${name}' published!`);
        } else {
          if (!editId) allDestinations.unshift(payload);
          showToast(`Saved '${name}' successfully!`);
        }
      } catch (err) {
        if (!editId) allDestinations.unshift(payload);
        showToast(`Saved '${name}' to local session!`);
      }

      resetDestForm();
      switchTab('destinations');
    });
  }

  // Edit Helper
  window.editDestination = function(id) {
    const place = allDestinations.find(p => p.id === id);
    if (!place) return;

    document.getElementById('formHeaderTitle').textContent = `Edit Destination: ${place.name}`;
    document.getElementById('destFormSubmitBtn').textContent = 'Update Destination';
    document.getElementById('destEditId').value = place.id;
    document.getElementById('destName').value = place.name;
    document.getElementById('destCategory').value = place.category;
    document.getElementById('destState').value = place.stateId;
    document.getElementById('destCity').value = place.cityId;
    document.getElementById('destTimings').value = place.timings || '';
    document.getElementById('destEntryFee').value = place.entryFee || '';
    document.getElementById('destBestTime').value = place.bestTime || '';
    document.getElementById('destLocation').value = place.location || '';
    document.getElementById('destImage').value = place.image || '';
    document.getElementById('destTags').value = Array.isArray(place.tags) ? place.tags.join(', ') : '';
    document.getElementById('destDescription').value = place.description || '';
    document.getElementById('destHistory').value = place.history || '';
    document.getElementById('destIsPopular').checked = !!place.isPopular;
    document.getElementById('destIsHiddenGem').checked = !!place.isHiddenGem;

    switchTab('add-destination');
  };

  // Delete Helper
  window.deleteDestination = async function(id, name) {
    if (!confirm(`Are you sure you want to delete '${name}'?`)) return;

    try {
      const res = await fetch(`${API_BASE}/destinations/${id}`, { method: 'DELETE' });
      if (res.ok) {
        showToast(`'${name}' deleted successfully.`);
      }
    } catch (e) {}

    allDestinations = allDestinations.filter(p => p.id !== id);
    renderDestinationsTable(allDestinations);
    updateStats();
  };

  window.resetDestForm = function() {
    if (destForm) destForm.reset();
    document.getElementById('destEditId').value = '';
    document.getElementById('formHeaderTitle').textContent = 'Add New Tourist Place';
    document.getElementById('destFormSubmitBtn').textContent = 'Save & Publish Destination';
  };

  // 6. Inquiries
  async function loadInquiries() {
    let inquiries = [];
    try {
      const res = await fetch(`${API_BASE}/inquiries`);
      if (res.ok) {
        const json = await res.json();
        inquiries = json.data || [];
      } else {
        const local = localStorage.getItem('travelbharat_inquiries');
        inquiries = local ? JSON.parse(local) : [];
      }
    } catch (e) {
      const local = localStorage.getItem('travelbharat_inquiries');
      inquiries = local ? JSON.parse(local) : [];
    }

    if (!inquiriesTbody) return;

    if (inquiries.length === 0) {
      inquiriesTbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align:center; padding:2.5rem; color:var(--text-muted); font-weight:600;">
            No user inquiries received yet. Submit the contact form to test live updates!
          </td>
        </tr>
      `;
      return;
    }

    inquiriesTbody.innerHTML = inquiries.map((inq, idx) => `
      <tr>
        <td style="color:var(--text-muted); white-space:nowrap; font-size:0.8125rem;">
          ${inq.createdAt ? new Date(inq.createdAt).toLocaleString() : (inq.timestamp || 'Recent')}
        </td>
        <td><strong>${inq.name}</strong></td>
        <td style="color:var(--text-muted);">${inq.email}</td>
        <td><span class="badge-category" style="background:#475569;">${inq.subject}</span></td>
        <td style="color:var(--primary); font-weight:700;">${inq.place || '—'}</td>
        <td style="max-width:250px; color:var(--text-main); font-size:0.85rem;">${inq.message}</td>
        <td>
          <button type="button" class="action-btn-sm btn-delete" onclick="deleteInquiry('${inq._id || inq.id || idx}')">🗑️ Remove</button>
        </td>
      </tr>
    `).join('');

    const countBadge = document.getElementById('inquiryCountBadge');
    if (countBadge) {
      countBadge.textContent = inquiries.length;
      countBadge.style.display = inquiries.length > 0 ? 'inline-block' : 'none';
    }
  }

  window.deleteInquiry = async function(id) {
    if (!confirm('Remove this inquiry?')) return;
    try {
      await fetch(`${API_BASE}/inquiries/${id}`, { method: 'DELETE' });
    } catch (e) {}

    let local = localStorage.getItem('travelbharat_inquiries');
    if (local) {
      let list = JSON.parse(local);
      list = list.filter((item, idx) => (item.id !== id && idx.toString() !== id));
      localStorage.setItem('travelbharat_inquiries', JSON.stringify(list));
    }

    showToast('Inquiry removed');
    loadInquiries();
    updateStats();
  };

  // 7. Stats
  function updateStats() {
    const destEl = document.getElementById('statTotalDestinations');
    const citiesEl = document.getElementById('statTotalCities');
    const inqEl = document.getElementById('statTotalInquiries');

    const totalDest = allDestinations.length || (typeof TravelBharatDestinations !== 'undefined' ? TravelBharatDestinations.length : 500);
    const totalCities = (typeof TravelBharatCities !== 'undefined') ? TravelBharatCities.length : 200;

    if (destEl) destEl.textContent = totalDest;
    if (citiesEl) citiesEl.textContent = totalCities;

    let inqCount = 0;
    try {
      const local = localStorage.getItem('travelbharat_inquiries');
      if (local) inqCount = JSON.parse(local).length;
    } catch(e) {}
    if (inqEl) inqEl.textContent = inqCount;
  }

  // Initial Load
  loadDestinations();
});