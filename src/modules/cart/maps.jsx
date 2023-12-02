import React from "react";
import { Modal } from "@mui/material";
import GoogleMapReact from 'google-map-react';


const MapPicker = ({ visible }) => {

    let defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    }

    return (
        <Modal
            open={true}
            onClose={() => { }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    
                >
                    {/* <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    /> */}
                </GoogleMapReact>
            </div>
        </Modal>
    );
}

export default MapPicker;