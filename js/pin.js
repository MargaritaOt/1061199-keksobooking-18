'use strict';

(function () {
  var addressValue = document.getElementById('address');

  addressValue.value = '603, 237';

  var map = document.querySelector('.map');
  window.onPinActive = document.querySelector('.map__pin--main');

  window.onPinActive.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.ENTER_KEYCODE) {
      window.adsLoad();
      map.classList.remove('map--faded');
      window.adForm.classList.remove('ad-form--disabled');
    }
  });

  window.onPinActive.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    map.classList.remove('map--faded');
    addressValue.value = '599, 448';
    window.adsLoad();
  });

  var button = document.querySelector('.map__pin');
  var onButtonMove = function (evt) {
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      addressValue.value = button.style.top + ', ' + button.style.left;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      button.style.top = (button.offsetTop - shift.y) + 'px';
      button.style.left = (button.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  button.addEventListener('mousedown', onButtonMove);

})();
