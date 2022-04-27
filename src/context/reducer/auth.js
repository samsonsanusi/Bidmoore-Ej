export const LoginReducer = (state, { type, payload }) => {
  switch (type) {
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        auth: true,
        error: "",
        token: payload.token,
        username: payload.username,
      };

    default:
      return state;
  }
};
