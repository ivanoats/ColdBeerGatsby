
  <h1>Is it cold enough to store beer outside?</h1>
  <h2 class="answer">Maybe. Checking.... Please stand by. </h2>
  <p>Your National Weather Service nearest weather station location was auto-detected as:
    <span class="location">Unknown</span>
  </p>
  <p style="margin-top: 4em">The
    <a href="http://craftbeerrestaurant.com/Craft_Beer_Restaurant/Temperature_Guidelines.html">Craft Beer Restaurant</a> site recommends beer be stored at 46 degrees Farenheight or less outside.</p>


  <p>Don't drink and drive. Use
    <a href="https://getmigo.com">Migo</a> to find a rideshare or cab.</p>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/geolocator/2.1.3/geolocator.min.js"></script>
  <script>
    function round(number, precision) {
      var shift = function (number, precision, reverseShift) {
        if (reverseShift) {
          precision = -precision;
        }
        var numArray = ("" + number).split("e");
        return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
      };
      return shift(Math.round(shift(number, precision, false)), precision, true);
    }

    window.onload = function() {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumWait: 10000,
        maximumAge: 0
      }

      geolocator.locate(options, function(err, location) {
        if (err) return geoLocationFail(err)
        console.log(location)
        $.get('https://api.weather.gov/points/' + location.coords.latitude + ',' + location.coords.longitude, getFirstStation)
          .fail(function () {
            $('h2.answer').text('Sorry, weather service API did not work right nowk')
          })
      })
    }

    function geoLocationFail(err) {
      $('h2.answer').text('Sorry, geolocation did not work, or is not enabled in your browser')
      console.error(err.message)
    }


    // get the list of weather stations near the user's location
    function getFirstStation(data) {
      var observationStationsURL = data.properties.observationStations
      $.get(observationStationsURL, function (stations) {
        stationData(stations.observationStations[0])
      })
        .fail(function () {
          $('h2.answer').text('Sorry, the Weather Service API observations stations list was not available')
        })
    }

    // get current observation for station
    function stationData(url) {
      $.get(url, function (stationData) {
        $.get(`https://api.weather.gov/stations/${stationData.properties.stationIdentifier}/observations/current`, function (data) {
          updater(data.properties.temperature.value)
          $('span.location').text(stationData.properties.name)
        })
      })
    }

    function updater(tmp) {

      var temp_f = round((tmp * (9 / 5)) + 32, 0)
      var coldEnough = temp_f <= 46
      if (coldEnough) {
        $('h2.answer').text('🍺 HELL YEAH!')
      } else {
        $('h2.answer').text('🌴 No way, José. It\'s only ' + temp_f + ' degrees.')
      }

    }

  </script>
