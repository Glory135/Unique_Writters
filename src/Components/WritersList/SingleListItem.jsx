import { ThumbUpOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";

export const SingleListItem = ({ writer }) => {
  const { theme } = useSelector(state=>state.theme);
  return (
    <div
      style={{
        border: "1px solid " + theme.primary,
      }}
      className='singleListItem'
    >
      <div className='img-con'>
        <img src={writer} alt='writer' />
      </div>
      <div className='details-con'>
        <div className='details-text-con'>
          <span className='name'>Bolaji Blessing </span>{" "}
          <span className='points' style={{ backgroundColor: theme.secondary }}>
            30 points
          </span>{" "}
        </div>
        <div className='details-stats-con'>
          <div className='details-stats-item'>
            <ThumbUpOutlined className='details-stats-icon' />
            <div className='details-stat-text'>120</div>
          </div>
        </div>
      </div>
    </div>
  );
};
