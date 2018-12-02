const DatePicker = require('./views/date_picker_view.js');
const DataModel = require('./models/data.js');
const DateFactView = require('./views/date_fact_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const dateSelector = document.querySelector('#date-form');
  const datePicker = new DatePicker(dateSelector);
  datePicker.bindEvents();

  const dataModel = new DataModel();
  dataModel.bindEvents();

  const dateFactInfo = document.querySelector('#date-fact');
  const dateFactView = new DateFactView(dateFactInfo);
  dateFactView.bindEvents;

});
