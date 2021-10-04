import {fetchPhonesApi} from './../../api/api';

const Add_To_Cart = 'ADD_TO_CART';
const Delete_from_Cart = 'DELETE_FROM_CART';
const FETCH_PHONES_START = 'FETCH_PHONES_START';
const FETCH_PHONE = 'FETCH_PHONE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT';
const FETCH_ITEMS_BY_CATEGORY = 'FETCH_ITEMS_BY_CATEGORY';
const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
const UPDATE_SEARCH_FIELD = 'UPDATE_SEARCH_FIELD';
const UPDATE_SEARCH_ITEMS = 'UPDATE_SEARCH_ITEMS';

export const fetchPhones = (items) => {
    return {
        type: FETCH_PHONES_START,
        payload: items
    }
}
export const fetchPhone = (item) => {
    return {
        type: FETCH_PHONE,
        payload: item
    }
}

export const setItemInCart = (item) => {
    return {
        type: Add_To_Cart,
        payload: item
    }
}
export const setItemOutCart = (item) => {
    return {
        type: Delete_from_Cart,
        payload: item
    }
}
export const setCurrentPage = (page) => {
    return{
        type: SET_CURRENT_PAGE, 
        page
    }
}
export const setTotalItemsCount = (count) => {
    return{
        type: SET_TOTAL_ITEMS_COUNT, 
        count
    }
}
export const fetchProductsByCategory = (itemsByCategory) => {
    return{
        type: FETCH_ITEMS_BY_CATEGORY,
        itemsByCategory
    }
}
export const setPageSize = (pageSize) => {
    return{
        type: SET_PAGE_SIZE,
        pageSize
    }
}
export const updateSearchField = (searchTerm) => {
    debugger
    return{
        type: UPDATE_SEARCH_FIELD,
        payload: searchTerm
    }
}
export const fetchItemsBySearch = (items, searchTerm) => {

    debugger
    let newItems = items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    debugger
    return{
        type: UPDATE_SEARCH_ITEMS,
        payload: newItems
    }
}


// export const increaseCount = (id) => {
//     debugger
//     return{
//         type: SET_PAGE_SIZE,
//         pageSize
//     }
// }