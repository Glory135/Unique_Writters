import { Button } from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import img1 from "../../images/authors/author1.jpg";
import img2 from "../../images/authors/author2.jpg";
import img3 from "../../images/authors/author3.jpg";

export const About = () => {
  const { theme } = useSelector(state=>state.theme);
  return (
    <div className='page'>
      <div className='breadCrumb-container'>
        <BreadCrumbs
          payload={[
            { path: "home", link: "/" },
            { path: "about", link: "/about" },
          ]}
        />
      </div>{" "}
      <div className='page-head'>
        <div className='title'>About</div>
        <InfoOutlined className='page-icon' style={{ color: theme.primary }} />
      </div>
      <div className='about-item '>
        <div className='about-item-head'>OVERVIEW</div>
        <div className='about-item-body'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ipsa
          consectetur, at assumenda accusamus beatae dolores consequuntur dolor
          natus temporibus nostrum quidem ipsam. Et obcaecati tenetur, vitae
          perspiciatis recusandae praesentium ducimus sint eius voluptatibus
          fuga deleniti alias tempora cum blanditiis, odit harum? Ex, quaerat
          accusantium. Nostrum sed hic earum? Voluptas!
        </div>
      </div>
      <div className='about-item-desc'>
        <div className='about-item-desc-item img-con first'></div>
        <div className='about-item-desc-item text-con first'>
          <div className='about-item-desc-text-head'>Readers</div>{" "}
          <div className='about-item-desc-text-body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            accusantium veniam aut perferendis ea aperiam dolorum, quam incidunt
            architecto in, laboriosam ullam quasi, quae expedita. Molestias,
            corrupti deleniti maiores veritatis dignissimos, ipsum ad at,
            consequuntur magni quibusdam odio alias necessitatibus.
          </div>
        </div>
      </div>
      <div className='about-item-desc write'>
        <div className='about-item-desc-item text-con second'>
          <div className='about-item-desc-text-head'>Writers</div>{" "}
          <div className='about-item-desc-text-body'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            voluptatem perspiciatis atque cum hic fugiat provident eaque nobis
            minima corrupti! Et, iure ex. Nesciunt quae eius, fugit nobis minus
            sequi ipsum nemo aperiam. Voluptatum assumenda alias culpa porro,
            possimus quis!
          </div>
          <Button color='primary' size='small' variant='outlined'>
            View all
          </Button>
        </div>{" "}
        <div className='about-item-desc-item img-con second'></div>
      </div>
      <div className='about-admins-con'>
        <div className='about-admins-head'>
          <span style={{ borderTop: "1px solid " + theme.secondary }}>
            Admins
          </span>
        </div>
        <div className='about-admins-main-con'>
          <div
            style={{ backgroundColor: theme.primary }}
            className='about-admins-main-con-item '
          >
            <img src={img1} alt='' />
            <div className='about-admins-desc'>Adeyemi Glory</div>
            <div className='about-admins-desc'>Web Developer</div>
            <div className='about-admins-main-text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              illum neque deserunt ipsum minus libero facilis provident
              assumenda quis ullam asperiores cum eum, enim id, sint, labore
              quod quasi repellendus.
            </div>
            <Button color='secondary' variant='outlined' size='small'>
              contact
            </Button>
          </div>
          <div
            style={{ backgroundColor: theme.primary }}
            className='about-admins-main-con-item '
          >
            <img src={img2} alt='' />
            <div className='about-admins-desc'>Bolaji Blessing</div>
            <div className='about-admins-desc'>Writer</div>
            <div className='about-admins-main-text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              illum neque deserunt ipsum minus libero facilis provident
              assumenda quis ullam asperiores cum eum, enim id, sint, labore
              quod quasi repellendus.
            </div>
            <Button color='secondary' variant='outlined' size='small'>
              contact
            </Button>
          </div>
          <div
            style={{ backgroundColor: theme.primary }}
            className='about-admins-main-con-item '
          >
            <img src={img3} alt='' />
            <div className='about-admins-desc'>Agboola Joel</div>
            <div className='about-admins-desc'>Web Developer</div>
            <div className='about-admins-main-text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              illum neque deserunt ipsum minus libero facilis provident
              assumenda quis ullam asperiores cum eum, enim id, sint, labore
              quod quasi repellendus.
            </div>
            <Button color='secondary' variant='outlined' size='small'>
              contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
