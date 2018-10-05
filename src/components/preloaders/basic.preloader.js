// outsources
import React from 'react';

// local dependencies
import Background from '../../assets/images/preloader-static.png';
import Spinner from '../../assets/images/preloader-dynamic.png';
// import Triangle from '../../assets/images/triangle.png';
export default function Preloader({ownHeight = 200, ...props}) {

    return (
        <div className='preloader-holder' style={{position: 'relative', padding: '10px', backgroundColor: '#000000', borderRadius: '50%'}}>
            <img height={ownHeight + 'px'} src={Background} alt="preloader background"/>
            <img height={ownHeight + 'px'} src={Spinner} alt="preloader spinner" style={{position: 'absolute', left: '10px', bottom: '10px', animation: 'My-spinner infinite 5s linear'}}/>
            <img height={ownHeight + 'px'} src={Spinner} alt="preloader spinner" style={{position: 'absolute', left: '10px', bottom: '10px', animation: 'My-spinner-reverse infinite 5s linear'}}/>
        </div>
    )
}