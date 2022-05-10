import React, { useContext } from "react";
import { Context } from "../../Context/Context";

export const SingleListItem = ({ writer }) => {
  const { theme } = useContext(Context);
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
        <span className='name'>Bolaji Blessing </span>{" "}
        <span className='points' style={{ backgroundColor: theme.secondary }}>
          30 points
        </span>{" "}
      </div>
    </div>
  );
};
