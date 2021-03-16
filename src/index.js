import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/searchbar";
import Gallery from "./components/gallery";
import PreviewPhoto from "./components/previewImage";

class App extends React.Component {
  state = {
    photos: [],
    clickedURL: "",
  };

  savePhotos = (results) => {
    this.setState({ photos: results, clickedURL: "" });
  };

  clickedPhoto = (url) => {
    this.setState({ clickedURL: url });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="mx-auto mt-5">Image Search Engine</h1>
          <SearchBar save={this.savePhotos} />
          {this.state.photos.length && this.state.clickedURL ? (
            <PreviewPhoto photo={this.state.clickedURL} />
          ) : null}
          <Gallery
            photos={this.state.photos}
            clickedPhoto={this.clickedPhoto}
          />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
