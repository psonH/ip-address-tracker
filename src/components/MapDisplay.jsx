import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapConsumer,
} from "react-leaflet";

const MapDisplay = ({ center }) => {
  const [mapRef, setMapRef] = useState({ map: null });

  const handleOnFlyTo = (mapInstance) => {
    setMapRef({ map: mapInstance });
    const { map } = mapRef;
    if (map) {
      map.flyTo(center, 13);
    }
  };

  return (
    <div className="leaflet-container">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        whenCreated={(mapInstance) => handleOnFlyTo(mapInstance)}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={center}>
          <Popup>
            Latitide: {center[0]} <br /> Longitude: {center[1]}
          </Popup>
        </Marker>
        <MapConsumer>
          {(map) => {
            map.flyTo(center, 13);
            return null;
          }}
        </MapConsumer>
      </MapContainer>
    </div>
  );
};

export default MapDisplay;
