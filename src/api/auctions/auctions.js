import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

export const getAuctions = async () => {
  try {

    const { data } = await axios.get(`${baseURL}/auctions`);
    console.log(data);
     const liveAuctions = data.data[0].liveAuctions;
     return liveAuctions;
  } catch (error) {
    alert(error.response.data.message);
    console.log(error.response);
  }
};

export const topup = async (token) => {
  try {

    const { data } = await axios.post(`${baseURL}/user/deposit`, {
      "amount": 20000
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    );
    console.log(data);
   
  } catch (error) {
    alert(error.response.data.message);
    console.log(error.response);
  }
};