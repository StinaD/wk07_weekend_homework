const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const DataModel = function () {
  this.fact = null;
};

DataModel.prototype.bindEvents = function () {
  PubSub.subscribe('DatePicker:Date-info', (event) => {
    url = `http://numbersapi.com/${event.detail}/date`;
    const requestHelper = new RequestHelper(url);
    requestHelper.get()
      .then((dateFact) => {
        this.fact = dateFact;
        Pubsub.publish('Fact:date-fact', this.fact);
      })
      .catch((error) => {
        PubSub.publish('Fact:error', error);
      });
  });
};


// MunrosModel.prototype.getData = function () {
//   const url = `https://munroapi.herokuapp.com/api/munros`;
//   const requestHelper = new RequestHelper(url);
//   requestHelper.get()
//     .then((munros) => {
//       this.data = munros;
//       PubSub.publish('Munros:munros-data-ready', this.data);
//     })
//     .catch((err) => {
//       PubSub.publish('Munros:error', err);
//     });
// };







module.exports = DataModel;
