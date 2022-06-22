import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import './Navigation.styles.scss'

const Navigation = () => {
	return (
		<Fragment>
			<div className='navigation'>
				<div className="logo-container">
					<Link to='/'>
						<CrwnLogo />
					</Link>
				</div>
				<div className="nav-links-container">
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					<Link className='nav-link' to='/sign-in'>
						SIGN IN
					</Link>
				</div>

			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation