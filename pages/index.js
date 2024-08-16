import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC_WsJMzbFzEW5sGIoieLBN_hrBpZmUw3A',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <div> Map loading
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-style">
      {/* <Marker position={center} /> */}
    </GoogleMap>
    </div>
    
  );
}
