/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_DRUm8HetCMYlh9msB8VE8Sqe');

export const bookTour = async tourId => {
  try {
    //get checkout session from api
    const session = await axios(`/api/v1/booking/checkout-session/${tourId}`);
    // console.log(session);
    //create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (error) {
    console.log(error);
    showAlert('error', error);
  }
};
