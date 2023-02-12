import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
// import {ProductsContext} from '../Components/ProductsContext'
import {CartContext} from './CartContext'
const Navbar=()=>{
    // const {products}=useContext(ProductsContext);
    const {qty}=useContext(CartContext);
    const data=localStorage.getItem('user');
    return(
        <div>
        <nav>
        <ul className='left'>
            <li><Link to='/'>Shopping</Link></li>
            </ul>
            <ul className='right'>
                <li>
                    {data === null ? 
                    <Link to="login" className='logout'>Login</Link>
                    :<Link to="logout" className='logout'>Logout</Link>}
                    {data === null ? "":<a href="#welcome" className='logout'>Welcome:{data}</a>}
                    <Link to="cart">
                        <span className='shoppingcart'><i className="fa fa-shopping-cart"></i></span>
                        <span className='cartcount'>{qty}</span>
                    </Link>
                   
                    </li>
                </ul>
        </nav><br/><br/><br/><br/>
        </div>
    )
}
export default Navbar;