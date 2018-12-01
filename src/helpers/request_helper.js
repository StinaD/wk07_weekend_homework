const RequestHelper = function (url) {
  this.url = url
}

RequestHelper.prototype.get = function () {
  return fetch(this.url)
    .then((result) => {
      return result.json()
    });
};

module.exports = RequestHelper;
