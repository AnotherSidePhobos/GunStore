import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {setItemInCart} from './../../redux/actions/actions';
import {increaseCount} from './../../redux/actions/actions';

class ProductBuy extends Component {

    constructor(props){
        super(props)
    }


    onBtnClick(){
        debugger

        // let allItemsInCart = this.props.itemsInCart;
        // for (let i = 0; i < allItemsInCart.length; i++) {
        //     if (i.categoryId === this.props.item.categoryId) {
        //         this.props.increaseCount(item.id)
        //     }
        // }
        this.props.setItemInCart(this.props.item)

    }

    render() {
        let item = this.props.item;
        return (
            <>
                <Link className='btn btn-info me-2' to={`/product/${item.id}`}>more...</Link>
                <button onClick={this.onBtnClick.bind(this)} className='btn btn-success'>add to cart</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    debugger
    return{
        itemsInCart: state.cart.itemsInCart
    }
} 
const mapDispatchToProps = {
    setItemInCart,
    //increaseCount
} 


export default connect(mapStateToProps, mapDispatchToProps)(ProductBuy);