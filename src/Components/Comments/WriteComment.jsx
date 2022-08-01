import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../../Context/Context";
// import DP from "../../images/DP.svg";

export const WriteComment = ({ user }) => {
    const {theme} = useContext(Context)
  return (
    <div className='writeComment-container'>
      <div className='user-details-container'>
        <img src={user.user.image.png} alt='' />
      </div>
      <div className='write-container'>
        <textarea placeholder="write your comment here..." maxlength="500" style={{color:theme.text}} name='' id=''>
        </textarea>
      </div>
      <div className='actions-container'>
        <Button size='small' color='primary' variant='contained'>Submit</Button>
        <Button size='small' color='secondary' variant='contained'>cancel</Button>
      </div>
    </div>
  );
};
