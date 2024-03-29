import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import React, { FormEvent } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
// import { getCurrentUser } from '../../utils/firebase/firebase.utils';
import { BUTTON_TYPES } from '../Button/Button';
import { FormContainer, PaymentButton, PaymentFormContainer } from './PaymentForm.styles';

const isValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => card !== null;

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const currentUser = useSelector(selectCurrentUser);
	const amount = useSelector(selectCartTotal);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);



	const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!stripe || !elements) return;

		setIsProcessingPayment(true);

		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ amount: amount * 100 })
		}).then(res => res.json());

		const { paymentIntent: { client_secret } } = response;

		const cardDetails = elements.getElement(CardElement);

		// if (cardDetails === null) return;
		if (!isValidCardElement(cardDetails)) return;

		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: cardDetails,
				billing_details: {
					name: currentUser ? currentUser.displayName : "Guest"
				}
			}
		});

		setIsProcessingPayment(false);

		if (paymentResult.error) {
			alert(paymentResult.error);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment Successful');
			}
		}
	};

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
	);
};

export default PaymentForm;