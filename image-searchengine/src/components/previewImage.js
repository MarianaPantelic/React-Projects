import React from "react";

class PreviewPhoto extends React.Component {
  componentWillUnmount = () => {
    console.log("Preview component is going to be deleted from the DOM");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <img
              className="card-img-top"
              width="200"
              src={this.props.photo}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PreviewPhoto;
