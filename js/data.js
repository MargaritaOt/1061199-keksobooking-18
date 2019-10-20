'use strict';

(function () {
  var ADS_COUNT = 8;
  var PRICES = ['10000', '20000', '30000', '40000', '50000'];
  var ROOMS = ['Одна комната', 'Две комнаты', 'Три комнаты'];
  var GUESTS = ['Два гостя', 'Один гость', 'Не для гостей'];
  var TYPES = ['palace', 'flat', 'house', 'bungalo'];
  var TIMES = ['12:00', '13:00', '14:00'];
  var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  var X_MIN_COORDINATE = 0;
  var X_MAX_COORDINATE = 1200;
  var Y_MIN_COORDINATE = 130;
  var Y_MAX_COORDINATE = 630;

  window.pinElement = document.querySelector('#pin').content.querySelector('.map__pin');

  var getRandonNumberWithLimits = function (min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var getRandonFromArray = function (arr) {

    var num = getRandonNumberWithLimits(0, arr.length - 1);
    return arr[num];
  };

  window.generateAd = function (i) {

    var location = {
      x: getRandonNumberWithLimits(X_MIN_COORDINATE, X_MAX_COORDINATE),
      y: getRandonNumberWithLimits(Y_MIN_COORDINATE, Y_MAX_COORDINATE),
    };

    return {
      'author': {
        'avatar': 'img/avatars/user0' + (i + 1) + '.png'
      },
      'offer': {
        'title': 'заголовок предложения',
        'address': location.x + ',' + location.y,
        'price': getRandonNumberWithLimits(10000, PRICES.length - 1) + '$',
        'type': getRandonFromArray(TYPES),
        'rooms': getRandonFromArray(ROOMS),
        'guests': getRandonFromArray(GUESTS),
        'checkin': getRandonFromArray(TIMES),
        'checkout': getRandonFromArray(TIMES),
        'features': getRandonFromArray(FEATURES),
        'description': 'описание',
        'photos': PHOTOS.slice(0, getRandonNumberWithLimits(0, PHOTOS.length - 1))
      },
      'location': location,
    };
  };

  window.ADS_COUNT = ADS_COUNT;

})();
