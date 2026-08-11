// Comprehensive Database of Smartphone Series & Models
const deviceDatabase = {
  Apple: [
    'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus', 'iPhone 15',
    'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14',
    'iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13', 'iPhone 13 mini',
    'iPhone 12 Series', 'iPhone 11 Series', 'iPhone SE Series'
  ],
  Samsung: [
    'Samsung Galaxy S24 Ultra', 'Samsung Galaxy S24+', 'Samsung Galaxy S24',
    'Samsung Galaxy S23 Ultra', 'Samsung Galaxy S23 FE', 'Samsung Galaxy Z Fold 5',
    'Samsung Galaxy Z Flip 5', 'Samsung Galaxy A54 5G', 'Samsung Galaxy A34 5G',
    'Samsung Galaxy M54 5G', 'Samsung Galaxy M34 5G', 'Samsung Galaxy F54'
  ],
  Google: [
    'Google Pixel 8 Pro', 'Google Pixel 8', 'Google Pixel 8a',
    'Google Pixel 7 Pro', 'Google Pixel 7', 'Google Pixel 7a',
    'Google Pixel 6 Pro', 'Google Pixel 6a'
  ],
  OnePlus: [
    'OnePlus 12', 'OnePlus 12R', 'OnePlus 11 5G', 'OnePlus 11R 5G',
    'OnePlus 10 Pro', 'OnePlus 10R', 'OnePlus Nord 3 5G', 'OnePlus Nord CE 3 Lite'
  ],
  Xiaomi: [
    'Xiaomi 14 Ultra', 'Xiaomi 14', 'Xiaomi 13 Pro',
    'Redmi Note 13 Pro+ 5G', 'Redmi Note 13 Pro', 'Redmi Note 13', 'Redmi 13C',
    'POCO X6 Pro 5G', 'POCO M6 Pro'
  ],
  Vivo: [
    'Vivo X100 Pro', 'Vivo X100', 'Vivo V30 Pro', 'Vivo V30',
    'Vivo V29 5G', 'Vivo T2 Pro 5G', 'Vivo Y200 5G'
  ],
  Realme: [
    'Realme 12 Pro+ 5G', 'Realme 12 Pro 5G', 'Realme 12+ 5G',
    'Realme Narzo 60 Pro', 'Realme C67 5G', 'Realme GT 5 Pro'
  ],
  Oppo: [
    'Oppo Find N3 Flip', 'Oppo Reno 11 Pro 5G', 'Oppo Reno 11 5G',
    'Oppo Reno 10 Pro+ 5G', 'Oppo F25 Pro 5G', 'Oppo A79 5G'
  ]
};

