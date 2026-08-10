// Comprehensive Database of Smartphone Series & Models
const deviceDatabase = {
  Apple: [
    'iPhone 15 Pro Max',
    'iPhone 15 Pro',
    'iPhone 15 Plus',
    'iPhone 15',
    'iPhone 14 Pro Max',
    'iPhone 14 Pro',
    'iPhone 14 Plus',
    'iPhone 14',
    'iPhone 13 Pro Max',
    'iPhone 13 Pro',
    'iPhone 13',
    'iPhone 13 mini',
    'iPhone 12 Series',
    'iPhone 11 Series',
    'iPhone SE Series'
  ],
  Samsung: [
    'Samsung Galaxy S24 Ultra',
    'Samsung Galaxy S24+',
    'Samsung Galaxy S24',
    'Samsung Galaxy S23 Ultra',
    'Samsung Galaxy S23 FE',
    'Samsung Galaxy Z Fold 5',
    'Samsung Galaxy Z Flip 5',
    'Samsung Galaxy A54 5G',
    'Samsung Galaxy A34 5G',
    'Samsung Galaxy M54 5G',
    'Samsung Galaxy M34 5G',
    'Samsung Galaxy F54'
  ],
  Google: [
    'Google Pixel 8 Pro',
    'Google Pixel 8',
    'Google Pixel 8a',
    'Google Pixel 7 Pro',
    'Google Pixel 7',
    'Google Pixel 7a',
    'Google Pixel 6 Pro',
    'Google Pixel 6a'
  ],
  OnePlus: [
    'OnePlus 12',
    'OnePlus 12R',
    'OnePlus 11 5G',
    'OnePlus 11R 5G',
    'OnePlus 10 Pro',
    'OnePlus 10R',
    'OnePlus Nord 3 5G',
    'OnePlus Nord CE 3 Lite'
  ],
  Xiaomi: [
    'Xiaomi 14 Ultra',
    'Xiaomi 14',
    'Xiaomi 13 Pro',
    'Redmi Note 13 Pro+ 5G',
    'Redmi Note 13 Pro',
    'Redmi Note 13',
    'Redmi 13C',
    'POCO X6 Pro 5G',
    'POCO M6 Pro'
  ],
  Vivo: [
    'Vivo X100 Pro',
    'Vivo X100',
    'Vivo V30 Pro',
    'Vivo V30',
    'Vivo V29 5G',
    'Vivo T2 Pro 5G',
    'Vivo Y200 5G'
  ],
  Realme: [
    'Realme 12 Pro+ 5G',
    'Realme 12 Pro 5G',
    'Realme 12+ 5G',
    'Realme Narzo 60 Pro',
    'Realme C67 5G',
    'Realme GT 5 Pro'
  ],
  Oppo: [
    'Oppo Find N3 Flip',
    'Oppo Reno 11 Pro 5G',
    'Oppo Reno 11 5G',
    'Oppo Reno 10 Pro+ 5G',
    'Oppo F25 Pro 5G',
    'Oppo A79 5G'
  ]
};

// Global Booking State
const bookingState = {
  brand: 'Apple',
  model: 'iPhone 15 Pro',
  issues: []
};

// Published Google Apps Script Web App Deployment URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxTmUH-I6KXptllTZ5IrkALCUq5hRClat_YVnf5-bLBO23LMxcqup_L0TN7jILv8E7l/exec';

// Page Navigation Logic
function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) {
    if (pageId === 'book-step1') {
      renderModels();
    }
    if (pageId === 'book-step3') {
      updateSummary();
    }
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
}

// Render Mobile Models based on Selected Brand
function renderModels(filteredList = null) {
  const container = document.getElementById('models-list-container');
  if (!container) return;

  const modelsToDisplay = filteredList || deviceDatabase[bookingState.brand] || [];
  container.innerHTML = '';

  if (modelsToDisplay.length === 0) {
    container.innerHTML = `<div class="p-4 text-center text-xs text-brand-textMuted">No models found. Try searching for your specific device model in the search bar above.</div>`;
    return;
  }

  modelsToDisplay.forEach(model => {
    const btn = document.createElement('button');
    btn.className = 'w-full py-3 px-4 text-left hover:text-brand-accentLime flex justify-between items-center transition';
    btn.onclick = () => selectModel(model);
    btn.innerHTML = `<span>${model}</span> <i class="fa-solid fa-chevron-right text-xs text-zinc-600"></i>`;
    container.appendChild(btn);
  });
}

