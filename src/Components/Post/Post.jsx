import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
  CardActions,
} from "@material-ui/core";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";

export const Post = ({ data }) => {
  const { theme } = useContext(Context);
  return (
    <Card className='post'>
      <Link to='/singlePost' className='Link post-action-container'>
        <CardMedia className='post-media' image={data} title='post' />
        <CardContent
          style={{ backgroundColor: theme.tertiary, color: theme.text }}
        >
          <div style={{ color: theme.secondary }} className='post-details'>
            <div className='author detail'>Author: Bolaji Blessing</div>
            <div className='time detail'>1st May 2020</div>
          </div>
          <Typography className='post-title' gutterBottom variant='h5'>
            Post Title
          </Typography>

          <Typography className='post-summary' variant='body1'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            laboriosam sed laborum impedit error ullam quod voluptate, suscipit
            illum. Quae repellendus explicabo numquam accusantium iure sit
            soluta et reiciendis eaque. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Accusamus laboriosam sed laborum impedit error
            ullam quod voluptate, suscipit illum. Quae repellendus explicabo
            numquam accusantium iure sit soluta et reiciendis eaque.
          </Typography>
        </CardContent>
      </Link>

      <CardActions style={{ backgroundColor: theme.bg }}>
        <Link to='/singlePost' className='Link'>
          <Button size='small' color='primary'>
            Continue Reading
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
