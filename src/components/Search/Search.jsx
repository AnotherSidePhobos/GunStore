import React, { Component } from 'react'
import { connect } from 'react-redux';
import {updateSearchField} from './../../redux/actions/actions';
import {fetchProductApiAll} from './../../api/api';
import {fetchPhonesApi} from './../../api/api';
import {fetchPhonesCount} from './../../api/api';
import {fetchItemsBySearch} from './../../redux/actions/actions';
import {fetchPhones} from './../../redux/actions/actions';
import {setTotalItemsCount} from './../../redux/actions/actions';
import {setCurrentPage} from './../../redux/actions/actions';
import {setPageSize} from './../../redux/actions/actions';


class Search extends Component {

    constructor(props){
        super(props)

        this.onInputChanged = this.onInputChanged.bind(this);
        // this.onBtnClick = this.onBtnClick.bind(this);
    }

    onInputChanged(e){
        if (!e.target.value) {
            debugger

            fetchPhonesApi(1, 3)
            .then((response) => this.props.fetchPhones(response)
            );
        
            fetchPhonesCount()
            .then((response) => this.props.setTotalItemsCount(response.length))
            .then((response) => this.props.setPageSize(3))
            .then((response) => this.props.setCurrentPage(1))
        }else{

            debugger
            let searchTerm = e.target.value;
            this.props.updateSearchField(searchTerm)
            
            fetchProductApiAll()
            .then((responce) => this.props.fetchItemsBySearch(responce, this.props.searchF))
        }
        


    }
    render() {
        return (
            <div>
                <form className='searchForm'>
                    <input placeholder='search...' onChange={this.onInputChanged}/>
                    {/* <button onClick={this.onBtnClick}>Search</button> */}
                </form>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        searchF: state.product.searchFiled
    }
}
let mapDispatchToProps = {
    updateSearchField,
    fetchItemsBySearch,

    fetchPhones,
    setTotalItemsCount,
    setCurrentPage,
    setPageSize
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
