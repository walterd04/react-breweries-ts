import React from 'react'; 
import './MapMarker.scss';

const MapMarker = (props: any) => { 
    const { color, name } = props;
    return ( 
        <div className="pin bounce"
            style={{ backgroundColor: color, cursor: 'pointer' }}
            title={ name }>
                <div className="pulse"></div>
            </div>
    );
};

export default MapMarker;