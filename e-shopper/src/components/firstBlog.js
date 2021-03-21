import React from 'react';

const FirstBlog = () => {
    return (
    <>
        <h3>Girls Pink T Shirt arrived in store</h3>
        <div className="post-meta">
            <ul>
                <li><i className="fa fa-user"></i> Mac Doe</li>
                <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
            </ul>
            <span>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
            </span>
        </div>
        <a href="#">
            <img src="/images/blog/blog-one.jpg" alt="Blog One"/>
        </a>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        
    </>
    );
};

export default FirstBlog;