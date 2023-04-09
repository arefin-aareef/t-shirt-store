import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([])

    const handleAddToCart = tshirt => {
        console.log(tshirt);
    }

    return (
        <div className='home-container'>
            <div className="t-shirts-container">
            {
                tshirts.map(tshirt => <TShirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}
                ></TShirt>)
            }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;<h2>Home</h2>