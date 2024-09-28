import { Text } from '@chakra-ui/react';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; 
import 'leaflet/dist/leaflet.css';
// import { color } from 'framer-motion';

const customIcon = new L.Icon({
  iconUrl: 'https://www.svgrepo.com/show/476893/marker.svg', // change the icon before handover
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: null,
  shadowSize: null,

});

const LocateUs = () => {
  const position = [12.976750, 77.575280]; // lat and long change 

  return (
    <div id="location">
      <Text fontSize="5xl" fontWeight={"bold"} textAlign="center" color="green" mb={4}>
        Locate Us
      </Text>

      <div style={{ height: "450px", width: "100%" }}>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker  position={position} icon={customIcon}>
            <Popup>
              <span>
                View on Google Maps
                <br />
                <a 
                  href="https://www.google.com/maps/place/Kelsa/@12.9893194,77.590328,808m/data=!3m1!1e3!4m6!3m5!1s0x3bae166ed3914069:0x5636310a841d2b07!8m2!3d12.9893142!4d77.5929029!16s%2Fg%2F11j23ss24p?authuser=0&entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Kelsa.io  
                </a>  
                {/* Change the name and the and google map loacation */}
              </span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LocateUs;
