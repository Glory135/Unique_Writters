import React, { useContext } from "react";
import { SingleStoryItem } from "./SingleStoryItem";
import { data } from "../../data";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";

export const StoryList = () => {
  const { theme } = useContext(Context);
  return (
    <div className='storyList'>
      <div className='right-head'>
        Top <span style={{ borderTop: "2px solid " + theme.secondary }}>5</span>{" "}
        Stories
      </div>
      {data.slice(0, 5).map((i, index) => {
        return (
          <Link key={index} className='Link' to='/singlePost'>
            <SingleStoryItem item={i} />
          </Link>
        );
      })}
    </div>
  );
};
