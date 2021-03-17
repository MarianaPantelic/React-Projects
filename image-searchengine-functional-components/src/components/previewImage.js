import React from "react";

function PreviewPhoto(props) {
  React.useEffect(() => {
    return () => {
      console.log("Preview component is going to be deleted from the DOM");
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto">
          <img className="card-img-top" width="200" src={props.photo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PreviewPhoto;
