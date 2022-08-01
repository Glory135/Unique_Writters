import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import { data } from "../../DummyData/commentsData";
import { SingleComment } from "./SingleComment";
import { WriteComment } from "./WriteComment";

const Comments = () => {
  const { theme } = useContext(Context);
  const allComments = data.comments;
  const user = data.currentUser;

  return (
    <div className='comments-container'>
      <div id='comments' className='comments-head'>
        COMMENTS <span style={{ backgroundColor: theme.primary }}>250</span>
      </div>
      <div className='comments-write-container'>
        <WriteComment user={user} />
      </div>
      <div className='comments-body'>
        {allComments.slice(0, 4).map((singleComment, index) => {
          return (
            <>
              <SingleComment key={index} comment={singleComment} user={user} />
              <div className='reply-container'>
                {singleComment.replies.slice(0, 2).map((singleReply, index2) => {
                  return (<div className="reply-main-container">
                  <div className="thread-line"></div>
                    <SingleComment
                      key={index2}
                      comment={singleReply}
                      user={user}
                    />
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
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
