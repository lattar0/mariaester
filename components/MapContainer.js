import React, { useEffect } from 'react';

import styles from "../styles/MapContainer.module.scss";

const MapContainer = () => {
  useEffect(() => {
    function initMap() {
      const escola = { lat: -23.673715228810146, lng: -45.446516913539554 };
  
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: escola,
      });
  
      const marker = new google.maps.Marker({
        position: escola,
        map: map,
      });
    }

    initMap();
  });

  return (
    <div className={styles.map} id="map" />
  );
}

export default MapContainer;