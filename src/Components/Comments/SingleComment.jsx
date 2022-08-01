import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
// import DP from "../../images/DP.svg";
import replyLogo from "../../images/icon-reply.svg";

export const SingleComment = ({ user, comment }) => {
  const { theme, dark } = useContext(Context);
  return (
    <div
      style={{ backgroundColor: dark ? theme.primary : theme.bg }}
      className='singleComment-container'
    >
      <div className='singleComment-profile-img-container'>
        <img src={comment.user.image.png} alt='profile' className='display-picture' />
      </div>
      <div className='singleComment-main-comment-container'>
        <div className='singleComment-main-comment-details'>
          <div>
            <span className='username'>
              {comment.user.username}
              {comment.user.username === user.user.username && (
                <span
                  style={{ backgroundColor: dark ? theme.bg : theme.primary }}
                  className='youTag'
                >
                  you
                </span>
              )}
            </span>
            <span className='timestamp'>{comment.createdAt}</span>
          </div>
          <div>
            <Button size='small' color='primary'>
              {" "}
              <img src={replyLogo} alt='reply' className='reply-logo' /> Reply
            </Button>
          </div>
        </div>
        <div className='singleComment-main-comment-body'>
          <span>{comment.replyingTo && `@${comment.replyingTo}`}</span>
          {comment.content}
        </div>
        <div className='singleComment-main-comment-bottom'>
          <Link to={`/thread/?id=${comment.id}`}>
            <Button size='small' color='primary'>
              replies{" "}
              <span
                style={{ backgroundColor: theme.primary }}
                className='count'
              >
                {comment.replies ? comment.replies.length : 0}
              </span>
            </Button>
          </Link>
          {comment.user.username === user.user.username && (
            <Button size='small' color='secondary'>
              remove
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
