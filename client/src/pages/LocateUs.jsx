import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";
import { Text } from '@chakra-ui/react';

// Example image for custom markers
const img = "https://www.svgrepo.com/show/476893/marker.svg"; // Update this image URL if needed

// Array of locations (you can modify this list to your locations)
const locations = [
  { lat: 13.675618548412078, lng: 77.83357176422378 }, // Example: TerraGreen Farms
  { lat: 13.6756263, lng: 77.8335924 },

];

const LocateUs = () => {
  const mapRef = useRef(null); // Use ref to track the map

  useEffect(() => {
    if (mapRef.current !== null) return; // Prevent re-initializing the map

    // Initialize the map
    mapRef.current = L.map("map").setView([13.675618548412078, 77.83357176422378], 13);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
    }).addTo(mapRef.current);

    // Create a custom icon
    const customIcon = L.icon({
      iconUrl: img,
      iconSize: [32, 32], // size of the icon
      iconAnchor: [16, 32], // point of the icon that corresponds to marker's location
    });

    // Create a MarkerClusterGroup
    const markers = L.markerClusterGroup();

    // Add markers to the cluster group with the custom icon
    locations.forEach((location) => {
      const marker = L.marker([location.lat, location.lng], { icon: customIcon });
      marker.bindPopup(`
        <span>
          View on Google Maps
          <br />
          <a 
            href="https://www.google.com/maps/place/TerraGreen+Farms/@13.6756263,77.8335924,806m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bb18d81512fcdb5:0x4d1017676ddc116!8m2!3d13.6756263!4d77.8335924!16s%2Fg%2F11sbg6t1v1?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            TerraGreen Farms
          </a>
        </span>
      `);
      markers.addLayer(marker);
    });

    // Add the marker cluster group to the map
    mapRef.current.addLayer(markers);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div id="location">
      <Text className="pageHeading">Locate Us</Text>
      <div id="map" style={{ height: "450px", width: "100%" }}></div>
    </div>
  );
};

export default LocateUs;
