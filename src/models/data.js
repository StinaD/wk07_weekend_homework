const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const DataModel = function () {
  this.fact = null;
};

DataModel.prototype.bindEvents = function () {
  PubSub.subscribe('DatePicker:Date-info', (event) => {
    const urlInput = event.detail;
    this.getData(urlInput);
  });
};


DataModel.prototype.getData = function (urlNumbers) {
  const url = `http://numbersapi.com/${urlNumbers}/date?json`;
  const requestHelper = new RequestHelper(url);
  requestHelper.get()
    .then((dateFact) => {
      this.fact = dateFact;
      PubSub.publish('Data:date-fact', this.fact.text);
    })
    .catch((error) => {
      PubSub.publish('Fact:error', error);
    });
};







module.exports = DataModel;
