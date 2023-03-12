import React from 'react';
import MapReplies from './MapReplies';
import { SingleComment } from './SingleComment';

const MapComments = ({ data, user }) => {
	return (
		<div className='comments-body'>
			{data.slice(0, 4).map((singleComment, index) => {
				return (
					<div className='comments-main-body-container' key={index}>
						<SingleComment comment={singleComment} user={user} />
						<MapReplies user={user} data={singleComment} />
					</div>
				);
			})}
		</div>
	);
};

export default MapComments;
