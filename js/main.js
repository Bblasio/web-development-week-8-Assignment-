// Main JavaScript file
import { initDatePicker, validateForm } from './utils.js';

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initDatePicker();
  validateForm('searchForm');
  validateForm('contactForm');
});