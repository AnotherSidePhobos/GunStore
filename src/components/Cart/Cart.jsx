import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setItemOutCart} from './../../redux/actions/actions';


class Cart extends Component {

    

    onDeleteClick(item){
        this.props.setItemOutCart(item)

    }

    render() {

        
        let commonPrice = 0;
        this.props.itemsInCart.map(item => (
            commonPrice += Number(item.price)
        ))
        return (
            <>
                <h1 className='cart__title'>
                    Cart
                </h1>
                <div className='gods__cart'>
                    <h4>Items in the cart: {this.props.itemsInCart.length}</h4>
                    
                    <table className='table'>
                        <thead>
                            <tr>
                                <td>title</td>
                                <td>image</td>
                                <td>price</td>
                                <td>amount</td>
                                <td></td>
                            </tr>
                        </thead>
                        {
                            this.props.itemsInCart.map((item) => (
                        <tbody>
                            <tr>
                                <td>{item.title}</td>
                                <td><img className='image__min' src={item.imageUrl}/></td>
                                <td>{item.price}</td>
                                <td>1</td>
                                <td><button onClick={() => {this.onDeleteClick(item)}} className='btn btn-danger delete__btn'>&times;</button></td>
                            </tr>
                        </tbody>
                            ))
                        }
                    </table>
                    <div>
                        Common price: {commonPrice}
                    </div>
                    <button className='btn btn-success mt-5'>continue order</button>
                </div>

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
    setItemOutCart
} 
 
export default connect(mapStateToProps, mapDispatchToProps)(Cart); 

