import React, { useContext } from "react";
import { SingleStoryItem } from "./SingleStoryItem";
import { data } from "../../data";
import { Context } from "../../Context/Context";

export const StoryList = () => {
  const { theme } = useContext(Context);
  return (
    <div className='storyList'>
      <div className='right-head'>
        Top <span style={{ borderTop: "2px solid " + theme.secondary }}>5</span>{" "}
        Stories
      </div>
      {data.slice(0, 5).map((i, index) => {
        return <SingleStoryItem key={index} item={i} />;
      })}
    </div>
  );
};
