import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

export const WriteComment = ({ user, replyMode, setReplyMode }) => {
	const { theme } = useSelector(state=>state.theme);
	return (
		<div
			className='writeComment-container'
			style={{ width: replyMode ? '100%' : '95%' }}>
			<div className='user-details-container'>
				<div
					style={{ backgroundImage: `url(${user.user.image.png})` }}
					className='user-img-container'></div>
			</div>
			<div className='write-container'>
				<textarea
					placeholder='write your comment here...'
					maxLength='500'
					style={{ color: theme.text }}
					name=''
					id=''></textarea>
			</div>
			<div className='actions-container'>
				<Button size='small' color='primary' variant='contained'>
					{replyMode ? 'Reply' : 'Comment'}
				</Button>
				<Button
					size='small'
					color='secondary'
					variant='contained'
					onClick={() => {
						replyMode && setReplyMode(false);
					}}>
					Cancel
				</Button>
			</div>
		</div>
	);
};
