'use strict';

var generateAds = function(ads) {
  var ad1 = {
    author: "img/avatars/user01.png",
    offer: {
      title: "заголовок предложения",
      address: "600, 350",
      price: "1000",
      type: "palace",
      rooms: "3",
      guests: "5",
      checkin: "12:00",
      checkout: "14:00",
      features: "wifi",
      description: "бла бла",
      photos: "http://o0.github.io/assets/images/tokyo/hotel1.jpg"
  },
    location: "100, 100"
  }
  var ads = [ad1, ad2, ad3, ad4, ad4, ad5, ad6, ad7, ad8];
  for (var i = 0; i < ads.length; i++) {
    console.log(ads[i]);
  }
};

var map = document.querySelector('.map');
map.classList.remove('map--faded');