// Brand Selection Handler
function selectBrand(brand) {
  bookingState.brand = brand;

  // Reset highlight on all brand buttons
  document.querySelectorAll('.brand-btn').forEach(btn => {
    btn.classList.remove('bg-brand-teal', 'border-brand-teal');
    btn.classList.add('bg-zinc-900', 'border-zinc-800');
  });

  // Highlight the clicked brand button
  const selectedBtn = document.getElementById(`brand-btn-${brand}`);
  if (selectedBtn) {
    selectedBtn.classList.remove('bg-zinc-900', 'border-zinc-800');
    selectedBtn.classList.add('bg-brand-teal', 'border-brand-teal');
  }

  // Clear search input and re-render brand models
  const searchInput = document.getElementById('model-search-input');
  if (searchInput) searchInput.value = '';
  
  renderModels();
}

// Live Search Filter Across ALL Brands
function filterModels() {
  const query = document.getElementById('model-search-input').value.toLowerCase().trim();
  
  if (query === '') {
    renderModels();
    return;
  }

  let matchedModels = [];
  Object.keys(deviceDatabase).forEach(brand => {
    deviceDatabase[brand].forEach(model => {
      if (model.toLowerCase().includes(query) || brand.toLowerCase().includes(query)) {
        matchedModels.push(`${brand} - ${model}`);
      }
    });
  });

  renderModels(matchedModels);
}

// Step 1 -> Step 2 Model Selector
function selectModel(model) {
  bookingState.model = model;
  document.getElementById('selected-device-label').textContent = model;
  navigateTo('book-step2');
}

// Step 2: Toggle Issues
function toggleIssue(checkbox) {
  if (checkbox.checked) {
    bookingState.issues.push(checkbox.value);
    checkbox.parentElement.classList.add('border-brand-teal', 'bg-brand-teal/10');
  } else {
    bookingState.issues = bookingState.issues.filter(i => i !== checkbox.value);
    checkbox.parentElement.classList.remove('border-brand-teal', 'bg-brand-teal/10');
  }
}

// Step 3: Update Summary
function updateSummary() {
  document.getElementById('summary-device').textContent = bookingState.model.includes(bookingState.brand) ? bookingState.model : `${bookingState.brand} ${bookingState.model}`;
  document.getElementById('summary-issues').textContent = bookingState.issues.length > 0 ? bookingState.issues.join(', ') : 'General Inspection';
}

// Handle Booking Submission
function handleBookingSubmit(event) {
  event.preventDefault();
  
  const submitBtn = document.getElementById('booking-submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  const selectedDevice = bookingState.model.includes(bookingState.brand) ? bookingState.model : `${bookingState.brand} ${bookingState.model}`;

  const bookingData = {
    type: 'Repair Booking',
    model: selectedDevice,
    name: document.getElementById('booking-name').value,
    faults: bookingState.issues.length > 0 ? bookingState.issues.join(', ') : 'General Inspection',
    phone: document.getElementById('booking-phone').value,
    timestamp: new Date().toISOString()
  };

  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingData)
  })
  .then(() => {
    completeBooking(bookingData);
  })
  .catch(error => {
    console.error('Error submitting booking:', error);
    alert('There was an issue submitting your booking. Please try again.');
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Confirm Booking';
  });
}

function completeBooking(data) {
  const trackingId = '#SH-' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('confirmed-tracking-id').textContent = trackingId;
  document.getElementById('confirmed-device').textContent = data.model;
  navigateTo('book-confirmed');
}

// Track Form Submit
function handleTrack(event) {
  event.preventDefault();
  alert('Status: In Diagnosis. Technicians are inspecting your device.');
}

// Accessories Store Order Modal Logic
function openOrderModal(productName) {
  document.getElementById('modal-product-name').value = productName;
  document.getElementById('order-modal').classList.remove('hidden');
}

function closeOrderModal() {
  document.getElementById('order-modal').classList.add('hidden');
}

function handleStoreOrderSubmit(event) {
  event.preventDefault();
  
  const submitBtn = document.getElementById('order-submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  const orderData = {
    type: 'Accessory Order',
    product: document.getElementById('modal-product-name').value,
    name: document.getElementById('order-user-name').value,
    phone: document.getElementById('order-user-phone').value,
    email: document.getElementById('order-user-email').value,
    timestamp: new Date().toISOString()
  };

  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  })
  .then(() => {
    alert('Your accessory order request has been submitted successfully!');
    closeOrderModal();
    document.getElementById('store-order-form').reset();
  })
  .catch(error => {
    console.error('Error submitting order:', error);
    alert('There was an issue submitting your order. Please try again.');
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Order Request';
  });
}

// Initialize Page Load
document.addEventListener('DOMContentLoaded', function () {
  navigateTo('home-page');
  renderModels();
});
