import { Sort } from "@material-ui/icons";
import React, { useContext } from "react";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import { Context } from "../../Context/Context";
import { writers } from "../../data";
import AllWritersList from "./AllWritersList";

const AllWriters = () => {
  const { theme } = useContext(Context);
  return (
    <div className='page'>
      <div className='breadCrumb-container'>
        <BreadCrumbs
          payload={[
            { path: "home", link: "/" },
            { path: "writers", link: "/writers" },
          ]}
        />
      </div>{" "}
      <div className='page-head'>
        <div className='title'>Discover New Writers</div>
        <div className='filter-container'>
          <div>
            {" "}
            <Sort />
            Sort By
          </div>
          <select style={{ color: theme.text }} name='filter'>
            <option value='recent'>A - Z</option>
            <option value='recent'>Points</option>
            <option value='recent'>Most Popular</option>
          </select>
        </div>
      </div>
      <div className='writers-body'>
        <AllWritersList data={writers} />
      </div>
    </div>
  );
};

export default AllWriters;
