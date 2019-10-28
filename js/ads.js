'use strict';

(function () {
  window.adsLoad = function () {
    var pinElement = document.querySelector('#pin').content.querySelector('.map__pin');

    window.load(function (adsArray) {
      var adsArray = adsArray.slice(1, 6);
      var fragment = document.createDocumentFragment();
      for (var k = 0; k < adsArray.length; k++) {
        var pin = pinElement.cloneNode(true);
        var obj = adsArray[k];
        pin.querySelector('img').src = obj.author.avatar;
        pin.querySelector('img').alt = obj.offer.title;
        pin.style.left = obj.location.x + 'px';
        pin.style.top = obj.location.y + 'px';

        fragment.appendChild(pin);
      }

      document.querySelector('.map__pins').appendChild(fragment);
    });
  }
})();
