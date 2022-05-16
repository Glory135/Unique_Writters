import { CommentOutlined, ThumbUpOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import { Context } from "../../Context/Context";

export const SingleStoryItem = ({ item }) => {
  const { theme } = useContext(Context);
  return (
    <div
      style={{ border: `1px solid` + theme.primary }}
      className='singleStoryItem'
    >
      <img src={item} alt='' />
      <div className='singleStoryItem-details-con'>
        <div className='singleStoryItem-details-item'>
          Title of Story wemkiwenmk
        </div>
        <div
          style={{ color: theme.secondary }}
          className='singleStoryItem-details-item author'
        >
          Author: Bolaji Blessing
        </div>
        <div className='singleStoryItem-details-item'>
          <div className='singleStoryItem-details-item-icon-con'>
            <ThumbUpOutlined /> <span>210</span>
          </div>
          <div className='singleStoryItem-details-item-icon-con'>
            <CommentOutlined /> <span>210</span>
          </div>
        </div>
      </div>
    </div>
  );
};
