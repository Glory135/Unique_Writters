import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ payload }) => {
  return (
    <div className='breadCrumbs'>
      {payload.map((i, item) => {
        return (
          <Link key={item} className='Link' to={i.link}>
            / <span className='breadCrumbs-item'>{i.path}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
