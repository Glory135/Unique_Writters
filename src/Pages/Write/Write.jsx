import { Check, Image, ImageSearch, PostAdd } from "@material-ui/icons";
import React, { useContext } from "react";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import { Context } from "../../Context/Context";

export const Write = () => {
  const { theme, dark } = useContext(Context);
  return (
    <div className='page'>
      <div className='breadCrumb-container'>
        <BreadCrumbs
          payload={[
            { path: "home", link: "/" },
            { path: "Write", link: "/post" },
          ]}
        />
      </div>
      <div className='write-body'>
        <div className='done-con'>
          <div style={{ backgroundColor: "skyblue" }} className='done-item'>
            <span>Done</span>
            <Check />
          </div>
        </div>
        <div className='post-img-container'>
          <Image /> No image Added Yet
        </div>
        <div className='controller-con'>
          <div
            style={{ backgroundColor: theme.primary }}
            className='controller-item'
          >
            <ImageSearch /> <span>Add Image</span>{" "}
          </div>
        </div>
        <div className='title-con'>
          <input
            style={{ color: theme.text }}
            type='text'
            placeholder='Add A Title Here.....'
          />
        </div>
        <div className='body-con'>
          <textarea
            style={{
              color: theme.text,
              backgroundColor: dark ? theme.primary : "transparent",
            }}
            placeholder='write your heart...'
          ></textarea>
        </div>
      </div>
    </div>
  );
};
