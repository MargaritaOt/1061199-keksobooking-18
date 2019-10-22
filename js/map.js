'use strict';

(function () {
  window.adsLoad = function () {
    window.load(function (adsArray) {
      var fragment = document.createDocumentFragment();
      for (var k = 0; k < adsArray.length; k++) {
        var pinElement = document.querySelector('#pin').content.querySelector('.map__pin');
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
  };
})();
