import React, { Component } from "react";

class Filters extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      maxPrice: 1000,
    };
  }

  changeSearchValue=(e)=>{
    this.setState({
        searchValue:e.target.value
    })
  }

  changeMaxRange=(e)=>{
    this.setState({
        maxPrice:e.target.value
    })
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={this.state.searchValue}
            onChange={this.changeSearchValue}
          ></input>
          <input
            type="range"
            step={100}
            min={0}
            max={1000}
            value={this.state.maxPrice}
            onChange={this.changeMaxRange}
          />
          {this.state.maxPrice}
          <button onClick={()=>{
            this.props.filterList(this.state.searchValue,this.state.maxPrice)
          }}>Apply Filters</button>
        </div>
      </div>
    );
  }
}

export default Filters;
