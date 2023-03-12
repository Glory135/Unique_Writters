import React, { useContext } from 'react';
import { SingleListItem } from './SingleListItem';
import { writers } from '../../Data/data';
import { Button } from '@material-ui/core';
import { Context } from '../../Context/Context';
import { Link } from 'react-router-dom';

export const WritersList = () => {
	const { theme } = useContext(Context);
	return (
		<div className='writerList'>
			<div className='right-head'>
				Top{' '}
				<span style={{ borderTop: '2px solid ' + theme.secondary }}>
					10
				</span>{' '}
				Writers
			</div>
			{writers.slice(0, 10).map((writer, index) => {
				return (
					<Link key={index} className='Link' to='/profile'>
						{' '}
						<SingleListItem writer={writer} />
					</Link>
				);
			})}
			<Link className='Link' to='/writers'>
				<Button color='primary' size='small'>
					Show More
				</Button>
			</Link>
		</div>
	);
};
