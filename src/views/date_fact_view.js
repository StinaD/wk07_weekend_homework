const PubSub = require('../helpers/pub_sub.js');

const DateFactView = function (container) {
  this.container = container;
};

DateFactView.prototype.bindEvents = function () {
  PubSub.subscribe('Data:date-fact', (event) => {
    const fact = event.detail;
    this.render(fact);
  });
};

DateFactView.prototype.render = function (fact) {
  this.container.innerHTML = '';
  const p = document.createElement('p');
  p.textContent = fact;
  this.container.appendChild(p);
};




module.exports = DateFactView;
