'use strict';

(function () {

  var ENTER_KEYCODE = 13;
  var adFormHeader = document.querySelector('.ad-form-header');
  var adFormElement = document.querySelector('.ad-form__element');
  var mapFilters = document.querySelector('.map__filters');
  var adForm = document.querySelector('.ad-form');

  adFormHeader.setAttribute('disabled', 'disabled');
  adFormElement.setAttribute('disabled', 'disabled');
  mapFilters.setAttribute('disabled', 'disabled');

  mapPinActive.addEventListener('mousedown', function (evt) {

    adForm.classList.remove('ad-form--disabled');
    adFormHeader.removeAttribute('disabled', 'disabled');
    adFormElement.removeAttribute('disabled', 'disabled');
    mapFilters.removeAttribute('disabled', 'disabled');
  });

  mapPinActive.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {

      adForm.classList.remove('ad-form--disabled');
      adFormHeader.removeAttribute('disabled', 'disabled');
      adFormElement.removeAttribute('disabled', 'disabled');
      mapFilters.removeAttribute('disabled', 'disabled');
    }
  });

  function roomsSincGuest(roomNumber, capacity) {
    var optionsShow = {
      1: [1],
      2: [1, 2],
      3: [1, 2, 3],
      100: [0]
    };
    return function () {
      var value = +roomNumber.value;
      var options = capacity.options;
      var optionsLength = options.length;
      var availableOptions = optionsShow[value];

      for (var j = 0; j < optionsLength; j++) {
        if (availableOptions.indexOf(+options[j].value) !== -1) {
          options[j].disabled = false;
          if (+options[j].value === value || availableOptions.length === 1) {
            options[j].selected = true;
          }
        } else {
          options[j].disabled = true;
        }
      }
    };
  }

  var roomNumber = document.getElementById('room_number');
  var capacity = document.getElementById('capacity');

  roomNumber.addEventListener('change', roomsSincGuest(roomNumber, capacity));

  window.ENTER_KEYCODE = ENTER_KEYCODE;
})();
