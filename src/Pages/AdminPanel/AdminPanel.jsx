import React from 'react';
import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs';

const AdminPanel = () => {
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
            
		</div>
	);
};

export default AdminPanel;
