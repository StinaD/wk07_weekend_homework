const DatePicker = require('./views/date_picker_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const dateSelector = document.querySelector('#date-form');
  const datePicker = new DatePicker(dateSelector);
  datePicker.bindEvents();
  dateSelector.reset();
});
