import { Button } from "@material-ui/core";
import { InfoOutlined, Send } from "@material-ui/icons";
import React, { useContext } from "react";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import { Context } from "../../Context/Context";

const WriterApplication = () => {
  const { theme, dark } = useContext(Context);
  return (
    <div className='page'>
      <div className='breadCrumb-container'>
        <BreadCrumbs
          payload={[
            { path: "home", link: "/" },
            { path: "application ", link: "/writerApplication" },
          ]}
        />
      </div>{" "}
      <div className='page-head'>
        <div className='title'>Apply To Be A Unique Writer</div>
      </div>
      <div className='application-body'>
        <div className='application-info'>
          <InfoOutlined className='icon' /> Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. A blanditiis expedita, saepe
          reprehenderit suscipit ut minima, impedit sunt provident laudantium
          eligendi cupiditate modi. Ab rerum tempore fugit inventore nostrum
          quia.
        </div>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <div className='application-info'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          accusamus.....
        </div>

        <form
          style={{
            border: "2px solid " + theme.primary,
            backgroundColor: dark ? theme.primary : "transparent",
          }}
        >
          <i>
            {" "}
            <sup>*</sup> make sure you fill all the fields before submitting{" "}
          </i>
          <label>
            <div className='label-title'>Name</div>
            <input type='text' />
          </label>
          <label>
            <div className='label-title'>Name</div>
            <input type='text' />
          </label>
          <label>
            <div className='label-title'>Name</div>
            <input type='text' />
          </label>
          <label>
            <div className='label-title'>Message</div>
            <textarea
              cols='30'
              rows='10'
              placeholder='Enter your message...'
            ></textarea>
          </label>
          <br />
          <div className='btn-container'>
            <Button
              type='submit'
              color='primary'
              variant='outlined'
              className='btn'
            >
              Submit <Send className='icon' />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriterApplication;
