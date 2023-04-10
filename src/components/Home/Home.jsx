import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([])

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id)
        if(exists) {
            toast("You have already added this t-shirt")
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }
    }

    const handelRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
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
                <Cart 
                cart={cart}
                handelRemoveFromCart={handelRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;<h2>Home</h2>