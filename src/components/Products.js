import React, { Component } from "react";
import Filters from "./Filters";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      filteredProducts:[],
      loading: false,
    };
  }
  componentDidMount() {
    const getProductsData = async () => {
      try {
        this.setState({
          loading: true,
        });
        const response = await fetch("https://fakestoreapi.com/products");
        const productsJSON = await response.json();
        this.setState({
          products: productsJSON,
          filteredProducts:productsJSON,
          loading: false,
        });
      } catch (err) {
        console.log("Error in Api", err);
      }
    };
    getProductsData();
  }

  filterList = (searchText, maxPrice) => {
    const filteredProducts = this.state.products.filter((product) => {
      return (
        (product.description.includes(searchText) ||
          product.title.includes(searchText)) &&
        product.price <= maxPrice
      );
    });
    this.setState({
       filteredProducts:filteredProducts
    })
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading....</h1>;
    }
    return (
      <div>
        <Filters filterList={this.filterList}/>
        {this.state.filteredProducts.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.image} width={200} height={200}></img>
              <h1>{product.price}</h1>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Products;
