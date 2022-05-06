import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import {
  Cancel,
  ExitToApp,
  FilterListSharp,
  Notifications,
  Person,
  Search,
} from "@material-ui/icons";
import { AppBar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    color: "white",
  },
}));

export const TopBar = () => {
  const [light, setLight] = useState(true);
  const [openSearch, setOpenSearch] = useState(false);
  const { theme, themeDispatch } = useContext(Context);
  const classes = useStyles();

  useEffect(() => {
    if (light) {
      themeDispatch({ type: "LIGHT_MODE" });
    } else {
      themeDispatch({ type: "DARK_MODE" });
    }
  }, [light, themeDispatch]);
  return (
    <AppBar
      style={{ backgroundColor: theme.primary }}
      className='topBar'
      position='fixed'
    >
      <div className='topBar-container'>
        <div className='logo'>
          Unique <span>Writters</span>{" "}
        </div>
        <div className='search-container'>
          <Search
            onClick={() => setOpenSearch(true)}
            className={classes.searchIcon}
          />
          <input
            style={{
              display: openSearch ? "block" : "none",
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
            <Cancel />
          </div>
        </div>
        <div className='filter-container'>
          <div>
            <FilterListSharp />
            Filter By
          </div>
          <select name='filter'>
            <option value='recent'>Recently Posted</option>
            <option value='recent'>A - Z</option>
          </select>
        </div>

        <div
          style={{
            display: openSearch ? "none" : "block",
          }}
          onClick={() => {
            setLight(!light);
          }}
          className='top-theme-switcher'
        >
          <div
            style={{
              transform: light ? "translateX(0)" : "translateX(95%)",
            }}
            className='ball'
          ></div>
          <div className='theme-container'></div>
          <div className='theme-container'></div>
        </div>

        <div
          style={{
            backgroundColor: theme.secondary,
            display: openSearch ? "none" : "flex",
          }}
          className='loginBtn'
        >
          Log In <ExitToApp className='logIcon' />
        </div>
        {/* <div className='top-profile-container '>
          <div className='top-profile-con notification'>
            <div className='top-profile-main-container'>
              <Notifications />
              <div className='badge'>3</div>
            </div>
          </div>
          <div className='top-profile-con'>
            <div className='top-profile-main-container'>
              <Person />
              <div className='badge'>3</div>
            </div>
          </div>
        </div> */}
      </div>
    </AppBar>
  );
};
