import React,{useContext} from 'react'
import {CartContext} from './CartContext';
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
const Cart=()=>{
const {shoppingCart,totalPrice,qty,dispatch}=useContext(CartContext);
// console.log('cart data',data);
let file=localStorage.getItem('user');

    return(
        <div>
        <Navbar/>
        <div className="cart-container">
            <div className="cart-details">
                {shoppingCart.length > 0 ?
                    shoppingCart.map(cart=>(
                    <div className='cart' key={cart.id}>
                    <span className='cart-images'><img src={cart.image} alt=''/></span>
                    <span className='cart-product-name'>{cart.name}</span>
                    <span className='cart-product-price'>Rs.{cart.price}.00</span>
                    <span className='inc' onClick={()=> dispatch({type:'INC',id:cart.id,cart})}><i className='fa fa-plus'></i></span>
                    <span className='product-quantity'>{cart.qty}</span>
                    <span className='dec' onClick={()=> dispatch({type:'DEC',id:cart.id,cart})}><i className='fa fa-minus'></i></span>
                    <span className='product-total-price'>Rs.{cart.price * cart.qty}.00</span>
                    <span className='delete-product' onClick={()=> dispatch({type:'DELETE',id:cart.id,cart})}><i className='fa fa-trash-o'></i></span>
                    </div>    
                    ))
            : 'Sorry your cart is empty'}
            </div>
            {shoppingCart.length>0 ? 
            <div className='cart-summary'>
                <div className='summary'>
                    <h2>Cart Summary</h2>
                    <div className='total-items'>
                        <div className='items'>Total Items</div>
                        <div className='items-count'>{qty}</div>
                    </div>
                    <div className='total-price-section'>
                        <div className='just-title'>Total Price</div>
                        <div className='items-price'>Rs.{totalPrice}.00</div>
                        {file==="shubham" ? localStorage.setItem('wallet',JSON.stringify(totalPrice)):''}
                    </div> 
                    <Link to='buynow' className='addtocart'>Buy Now</Link>  
                </div>
            </div>
            :''}
        </div>
        </div>
    )
}
export default Cart;