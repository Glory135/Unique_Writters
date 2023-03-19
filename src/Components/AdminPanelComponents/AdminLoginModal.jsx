import { Button, Container, makeStyles, Modal } from '@material-ui/core';
import { CancelOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { modalStyle } from '../modalStyles';

const useStyles = makeStyles((theme) => modalStyle(theme));

const AdminLoginModal = ({ openAdminLoginModal, setOpenAdminLoginModal }) => {
	const { light, theme, dark } = useSelector((state) => state.theme);
	const classes = useStyles();
	return (
		<Modal open={openAdminLoginModal}>
			<Container
				style={{
					backgroundColor: light
						? theme.bg
						: dark
						? theme.primary
						: null,
					color: theme.text,
				}}
				className={classes.container}>
				<div className={classes.head}>
					<span className={classes.headText}>ADMIN LOGIN</span>
					<CancelOutlined
						className={classes.cancel}
						onClick={() => setOpenAdminLoginModal(false)}
					/>
				</div>

				<div className={classes.body}>
					<form className={classes.form}>
						<label className={classes.labels}>
							<div className='labelText'> Admin ID:</div>
							<input
								style={{
									backgroundColor: light
										? theme.bg
										: dark
										? theme.primary
										: null,
									color: theme.text,
								}}
								type='text'
								className={classes.input}
							/>
						</label>
						<label className={classes.labels}>
							<div className='labelText'>ADMIN PASS:</div>
							<input
								style={{
									backgroundColor: light
										? theme.bg
										: dark
										? theme.primary
										: null,
									color: theme.text,
								}}
								type='password'
								className={classes.input}
							/>
						</label>
						<Button
							type='submit'
							variant='outlined'
							color='primary'
							size='large'
							className={classes.btn}>
							Login
						</Button>
					</form>
				</div>
			</Container>
		</Modal>
	);
};

export default AdminLoginModal;
