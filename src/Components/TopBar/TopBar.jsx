import React, { useContext, useState } from 'react';
import { Context } from '../../Context/Context';
import {
	CancelOutlined,
	Notifications,
	Search,
	Menu,
} from '@material-ui/icons';
import { AppBar, Button, makeStyles } from '@material-ui/core';
import sun from '../../images/icon-sun.svg';
import moon from '../../images/icon-moon.svg';
import { data } from '../..//DummyData/commentsData';

const useStyles = makeStyles((theme) => ({
	searchIcon: {
		cursor: 'pointer',
		color: 'white',
		fontSize: '20px',
	},
}));

export const TopBar = ({ openLeftBar, setOpenLeftBar, setOpenLoginModal, setOpenNotifications }) => {
	const [openSearch, setOpenSearch] = useState(false);
	const { light, dark, theme, themeDispatch } = useContext(Context);
	const classes = useStyles();
	const user = data.currentUser;
	const mobileScreen = 550;
	let screenWidth = window.screen.availWidth;

	return (
		<AppBar
			style={{
				backgroundColor: theme.primary,
				justifyContent:
					screenWidth < mobileScreen && openSearch
						? 'center'
						: 'flex-start',
			}}
			className='topBar'
			position='fixed'>
			<div
				style={{
					display:
						screenWidth < mobileScreen && openSearch
							? 'none'
							: 'flex',
				}}
				className='topbar-first-container'>
				<Menu
					onClick={() => {
						setOpenLeftBar(!openLeftBar);
					}}
					className='menu-icon'
				/>
			</div>
			<div
				style={{
					justifyContent:
						screenWidth < mobileScreen && openSearch
							? 'center'
							: 'space-between',
				}}
				className='topBar-container'>
				<div
					style={{
						display:
							screenWidth < mobileScreen && openSearch
								? 'none'
								: 'block',
					}}
					className='logo'>
					Unique <span>Writers</span>{' '}
				</div>

				<div
					className='topbar-second-container'
					style={{ width: openSearch && 'auto' }}>
					<div
						style={{
							backgroundColor: openSearch
								? 'rgba(255, 255, 255, 0.319)'
								: 'transparent',
						}}
						className='search-container'>
						<Search
							onClick={() => setOpenSearch(true)}
							className={classes.searchIcon}
						/>
						<input
							style={{
								width:
									screenWidth < mobileScreen && openSearch
										? '80vw'
										: openSearch
										? '50vw'
										: 0,
							}}
							type='text'
							placeholder='Search....'
						/>
						<div
							style={{
								display: openSearch ? 'block' : 'none',
							}}
							onClick={() => setOpenSearch(false)}
							className='cancel'>
							<CancelOutlined className='cancel-icon' />
						</div>
					</div>

					<div
						style={{
							display: openSearch ? 'none' : 'flex',
						}}
						onClick={() => {
							if (light) {
								themeDispatch({ type: 'DARK_MODE' });
							} else if (dark) {
								themeDispatch({ type: 'LIGHT_MODE' });
							}
						}}
						className='top-theme-switcher'>
						<div
							style={{
								transform: light
									? 'translateX(5%)'
									: 'translateX(95%)',
							}}
							className='ball'></div>
						<div className='theme-container'>
							<img src={moon} alt='moon' />
						</div>
						<div className='theme-container'>
							<img src={sun} alt='sun' />
						</div>
					</div>

					{/* <Button
						type='submit'
						variant='contained'
						size='small'
						onClick={() => setOpenLoginModal(true)}
						style={{
							backgroundColor: theme.secondary,
							color: 'white',
							borderRadius: '10px',
							display: openSearch ? 'none' : 'flex',
						}}>
						login
					</Button> */}

					<div
						style={{
							display: openSearch ? 'none' : 'flex',
						}}
						className='top-notification-con'
						onClick={() => {
							setOpenNotifications(true);
						}}>
						<div className='top-notification-main-container'>
							<Notifications />
							<div className='badge'>3</div>
						</div>
					</div>

					<div
						style={{
							display: openSearch ? 'none' : 'flex',
						}}
						className='top-profile-container'>
						<img src={user.user.image.png} alt='' />
					</div>
				</div>
			</div>
		</AppBar>
	);
};
