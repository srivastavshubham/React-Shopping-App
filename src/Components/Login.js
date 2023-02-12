import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import Navbar from './Navbar'
const EmpA={
    username:"shubham",
    password:"pass"
}
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            logged:''
        }
    }
    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    } 
    handleSubmit=(e)=>{
        e.preventDefault();
        const{username,password}=this.state;
        if((username===EmpA.username && password===EmpA.password))
           { 
            this.setState({logged:true})
            // alert('successful')
            localStorage.setItem('user',username);
            var num=10000
            let file=localStorage.getItem('user');
            if(file==='shubham')
            {
                localStorage.setItem('shubham',JSON.stringify(num));
            // alert('data saved');

            }
           }else{
               alert('Wrong user id or password');
           }
    }
    render() {
        if(this.state.logged){
            return <Redirect to='/'/>
        }
        return (
            <div>
            <Navbar/>
            <div className='login-container'>
            <h1 className='login-head'>Login</h1><br/>
              <form onSubmit={this.handleSubmit}>
                <span className="login-text">Username</span>
                <input type="text" 
                     name="username"
                     value={this.state.username} 
                     onChange={this.onChangeInput} 
                     placeholder="username.." />
                <br/><br/>
                <span className='login-text'>Password</span>
                <input type="text" 
                     name="password"
                     value={this.state.password} 
                     onChange={this.onChangeInput} 
                     placeholder="password.." />
                <br/><br/>
                <button className='addtocart'>Login</button><br/><br/>
              </form>
            </div>
            </div>
        )
    }
}
