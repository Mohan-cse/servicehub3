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
    if (pageId === 'book-step3') {
      updateSummary();
    }
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
}

// Step 1: Select Brand & Model
function selectBrand(brand) {
  bookingState.brand = brand;
}

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
  document.getElementById('summary-device').textContent = `${bookingState.brand} ${bookingState.model}`;
  document.getElementById('summary-issues').textContent = bookingState.issues.length > 0 ? bookingState.issues.join(', ') : 'General Inspection';
}

// Handle Booking Submission
function handleBookingSubmit(event) {
  event.preventDefault();
  
  const submitBtn = document.getElementById('booking-submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  const bookingData = {
    type: 'Repair Booking',
    model: `${bookingState.brand} ${bookingState.model}`,
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

// Force load Home Page on initial load
document.addEventListener('DOMContentLoaded', function () {
  navigateTo('home-page');
});
