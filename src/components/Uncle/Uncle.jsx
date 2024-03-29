import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
           <h3>Uncle</h3>
           <p><small>Grandpa Money: {money}</small></p>
           <button onClick={() => setMoney(money + 1000)}>Send TK</button>
           <section className='flex'>
                <Cousin>Nabila</Cousin>
                <Cousin>Kabila</Cousin>
           </section>
        </div>
    );
};

export default Uncle;<h3>Uncle</h3>