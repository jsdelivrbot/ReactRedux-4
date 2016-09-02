import React from 'react';
import {GoogleMapLoader, GoogleMap} from 'react-google-maps';

export default (props) => {
    return (
        <GoogleMapLoader
            
            containerElement={<div style={{ height: '250px',width:'250px' }}/>}
            googleMapElement={
                <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon}}/>
            }
            />
    )
}