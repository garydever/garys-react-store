import React, { Component } from 'react'
import './CartStyle.css';
import { connect } from 'react-redux';
import { toggleCart } from '../../store/actions/cartActions';
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';

class SideCart extends Component {
    
    toggleCart = () => {
        this.props.toggleCart();
    }

    render() {
        this.props.cartUpdated();
        let total = 0;
        let totalItems = 0;
        this.props.cart.map(item => total += item.price * item.qty);
        this.props.cart.map(item => totalItems += item.qty);
        return (
            
            <div className={this.props.cartOpen ? 'cart cart-open' : 'cart' }>
                <div className="cart-header">
                    <button onClick={this.toggleCart}><span className="glyphicon glyphicon-arrow-right"></span></button>
                    <h1>Cart</h1>
                    {totalItems === 0 ? '' : 
                        <p>You have {totalItems} item{totalItems === 1 ? '' : 's'} in your cart.</p>
                    }
                    
                </div>
                <div>
                {
                        this.props.cart.map(item => {
                            return (
                            <CartItem item={item} key={item.id}/>
                            )
                        })
                    }
                </div>
                {totalItems === 0 ? <h3>Cart is empty!</h3> : 
                    <div className="cart-footer">
                        <h3>Subtotal: ${total.toFixed(2)}</h3> <br />
                        <NavLink to="/checkout">
                            <button className="btn btn-primary">Checkout</button>
                        </NavLink>
                    </div>
                }
                
            </div>
        )
    }  
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => {
            dispatch(toggleCart());
        }
    }
};

const mapStateToProps = (state) => {
    return {
        cartUpdated: () => { return true },
        cart: state.cart.cart
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(SideCart);
