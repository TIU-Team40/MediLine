import axios from "axios";
axios.defaults.withCredentials = true;

const { REACT_APP_BACKEND_URL } = process.env;

export const getMedicineAndDisease = async () => {
  try {
    const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/medicine`, {
      withCredentials: true,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getDisease = async () => {
  try {
    const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/disease`, {
      withCredentials: true,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
