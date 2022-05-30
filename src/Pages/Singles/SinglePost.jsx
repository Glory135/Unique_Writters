import { CommentOutlined, ThumbUp } from "@material-ui/icons";
import React from "react";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import img from "../../images/img-7.jpg";

export const SinglePost = () => {
  return (
    <div className='page'>
      <div className='breadCrumb-container'>
        <BreadCrumbs
          payload={[
            { path: "home", link: "/" },
            { path: "singlePost", link: "/singlePost" },
          ]}
        />
      </div>
      <div className='singlePost-body'>
        <div
          style={{ backgroundImage: `url(${img})` }}
          className='post-img-container'
        ></div>
        <div className='post-title-container'>
          <h3>This Is the title of the Story</h3>
        </div>
        <div className='post-desc-container'>
          <div className='post-dest-item author'>
            Author: <span>Bolaji Blessing</span>{" "}
          </div>
          <div className='post-desc-item time'>1st May, 2022</div>
          <div className='post-desc-item actions'>
            <div className='action-item'>
              <ThumbUp /> 2508jbjhjh
            </div>
            <div className='action-item'>
              <CommentOutlined /> 250
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
