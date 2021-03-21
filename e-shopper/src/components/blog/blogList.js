import React from 'react';
import PageFooter from '../footer';
import MainBlog from '../mainBlog';
import PageHeader from "../pageHeader";
import SideBar from '../sideBar';

const BlogList = () => {
    return (
        <>
        <PageHeader/>
        <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <SideBar />
          </div>
         <MainBlog/>
        </div>
      </div>
        <PageFooter/>
        </>
    );
};

export default BlogList;