import React, { useState } from "react";
import getResult from "../api";

function SearchBar(props) {
  const initState = {
    inputValue: "",
  };

  const [state, setState] = useState(initState);

  const searchBtnClick = () => {
    //console.log(this.state.inputValue);
    //call api method to do the search
    getResult(state.inputValue).then((data) => {
      console.log(data);
      props.save(data.hits);
    });
    //this.setState({ todoValue: "" });
  };

  return (
    <div className="input-group mb-3 mt-3 ">
      <div className="input-group-prepend">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={searchBtnClick}
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
        onChange={(e) => setState({ inputValue: e.target.value })}
        value={state.inputValue}
      />
    </div>
  );
}
export default SearchBar;
