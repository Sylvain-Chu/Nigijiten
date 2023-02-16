import React from 'react'
import SliderHC from './components/SliderHomeComponents.js';
import SliderCC from './components/SliderCategoryComponents.js';

export default function Animes(){
        return (
        <div className='Animes'>
            <SliderHC />
            <SliderCC category="Tendances actuelles" />
            <SliderCC category="Série décalées" />
            <SliderCC category="Nouveautés" />
        </div>
    );
}