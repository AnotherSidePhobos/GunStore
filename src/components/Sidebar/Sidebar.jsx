import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchProductsByCategory} from './../../redux/actions/actions';
import {setTotalItemsCount} from './../../redux/actions/actions';
import {setPageSize} from './../../redux/actions/actions';
import {setCurrentPage} from './../../redux/actions/actions';
import {fetchPhones} from './../../redux/actions/actions';
import {fetchProductsByCategoryApi} from './../../api/api';
import {fetchPhonesCountByCat} from './../../api/api';
import {fetchPhonesApi} from './../../api/api';
import {fetchPhonesCount} from './../../api/api';
import { Link } from 'react-router-dom';
import Search from './../Search/Search';


class Sidebar extends Component {

    constructor(props){
        super(props)

         this.onHotGunClick = this.onHotGunClick.bind(this);
         this.onCoolGunClick = this.onCoolGunClick.bind(this);
         this.onWithoutFiltClick = this.onWithoutFiltClick.bind(this);

    }



    onHotGunClick(){
        debugger
        fetchProductsByCategoryApi(2)
        .then((response) => this.props.fetchProductsByCategory(response))

        fetchPhonesCountByCat(2)
        .then((response) => this.props.setTotalItemsCount(response.length))
        .then((response) => this.props.setPageSize(response.length))
    }
    onCoolGunClick(){
        
        fetchProductsByCategoryApi(1)
        .then((response) => this.props.fetchProductsByCategory(response))

        fetchPhonesCountByCat(1)
        .then((response) => this.props.setTotalItemsCount(response.length))
        .then((response) => this.props.setPageSize(response.length))


    }
    onWithoutFiltClick(){

        fetchPhonesApi(1, 3)
        .then((response) => this.props.fetchPhones(response)
        );
    
        fetchPhonesCount()
        .then((response) => this.props.setTotalItemsCount(response.length))
        .then((response) => this.props.setPageSize(3))
        .then((response) => this.props.setCurrentPage(1))
        
    }
    
    render() {

        return (
            <div className='sidbar'>
                <br/>
                <br/>
                <h4>Sidebar</h4>
                <Search/>
                <div>
                    <Link to="/"><button onClick={this.onWithoutFiltClick} className='btn btn-secondary'>Сбросить фильтры</button></Link>
                </div>
                <div>
                    <button onClick={this.onHotGunClick} className='btn btn-secondary'>Горячее оружее</button>
                </div>
                <div>
                    <button  onClick={this.onCoolGunClick} className='btn btn-secondary'>Охлаждённое оружее</button>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        pageSize: 3,
        currentPage: 1
    }
}
let mapDispatchToProps = {
    fetchProductsByCategory,
    setTotalItemsCount,
    setPageSize,
    fetchPhones,
    setCurrentPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
