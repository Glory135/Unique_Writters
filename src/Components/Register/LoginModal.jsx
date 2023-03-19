import { Button, Container, makeStyles, Modal } from "@material-ui/core";
import { CancelOutlined } from "@material-ui/icons";
import { modalStyle } from "../modalStyles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => modalStyle(theme));

const LoginModal = ({
  openLoginModal,
  setOpenLoginModal,
  setOpenSignUpModal,
}) => {
  const { light, theme, dark } = useSelector(state=>state.theme);
  const classes = useStyles();

  return (
    <Modal open={openLoginModal}>
      <Container
        style={{
          backgroundColor: light ? theme.bg : dark ? theme.primary : null,
          color: theme.text,
        }}
        className={classes.container}
      >
        <div className={classes.head}>
          <span className={classes.headText}>LOGIN</span>
          <CancelOutlined
            className={classes.cancel}
            onClick={() => setOpenLoginModal(false)}
          />
        </div>
        <div className={classes.body}>
          <form className={classes.form}>
            <label className={classes.labels}>
              <div className='labelText'> Username:</div>
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
              <div className='labelText'>Password:</div>
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
              className={classes.btn}
            >
              Login
            </Button>
          </form>
          <div className={classes.smallAlt}>
            Don't Have An Account? Then...{" "}
            <span
              style={{ color: theme.secondary }}
              className={classes.link}
              onClick={() => {
                setOpenLoginModal(false);
                setOpenSignUpModal(true);
              }}
            >
              SIGN UP
            </span>
          </div>
        </div>
      </Container>
    </Modal>
  );
};

export default LoginModal;
