import React from "react";
import PageFooter from "../components/footer";
import Main from "../components/main";
import PageHeader from "../components/pageHeader";
import SideBar from "../components/sideBar";
import Slider from "../components/slider";

const Home = () => {
  return (
    <>
      <PageHeader />
      <Slider />
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <SideBar />
          </div>
          <Main />
        </div>
      </div>
      <PageFooter />
    </>
  );
};

export default Home;
