import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SideCart from './cart/SideCart';
import { toggleCart } from '../store/actions/cartActions';
import './navStyle.css';
class Navbar extends Component {
    toggleCart = () => {
        this.props.toggleCart();
    }

    render() {
        console.log("HERE's THECART");
        console.log(this.props.cart);
        
        let totalCost = 0;
        let totalItems = 0;
        this.props.cart.map(item => totalCost += item.price * item.qty);
        this.props.cart.map(item => totalItems += item.qty);
        this.props.cartUpdated();
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/"><strong className="store-logo">React Store</strong></NavLink>
                        <NavLink className="navbar-brand" to="/product/1">Product 1</NavLink>
                        <NavLink className="navbar-brand" to="/product/2">Product 2</NavLink>
                        <NavLink className="navbar-brand" to="/product/3">Product 3</NavLink>
                    </div>
                    <div className="product-links">
                        
                    </div>
                    <div className="pull-right">
                        <div onClick={() => this.toggleCart()} className="navCart text-center">
                        <i className="glyphicon glyphicon-shopping-cart"></i> My Cart <br/>
                                {
                                    this.props.cart.length > 0 ? (
                                        <span className="label label-default">{ totalItems } item{totalItems > 1 ? 's' : ''}: (${totalCost.toFixed(2)})</span>
                                    ) : null
                                }
                                
                            </div>
                        <div className="nav navbar-nav navbar-right">
                                <SideCart cartOpen={this.props.cartOpen}/>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
        cartOpen: state.cart.cartOpen,
        cartUpdated: () => { return true }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => {
            dispatch(toggleCart());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);