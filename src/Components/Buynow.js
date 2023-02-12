import React, { Component } from 'react'
// import CartContext from './CartContext';
import Navbar from './Navbar'
export default class Buynow extends Component {
    // static contextType=CartContext
    constructor() {
        super();
        this.state = {
           data:{
           cardNumber:'',
           cardName:'',
           cardExpiry:'',
           cvv:''
        },
        random:'',
        wallet:''
    }
    }
    // componentDidMount(){
    // const user=this.context
    // console.log('hello',user);
    // }
    handleInput = (e) => {
        this.setState({ 
            data:{...this.state.data,[e.target.name]: e.target.value }});
    } 
    handleSubmit=(e)=>{
        e.preventDefault();
        const data=Math.floor(Math.random() * parseInt("9".repeat(15)))
        this.state.random=data
        alert("Order placed successfully\nYour order Id is: #" +this.state.random)
        console.log(this.state.data);
    }
    handleCheckout=()=>{
        let value
        let walletValue
        const randomData=Math.floor(Math.random() * parseInt("9".repeat(15)))
        this.state.random=randomData
        let data=localStorage.getItem('user')
        if(data==='shubham'){
            value=JSON.parse(localStorage.getItem('shubham'))
            walletValue=JSON.parse(localStorage.getItem('wallet'))
        }
        value=value-walletValue
        localStorage.setItem('shubham',JSON.stringify(value));
        this.setState({wallet:value});
        // console.log(value-1);
        alert("Order placed successfully\nYour order Id is: #" +this.state.random)

    }
    render() {
        const wallet=localStorage.getItem('shubham');
        this.state.wallet=wallet
        return (
            <div>
            <Navbar/>
            <div className='payment'>
            <h3 className='buynow-head'>Payment Option</h3><br/>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">By Card</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">By Wallet</a>
            </li>
            </ul>
            <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h4>Payment By Card</h4><br/>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label  className="col-sm-5 col-form-label">Card No.</label>
                            <div className="col-sm-7">
                            <input type="text" className="form-control" onChange={this.handleInput} name='cardNumber'
                            required size="16"
                            minLength="16" maxLength="16"
                            placeholder="enter 16 digit card no.."/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label  className="col-sm-5 col-form-label">Card Expiry Date</label>
                            <div className="col-sm-7">
                            <input type="month" className="form-control" onChange={this.handleInput} name='cardExpiry' placeholder="mm/yy"/>
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label  className="col-sm-5 col-form-label">CVV No.</label>
                            <div className="col-sm-7">
                            <input type="text" className="form-control" onChange={this.handleInput} name='cvv'
                             required size="3"
                             minLength="3" maxLength="3"
                            placeholder="enter cvv number.."/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label">Card Holder Name</label>
                            <div className="col-sm-7">
                            <input type="text" className="form-control" onChange={this.handleInput} name='cardName' placeholder="card holder name.."/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-5">
                            <button type="submit" className="btn btn-primary">Checkout</button>
                            </div>
                        </div>
                        </form>
                        </div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <h4>Payment By  Your Wallet</h4><br/>
            <p>Your current wallet amount is Rs.{this.state.wallet}</p>
            <button type="submit" onClick={this.handleCheckout} className="btn btn-primary">Checkout</button>
            </div>
            </div>
            </div>  
            {/* {shoppingCart.length>0 ? 
            <div className='buynow-cart-summary'>
                <div className='summary'>
                    <h2 className='buynow-cart-head'>Cart Summary</h2>
                    <div className='total-items'>
                        <div className='items'>Total Items</div>
                        <div className='items-count'>{qty}</div>
                    </div>
                    <div className='total-price-section'>
                        <div className='just-title'>Total Price</div>
                        <div className='items-price'>Rs.{totalPrice}.00</div>
                    </div> 
                </div>
            </div>
            :''} */}
    </div>
        )
    }
}

