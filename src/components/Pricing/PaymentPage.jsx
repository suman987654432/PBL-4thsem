import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import Pricing from './Pricing';
// import { pricingData } from './Home';
import CouponCodeInput from './CouponCodeInput';
import { loadStripe } from '@stripe/stripe-js';
import { plans } from '../../constants';
import Checkout from './Checkout';

const PaymentPage = () => {
    const { index } = useParams();
    const selectedPricing = plans[parseInt(index, 10)];
    const [appliedCoupon, setAppliedCoupon] = useState(null);

    const applyCoupon = (couponCode) => {
        if (couponCode === 'HALFOFF') {
            setAppliedCoupon(couponCode);
        } else {
            setAppliedCoupon(null);
        }
    };

    const makePayment = async () => {
        // Load the Stripe script with your public key
        const stripe = await loadStripe("pk_test_51OFdnMSAjlmRNwIxhroXaYM5f2Ky0uWi8nSjQh6rg4YxG74KPuFsOf2lGDbMK9KVXhIUP0jTyMX4DpgwATIbZ8hN00Wy1iQLbo");

        const body = {
            product_id: index,
            plan: selectedPricing.plan,
            price: appliedCoupon ? selectedPricing.discountedPrice : selectedPricing.price,
            features: selectedPricing.features,
        };

        const headers = {
            "Content-Type": "application/json"
        };

        try {
            // Send a POST request to your server to create a checkout session
            const response = await fetch("http://localhost:5000/api/create-checkout-session", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            });

            // Parse the response as JSON
            const session = await response.json();

            // Redirect to the Stripe Checkout page
            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });

            // Handle any errors that occurred during redirection
            if (result.error) {
                console.error("Error redirecting to checkout:", result.error);
            }
        } catch (error) {
            console.error("Error creating checkout session:", error.message);
        }
    };

    return (
        <section id="pricing" className="container mt-32">
            <div className="h4 text-center mb-5">
                <h2>Payment Detail</h2>
            </div>
            <div className=''>
                <Checkout
                    title={selectedPricing.plan}
                    price={selectedPricing.price}
                    features={selectedPricing.features}
                    onClick={makePayment}
                    discountedPrice={appliedCoupon ? selectedPricing.discountedPrice : ''}
                />
            </div>
            <div className="">
                {/* Add CouponCodeInput component here */}
                <CouponCodeInput applyCoupon={applyCoupon} />
            </div>
        </section>
    );
};

export default PaymentPage;
