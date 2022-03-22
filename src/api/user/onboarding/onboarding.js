import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

export const signUpUser = async (user) => {
  try {
    const username = user.username;
    const phoneNumber = user.phoneNumber;
    const password = user.password;

    const { data } = await axios.post(`${baseURL}/user/signup`, {
      username,
      phoneNumber,
      password,
    });

    console.log(data);
  } catch (error) {
    alert(error.response.data.message);
    console.log(error.response);
  }
};

export const loginUser = async (user, navigate) => {
  try {
    const phoneNumber = user.phoneNumber;
    const password = user.password;

    const { data } = await axios.post(`${baseURL}/user/signin`, {
      phoneNumber,
      password,
    });

    if (data.statusCode === 200) {
      navigate("/landingPage");
    }

    console.log(data);
  } catch (error) {
    alert(error.response.data.message);
    console.log(error.response);
  }
};
