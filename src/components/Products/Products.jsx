import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhones } from "../../redux/actions/actions";
import { fetchPhonesApi } from "../../api/api";
import { fetchPhonesCount } from "../../api/api";
import App from "../../App";
import ProductBuy from './../ProductBuy/ProductBuy';
import {setCurrentPage} from './../../redux/actions/actions'
import {setTotalItemsCount} from './../../redux/actions/actions'

import s from './Products.module.css';


class Products extends Component {

  componentDidMount() {

    fetchPhonesApi(this.props.currentPage, this.props.pageSize)
    .then((response) => this.props.fetchPhones(response)
    );

    fetchPhonesCount()
    .then((response) => this.props.setTotalItemsCount(response.length))
    
  }

  onPageClick(p){
    this.props.setCurrentPage(p);
    fetchPhonesApi(p, this.props.pageSize)
    .then((response) => this.props.fetchPhones(response)
    );
    window.scrollTo(0, 0)
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalItemsCount / this.props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount ; i++) {
        pages.push(i);
    }
    return (
      
        <div className="main-area">
          <h1>Products</h1>




              {this.props.items.map((item) => (
                <div key={item.id}>
                  <div className='product-container'>
                    <div className='title__and-price'>
                      <div>
                        <strong><div>{item.title}</div></strong>
                      </div>
                      <div>
                        <div>Cost: {item.price}</div>
                      </div>
                    </div>
                  <div >
                        <img className='image' src={item.imageUrl} alt={item.title}/>
                  </div>
                  <ProductBuy item={item}/>

                  <div>{item.description}</div>
                </div>
                </div>
              ))}



        <div className='pagination'>
              {pages.map((p) => {
                return (
                  <span
                    onClick={() => {
                      this.onPageClick(p)
                    }}
                    className={this.props.currentPage === p && s.selected_page}
                  >
                    {p}
                  </span>
                );
              })}
        </div>

        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.product.items,
    pageSize: state.product.pageSize,
    totalItemsCount: state.product.totalItemsCount,
    currentPage: state.product.currentPage,
  };
};
const mapDispatchToProps = {
  fetchPhones,
  setCurrentPage,
  setTotalItemsCount
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
