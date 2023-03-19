import { Button } from "@material-ui/core";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";

const Contact = () => {
  const { theme } = useSelector(state=>state.theme);
  return (
    <div className='page'>
      <div className='breadCrumb-container'>
        <BreadCrumbs
          payload={[
            { path: "home", link: "/" },
            { path: "contact", link: "/contact" },
          ]}
        />
      </div>{" "}
      <div className='page-head'>
        <div className='title'>Contact Us</div>
      </div>
      <div className='contact-form-con'>
        <form>
          <label>
            <div className='label-title'>Email</div>
            <input type='email' placeholder='Enter your email...' />
          </label>
          <label>
            <div className='label-title'>Name</div>
            <input type='text' placeholder='Enter your name...' />
          </label>
          <label>
            <div className='label-title'>Subject</div>
            <input
              type='text'
              placeholder='Enter the subject of this message'
            />
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
          <Button
            type='submit'
            style={{ border: "1px solid " + theme.primary, color: theme.text }}
            className='btn'
            size='small'
            variant='contained'
          >
            Send
          </Button>
        </form>
        <div className='socials-con'>
          <div className='social' style={{ backgroundColor: theme.primary }}>
            <Facebook className='icon' />
          </div>
          <div className='social' style={{ backgroundColor: theme.primary }}>
            <Instagram className='icon' />
          </div>
          <div className='social' style={{ backgroundColor: theme.primary }}>
            <Twitter className='icon' />
          </div>
          <div className='social' style={{ backgroundColor: theme.primary }}>
            <Pinterest className='icon' />
          </div>
          <div className='social' style={{ backgroundColor: theme.primary }}>
            <LinkedIn className='icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
