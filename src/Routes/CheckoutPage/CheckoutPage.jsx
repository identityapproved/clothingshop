import React from 'react'
import { useSelector } from 'react-redux';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './CheckoutPage.styles.jsx';

const CheckoutPage = () => {
	const cartItems = useSelector(selectCartItems)
	const cartTotal = useSelector(selectCartTotal)

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