import React, { useContext } from "react";
import { SingleComment } from "../../Components/Comments/SingleComment";
import { Context } from "../../Context/Context";
import { data } from "../../DummyData/commentsData";

export const Thread = () => {
  const { theme } = useContext(Context);
  const allComments = data.comments;
  const user = data.currentUser;
  return (
    <div className='page'>
      <div className='thread-head'>Thread</div>
      <div className='thread-body'>
        {allComments.map((singleComment, index) => {
          return (
            <>
              <SingleComment key={index} comment={singleComment} user={user} />
              <div className='reply-container'>
                {singleComment.replies.map((singleReply, index2) => {
                  return (
                    <div key={index2} className='reply-main-container'>
                      <div className='thread-line'></div>
                      <SingleComment comment={singleReply} user={user} />
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
