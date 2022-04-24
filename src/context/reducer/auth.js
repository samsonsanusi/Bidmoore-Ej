export const LoginReducer = (state, { type, payload }) => {
  console.log("payload", payload);
  switch (type) {
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        auth: true,
        error: "",
        token: payload,
      };

    default:
      return state;
  }
};
