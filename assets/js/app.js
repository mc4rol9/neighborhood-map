// The Global variables
var map; // the map

// The function that initializes the map
function initMap() {
    // The map styles
    var styles = [
      {
        featureType: 'water',
        stylers: [
          { color: '#528ec7' }
        ]
      },{
        featureType: 'administrative',
        elementType: 'labels.text.stroke',
        stylers: [
          { color: '#ffffff' },
          { weight: 6 }
        ]
      },{
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [
          { color: '#5c9028' }
        ]
      },{
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          { color: '#5c9028' },
          { lightness: -40 }
        ]
      },{
        featureType: 'transit.station',
        stylers: [
          { weight: 9 },
          { hue: '#e85113' }
        ]
      },{
        featureType: 'road.highway',
        elementType: 'labels.icon',
        stylers: [
          { visibility: 'off' }
        ]
      },{
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [
          { lightness: 100 }
        ]
      },{
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          { lightness: -100 }
        ]
      },{
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          { visibility: 'on' },
          { color: '#f0e4d3' }
        ]
      },{
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          { color: '#5c9028' },
          { lightness: -25 }
        ]
      }
    ];

    // The constructor that creates a new map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -23.5414317, lng: -46.6974751},
        zoom: 15,
        styles: styles,
        mapTypeCOntrol: false
    });
}

// The ViewModel Knockout to deal with infos that change state
var AppViewModel = function() {
    
}

ko.applyBindings(new AppViewModel())