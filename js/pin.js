'use strict';

(function () {

  document.getElementById('address').value = 'x:603 y:237';

  var map = document.querySelector('.map');
  window.mapPinActive = document.querySelector('.map__pin--main');

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

  });

  var button = document.querySelector('.map__pin');
var onButtonMove = function (evt) {
  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    document.getElementById('address').value ='x:'+ button.style.top +'  '+ 'y:'+ button.style.left;

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
}

button.addEventListener('mousedown', onButtonMove);

})();
