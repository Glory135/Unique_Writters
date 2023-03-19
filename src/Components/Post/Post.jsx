import {
	Card,
	CardMedia,
	Typography,
	CardContent,
	Button,
	CardActions,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Post = ({ data, ratio }) => {
	const { theme } = useSelector((state) => state.theme);
	const { mobile } = useSelector((state) => state.extra);
	let screenWidth = window.screen.availWidth;

	const cardBodyText =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus  laboriosam sed laborum impedit error ullam quod voluptate, suscipit illum. Quae repellendus explicabo numquam accusantium iure sit soluta et reiciendis eaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus laboriosam sed laborum impedit error ullam quod voluptate, suscipit illum. Quae repellendus explicabo numquam accusantium iure sit soluta et reiciendis eaque Lorem ipsum dolor sit amet consectetur, adipisicing eli Minima nihil aspernatur consectetur sunt voluptatem eius. Rerum natus sint eaque nesciunt facere libero quae! Su labore voluptatibus at sit voluptate atque doloribus amet. Quod accusamus suscipit aliquam placeat, perspiciat quam magnam incidunt? Sit tempore molestias, quam excepturi optio saepe eius atque.';

	return (
		<Card
			style={{
				width: screenWidth < mobile ? '90%' : `calc(95% / ${ratio})`,
				marginBottom: ratio > 1 && '1y0px',
			}}
			className='post'>
			<Link to='/singlePost' className='Link post-action-container'>
				<CardMedia className='post-media' image={data} title='post' />
				<CardContent
					style={{
						backgroundColor: theme.tertiary,
						color: theme.text,
					}}>
					<div
						style={{ color: theme.secondary }}
						className='post-details'>
						{/* <Link to='/profile' className='Link'> */}
							<div className='author detail'>
								Author: Bolaji Blessing
							</div>
						{/* </Link> */}

						<div className='time detail'>1st May 2020</div>
					</div>
					<Typography
						className='post-title'
						gutterBottom
						variant='h5'>
						Post Title
					</Typography>

					<Typography className='post-summary' variant='body1'>
						{cardBodyText
							.split(' ')
							.slice(
								0,
								Math.round(
									cardBodyText.split(' ').length / (ratio + 2)
								)
							)
							.join(' ')}
						...
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
