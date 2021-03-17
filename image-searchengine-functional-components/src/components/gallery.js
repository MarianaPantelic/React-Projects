import React from "react";

function Gallery(props) {
  const previewPhoto = (index) => {
    props.clickedPhoto(props.photos[index].largeImageURL);
  };

  return (
    <div className="container">
      <div className="row">
        {props.photos.map((element, idx) => (
          <div
            key={element.id}
            className="card p-3 mx-auto mt-5"
            style={{ width: "18rem" }}
          >
            <img
              className="card-img-top"
              height="150"
              src={element.previewURL}
              alt={element.tags}
            />
            <div className="card-body">
              <h5 className="card-title">{element.user}</h5>
              <p className="card-text" style={{ minHeight: "70px" }}>
                {element.tags}
              </p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  previewPhoto(idx);
                }}
              >
                preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Gallery;
