const PubSub = require('../helpers/pub_sub.js');

const DateFactView = function(container) {
  this.container = container;
};

DateFactView.prototype.bindEvents = function () {
  PubSub.subscribe('Fact:date-fact',  (event) => {
    this.render(event.detail);
  });
};

DateFactView.prototype.render = function (fact) {
  const p = document.createElement('p');
  p.textContent = fact;
  this.container.appendChild(p);
};


module.exports = DateFactView;
