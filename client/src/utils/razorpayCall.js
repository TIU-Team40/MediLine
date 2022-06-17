import {
  createNotification,
  createOrder,
  emptyCart,
} from "../networkCalls/userCalls";
// import icon64 from "../icon/Utility-UI-64.png";
// import { toast } from "react-toastify";

const { REACT_APP_RAZORPAY_API_KEY, REACT_APP_SECRET_KEY } = process.env;

export const proceedToPay = async (
  orderTotalValue,
  orderValue,
  discountValue,
  userState,
  userDispatch,
  navigate,
  pharmacyId
) => {
  const response = await loadSdk();
  if (response) {
    const options = {
      key: REACT_APP_RAZORPAY_API_KEY,
      key_secret: REACT_APP_SECRET_KEY,
      amount: orderTotalValue * 100,
      currency: "INR",
      name: "MEDILINE",
      description: "Thank you for shopping with us",
      // image: icon64,
      // callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      prefill: {
        name: userState.name,
        email: userState.email,
        contact: userState.contactNo,
      },
      notes: { address: "Razorpay Corporate Office" },
      theme: { color: "#3399cc" },
      handler: async function(response) {
        const res = await createOrder(
          userState.addresses.find((address) => address.isPrimary === true),
          userState.cart,
          response.razorpay_payment_id,
          orderValue,
          discountValue,
          orderTotalValue,
          pharmacyId
        );
        await createNotification({
          toUserId: pharmacyId,
          type: "Order_Placed",
          order: res.order,
        });
        userDispatch({ type: "ADD_TO_ORDER", payload: res.order });
        await emptyCart();
        userDispatch({ type: "EMPTY_CART" });
        navigate("/orders");
        // toast.success("Order Placed Successfully");
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    rzp1.on("payment.failed", function(response) {
      // toast.error("Something went wrong", response.error.code);
    });
  } else {
    // toast.error("Something went wrong");
  }
};

const loadSdk = async () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};
