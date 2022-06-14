import axios from "axios";
axios.defaults.withCredentials = true;

const { REACT_APP_BACKEND_URL } = process.env;

export const signup = async (name, email, password) => {
  try {
    const res = await axios.post(`${REACT_APP_BACKEND_URL}/signup`, {
      name,
      email,
      password,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${REACT_APP_BACKEND_URL}/login`, {
      email,
      password,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const logout = async () => {
  try {
    await axios.get(`${REACT_APP_BACKEND_URL}/logout`, {
      withCredentials: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export const forgotPassword = async (email) => {
  try {
    const res = await axios.post(`${REACT_APP_BACKEND_URL}/forgotPassword`, {
      email,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const verifyCode = async (forgotCode) => {
  try {
    const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/verifyCode`, {
      forgotCode,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const passwordReset = async (password, confirmPassword) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_BACKEND_URL}/password/reset`,
      {
        password,
        confirmPassword,
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const userDashboard = async () => {
  try {
    const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/userDashboard`, {
      withCredentials: true,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateUserData = async (dataUpdate) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${REACT_APP_BACKEND_URL}/user/update`,
      data: dataUpdate,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateUserPassowrd = async (
  oldPassword,
  password,
  confirmPassword
) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${REACT_APP_BACKEND_URL}/password/update`,
      data: {
        oldPassword,
        password,
        confirmPassword,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Cart
export const addToCart = async (medicineId, pharmacy, price) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${REACT_APP_BACKEND_URL}/user/cart`,
      data: {
        medicineId,
        pharmacy,
        price,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateCartProductQuantity = async (medicineId, quantity) => {
  try {
    const { data } = await axios({
      method: "put",
      url: `${REACT_APP_BACKEND_URL}/user/cart`,
      data: {
        medicineId,
        quantity,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteFromCart = async (medicineId) => {
  try {
    const { data } = await axios({
      method: "delete",
      url: `${REACT_APP_BACKEND_URL}/user/cart`,
      data: {
        medicineId,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const emptyCart = async () => {
  try {
    const { data } = await axios({
      method: "delete",
      url: `${REACT_APP_BACKEND_URL}/user/emptycart`,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Address
export const addAddress = async (
  name,
  addressLine,
  city,
  state,
  country,
  pinCode,
  conatctNo
) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${REACT_APP_BACKEND_URL}/user/address`,
      data: {
        name,
        addressLine,
        city,
        state,
        country,
        pinCode,
        conatctNo,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const editAddress = async ({
  addressId,
  name,
  addressLine,
  city,
  state,
  country,
  pinCode,
  contactNo,
}) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${REACT_APP_BACKEND_URL}/user/address/${addressId}`,
      data: {
        name,
        addressLine,
        city,
        state,
        country,
        pinCode,
        contactNo,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteAddress = async (addressId) => {
  try {
    const { data } = await axios({
      method: "delete",
      url: `${REACT_APP_BACKEND_URL}/user/address/${addressId}`,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Order
export const createOrder = async (
  addressId,
  medicines,
  paymentInfoId,
  totalAmount,
  discountAmount,
  orderAmount,
  pharmacyId
) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${REACT_APP_BACKEND_URL}/user/order`,
      data: {
        addressId,
        medicines,
        paymentInfoId,
        totalAmount,
        discountAmount,
        orderAmount,
        pharmacyId,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const cancelOrder = async (orderId) => {
  try {
    const { data } = await axios({
      method: "delete",
      url: `${REACT_APP_BACKEND_URL}/user/order`,
      data: {
        orderId,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
