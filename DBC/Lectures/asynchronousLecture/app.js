var  test = function(fakeResponseCode){
  var defer = new Defer();

  setTimeout(function() {
    if (fakeResponseCode === 200) {
      defer.resolve(fakeResponseCode);
    } else {
      defer.reject(new Error("Status code was " + fakeResponseCode));
    }
  }, 1000);

  return defer.promise;
}

console.log('test()');

test(200).then(function(text) {
  console.log(text);
}, function(error) {
  console.log(error.message);
});

test()
>>then()
>>resolve()
>>
