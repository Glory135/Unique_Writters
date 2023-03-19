import { SingleStoryItem } from "./SingleStoryItem";
import { data } from "../../Data/data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const StoryList = () => {
  const { theme } = useSelector(state=>state.theme);
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
