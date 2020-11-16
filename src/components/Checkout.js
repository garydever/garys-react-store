import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './cart/CartItem'
import { checkOut, closeCart, resetCheckedOut } from '../store/actions/cartActions';
import { NavLink } from 'react-router-dom';
import './checkoutStyle.css';

class Checkout extends Component
{
    componentWillUnmount() {
        this.props.resetCheckedOut();
    }
    render() {
        this.props.closeCart();
        let total = 0;
        this.props.cart.map(item => total += item.price * item.qty);
        return (
            !this.props.checkedOut ?
                total > 0 ?
                    <div className="container">
                        <h2>Checkout</h2>
                        <br/>
                        <div className="row">
                        <div>
                           {
                                this.props.cart.map(item => {
                                    return (
                                        <div>
                                            <CartItem item={item} key={item.id}/>
                                            <hr />
                                        </div>
                                    )})
                            }
                        </div>
                        <div className="total-price">
                            <h4>Total: ${total.toFixed(2)}</h4>
                            <button className="btn btn-success" onClick={this.props.checkOut}>Checkout</button>
                        </div>
                        </div>
                    </div> :
                <div className="text-center mt-20"><NavLink className="" to="/"><h1>Back to store</h1></NavLink></div>
                :
                        <div className="text-center mt-20">
                            <h1>Thank you for your purchase!</h1>
                            <NavLink className="" to="/">Shop more</NavLink>
                        </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        cart: state.cart.cart,
        checkedOut: state.cart.checkedOut
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeCart: () => {
            dispatch(closeCart());
        },
        checkOut: () => {
            dispatch(checkOut());
        },
        resetCheckedOut: () => {
            dispatch(resetCheckedOut());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Checkout)