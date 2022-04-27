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

    console.log(data.data);

    const token = data.data[0].token;

    if (data.statusCode === 200) {
    }
  } catch (error) {
    alert(error.response.data.message);
    console.log(error.response);
  }
};

export const loginUser = async (user, authDispatch, navigate) => {
  try {
    const phoneNumber = user.phoneNumber;
    const password = user.password;

    const { data } = await axios.post(`${baseURL}/user/signin`, {
      phoneNumber,
      password,
    });

  
    const token = data.data[0].token;
    const username = data.data[0]?.user.username;
  
    authDispatch({ type: "SUCCESS", payload: {token, username} });

    if (data.statusCode === 200) {
      navigate("/landingPage");
    }
  } catch (error) {
    alert(error.response.data.message);
    console.log(error.response);
  }
};
