import {
  Map,
  YMaps,
  Placemark,
  FullscreenControl,
  GeolocationControl,
} from "@pbe/react-yandex-maps";
import React, { useState, useEffect } from "react";

function YandexMap() {
  // const apiKey = process.env.NEXT_PUBLIC_YMAPS_API_KEY;
  const apiKey = "3a1c9f57-aea9-4d3d-b566-816f722d2129";
  const [coordinates, setCoordinates] = useState(null); // Marker coordinates
  const [locationAvailable, setLocationAvailable] = useState(true); // To check if location should be available

  // Handle map click to get coordinates
  const handleMapClick = (e) => {
    const coords = e.get("coords"); // Get coordinates of clicked place
    setCoordinates(coords); // Update coordinates
    setLocationAvailable(true); // Make sure location is available when map is clicked
  };

  // Get user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates([position.coords.latitude, position.coords.longitude]);
          setLocationAvailable(true); // Ensure location is available
        },
        () => {
          // Handle error
          setLocationAvailable(false);
        }
      );
    } else {
      // Handle the case where geolocation is not supported
      setLocationAvailable(false);
    }
  };

  useEffect(() => {
    // Initialize map with user's location if available
    getUserLocation();
  }, []);

  return (
    <YMaps query={{ apikey: apiKey }}>
      <Map
        defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
        width="100%"
        height="400px"
        onClick={handleMapClick} // Get coordinates on map click
      >
        {coordinates && locationAvailable && (
          <Placemark
            geometry={coordinates} // Marker coordinates
            options={{
              iconLayout: "default#image",
              iconImageHref:
                "https://static.vecteezy.com/system/resources/thumbnails/024/831/288/small/3d-render-red-pin-map-location-pointer-icon-png.png", // Path to your SVG icon
              iconImageSize: [50, 50],
              iconImageOffset: [-25, -50],
            }}
          />
        )}
        <FullscreenControl />
        <GeolocationControl
          options={{ float: "right" }}
          onClick={getUserLocation} // Update location when GeolocationControl is clicked
        />
      </Map>

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
        <p>Yes</p>
      )}
    </YMaps>
  );
}

export default YandexMap;
