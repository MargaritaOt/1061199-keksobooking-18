'use strict';

var pin = function () {

  document.getElementById('address').value = 'x:603 y:237';

  var map = document.querySelector('.map');
  var mapPins = document.querySelector('.map__pins');
  window.mapPinActive = mapPins.querySelector('.map__pin--main');

  mapPinActive.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      map.classList.remove('map--faded');
      adForm.classList.remove('ad-form--disabled');
    }
  });

  mapPinActive.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    map.classList.remove('map--faded');
    document.getElementById('address').value = 'x:599 y:448';

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      mapPins.style.top = (mapPins.offsetTop - shift.y) + 'px';
      mapPins.style.left = (mapPins.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
};

pin();
