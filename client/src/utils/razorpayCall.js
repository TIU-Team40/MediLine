import { createOrder, emptyCart } from "./networkCalls";
import icon64 from "../icon/Utility-UI-64.png";
import { toast } from "react-toastify";

const { REACT_APP_RAZORPAY_API_KEY, REACT_APP_SECRET_KEY } = process.env;

export const proceedToPay = async (
  orderTotalValue,
  orderValue,
  discountValue,
  selectAddress,
  authState,
  authDispatch,
  navigate
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
      image: icon64,
      // callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      prefill: {
        name: selectAddress.name,
        email: authState.email,
        contact: selectAddress.mobileNo,
      },
      notes: { address: "Razorpay Corporate Office" },
      theme: { color: "#3399cc" },
      handler: async function (response) {
        const res = await createOrder(
          selectAddress._id,
          authState.cart,
          response.razorpay_payment_id,
          orderValue,
          discountValue,
          orderTotalValue
        );
        authDispatch({ type: "ADD_TO_ORDER", payload: res.order });
        await emptyCart();
        authDispatch({ type: "EMPTY_CART" });
        authDispatch({ type: "USER_PROFILE_TAB", payload: "orders" });
        navigate("/user");
        toast.success("Order Placed Successfully");
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    rzp1.on("payment.failed", function (response) {
      toast.error("Something went wrong", response.error.code);
    });
  } else {
    toast.error("Something went wrong");
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
