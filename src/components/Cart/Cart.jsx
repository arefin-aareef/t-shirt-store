import React from 'react';
import './Cart.css'

const Cart = ({cart, handelRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please Add Some Products</p>
    }
    else {
        message = <div>
            <p>Thanks for shopping with us</p>
        </div>
    }
    return (
        <div>
            <h3 className={`bold ${cart.length === 0 ? 'blue' : 'green'}`}>Order Summary: {cart.length}</h3>
            {cart.length > 2 ? <span>Buy More</span> : <span>Bring  some money</span>}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name} <button
                    onClick={() => handelRemoveFromCart(tshirt._id)}
                    >x</button></p>)
            }
            {
                cart.length === 2 && <p>You Have a pair</p>
            }
            {
                cart.length === 3 || <p>Add more to make 3</p>
            }
            {message}
        </div>
    );
};

export default Cart;