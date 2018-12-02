const PubSub = require('../helpers/pub_sub.js');

const ErrorView = function (container) {
  this.container = container;
};

ErrorView.prototype.bindEvents = function () {
  PubSub.subscribe('Fact:error', (event) => {
    const error = event.detail;
    this.render(error);
  });
};


ErrorView.prototype.render = function (err) {
  console.error(err);

  this.container.innerHTML = '';
  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'Oops! Something seems to have gone wrong.';
  this.container.appendChild(errorMessage);
};

module.exports = ErrorView;
