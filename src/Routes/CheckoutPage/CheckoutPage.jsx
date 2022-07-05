import React, { useContext } from 'react'
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';
import { CartContext } from '../../context/cart.context';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './CheckoutPage.styles.jsx';

const CheckoutPage = () => {
	const { cartItems, cartTotal } = useContext(CartContext)


	return (

		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Products</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />
			)}
			<Total>Total: ${cartTotal}</Total>
		</CheckoutContainer>

	)
}

export default CheckoutPage