import { StoryList } from "../StoryList/StoryList";
import { WritersList } from "../WritersList/WritersList";

export const RightBar = () => {
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
