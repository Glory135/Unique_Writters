import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import {
  Home,
  Menu,
  CancelOutlined,
  Info,
  Contacts,
  PostAdd,
  Add,
  ContactSupport,
  ExitToApp,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    // color: (props) => props.color,
  },
}));

export const LeftBar = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(Context);
  const classes = useStyles({ color: theme.primary });
  const name = {
    display: open ? "block" : "none",
  };
  return (
    <div style={{ backgroundColor: theme.primary }} className='leftBar'>
      <div
        style={{ backgroundColor: theme.primary }}
        className='left-item menu'
      >
        {" "}
        <CancelOutlined
          style={{
            transform: open ? "rotateX(0deg)" : "rotateX(90deg)",
          }}
          onClick={() => {
            setOpen(false);
          }}
          className='menu-icon'
        />
        <Menu
          style={{
            transform: open ? "rotateX(90deg)" : "rotateX(0deg)",
          }}
          onClick={() => {
            setOpen(true);
          }}
          className='menu-icon'
        />
      </div>
      <Link style={{ marginTop: "70px" }} className='left-item Link' to='/'>
        {" "}
        <Home className={classes.icon && "icons"} />{" "}
        <span style={name}>Home</span>{" "}
      </Link>
      <Link className='left-item Link' to='/about'>
        {" "}
        <Info className={classes.icon && "icons"} />{" "}
        <span style={name}>About Us </span>
      </Link>
      <Link className='left-item Link' to='/contact'>
        {" "}
        <ContactSupport className={classes.icon && "icons"} />
        <span style={name}>Contact Us </span>
      </Link>
      <Link className='left-item Link' to='/writerApplication'>
        {" "}
        <PostAdd className={classes.icon && "icons"} />{" "}
        <span style={name}>Apply To Be A Writer </span>
      </Link>
      <Link className='left-item Link' to='/writters'>
        {" "}
        <Contacts className={classes.icon && "icons"} />{" "}
        <span style={name}>Writters </span>
      </Link>
      <Link className='left-item Link' to='/post'>
        {" "}
        <Add className={classes.icon && "icons"} />{" "}
        <span style={name}>Write </span>
      </Link>
      <div className='left-item' to='/'>
        <ExitToApp className={classes.icon && "icons"} />{" "}
        <span style={name}>LogOut </span>
      </div>
    </div>
  );
};
