import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import replyLogo from '../../images/icon-reply.svg';
import { WriteComment } from './WriteComment';

export const SingleComment = ({ user, comment }) => {
	const { theme, dark } = useSelector(state=>state.theme);
	const [replyMode, setReplyMode] = useState(false);

	return (
		<div
			style={{ backgroundColor: dark ? theme.primary : theme.bg }}
			className='singleComment-container'>
			<div className='singleComment-profile-img-container'>
				<div
					style={{
						backgroundImage: `url(${comment.user.image.png})`,
					}}
					className='user-img-container'></div>
			</div>
			<div className='singleComment-main-comment-container'>
				<div className='singleComment-main-comment-details'>
					<div>
						<span className='username'>
							{comment.user.username}
							{comment.user.username === user.user.username && (
								<span
									style={{
										backgroundColor: dark
											? theme.bg
											: theme.primary,
									}}
									className='youTag'>
									you
								</span>
							)}
						</span>
						<span className='timestamp'>{comment.createdAt}</span>
					</div>
					<div>
						<Button
							size='small'
							color='primary'
							onClick={() => setReplyMode(!replyMode)}>
							{' '}
							<img
								src={replyLogo}
								alt='reply'
								className='reply-logo'
							/>{' '}
							Reply
						</Button>
					</div>
				</div>
				<div className='singleComment-main-comment-body'>
					<span>
						{comment.replyingTo && `@${comment.replyingTo}`}
					</span>
					{comment.content}
				</div>
				<div className='singleComment-main-comment-bottom'>
					<Link to={`/thread/?id=${comment.id}`}>
						<Button size='small' color='primary'>
							replies{' '}
							<span
								style={{ backgroundColor: theme.primary }}
								className='count'>
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
			<div style={{ display: replyMode ? 'block' : 'none' }}>
				<WriteComment
					user={user}
					replyMode={true}
					setReplyMode={setReplyMode}
				/>
			</div>
		</div>
	);
};
