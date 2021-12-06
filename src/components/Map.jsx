import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
export const MapWithAMarker = withScriptjs(withGoogleMap(props =>
<GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: -34.637249344049366, lng: -58.79205306184941 }}
>
    <Marker
    position={{ lat: -34.637249344049366, lng: -58.79205306184941 }}
    />
</GoogleMap>
));
