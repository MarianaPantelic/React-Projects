import React, { useState } from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/searchbar";
import Gallery from "./components/gallery";
import PreviewPhoto from "./components/previewImage";

function App() {
  const initState = {
    photos: [],
    clickedURL: "",
  };

  const [state, setState] = useState(initState);

  const savePhotos = (results) => {
    setState({ photos: results, clickedURL: "" });
  };

  const clickedPhoto = (url) => {
    console.log(url);
    setState({ ...state, clickedURL: url });
  };
  console.log(state);

  return (
    <div className="container">
      <div className="row">
        <h1 className="mx-auto mt-5">Image Search Engine</h1>
        <SearchBar save={savePhotos} />
        {state.photos.length && state.clickedURL ? (
          <PreviewPhoto photo={state.clickedURL} />
        ) : null}
        <Gallery photos={state.photos} clickedPhoto={clickedPhoto} />
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
