// Utility functions

// Simple date picker initializer (using native input for simplicity)
function initDatePicker() {
  const checkIn = document.getElementById('checkIn');
  const checkOut = document.getElementById('checkOut');
  if (checkIn && checkOut) {
    checkIn.addEventListener('change', () => {
      checkOut.min = checkIn.value;
    });
  }
}

// Form validation example
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted successfully!');
    });
  }
}

export { initDatePicker, validateForm };