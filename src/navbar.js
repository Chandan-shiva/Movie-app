import { Component } from "react";
import navstyle from './navbar.module.css';

export default class Navbar extends Component{
    render(){
        return(
            <>
            <div className={navstyle.main}>
                <div className={navstyle.title}>Movie App</div>
                <div>
                    <img alt="cart" src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png" className={navstyle.cart}/>
                    <span className={navstyle.cartCount}>{this.props.cartCount}</span>
                </div>
            </div>
            </>
        )
    }
}