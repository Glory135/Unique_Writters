import { Add, Camera, CameraAlt, EditTwoTone } from '@material-ui/icons';
import React, { useContext, useState } from 'react';
import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs';
import { Context } from '../../Context/Context';
import { data } from '../../DummyData/commentsData';
import { data as DummyData } from '../../Data/data';
import { Post } from '../../Components/Post/Post';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Profile = () => {
	const [aboutCollapsed, setAboutCollapsed] = useState(false);
	const { theme, dark } = useContext(Context);
	const user = data.currentUser;
	const about =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum nesciunt reprehenderit similique qui molestias illum facilis modi rem animi nulla cum obcaecati explicabo mollitia repellat in, distinctio, eum deleniti? Incidunt expedita vel adipisci natus quidem recusandae laudantium, dolorum in nostrum illum! Voluptate qui quidem architecto earum nulla magni assumenda. Tempora quo sunt expedita, cupiditate porro illum obcaecati, repellat maxime ipsa dicta aliquid vero similique? Deserunt exercitationem, provident atque sunt saepe totam perferendis reiciendis tempora rerum? Aspernatur eos a vitae quisquam doloremque accusamus placeat explicabo, commodi soluta nam consectetur nesciunt dicta blanditiis harum tempore error quo! Maiores illum quos voluptatibus.';
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
						<span className='change-cover' title='Change Cover Photo'>
							<EditTwoTone className='change-cover-icon' />
						</span>
					</div>

					<div
						style={{
							backgroundImage: `url(${user.user.image.png})`,
							borderColor: theme.bg,
						}}
						className='profilePic-container'>
						<div className='changeProfilePic'>
							<CameraAlt />
						</div>
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
				<div className='profile-stats'>
					<span>200 points</span>
					<span className='stat-divider'></span>
					<span>500+ followers</span>
					<span className='stat-divider'></span>
					<span>50 Likes</span>
					<span className='stat-divider'></span>
					<span>20 comments</span>
					<span className='stat-divider'></span>
					<span>15 posts</span>
					<span className='stat-divider'></span>
				</div>
				<div className='profile-details'>
					<div className='profile-details-header'>User Details</div>
					<ul className='profile-details-body'>
						<li>
							<spam className='profile-detail-label'>Email:</spam>{' '}
							<span className='profile-detail-text'>
								adeyemiglr@gmail.com
							</span>
						</li>
						<li>
							<spam className='profile-detail-label'>
								First name:
							</spam>{' '}
							<span className='profile-detail-text'>Glory</span>
						</li>
						<li>
							<spam className='profile-detail-label'>
								Last name:
							</spam>{' '}
							<span className='profile-detail-text'>Adeyemi</span>
						</li>
						<li>
							<spam className='profile-detail-label'>Role:</spam>{' '}
							<span className='profile-detail-text'>Writer</span>
						</li>
					</ul>
				</div>

				<div className='profile-details'>
					<div className='profile-details-header'>
						<div className='profile-details-header-text'>About</div>
						<EditTwoTone className='profile-details-header-icon' title='Edit Bio'/>
					</div>
					<div className='profile-details-body'>
						{aboutCollapsed
							? about
							: `${about.split(' ').slice(0, 75).join(' ')}...`}
						<span
							onClick={() => setAboutCollapsed(!aboutCollapsed)}
							className='collapse'>
							See {aboutCollapsed ? 'less' : 'more'}
						</span>
					</div>
				</div>

				<div className='profile-details'>
					<div className='profile-details-header'>
					<div className='profile-details-header-text'>Recent Posts</div>
					<Link to='/post' className='Link' title='Post Story'>
						<Add className='profile-details-header-icon'  />
					</Link>
					</div>
					<div className='profile-details-body posts'>
						{DummyData.slice(0, 2).map((singlePost) => {
							return <Post data={singlePost} ratio={2}/>;
						})}
					</div>
					<div className='profile-details-footer'>
						<Button size='small' color='secondary' >
							See All Posts
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
