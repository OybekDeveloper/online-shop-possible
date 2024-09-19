"use client";

import Map from "@/components/map";
import React, { useState } from "react";

const HomePage = () => {
  const [mapMarkers, setMapMarkers] = useState(undefined);

  // Just an example to show you can add markers after map loaded
  const markers = [
    {
      lat: -22.845347475419814,
      lng: -46.94279790489432,
    },
    {
      lat: -22.99586615719194,
      lng: -47.258654838487985,
    },
  ];

  return (
    <main className="mt-24">
       <Map
        mapId="MapTest"
        lat={-22.84408190473907}
        lng={-46.937304740830086}
        zoom={9}
        height="600px"
        width="90vw"
        markers={mapMarkers}
      />
      <button type="button" onClick={() => setMapMarkers(markers)}>
        Add pre loaded markers
      </button>
    </main>
  );
};

export default HomePage;
