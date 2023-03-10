import { EditTwoTone } from '@material-ui/icons';
import React, { useContext } from 'react';
import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs';
import { Context } from '../../Context/Context';
import { data } from '../../DummyData/commentsData';

const Profile = () => {
	const { theme, dark } = useContext(Context);
	console.log(dark);
	const user = data.currentUser;
	return (
		<div className='page'>
			<div className='breadCrumb-container'>
				<BreadCrumbs
					payload={[
						{ path: 'home', link: '/' },
						{ path: 'profile', link: '/profile' },
					]}
				/>
			</div>
			<div className='profile-body'>
				<div className='profile-top-container'>
					<div
						style={{
							backgroundImage: `url(${require('../../images/cover_pic.png')})`,
						}}
						className='profileCoverPic-container'>
							<span className="change-cover">
								<EditTwoTone className="change-cover-icon"/>
							</span>
						</div>

					<div className='profile-username'>
						<div className='profile-username-main'>
							<div className='profile-username-main-first'>
								<span className='profile-username-main-fullname'>
									Adeyemi Glory
								</span>
								<span className='profile-username-main-username'>
									@Glory135
								</span>
							</div>
							<div className='profile-username-main-second'>
								<EditTwoTone
									style={{
										color: dark ? 'white' : theme.primary,
									}}
									className='edit-icon'
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{ backgroundImage: `url(${user.user.image.png})` }}
					className='profilePic-container'>
					<div className='changeProfilePic'>Change</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
