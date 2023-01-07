import React from 'react';
import FeatureGroup from './FeatureGroup';


const Features = ({ features }) => {
    const {top, performance, bonuses} = features;
  return (
    <ul>
        <FeatureGroup name="Top Features Comparison" group={top} />
        <hr className='border-transparent mb-7 mt-3' />
        <FeatureGroup name="Performance Features" group={performance} />
        <hr className='border-transparent mb-7 mt-3' />
        <FeatureGroup name="Bouns Features" group={bonuses} />
    </ul>    
  )
}





export default Features