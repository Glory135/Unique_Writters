import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { StoryList } from "../StoryList/StoryList";
import { WritersList } from "../WritersList/WritersList";

export const RightBar = () => {
  const { theme } = useContext(Context);
  return (
    <div className='rightBar'>
      <div className='writer-list-container'>
        <WritersList />
      </div>
      <div className='story-list-container'>
        <StoryList />
      </div>
    </div>
  );
};
