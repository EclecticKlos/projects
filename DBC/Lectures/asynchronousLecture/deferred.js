var Promise = function () {
  this.successCallbacks = [];
  this.errorCallbacks = [];
};

Promise.prototype.then = function(successCallback, errorCallback) {
  console.log('then()')

  this.successCallbacks.push(successCallback);

  if (errorCallback) {
    this.errorCallbacks.push(errorCallback);
  }
};

var Defer = function() {
  this.promise = new Promise();
};

Defer.prototype.resolve = function() {
  console.log('resolve()');

  this.promise.successCallbacks.forEach(function(callback) {
    setTimeout(function () {
      console.log(callback);

      callback(data);
    }, 0)
  })
};

Defer.prototype.reject = function(error) {
  console.log('reject()');

  this.promise.errorCallbacks.forEach(function(callback) {
    setTimeout(function () {
      console.log(callback);

      callback(error);
    }, 0)
  })
};


