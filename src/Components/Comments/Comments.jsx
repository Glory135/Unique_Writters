import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import { data } from '../../DummyData/commentsData';
import MapComments from './MapComments';
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
			<MapComments data={allComments} user={user}/>
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
