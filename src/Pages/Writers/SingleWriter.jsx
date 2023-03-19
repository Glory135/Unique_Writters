import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";

const SingleWriter = ({ data }) => {
  const { theme, dark } = useSelector(state=>state.theme);
  return (
    <div
      style={{
        // border: "1px solid " + theme.primary,
        backgroundColor: dark ? theme.primary : "transparent",
      }}
      className='singleWriter'
    >
      <img src={data} alt='' />
      <div className='line'></div>
      <div className='details-container'>
        <div className='details-item name'>
          {" "}
          Bolaji Blessing <span>(BBB)</span>{" "}
        </div>
        <div className='details-item'>2000 Followers</div>
        <div className='details-item'>Score: 3900</div>
        <Button size='small' className='btn' variant='contained'>
          Follow
        </Button>
      </div>
    </div>
  );
};

export default SingleWriter;
