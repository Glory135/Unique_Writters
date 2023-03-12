import { SingleComment } from './SingleComment';

function MapReplies({ user, data }) {
	console.log(user);
	return (
		<div className='reply-container'>
			{' '}
			{data?.replies?.slice(0, 2).map((singleReply, index) => {
				return (
					<div key={index} className='reply-main-container'>
						<SingleComment comment={singleReply} user={user} />
						<MapReplies data={singleReply} user={user} />
					</div>
				);
			})}
		</div>
	);
}

export default MapReplies;