// 50+ Mobile Accessories Dataset (Zero Prices)
const accessoriesCatalog = [
  // Earbuds & Audio
  { id: 1, category: 'earbuds', name: 'Apple AirPods Pro (2nd Gen)', icon: 'fa-headphones', desc: 'Active Noise Cancellation' },
  { id: 2, category: 'earbuds', name: 'Samsung Galaxy Buds2 Pro', icon: 'fa-headphones', desc: 'Hi-Fi Sound Audio' },
  { id: 3, category: 'earbuds', name: 'OnePlus Buds Pro 2', icon: 'fa-headphones', desc: 'Dual Driver Spatial Sound' },
  { id: 4, category: 'earbuds', name: 'Realme Buds Air 5 Pro', icon: 'fa-headphones', desc: '50dB Active Noise Cancellation' },
  { id: 5, category: 'earbuds', name: 'boAt Airdopes 141', icon: 'fa-headphones', desc: '42H Playback Beast Mode' },
  { id: 6, category: 'earbuds', name: 'Noise Buds VS102', icon: 'fa-headphones', desc: 'Tru Bass Technology' },
  { id: 7, category: 'earbuds', name: 'JBL Wave Flex TWS', icon: 'fa-headphones', desc: 'Deep Bass Sound' },
  { id: 8, category: 'earbuds', name: 'Sony WF-1000XM5', icon: 'fa-headphones', desc: 'Industry Noise Canceling' },
  { id: 9, category: 'earbuds', name: 'Oppo Enco Air 3 Pro', icon: 'fa-headphones', desc: 'Bamboo Fiber Diaphragm' },
  { id: 10, category: 'earbuds', name: 'Boult Audio Z40', icon: 'fa-headphones', desc: '60H Battery Life' },

  // Back Cases
  { id: 11, category: 'cases', name: 'iPhone 15 Pro MagSafe Clear Case', icon: 'fa-shield-halved', desc: 'Anti-Yellowing Protection' },
  { id: 12, category: 'cases', name: 'iPhone 14 Heavy Armor Matte Case', icon: 'fa-shield-halved', desc: 'Military Grade Drop Tested' },
  { id: 13, category: 'cases', name: 'Samsung S24 Ultra Leather Cover', icon: 'fa-shield-halved', desc: 'Premium Leather Finish' },
  { id: 14, category: 'cases', name: 'Samsung A54 Soft Silicone Case', icon: 'fa-shield-halved', desc: 'Microfiber Inner Lining' },
  { id: 15, category: 'cases', name: 'OnePlus 12 Sandstone Bumper', icon: 'fa-shield-halved', desc: 'Classic Textured Grip' },
  { id: 16, category: 'cases', name: 'Pixel 8 Pro Translucent Matte Case', icon: 'fa-shield-halved', desc: 'Shockproof Camera Bumper' },
  { id: 17, category: 'cases', name: 'Redmi Note 13 Pro Ring Holder Case', icon: 'fa-shield-halved', desc: 'Magnetic Kickstand Case' },
  { id: 18, category: 'cases', name: 'Vivo V30 Crystal Clear TPU', icon: 'fa-shield-halved', desc: 'Ultra-Thin Slim Fit' },
  { id: 19, category: 'cases', name: 'Realme 12 Pro Metallic Cover', icon: 'fa-shield-halved', desc: 'Electroplated Border Shield' },
  { id: 20, category: 'cases', name: 'Universal Waterproof Mobile Pouch', icon: 'fa-water', desc: 'IPX8 Underwater Shield' },

  // Cables & Chargers
  { id: 21, category: 'chargers', name: 'Anker 65W GaN Fast Charger', icon: 'fa-bolt', desc: 'Multi-Device Fast Power' },
  { id: 22, category: 'chargers', name: 'Apple 20W USB-C Power Adapter', icon: 'fa-plug', desc: 'Official Fast Charging' },
  { id: 23, category: 'chargers', name: 'Samsung 25W Super Fast Charger', icon: 'fa-bolt', desc: 'PD 3.0 Power Delivery' },
  { id: 24, category: 'chargers', name: 'OnePlus 100W SUPERVOOC Power Adapter', icon: 'fa-bolt', desc: 'Flash Charging Cable Set' },
  { id: 25, category: 'chargers', name: 'Braided Type-C to Type-C 100W Cable', icon: 'fa-link', desc: '6ft Heavy Duty Nylon' },
  { id: 26, category: 'chargers', name: 'USB-C to Lightning Braided Cable', icon: 'fa-link', desc: 'MFi Certified Fast Charge' },
  { id: 27, category: 'chargers', name: '3-in-1 Universal Magnetic Cable', icon: 'fa-link', desc: 'Type-C, Micro USB, Lightning' },
  { id: 28, category: 'chargers', name: 'MagSafe Wireless Charging Pad', icon: 'fa-rss', desc: '15W Fast Magnetic Charge' },
  { id: 29, category: 'chargers', name: 'Car Fast Charger Dual USB-C', icon: 'fa-car-battery', desc: '45W Metal Car Plug' },
  { id: 30, category: 'chargers', name: 'Mi 67W SonicCharge Combo', icon: 'fa-bolt', desc: 'Turbo Charging Adapter' },

  // Screen Protectors
  { id: 31, category: 'protection', name: 'iPhone 15 Pro 9H Tempered Glass', icon: 'fa-mobile-screen', desc: 'Oleophobic Edge-to-Edge' },
  { id: 32, category: 'protection', name: 'Samsung S24 Ultra UV Curved Glass', icon: 'fa-mobile-screen', desc: 'Liquid Dispersion Adhesive' },
  { id: 33, category: 'protection', name: 'Privacy Matte Anti-Spy Guard', icon: 'fa-eye-slash', desc: '180 Degree Privacy Film' },
  { id: 34, category: 'protection', name: 'Camera Lens Protector Alloy Ring', icon: 'fa-camera', desc: 'Scratchproof Gem Glass' },
  { id: 35, category: 'protection', name: 'Flexible Hydrogel Screen Guard', icon: 'fa-mobile-screen', desc: 'Self-Healing Film' },
  { id: 36, category: 'protection', name: 'OnePlus 12 Curved Tempered Glass', icon: 'fa-mobile-screen', desc: 'Full Glue HD Shield' },
  { id: 37, category: 'protection', name: 'iPad / Tablet 9H Tempered Glass', icon: 'fa-tablet-screen-button', desc: 'HD Anti-Glare Protection' },
  { id: 38, category: 'protection', name: 'Unbreakable Fiber Glass Guard', icon: 'fa-shield', desc: 'Flexible Anti-Shatter' },

  // Storage & Gadgets
  { id: 39, category: 'storage', name: 'Power Core 20000mAh Power Bank', icon: 'fa-battery-full', desc: 'Dual Output Fast Charge' },
  { id: 40, category: 'storage', name: '10000mAh Slim Pocket Power Bank', icon: 'fa-battery-half', desc: 'Ultra Portable Power' },
  { id: 41, category: 'storage', name: 'SanDisk 128GB Ultra MicroSD Card', icon: 'fa-sd-card', desc: 'Class 10 UHS-I Speed' },
  { id: 42, category: 'storage', name: 'SanDisk 256GB Dual Type-C OTG Drive', icon: 'fa-hard-drive', desc: 'Mobile-to-PC Transfer' },
  { id: 43, category: 'storage', name: 'Mobile Gaming Cooling Fan Stand', icon: 'fa-gamepad', desc: 'RGB Heat Sink Cooler' },
  { id: 44, category: 'storage', name: 'Bluetooth Gimbal Stabilizer', icon: 'fa-video', desc: '3-Axis Video Tracking' },
  { id: 45, category: 'storage', name: 'Universal Car Dashboard Mount', icon: 'fa-compass', desc: 'Strong Magnetic Holder' },
  { id: 46, category: 'storage', name: 'Desktop Metal Phone & Tablet Stand', icon: 'fa-tv', desc: '360 Foldable Aluminum' },
  { id: 47, category: 'storage', name: 'Type-C to 3.5mm Headphone Adapter', icon: 'fa-plug', desc: 'DAC Chip Audio Converter' },
  { id: 48, category: 'storage', name: 'Wireless Bluetooth Selfie Stick Tripod', icon: 'fa-camera-retro', desc: 'Remote Shutter Control' },
  { id: 49, category: 'storage', name: 'Type-C Multiport OTG Hub', icon: 'fa-network-wired', desc: 'USB 3.0 & Card Reader' },
  { id: 50, category: 'storage', name: 'MagSafe Magnetic Card Holder Wallet', icon: 'fa-id-card', desc: 'PU Leather Pocket' }
];

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
    if (pageId === 'store-page') {
      renderStoreCatalog('all');
    }
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
}

