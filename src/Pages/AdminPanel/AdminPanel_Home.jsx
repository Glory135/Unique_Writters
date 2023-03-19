import {
	ArrowForward,
	BarChart,
	PieChart,
	ShowChart,
	TableChart,
} from '@material-ui/icons';
import React from 'react';
import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs';

const AdminPanel_Home = () => {
	return (
		<div className='page'>
			<div className='breadCrumb-container'>
				<BreadCrumbs
					payload={[
						{ path: 'home', link: '/' },
						{ path: 'admin panel', link: '/admin' },
					]}
				/>
			</div>

			<div className='admin-panel-home-body'>
				<div className='admin-panel-home-stats-container'>
					<div className='admin-panel-home-stats-head'>
						<h3>App Stats</h3>
					</div>
					<div className='admin-panel-home-stats-body'>
						<div className='admin-panel-home-stats-item'>
							<div className='chart-container'>
								<PieChart className='chart' />
							</div>
							<div className='chart-desc'>Posts Stat</div>
						</div>

						<div className='admin-panel-home-stats-item'>
							<div className='chart-container'>
								<BarChart className='chart' />
							</div>
							<div className='chart-desc'>Activity Stat</div>
						</div>

						<div className='admin-panel-home-stats-item'>
							<div className='chart-container'>
								<ShowChart className='chart' />
							</div>
							<div className='chart-desc'>Users Stat</div>
						</div>

						<div className='admin-panel-home-stats-item'>
							<div className='chart-container'>
								<TableChart className='chart' />
							</div>
							<div className='chart-desc'>bla bla Stat</div>
						</div>

						<div className='admin-panel-home-stats-item'>
							<div className='chart-container'>
								<TableChart className='chart' />
							</div>
							<div className='chart-desc'>bla bla Stat</div>
						</div>
					</div>
				</div>

<div className="admin-panel-home-users-container">
	
</div>

			</div>
		</div>
	);
};

export default AdminPanel_Home;
