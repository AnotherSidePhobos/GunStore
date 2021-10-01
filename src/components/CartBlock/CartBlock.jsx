import React from 'react';
import { Link } from 'react-router-dom';
import {ImCart} from 'react-icons/im';



function CartBlock({count, commonPrice}) {
    return (
        <div className='cart__block'>
            <span className="mt-2" >{count}</span>
            <span>
                <Link className="nav-link" to="/cart"><ImCart className='cart-block__icon'/></Link>
            </span>
            <span  className='nav-link cart-block__price'>{commonPrice} руб.</span>
        </div>
    )
}

export default CartBlock
