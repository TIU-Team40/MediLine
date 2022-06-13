import axios from "axios";
axios.defaults.withCredentials = true;

const { REACT_APP_BACKEND_URL } = process.env;

export const pharmaciesCall = async () => {
  try {
    const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/pharmacy`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const pharmacySignup = async (
  name,
  email,
  password,
  contactNo,
  address,
  pinCode
) => {
  try {
    const res = await axios.post(`${REACT_APP_BACKEND_URL}/pharmacy/signup`, {
      name,
      email,
      password,
      contactNo,
      address,
      pinCode,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const pharmacyLogin = async (email, password) => {
  try {
    const res = await axios.post(`${REACT_APP_BACKEND_URL}/pharmacy/login`, {
      email,
      password,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const pharmacyLogout = async () => {
  try {
    await axios.get(`${REACT_APP_BACKEND_URL}/pharmacy/logout`, {
      withCredentials: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export const pharmacyDashboard = async () => {
  try {
    const { data } = await axios.get(
      `${REACT_APP_BACKEND_URL}/pharmacy/pharmacydashboard`,
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updatePharmacyData = async (dataUpdate) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${REACT_APP_BACKEND_URL}/pharmacy/user/update`,
      data: dataUpdate,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updatePharmacyPassowrd = async (
  oldPassword,
  password,
  confirmPassword
) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${REACT_APP_BACKEND_URL}/pharmacy/password/update`,
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

export const addInventoryItem = async (medicineId, quantity, price) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${REACT_APP_BACKEND_URL}/pharmacy/inventory`,
      data: {
        medicineId,
        quantity,
        price,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteInventoryItem = async (medicineId) => {
  try {
    const { data } = await axios({
      method: "delete",
      url: `${REACT_APP_BACKEND_URL}/pharmacy/inventory`,
      data: {
        medicineId,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateInventoryItem = async (medicineId, quantity, price) => {
  try {
    const { data } = await axios({
      method: "put",
      url: `${REACT_APP_BACKEND_URL}/pharmacy/inventory`,
      data: {
        medicineId,
        quantity,
        price,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
