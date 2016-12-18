import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ProgressCircular} from 'react-onsenui';
import { withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";


const AsyncGettingStartedExampleGoogleMap = withScriptjs(
    withGoogleMap(
        props => (
            <GoogleMap
                ref={props.onMapLoad}
                defaultZoom={8}
                defaultCenter={{ lat: 25.0112183, lng: 121.52067570000001 }}
                // onClick={props.onMapClick}
                >
                {props.markers.map(marker => (
                    <Marker
                        {...marker}
                        // onRightClick={() => props.onMarkerRightClick(marker)}
                        />
                ))}
            </GoogleMap>
        )
    )
);
export default class Map extends Component {
    render() {
    const  markers = [{
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
    }];
        return (
            <div style={{height:'30vH', background:'#222'}}>
            <AsyncGettingStartedExampleGoogleMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
                loadingElement={
                    <div style={{ height: `100%` }}>
                         <ProgressCircular indeterminate />
                    </div>
                }
                containerElement={
                    <div style={{ height: `100%` }} />
                }
                mapElement={
                    <div style={{ height: `100%` }} />
                }
                onMapLoad={_.noop}
                onMapClick={_.noop}
                markers={markers}
                onMarkerRightClick={_.noop}
                />
                </div>
        )
    }
}
