import MapComments from '../../Components/Comments/MapComments';
import { data } from '../../DummyData/commentsData';

export const Thread = () => {
	const allComments = data.comments;
	const user = data.currentUser;
	return (
		<div className='page'>
			<div className='thread-head'>Thread</div>
				<MapComments data={allComments} user={user} />
		</div>
	);
};
