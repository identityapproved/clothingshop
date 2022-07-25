import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCartTotal } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'
import { BUTTON_TYPES } from '../Button/Button'
import { FormContainer, PaymentButton, PaymentFormContainer } from './PaymentForm.styles'

const PaymentForm = () => {
	const stripe = useStripe()
	const elements = useElements()
	const currentUser = useSelector(selectCurrentUser)
	const amount = useSelector(selectCartTotal);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false)

	const paymentHandler = async (e) => {
		e.preventDefault()

		if (!stripe || !elements) return;

		setIsProcessingPayment(true)

		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ amount: amount * 100 })
		}).then(res => res.json())

		const { paymentIntent: { client_secret } } = response;

		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: currentUser ? currentUser.displayName : "Guest"
				}
			}
		})

		setIsProcessingPayment(false)

		if (paymentResult.error) {
			alert(paymentResult.error)
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment Successful')
			}
		}
	}

	return (
		<PaymentFormContainer>
			<FormContainer onSubmit={paymentHandler}>
				<h2>Credit Card Payment: </h2>
				<CardElement />
				<PaymentButton
					isLoading={isProcessingPayment}
					buttonType={BUTTON_TYPES.inverted}>PAY NOW</PaymentButton>
			</FormContainer>
		</PaymentFormContainer>
	)
}

export default PaymentForm