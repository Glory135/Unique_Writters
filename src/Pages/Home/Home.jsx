import React, { useContext } from "react";
import { Feed } from "../../Components/Feed/Feed";
import { data } from "../../Data/data";
import { Sort } from "@material-ui/icons";
import { Context } from "../../Context/Context";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";

const Home = () => {
  const { theme } = useContext(Context);
  return (
    <div className='page'>
      <div className='breadCrumb-container'>
        <BreadCrumbs payload={[{ path: "home", link: "/" }]} />
      </div>
      <div className='page-head'>
        <div className='title'>Posts</div>
        <div className='filter-container'>
          <div>
            {" "}
            <Sort />
            Sort By
          </div>
          <select style={{ color: theme.text }} name='filter'>
            <option value='recent'>Recently Posted</option>
            <option value='recent'>A - Z</option>
            <option value='recent'>Most liked</option>
            <option value='recent'>Most Popular</option>
          </select>
        </div>
      </div>
      <Feed data={data} />
    </div>
  );
};

export default Home;
