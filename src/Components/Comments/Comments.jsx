import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";

const Comments = () => {
  const { theme } = useContext(Context);
  return (
    <div className='comments-container'>
      <div id='comments' className='comments-head'>
        COMMENTS <span style={{ backgroundColor: theme.primary }}>250</span>
      </div>
      <div className='comments-body'></div>
      <div className='btn-container'>
        <Link className='Link' to='/thread'>
          <Button size='small' color='primary'>
            show more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Comments;
