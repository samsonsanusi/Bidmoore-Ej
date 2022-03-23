import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

export let token;

export const signinAdmin = async (user, navigate) => {
  try {
    const email = user.email;
    const password = user.password;

    const { data } = await axios.post(`${baseURL}/admin/signin`, {
      email,
      password,
    });

    if (data.statusCode === 200) {
      navigate("/dashboardAuctions");
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};

// superadmin@bidmoore.com
// default_password
