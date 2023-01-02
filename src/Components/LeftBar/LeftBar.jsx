import React, { useContext, useState } from 'react';
import { Context } from '../../Context/Context';
import { Container } from '@material-ui/core';
import {
	Home,
	Info,
	Contacts,
	PostAdd,
	Add,
	ContactSupport,
	ExitToApp,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	icon: {
		// color: (props) => props.color,
	},
}));

export const LeftBar = ({ open }) => {
	const { theme } = useContext(Context);
	const classes = useStyles({ color: theme.primary });
	const { pathname } = useLocation();
	const location = pathname.split('/')[1];
	const mobileScreen = 550;
	let screenWidth = window.screen.availWidth;

	const styles = {
		name: {
			display: open ? 'block' : 'none',
		},
		leftItem: (name) => {
			return {
				backgroundColor:
					name === location
						? 'rgba(255, 255, 255, 0.371)'
						: 'inherit',
			};
		},
	};

	return (
		<Container
			style={{
				backgroundColor: theme.bg,
				left:
					screenWidth < mobileScreen && open
						? '0'
						: screenWidth < mobileScreen
						? '-100%'
						: 'auto',
			}}
			className='left-container'>
			<div style={{ backgroundColor: theme.primary }} className='leftBar'>
				<Link
					style={{ marginTop: '20px', ...styles.leftItem('') }}
					className='left-item Link'
					to='/'>
					{' '}
					<Home className={classes.icon && 'icons'} />{' '}
					<span style={styles.name}>Home</span>{' '}
				</Link>

				<Link
					style={styles.leftItem('about')}
					className='left-item Link'
					to='/about'>
					{' '}
					<Info className={classes.icon && 'icons'} />{' '}
					<span style={styles.name}>About Us </span>
				</Link>

				<Link
					style={styles.leftItem('contact')}
					className='left-item Link'
					to='/contact'>
					{' '}
					<ContactSupport className={classes.icon && 'icons'} />
					<span style={styles.name}>Contact Us </span>
				</Link>

				<Link
					style={styles.leftItem('writerApplication')}
					className='left-item Link'
					to='/writerApplication'>
					{' '}
					<PostAdd className={classes.icon && 'icons'} />{' '}
					<span style={styles.name}>Apply To Be A Writer </span>
				</Link>

				<Link
					style={styles.leftItem('writers')}
					className='left-item Link'
					to='/writers'>
					{' '}
					<Contacts className={classes.icon && 'icons'} />{' '}
					<span style={styles.name}>Writers </span>
				</Link>

				<Link
					style={styles.leftItem('post')}
					className='left-item Link'
					to='/post'>
					{' '}
					<Add className={classes.icon && 'icons'} />{' '}
					<span style={styles.name}>Write </span>
				</Link>

				<div className='left-item' to='/'>
					<ExitToApp className={classes.icon && 'icons'} />{' '}
					<span style={styles.name}>LogOut </span>
				</div>
			</div>
		</Container>
	);
};
