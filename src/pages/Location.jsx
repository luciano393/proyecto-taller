import React from "react";
import { MapWithAMarker } from "../components/Map";

export const Location = () => {
  return (
    <main className="Location">
      <h1>Estamos ubicados en Moreno, Buenos Aires.</h1>
      <div className="box-container">
        <div className="text-content">
            <p>Sarmiento 354</p>
            <p>A media cuadra del Bingo de Moreno</p>
        </div>
        <div className="map-content">
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQeaR1Jiz-jPoOXHSocnfUpd57s55vn08&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </main>
  );
};
