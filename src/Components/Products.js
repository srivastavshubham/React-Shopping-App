import React,{useContext} from 'react'
import { Button} from 'reactstrap';
import {Link} from 'react-router-dom'
import {ProductsContext} from '../Components/ProductsContext'
import {CartContext} from '../Components/CartContext'
import Navbar from './Navbar'
const Products=()=>{
    const {products}=useContext(ProductsContext);
    const {dispatch}=useContext(CartContext);
    const clothesData=products.filter((result)=>result.name==="Clothes")
    const accessoriesData=products.filter((result)=>result.name==="Accessories")
    const homeData=products.filter((result)=>result.name==="Home")
    const groceryData=products.filter((result)=>result.name==="Grocery")
    const data=localStorage.getItem('user');

    return(
        <div>
        <Navbar/>
        <div className="row product-tab">
        <div className="col-2">
    <div className="nav flex-column nav-pills side" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">All Category</a>
      <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Clothes</a>
      <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Accessories</a>
      <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Grocery</a>
      <a className="nav-link" id="v-pills-shubham-tab" data-toggle="pill" href="#v-pills-shubham" role="tab" aria-controls="v-pills-home" aria-selected="false">Home & Kitchen</a>

    </div>
  </div>
         <div className="col-10">
    <div className="tab-content" id="v-pills-tabContent">
      <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
          <div className='container'>
        <div className='products'>
            {products.map((product)=>(
               <div className='product' key={product.id}>
                   <div className='product-image'>
                       <img src={product.image} alt='pic not found'/>
                    </div>
                    <div className='product=details'>
                        <div className='product-name'>
                            {product.name}
                        </div>
                        <div className='product-price'>
                            Rs.{product.price}.00
                        </div>
                    </div>
                    <div className='qyantity-available'>Qty avail: {product.available}</div>
                    <div >
                    {data===null ? <button type="button" className='addtocartdisable' disabled>Add to cart</button>:
                    <Button className='addtocart'
                     onClick={()=>dispatch({type:'ADD_TO_CART',id:product.id,product})}
                     >Add to cart</Button>}
                    <Link to='buynow'><Button className='buynow'
                     onClick={()=>dispatch({type:'BUY_NOW',id:product.id,product})}
                    >Buy now</Button></Link></div> 
                    {product.status==='hot' ? <div className='hot'>Hot</div>:''}
                    {product.status==='new' ? <div className='new'>New</div>:''} 
                </div> 
            ))}  
         </div>  
         </div> 
          </div>
      <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
      <div className='container'>
        <div className='products'>
            {clothesData.map((product)=>(
               <div className='product' key={product.id}>
                   <div className='product-image'>
                       <img src={product.image} alt='pic not found'/>
                    </div>
                    <div className='product=details'>
                        <div className='product-name'>
                            {product.name}
                        </div>
                        <div className='product-price'>
                            Rs.{product.price}.00
                        </div>
                    </div>
                    <div className='qyantity-available'>Qty avail: {product.available}</div>
                    <div >
                    {data===null ? <button type="button" className='addtocartdisable' disabled>Add to cart</button>:
                    <Button className='addtocart'
                     onClick={()=>dispatch({type:'ADD_TO_CART',id:product.id,product})}
                     >Add to cart</Button>}
                    <Link to='buynow'><Button className='buynow'
                     onClick={()=>dispatch({type:'BUY_NOW',id:product.id,product})}
                    >Buy now</Button></Link></div> 
                    {product.status==='hot' ? <div className='hot'>Hot</div>:''}
                    {product.status==='new' ? <div className='new'>New</div>:''} 
                </div> 
            ))}  
         </div>  
         </div> 
      </div>
      <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
      <div className='container'>
        <div className='products'>
            {accessoriesData.map((product)=>(
               <div className='product' key={product.id}>
                   <div className='product-image'>
                       <img src={product.image} alt='pic not found'/>
                    </div>
                    <div className='product=details'>
                        <div className='product-name'>
                            {product.name}
                        </div>
                        <div className='product-price'>
                            Rs.{product.price}.00
                        </div>
                    </div>
                    <div className='qyantity-available'>Qty avail: {product.available}</div>
                    <div >
                    {data===null ? <button type="button" className='addtocartdisable' disabled>Add to cart</button>:
                    <Button className='addtocart'
                     onClick={()=>dispatch({type:'ADD_TO_CART',id:product.id,product})}
                     >Add to cart</Button>}
                    <Link to='buynow'><Button className='buynow'
                     onClick={()=>dispatch({type:'BUY_NOW',id:product.id,product})}
                    >Buy now</Button></Link></div> 
                    {product.status==='hot' ? <div className='hot'>Hot</div>:''}
                    {product.status==='new' ? <div className='new'>New</div>:''} 
                </div> 
            ))}  
         </div>  
         </div> 
      </div>
      <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
      <div className='container'>
        <div className='products'>
            {groceryData.map((product)=>(
               <div className='product' key={product.id}>
                   <div className='product-image'>
                       <img src={product.image} alt='pic not found'/>
                    </div>
                    <div className='product=details'>
                        <div className='product-name'>
                            {product.name}
                        </div>
                        <div className='product-price'>
                            Rs.{product.price}.00
                        </div>
                    </div>
                    <div className='qyantity-available'>Qty avail: {product.available}</div>
                    <div >
                    {data===null ? <button type="button" className='addtocartdisable' disabled>Add to cart</button>:
                    <Button className='addtocart'
                     onClick={()=>dispatch({type:'ADD_TO_CART',id:product.id,product})}
                     >Add to cart</Button>}
                    <Link to='buynow'><Button className='buynow'
                     onClick={()=>dispatch({type:'BUY_NOW',id:product.id,product})}
                    >Buy now</Button></Link></div> 
                    {product.status==='hot' ? <div className='hot'>Hot</div>:''}
                    {product.status==='new' ? <div className='new'>New</div>:''} 
                </div> 
            ))}  
         </div>  
         </div> 
      </div>
      <div className="tab-pane fade" id="v-pills-shubham" role="tabpanel" aria-labelledby="v-pills-shubham-tab">
      <div className='container'>
        <div className='products'>
            {homeData.map((product)=>(
               <div className='product' key={product.id}>
                   <div className='product-image'>
                       <img src={product.image} alt='pic not found'/>
                    </div>
                    <div className='product=details'>
                        <div className='product-name'>
                            {product.name}
                        </div>
                        <div className='product-price'>
                            Rs.{product.price}.00
                        </div>
                    </div>
                    <div className='qyantity-available'>Qty avail: {product.available}</div>
                    <div >
                    {data===null ? <button type="button" className='addtocartdisable' disabled>Add to cart</button>:
                    <Button className='addtocart'
                     onClick={()=>dispatch({type:'ADD_TO_CART',id:product.id,product})}
                     >Add to cart</Button>}
                    <Link to='buynow'><Button className='buynow'
                     onClick={()=>dispatch({type:'BUY_NOW',id:product.id,product})}
                    >Buy now</Button></Link></div> 
                    {product.status==='hot' ? <div className='hot'>Hot</div>:''}
                    {product.status==='new' ? <div className='new'>New</div>:''} 
                </div> 
            ))}  
         </div>  
         </div> 
      </div>
    </div>
  </div>
         </div>
         </div>
    )
}
export default Products;