import { Avatar } from '@material-ui/core';
import { Add, ArrowUpward } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AdminLoginModal from './Components/AdminPanelComponents/AdminLoginModal';
import { LeftBar } from './Components/LeftBar/LeftBar';
import Notifications from './Components/Notifications/Notifications';
import LoginModal from './Components/Register/LoginModal';
import SignUpModal from './Components/Register/SignUpModal';
import { RightBar } from './Components/RightBar/RightBar';
import ScrollToTop from './Middlewares/ScrollToTop';
import { TopBar } from './Components/TopBar/TopBar';
import { DefaultThemeCheck } from './Middlewares/DefaultThemeCheck';
import NotFound from './Pages/404/NotFound';
import { About } from './Pages/About/About';
import AdminPanel_Home from './Pages/AdminPanel/AdminPanel_Home';
import WriterApplication from './Pages/Application/WriterApplication';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import { SinglePost } from './Pages/Singles/SinglePost';
import { Thread } from './Pages/Thread/Thread';
import { Write } from './Pages/Write/Write';
import AllWriters from './Pages/Writers/AllWriters';

function App() {
	const { theme } = useSelector((state) => state.theme);
	const { mobile } = useSelector((state) => state.extra);
	const [openLoginModal, setOpenLoginModal] = useState(false);
	const [openSignUpModal, setOpenSignUpModal] = useState(false);
	const [openNotifications, setOpenNotifications] = useState(false);
	const [openAdminLoginModal, setOpenAdminLoginModal] = useState(false);
	const [openLeftBar, setOpenLeftBar] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	let screenWidth = window.screen.availWidth;
	const { pathname } = useLocation();

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScrollPosition(window.pageYOffset);
		});
	}, [scrollPosition]);

	return (
		<main
			style={{ backgroundColor: theme.bg, color: theme.text }}
			className='App'>
			<DefaultThemeCheck />
			<ScrollToTop />
			<div id='top' className='top-container'>
				<TopBar
					openLeftBar={openLeftBar}
					setOpenLeftBar={setOpenLeftBar}
					setOpenNotifications={setOpenNotifications}
					setOpenLoginModal={setOpenLoginModal}
				/>
			</div>
			<LoginModal
				openLoginModal={openLoginModal}
				setOpenLoginModal={setOpenLoginModal}
				setOpenSignUpModal={setOpenSignUpModal}
			/>
			<SignUpModal
				openSignUpModal={openSignUpModal}
				setOpenSignUpModal={setOpenSignUpModal}
				setOpenLoginModal={setOpenLoginModal}
			/>
			<AdminLoginModal
				openAdminLoginModal={openAdminLoginModal}
				setOpenAdminLoginModal={setOpenAdminLoginModal}
			/>
			<Notifications
				openNotifications={openNotifications}
				setOpenNotifications={setOpenNotifications}
			/>
			<div className='app-body'>
				<LeftBar open={openLeftBar} setOpen={setOpenLeftBar} />

				<div
					className='right-body-container'
					style={{
						width: screenWidth < mobile ? '100%' : '95%',
					}}>
					<div className='body-container'>
						<Routes>
							{/* home */}
							<Route exact path='/' element={<Home />} />
							{/* about */}
							<Route path='/about' element={<About />} />
							{/* contact */}
							<Route path='/contact' element={<Contact />} />
							{/* Writer application */}
							<Route
								path='/writerApplication'
								element={<WriterApplication />}
							/>
							{/* All writers */}
							<Route path='/writers' element={<AllWriters />} />
							{/*  Post */}
							<Route path='/post' element={<Write />} />
							{/*  singlePost */}
							<Route
								path='/singlePost'
								element={<SinglePost />}
							/>
							{/*  thread */}
							<Route path='/thread' element={<Thread />} />
							{/*  profile */}
							<Route
								path='/profile'
								element={
									<Profile
										setOpenAdminLoginModal={
											setOpenAdminLoginModal
										}
									/>
								}
							/>
							{/*  admin */}
							<Route
								path='/admin'
								element={<AdminPanel_Home />}
							/>
							{/* 404 */}
							<Route path='*' element={<NotFound />} />
						</Routes>
					</div>

					<div className='right-container'>
						<RightBar />
					</div>
				</div>
			</div>
			<div
				style={{
					transform:
						scrollPosition > 100
							? 'scale(1) translateY(0%)'
							: 'scale(0) translateY(200%)',
				}}
				onClick={() => window.scrollTo(0, 0)}
				className='back-to-top-btn'
				title='Scroll To Top'>
				<ArrowUpward className='to-top-icon' />
			</div>{' '}
			<Link
				style={{ display: pathname === '/post' && 'none' }}
				to='/post'
				className='Link'>
				<Avatar
					title='Write'
					style={{ backgroundColor: theme.secondary }}
					className='add-circle-btn'>
					<Add />
				</Avatar>
			</Link>
		</main>
	);
}

export default App;
