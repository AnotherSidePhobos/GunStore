const FETCH_PHONES_START = 'FETCH_PHONES_START';
const FETCH_PHONE = 'FETCH_PHONE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT';
const FETCH_ITEMS_BY_CATEGORY = 'FETCH_ITEMS_BY_CATEGORY';
const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
const UPDATE_SEARCH_FIELD = 'UPDATE_SEARCH_FIELD';
const UPDATE_SEARCH_ITEMS = 'UPDATE_SEARCH_ITEMS';

const initialState = {
    items: [],
    item: {},
    pageSize: 3,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    searchFiled: ''
}




export const productReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_PHONES_START:
            return{
                ...state,
                items: action.payload
            }
        case FETCH_PHONE:
            return{
                ...state,
                item: action.payload
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_ITEMS_COUNT:
            return{
                ...state,
                totalItemsCount: action.count
            }
        case FETCH_ITEMS_BY_CATEGORY:
            debugger
            return{
                ...state,
                items: action.itemsByCategory
            }
        case SET_PAGE_SIZE:
            return{
                ...state,
                pageSize: action.pageSize
            }
        case UPDATE_SEARCH_FIELD:
            return{
                ...state,
                searchFiled: action.payload
            }
        case UPDATE_SEARCH_ITEMS:
            return{
                ...state,
                items: action.payload
            }
    
        default:
            return state
    }
}