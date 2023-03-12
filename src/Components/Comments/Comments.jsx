import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import { data } from '../../DummyData/commentsData';
import MapReplies from './MapReplies';
import { SingleComment } from './SingleComment';
import { WriteComment } from './WriteComment';

const Comments = () => {
	const { theme } = useContext(Context);
	const allComments = data.comments;
	const user = data.currentUser;

	return (
		<div className='comments-container'>
			<div id='comments' className='comments-head'>
				COMMENTS{' '}
				<span style={{ backgroundColor: theme.primary }}>250</span>
			</div>
			<div className='comments-write-container'>
				<WriteComment user={user} replyMode={false} />
			</div>
			<div className='comments-body'>
				{allComments.slice(0, 4).map((singleComment, index) => {
					return (
						<div className='comments-main-body-container' key={index}>
							<SingleComment
								comment={singleComment}
								user={user}
							/>
							<MapReplies
								user={user}
								data={singleComment}
							/>
						</div>
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
