import React from 'react';
import BingMapsReact from 'bingmaps-react';

const MapContainer = () => {
  return (
    <BingMapsReact
      bingMapsKey={process.env.NEXT_PUBLIC_BING_MAPS_KEY}
      viewOptions={{
        center: {
          latitude: -23.673715228810146,
          longitude: -45.446516913539554,
        },
        mapTypeId: 'aerial',
      }}
    />
  );
};

export default MapContainer;
