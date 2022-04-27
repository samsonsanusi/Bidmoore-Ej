export const auctionReducer = (state, { type, payload }) => {
    console.log("payload", payload);
    switch (type) {
      case "SET_AUCTIONS":
        return {
          auctions: payload
        };
  
      default:
        return state;
    }
  };
  