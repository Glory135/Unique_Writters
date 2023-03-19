import { Button, Container, makeStyles, Modal } from "@material-ui/core";
import { CancelOutlined } from "@material-ui/icons";
import { modalStyle } from "../modalStyles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => modalStyle(theme));

const SignUpModal = ({
  setOpenSignUpModal,
  openSignUpModal,
  setOpenLoginModal,
}) => {
  const { light, theme, dark } = useSelector(state=>state.theme);
  const classes = useStyles();
  return (
    <Modal open={openSignUpModal}>
      <Container
        style={{
          backgroundColor: light ? theme.bg : dark ? theme.primary : null,
          color: theme.text,
        }}
        className={`${classes.container}  ${classes.signCon}`}
      >
        <div className={classes.head}>
          <span className={classes.headText}>SIGN UP</span>
          <CancelOutlined
            className={classes.cancel}
            onClick={() => setOpenSignUpModal(false)}
          />
        </div>
        <div className={`${classes.body} ${classes.signBody}`}>
          <form className={`${classes.form} ${classes.signForm}`}>
            <label className={`${classes.labels} ${classes.signLabels}`}>
              <div className='labelText'> Firstname:</div>
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
                className={`${classes.input} ${classes.signInput}`}
              />
            </label>
            <label className={`${classes.labels} ${classes.signLabels}`}>
              <div className='labelText'> Lastname:</div>
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
                className={`${classes.input} ${classes.signInput}`}
              />
            </label>
            <label className={`${classes.labels} ${classes.signLabels}`}>
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
                className={`${classes.input} ${classes.signInput}`}
              />
            </label>
            <label className={`${classes.labels} ${classes.signLabels}`}>
              <div className='labelText'> Email:</div>
              <input
                style={{
                  backgroundColor: light
                    ? theme.bg
                    : dark
                    ? theme.primary
                    : null,
                  color: theme.text,
                }}
                type='email'
                className={`${classes.input} ${classes.signInput}`}
              />
            </label>
            <label className={`${classes.labels} ${classes.signLabels}`}>
              <div className='labelText'> Password:</div>
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
                className={`${classes.input} ${classes.signInput}`}
              />
            </label>
            <label className={`${classes.labels} ${classes.signLabels}`}>
              <div className='labelText'>Retype Password:</div>
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
                className={`${classes.input} ${classes.signInput}`}
              />
            </label>
            <Button
              type='submit'
              variant='outlined'
              color='primary'
              size='large'
              className={`${classes.btn} ${classes.signBtn}`}
            >
              Sign Up
            </Button>
          </form>
          <div className={classes.smallAlt}>
            Have An Account Already? Then...{" "}
            <span
              style={{ color: theme.secondary }}
              className={classes.link}
              onClick={() => {
                setOpenSignUpModal(false);
                setOpenLoginModal(true);
              }}
            >
              LOGIN
            </span>
          </div>
        </div>
      </Container>
    </Modal>
  );
};

export default SignUpModal;