// Toggle Custom Brand/Series Inputs in Step 1
function toggleCustomInputs() {
  const inputsContainer = document.getElementById('custom-device-inputs');
  const icon = document.getElementById('custom-toggle-icon');
  if (inputsContainer.classList.contains('hidden')) {
    inputsContainer.classList.remove('hidden');
    icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
  } else {
    inputsContainer.classList.add('hidden');
    icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
  }
}

// Apply Custom Device Details
function applyCustomDevice() {
  const brandVal = document.getElementById('custom-brand-input').value.trim();
  const modelVal = document.getElementById('custom-model-input').value.trim();

  if (!brandVal || !modelVal) {
    alert('Please enter both custom brand name and model/series.');
    return;
  }

  bookingState.brand = brandVal;
  bookingState.model = `${brandVal} ${modelVal}`;
  selectModel(bookingState.model);
}

// Render Mobile Models based on Selected Brand
function renderModels(filteredList = null) {
  const container = document.getElementById('models-list-container');
  if (!container) return;

  const modelsToDisplay = filteredList || deviceDatabase[bookingState.brand] || [];
  container.innerHTML = '';

  if (modelsToDisplay.length === 0) {
    container.innerHTML = `<div class="p-4 text-center text-xs text-brand-textMuted">No models found in quick list. Enter your brand and series above manually.</div>`;
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
    btn.classList.add('bg-zinc-900/80', 'border-zinc-800');
  });

  // Highlight the clicked brand button
  const selectedBtn = document.getElementById(`brand-btn-${brand}`);
  if (selectedBtn) {
    selectedBtn.classList.remove('bg-zinc-900/80', 'border-zinc-800');
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
  document.getElementById('confirmed-device').textContent = data.model;
  navigateTo('book-confirmed');
}

// Accessories Store Catalog Filtering & Rendering
function filterStoreCategory(category) {
  document.querySelectorAll('.store-cat-btn').forEach(btn => {
    btn.classList.remove('bg-brand-teal', 'text-white');
    btn.classList.add('bg-zinc-900/80', 'text-brand-textMuted');
  });

  event.currentTarget.classList.remove('bg-zinc-900/80', 'text-brand-textMuted');
  event.currentTarget.classList.add('bg-brand-teal', 'text-white');

  renderStoreCatalog(category);
}

function renderStoreCatalog(category = 'all') {
  const grid = document.getElementById('store-products-grid');
  if (!grid) return;

  const filteredItems = category === 'all' 
    ? accessoriesCatalog 
    : accessoriesCatalog.filter(item => item.category === category);

  grid.innerHTML = '';

  filteredItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'glass-card bg-zinc-900/80 border border-zinc-800 rounded-xl p-3 flex flex-col justify-between transform transition hover:scale-[1.02] hover:border-brand-teal/50';
    card.innerHTML = `
      <div class="h-24 bg-black/60 rounded-lg flex items-center justify-center mb-2">
        <i class="fa-solid ${item.icon} text-3xl text-brand-accentBlue"></i>
      </div>
      <div>
        <h4 class="text-xs font-semibold text-white line-clamp-1">${item.name}</h4>
        <p class="text-[10px] text-brand-textMuted line-clamp-1 mt-0.5">${item.desc}</p>
      </div>
      <button onclick="openOrderModal('${item.name.replace(/'/g, "\\'")}')" class="mt-3 w-full bg-brand-teal hover:bg-brand-tealHover text-white py-1.5 rounded-lg text-xs font-medium transition">
        Order Item
      </button>
    `;
    grid.appendChild(card);
  });
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
  renderStoreCatalog('all');
});
