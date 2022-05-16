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
      <div style={{ marginTop: "70px" }} className='left-item'>
        {" "}
        <Home className={classes.icon && "icons"} />{" "}
        <span style={name}>Home</span>
      </div>
      <div className='left-item'>
        {" "}
        <Info className={classes.icon && "icons"} />{" "}
        <span style={name}>About Us </span>
      </div>
      <div className='left-item'>
        {" "}
        <ContactSupport className={classes.icon && "icons"} />{" "}
        <span style={name}>Contact Us </span>
      </div>
      <div className='left-item'>
        {" "}
        <PostAdd className={classes.icon && "icons"} />{" "}
        <span style={name}>Apply To Be A Writer </span>
      </div>
      <div className='left-item'>
        {" "}
        <Contacts className={classes.icon && "icons"} />{" "}
        <span style={name}>Writters </span>
      </div>
      <div className='left-item'>
        {" "}
        <Add className={classes.icon && "icons"} />{" "}
        <span style={name}>Write </span>
      </div>
      <div className='left-item'>
        {" "}
        <ExitToApp className={classes.icon && "icons"} />{" "}
        <span style={name}>LogOut </span>
      </div>
    </div>
  );
};
