import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import './Grandpa.css'

export const RingContext = createContext('gold')
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'diamond'
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <p>Has Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;