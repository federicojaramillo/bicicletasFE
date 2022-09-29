import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import '../App.css';


// initial location on map
const position = [6.200647, -75.579074];

const CustomMap = () => {

  return(
    <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
};

export default CustomMap;
