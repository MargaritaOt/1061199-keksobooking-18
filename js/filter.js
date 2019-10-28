'use strict';

(function() {
var adsArray =[];

var onSuccess = function (data) {
  adsArray = data;
  window.adsLoad (adsArray);
}

  var updateAds = function () {
    var sameValueAds = adsArray.filter(function (it) {
      return it.value === 'house';
    });
    window.adsLoad (sameValueAds);
};

var filter = document.getElementById('housing-type');
 filter.addEventListener ('click', function() {
    updateAds ();
});
})();
