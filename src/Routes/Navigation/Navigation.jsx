import { async } from '@firebase/util'
import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import './Navigation.styles.scss'

const Navigation = () => {
	const { currentUser } = useContext(UserContext)

	const signOutHandler = async () => {
		await signOutUser()
	}

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

					{currentUser ? (
						<span onClick={signOutHandler} className='nav-link'>
							SIGN OUT
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							SIGN IN
						</Link>
					)
					}
				</div>

			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation