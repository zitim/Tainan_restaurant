  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: {lat: 22.989533, lng: 120.203401}
    });

    setMarkers(map);
  }

  // Data for the markers consisting of a name, a LatLng and a zIndex for the
  // order in which these markers should display on top of each other.
  var restaurants = 
  [
    ['楊哥楊嫂肉粽', 22.984261, 120.205434, '臺南市中西區慶中街41號'],
    ['森林花園-崇善店', 22.980501, 120.223171, '臺南市東區崇善路168號'],
    ['清子香腸熟肉', 22.997374, 120.201328, '臺南市中西區民族路二段248號'],
    ['台南度小月', 22.992293, 120.203663, '臺南市中西區中正路16號'],
    ['周氏蝦捲(總店)', 22.998239, 120.17472, '臺南市安平區安平路408-1號']
  ];

  function setMarkers(map) {
    // Adds markers to the map.

    infowindow = new google.maps.InfoWindow();
    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.

    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.
    var image = {
      url: 'img/bitnami.ico',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32)
    };
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };
    for (var i = 0; i < restaurants.length; i++) {
      var restaurant = restaurants[i];
      var marker = new google.maps.Marker({
        position: {lat: restaurant[1], lng: restaurant[2]},
        map: map,
        //icon: image,
        //shape: shape,
        //title: restaurant[0],
        //zIndex: restaurant[3]
      });
      info(marker, restaurants[i]);
      
    }

  }
  function info(marker, res_info) {
    var infowindow = new google.maps.InfoWindow({
      content: 
      '<div class="res_name" ><h3>'+res_info[0]+'</h3></div><br/>'+
      '<ul>'+
      '<li>'+res_info[3]+'</li><br/>'+
      //'<li>──────────────</li><br>'+
      '<li><button onclick="res_love(\''+res_info[0]+'\')">收藏</button></li>'+
      '</ul>',
      maxWidth: 170
    });

    marker.addListener('click', function() {
      infowindow.open(marker.get('map'), marker);
    });
  }

  function res_love(res_id){
    console.log(res_id);
    alert('加入成功');
  }
