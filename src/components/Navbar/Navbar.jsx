import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartBlock from './../CartBlock/CartBlock';
import { connect } from 'react-redux';



class Navbar extends Component {

    constructor(props){
        super(props)
        this.onLogoClick = this.onLogoClick.bind(this);
    }
    onLogoClick(){
        alert('logo clicked')
        
    }

    render() {
    let commonPrice = 0;
    this.props.itemsInCart.map(item => (
        commonPrice += Number(item.price)
    ))
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className='container'>
        <Link className="navbar-brand" to="/" onClick={this.onLogoClick}>the shop</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ulHeader">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                </li>
                <li className="nav-item">
                    <CartBlock count={this.props.itemsInCart.length} commonPrice={commonPrice}/>
                </li>
            </ul>
        </div>
        </div>

        </nav>
    )
}

}

const mapStateToProps = (state) => {
    debugger
    return{
        itemsInCart: state.cart.itemsInCart,
    }
} 
// const mapDispatchToProps = {
//     setCommonPrice
// } 



export default connect(mapStateToProps, null)(Navbar);


