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
  const position = [13.675618548412078,  77.83357176422378  ]; // lat and long change 

  return (
    <div id="location">
      <Text className='pageHeading'>
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
                  href="https://www.google.com/maps/place/TerraGreen+Farms/@13.6756263,77.8335924,806m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bb18d81512fcdb5:0x4d1017676ddc116!8m2!3d13.6756263!4d77.8335924!16s%2Fg%2F11sbg6t1v1?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                 TerraGreen Farms 
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
