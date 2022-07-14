import React, { Fragment, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartDropdown from '../../Components/CartDropdown/CartDropdown'
import CartIcon from '../../Components/CartIcon/CartIcon'
import { CartContext } from '../../context/cart.context'
import { selectCurrentUser } from '../../store/user/user.selector'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from './Navigation.styles.jsx';

const Navigation = () => {
	// const { currentUser } = useContext(UserContext)
	const { isCartOpen } = useContext(CartContext)

	const currentUser = useSelector(selectCurrentUser)

	const signOutHandler = async () => {
		await signOutUser()
	}

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrwnLogo />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>
						SHOP
					</NavLink>

					{currentUser ? (
						<NavLink as='span' onClick={signOutHandler}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/auth'>
							SIGN IN
						</NavLink>
					)
					}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	)
}

export default Navigation