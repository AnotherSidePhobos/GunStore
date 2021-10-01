const Add_To_Cart = 'ADD_TO_CART';
const Delete_from_Cart = 'DELETE_FROM_CART';
const Set_Common_Price = 'SET_COMMON_PRICE';



let initialState = {
    itemsInCart: [],
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case Add_To_Cart:
            return{
                ...state,
                itemsInCart: [...state.itemsInCart, action.payload]
            }
        case Delete_from_Cart:
            let idForRemove;
            let newArr;
            {
                idForRemove = action.payload.id;
                newArr = state.itemsInCart.filter((item) => item.id !== idForRemove)
            }
            return{
                ...state,
                itemsInCart: newArr
            }


    
        default:
            return state;
    }
}

