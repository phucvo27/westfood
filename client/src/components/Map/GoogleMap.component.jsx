import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const MyGoogleMap = withScriptjs(withGoogleMap((props)=>{
    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 10.023946, lng: 105.742843}}
        >
            {props.isMarkerShown && <Marker position={{ lat: 10.023946, lng: 105.742843}} />}
        </GoogleMap>
    )
}))

export default MyGoogleMap;