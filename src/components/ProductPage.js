import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addToCart} from "../store/actions/cartActions";
import {getProduct} from "../store/actions/productActions";
import './productStyle.css';


class ProductPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            qty: 1
        }
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }
    componentDidMount() {
        this.props.getProduct(this.props.match.params.id);
    }
    increase() {
        this.setState({
            qty: this.state.qty + 1
        })
        }
    decrease() {
        if (this.state.qty > 1) {
            this.setState({
                qty: this.state.qty - 1
            })}
    }

    render() {
        
        let product = this.props.currentProduct;
        //product.qty = this.state.qty;
        let qty = this.state.qty;
        const addToCart = this.props.addToCart;

        return (
            <div className="container">
                <h2>{product.title}</h2>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <img className="product-image" src={product.image} alt={product.title} />
                    </div>
                    <div className="col-md-8">
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="product-price">${product.price}</h5> <br/>
                        <p className="qtyLabel">Quantity</p>
                        <div className="quantity-picker"> 
                            <button onClick={this.decrease} className="qtyBtn btn">-</button>
                                <div className="quantity-number">{qty}</div>
                            <button onClick={this.increase} className="qtyBtn btn">+</button> 
                        </div>
                            
                        
                        <br/>
                        <div className="btn btn-success" onClick={() => addToCart(product, qty)}>
                            Add to Cart
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product, qty) => {
            dispatch(addToCart(product, qty));
        },
        getProduct: (productId) => {
            dispatch(getProduct(productId));
        },
    }
};

const mapStateToProps = (state) => {

    return {
        currentProduct: state.product.currentProduct
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
