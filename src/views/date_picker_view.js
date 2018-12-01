const PubSub = require('../helpers/pub_sub.js');

const DatePicker = function (element) {
  this.element = element;
};


DatePicker.prototype.bindEvents = function () {
  this.element.addEventListener('submit', (event) => {
    event.preventDefault();
    const chosenDate = event.target.date.value;
    const dateForApi = this.prepareDate(chosenDate);
    PubSub.publish('DatePicker:Date-info', dateForApi)
  });
};

DatePicker.prototype.prepareDate = function (dateString) {
  const monthNumber = dateString.slice(5, 7);
  const dayNumber = dateString.slice(-2);
  return `${monthNumber}/${dayNumber}`;
};



module.exports = DatePicker;
