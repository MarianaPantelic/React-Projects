import React from "react";
import getResult from "../api";

class SearchBar extends React.Component {
  state = {
    inputValue: "",
  };

  searchBtnClick = () => {
    //console.log(this.state.inputValue);
    //call api method to do the search
    getResult(this.state.inputValue).then((data) => {
      console.log(data);
      this.props.save(data.hits);
    });
    //this.setState({ todoValue: "" });
  };

  render() {
    return (
      <div className="input-group mb-3 mt-3 ">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={this.searchBtnClick}
          >
            Search
          </button>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search Word"
          aria-label=""
          aria-describedby="basic-addon1"
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          value={this.state.inputValue}
        />
      </div>
    );
  }
}
export default SearchBar;
