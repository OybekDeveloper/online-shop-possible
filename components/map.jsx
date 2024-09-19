import {
  Map,
  YMaps,
  Placemark,
  FullscreenControl,
} from "@pbe/react-yandex-maps";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

function YandexMap() {
  const apiKey = "3a1c9f57-aea9-4d3d-b566-816f722d2129";
  const [coordinates, setCoordinates] = useState(null); // Marker coordinates
  const [locationAvailable, setLocationAvailable] = useState(true); // To check if location is available
  const [mapInstance, setMapInstance] = useState(null); // Store the map instance
  const [zoom, setZoom] = useState(14); // Zoom level state
  // Handle map click to get coordinates
  const handleMapClick = (e) => {
    const coords = e.get("coords"); // Get coordinates of clicked place
    setCoordinates(coords); // Update coordinates
    setLocationAvailable(true); // Ensure location is available when map is clicked
  };

  // Get user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      console.log(navigator);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoordinates = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          setCoordinates(userCoordinates);
          setLocationAvailable(true); // Ensure location is available

          // Center the map on the user's location
          if (mapInstance) {
            mapInstance.setCenter(userCoordinates, zoom); // Use stored zoom level
          }

          // Save permission status to localStorage (no need to ask again)
          localStorage.setItem("locationPermissionGranted", "true");
        },
        () => {
          // Handle error (location permission denied)
          setLocationAvailable(false);
        }
      );
    } else {
      // Handle the case where geolocation is not supported
      setLocationAvailable(false);
    }
  };

  return (
    <YMaps query={{ apikey: apiKey }}>
      <Map
        defaultState={{
          center: coordinates || [55.751574, 37.573856],
          zoom: zoom,
        }} // Use zoom state
        width="100%"
        height="400px"
        onClick={handleMapClick} // Get coordinates on map click
        instanceRef={(map) => setMapInstance(map)} // Store the map instance
        onBoundsChange={() => setZoom(mapInstance.getZoom())} // Update zoom state on bounds change
      >
        {coordinates && locationAvailable && (
          <Placemark
            geometry={coordinates} // Marker coordinates
            options={{
              iconLayout: "default#image",
              iconImageHref:
                "https://static.vecteezy.com/system/resources/thumbnails/024/831/288/small/3d-render-red-pin-map-location-pointer-icon-png.png", // Path to your icon
              iconImageSize: [50, 50],
              iconImageOffset: [-25, -50],
            }}
          />
        )}
        <FullscreenControl />
      </Map>
      <Button onClick={getUserLocation}>Get my location</Button>

      {locationAvailable ? (
        coordinates ? (
          <div>
            <p>Latitude: {coordinates[0]}</p>
            <p>Longitude: {coordinates[1]}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )
      ) : (
        <p>Location not available</p>
      )}
    </YMaps>
  );
}

export default YandexMap;
