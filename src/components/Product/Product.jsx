import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchPhoneById} from './../../api/api';
import {fetchPhone} from './../../redux/actions/actions';
import {setItemInCart} from './../../redux/actions/actions';

class Product extends Component {

    componentDidMount(){
        debugger
        let id = this.props.match.params.id;
        fetchPhoneById(id)
        .then((response) => this.props.fetchPhone(response));
    }
    onBtnClick(){
        this.props.setItemInCart(this.props.item)
    }
    goBack(){
        this.props.history.goBack();
    }
    render() {
        return (
            
            <div className='product'>
                {
                    <>
                        <br/>
                        <br/>
                        <br/>

                        <strong><div>{this.props.item.title}</div></strong>
                        <div>{this.props.item.description}</div>
                        <div >
                            <img className='image' src={this.props.item.imageUrl} alt={this.props.item.title}/>
                        </div>
                        <button onClick={this.goBack.bind(this)} className='btn btn-info me-2'>back</button>
                        <button onClick={this.onBtnClick.bind(this)} className='btn btn-success '>add to cart</button>
                    </>
                    
                }
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        item: state.product.item
    }
}
const mapDispatchToProps = {
    fetchPhone,
    setItemInCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
