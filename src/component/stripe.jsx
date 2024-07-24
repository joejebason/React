import React, { useState } from "react";
// import {
//   CardNumberElement,
//   CardExpiryElement,
//   CardCvcElement,
//   useStripe,
//   useElements,
//   AddressElement,
// } from "@stripe/react-stripe-js";
// import { createSubscription } from "./stripeApiServices";
// import { useRouter } from "next/router";
// import PrimaryButton from "./primarybtn";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [cardHolderName, setCardHolderName] = useState("");
  const [saveCard, setSaveCard] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    const addressElement = elements.getElement(AddressElement);

    const addressResult = await addressElement.getValue();
    const address = addressResult.value.address;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement,
      billing_details: {
        name: cardHolderName,
        address: address,
      },
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);
      const payload = {
        userEmail: "mpmahakumar14@gmail.com",
        priceId: "price_1PYfBOP7jQ6M6EVItbVw15Yw",
        paymentMethodId: paymentMethod.id,
      };

      const result = await createSubscription(payload);
      console.log(result);
      if (result === 200) {
        await router.push("/stripeSuccessPage");
      } else {
        await router.push("/stripeFailurePage");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:flex-row space-y-4 md:space-y-0 md:space-x-10 px-[1.1rem] md:px-14 py-28"
    >
      {/* Billing Information */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
        <div className="p-5 bg-white shadow-xl border border-grey-200">
          <div className="mb-4">
            <AddressElement
              className="StripeElement"
              options={{
                mode: "billing",
                style: {
                  base: {
                    fontSize: "16px",
                  },
                },
                display: {
                  name: "full",
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
        <div className="p-5 bg-white shadow-xl border border-grey-200">
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1">
              <span className="font-medium">Credit/Debit Card</span>
            </div>
            <div className="flex-1 flex justify-end space-x-2">
              <img src="/images/visaLogo.svg" alt="Visa" className="h-6" />
              <img
                src="/images/mastercard-logo.svg"
                alt="MasterCard"
                className="h-6"
              />
              <img src="/images/amex-logo.svg" alt="Amex" className="h-6" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Card Number</label>
            <div className="p-2 border border-gray-300 rounded-md mb-2">
              <CardNumberElement
                className="StripeElement"
                options={{
                  style: { base: { fontSize: "16px", letterSpacing: "1px" } },
                }}
              />
            </div>
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block mb-2">Expiry Date</label>
              <div className="p-2 border border-gray-300 rounded-md mb-2">
                <CardExpiryElement
                  className="StripeElement"
                  options={{ style: { base: { fontSize: "16px" } } }}
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block mb-2">CVC</label>
              <div className="p-2 border border-gray-300 rounded-md mb-2">
                <CardCvcElement
                  className="StripeElement"
                  options={{ style: { base: { fontSize: "16px" } } }}
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Card Holder Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
            />
          </div>
          <div className="flex items-center mb-10 text-grey">
            <input
              type="checkbox"
              id="saveCard"
              className="mr-2 h-4 w-4 border-blue-005 cursor-pointer checked:appearance-auto checked:bg-blue-005 checked:border-blue-005"
                              
              checked={saveCard}
              onChange={(e) => setSaveCard(e.target.checked)}
            />
            <label htmlFor="saveCard" className="text-sm md:text-base">Save this card for future payments</label>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2">
              <img
                src="/images/Secure-icon.svg"
                alt="SecureIcon"
                className="h-5"
              />
            </span>
            <span className="flex text-grey items-center text-sm md:text-base">
              Secure payment with SSL Encryption
              <img
                src="/images/info-icon.svg"
                alt="InfoIcon"
                className="h-4 ml-2"
              />
            </span>
          </div>
          <div className="text-sm md:text-base mb-4 text-grey">
            Having trouble with your payment? Please check{" "}
            <a href="#" className="text-blue-005 text-sm font-medium">
               this article
            </a>
          </div>
        </div>
      </div>

      {/* Order Details */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-4">Order Details</h2>
        <div className="p-5 bg-white shadow-xl border border-grey-200">
          <h2 className="text-base font-bold mb-4">Premium Plan</h2>
          <div className="flex justify-between mb-4">
            <span>Annual Subscription</span>
            <span className="text-base font-bold">$44.99</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Tax</span>
            <span className="text-base font-bold">$1.00</span>
          </div>
          <div className="border border-grey-50 mb-4"></div>
          <div className="flex justify-between mb-4 text-base font-bold">
            <span className="text-black">Total Price</span>
            <span className="text-base font-bold">$44.99</span>
          </div>
          <div className="mt-16 text-center">
            <PrimaryButton
              type="submit"
              btnName="Confirm and Pay"
              disabled={!stripe}
            ></PrimaryButton>
          </div>
          <div className="mt-5 mb-4">
            <p className="text-grey text-sm font-medium">
              Your subscription will renew automatically every year as one
              payment of $ 49.99. Cancel it anytime from your subscription
              settings. By clicking "Confirm and pay" you agree to the{" "}
              <a href="terms-and-condition" className="text-blue-005">
                {" "}
                Terms and Conditions.
              </a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;