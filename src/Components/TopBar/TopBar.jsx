import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import { Cancel, Notifications,  Search } from "@material-ui/icons";
import { AppBar, Button, makeStyles } from "@material-ui/core";
import sun from "../../images/icon-sun.svg";
import moon from "../../images/icon-moon.svg";
import { data } from "../..//DummyData/commentsData";

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    cursor: "pointer",
    color: "white",
    fontSize: "20px",
  },
}));

export const TopBar = ({ setOpenLoginModal }) => {
  const [openSearch, setOpenSearch] = useState(false);
  const { light, dark, theme, themeDispatch } = useContext(Context);
  const classes = useStyles();
  const user = data.currentUser;

  return (
    <AppBar
      style={{ backgroundColor: theme.primary }}
      className='topBar'
      position='fixed'
    >
      <div className='topBar-container'>
        <div className='logo'>
          Unique <span>Writers</span>{" "}
        </div>
        <div className='topbar-second-container'>
          <div
            style={{
              backgroundColor: openSearch
                ? "rgba(255, 255, 255, 0.319)"
                : "transparent",
            }}
            className='search-container'
          >
            <Search
              onClick={() => setOpenSearch(true)}
              className={classes.searchIcon}
            />
            <input
              style={{
                // display: openSearch ? "block" : "none",
                width: openSearch ? "50vw" : 0,
              }}
              type='search'
              placeholder='Search....'
            />
            <div
              style={{
                display: openSearch ? "block" : "none",
              }}
              onClick={() => setOpenSearch(false)}
              className='cancel'
            >
              <Cancel className='cancel-icon' />
            </div>
          </div>

          <div
            style={{
              display: openSearch ? "none" : "flex",
            }}
            onClick={() => {
              if (light) {
                themeDispatch({ type: "DARK_MODE" });
              } else if (dark) {
                themeDispatch({ type: "LIGHT_MODE" });
              }
            }}
            className='top-theme-switcher'
          >
            <div
              style={{
                transform: light ? "translateX(0)" : "translateX(95%)",
              }}
              className='ball'
            ></div>
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
            color: "white",
            borderRadius: "10px",
            display: openSearch ? "none" : "flex",
          }}
        >
          login
        </Button> */}

          <div
            style={{
              display: openSearch ? "none" : "flex",
            }}
            className='top-notification-con'
          >
            <div className='top-notification-main-container'>
              <Notifications />
              <div className='badge'>3</div>
            </div>
          </div>

          <div
            style={{
              display: openSearch ? "none" : "flex",
            }}
            className='top-profile-container'
          >
            <img src={user.user.image.png} alt='' />
          </div>
        </div>
      </div>
    </AppBar>
  );
};
