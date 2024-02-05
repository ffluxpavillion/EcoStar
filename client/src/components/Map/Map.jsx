import Map, {
  NavigationControl, // zoom in/out buttons
  ScaleControl, // scale bar
  GeolocateControl, // find my location button
  Marker, // marker for locations
  Layer,
  Popup
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapComponent() {

  const apiKey = 'pk.eyJ1IjoiZmZsdXhwYXZpbGxpb24iLCJhIjoiY2xyNW12emNyMXZzbzJxcGE4YTVoM2FrMiJ9.r6AR7fjWzhLvcGvkvWnX6g'

  return (
    <>
    {apiKey && (
        <Map className='Map'
          mapboxAccessToken={apiKey}
          initialViewState={{
            longitude: -79.384293,
            latitude: 43.653908,
            zoom: 12.1,
          }}
          style={{ width: '40vw', height: '30rem' }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <NavigationControl />
          <ScaleControl />
          <GeolocateControl />
          {/* {locations.map((location, index) => location.coordinates && (
            <Marker
              className="marker"
              key={index}
              latitude={location.coordinates[1]}
              longitude={location.coordinates[0]}
              draggable={false}
              color="#6c85ba"
            />
          ))} */}
        </Map>
      )}
    </>
  )
}

