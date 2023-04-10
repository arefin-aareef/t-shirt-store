import React from 'react';
import Aunty from '../Aunty/Aunty';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import './Grandpa.css'

const Grandpa = () => {
    const ring = 'diamond'
    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty ring={ring}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;