import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeFromCart} from '../../store/actions/cartActions';
class CartItem extends Component
{
    render() {
        const { item } = this.props; 
        let removeFromCart = this.props.removeFromCart;

        return (
        <div className="container m-3">
            <div className="row">
            <div className="col-xs-3">
                <img width="100" src={item.image} alt={item.title} />
            </div>
            <div className="col-xs-5">
                <p>{item.title}</p>
                <p>
                <em>
                    ({item.qty}) &times; {item.price} each
                </em>
                </p>
            </div>
            <div className="col-xs-4">
                <span className="remove glyphicon glyphicon-remove" onClick={() => {removeFromCart(item.id)}}></span> <br />
            </div>
            </div>
            
            
            
      </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (productId) => {
            dispatch(removeFromCart(productId));
        }
    }
};

export default connect(null, mapDispatchToProps)(CartItem);