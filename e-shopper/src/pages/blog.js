import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import BlogList from "../components/blog/blogList";
import BlogSingle from "../components/blog/blogSingle";

const Blog = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}></Route>
      <Route path={path + "/blogList"}>
        <BlogList />
      </Route>
      <Route path={path + "/blogSingle"}>
        <BlogSingle />
      </Route>
    </Switch>
  );
};

export default Blog;
