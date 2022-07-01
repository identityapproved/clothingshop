import React, { useContext } from 'react'
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';
import { CartContext } from '../../context/cart.context';
import './CheckoutPage.styles.scss'

const CheckoutPage = () => {
	const { cartItems, cartTotal } = useContext(CartContext)


	return (

		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Products</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />
			)}
			<span className='total'>Total: ${cartTotal}</span>
		</div>

	)
}

export default CheckoutPage