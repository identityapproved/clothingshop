import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navigation = () => {
	return (
		<Fragment>
			<div className='navigation'>
				<div className="logo-container">
					<Link to='/'>
						<h1>Logo</h1>
					</Link>
				</div>
				<div className="nav-links-container">
					<Link to='shop'>
						SHOP
					</Link>
				</div>

			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation