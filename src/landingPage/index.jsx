import "./style.css";
import { useContext, useState } from "react";
import iPhone13Pro from "../icons/Dashboard/iPhone13Pro.svg";
import coin from "../icons/Dashboard/coin.svg";
import io from "socket.io-client";
import { Context } from "../context/context";
import { useEffect } from "react";
import { getAuctions, topup } from "../api/auctions/auctions";
import { ConsoleSqlOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Countdown, { zeroPad } from "react-countdown";

function LandingPage() {
  const { authState, auctionState, auctionDispatch } = useContext(Context);
  const { token, username } = authState;
  const navigate = useNavigate();

  console.log("token", token, username);

  let socket;
  console.log("auction state", auctionState);

  socket = io.connect("wss://bidmoore-staging.herokuapp.com", {
    autoConnect: false,
    transports: ["websocket"],
    auth: { token },
  });

  const sendSub = (auctionId) => {
    console.log("auctionId", auctionId);
    console.log("socket", socket);
    socket?.emit("sub:server", { auctionId });
  };

  const handleDate = (dateString) => {
    const date = new Date(dateString);
    const time = date.getTime();

    return (
      <Countdown
        key={time}
        date={time}
        onComplete={() => {}}
        renderer={({ hours, minutes, seconds, completed }) => {
          const h = hours === 0 ? "" : `${zeroPad(hours)}h`;
          const m = !h && minutes === 0 ? "" : `${zeroPad(minutes)}m`;

          return (
            <h6 className="float-left za-time za-blue">
              {h}
              {m}
              {zeroPad(seconds)}s
            </h6>
          );
        }}
      />
    );
  };

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }

    socket.on("connect", () => {
      console.log("Connected");
    });

    socket.on("disconnect", (reason) => {
      console.log(`Disconnected: ${reason}`);
    });
    socket.on("connect_error", (err) => {
      console.log(err);
      const { message } = err;
      console.log(message);
      socket.close();
    });

    socket.open();

    socket.on("bid", (message) => {
      console.log("bid", message);
      const updatedAuction = message.auction;
      const updatedAuctionId = updatedAuction.auctionId;

      const _liveAuctions = auctionState?.auctions?._liveAuctions;
      const index = _liveAuctions.findIndex((auction) => {
        console.log(auction.auctionId);
        return auction.auctionId === updatedAuctionId;
      });

      _liveAuctions.splice(index, 1, updatedAuction);
      console.log("just updated auction", _liveAuctions);
      auctionDispatch({ type: "SET_AUCTIONS", payload: { _liveAuctions } });
    });

    socket.on("auctions-update", (message) => {
      console.log("update:", message);
      const _liveAuctions = message.liveAuctions;
      auctionDispatch({ type: "SET_AUCTIONS", payload: { _liveAuctions } });
    });

    socket.on("bid-fail", (message) => {
      // alert(message.message);
      console.log(message);
    });

    socket.on("subscription", (message) => {
      // updateSubAuction(message.auction);
      console.log("subscription", message);
    });

    socket.on("sub-fail", (message) => {
      alert(message.message);
      console.log(message);
    });
    socket.on("sub-success", (message) => {});
    socket.on("error", (err) => {
      console.log("er", err);
    });

    socket.on("user-details", (details) => {
      //  username = details.username;
    });

    return () => {
      socket.close();
    };
  }, [socket]);

  useEffect(async () => {
    topup(token);
    const _liveAuctions = await getAuctions();
    auctionDispatch({ type: "SET_AUCTIONS", payload: { _liveAuctions } });
  }, []);

  const renderAuctionText = (status, subCharge) => {
    if (status === "LIVE") {
      return "Bid Now";
    } else if (status === "CLOSED") {
      return "Auction Ended";
    } else {
      return `Subscribe for ${subCharge}c`;
    }
  };

  const sendBid = (auctionId) => {
    socket.emit("bid:server", { auctionId });
  };

  const isSub = (sub) => {
    const subRes = sub.includes(username);
    return subRes;
  };

  const renderSubscriptionText = (status, sub) => {
    if (status === "LIVE") {
      const res = isSub(sub);
      return "is Bidding";
    } else if (status === "CLOSED") {
      return "as won";
    }
  };

  // send subscription

  return (
    <div>
      <header className="LandingpPageHeader">
        <div className="nav-links">
          <div>
            <h3 className="logo__white">
              Bidmo<span className="logo__span">o</span>re
            </h3>
          </div>
          <nav>
            <ul className="list-items">
              <li>
                <a href="#" className="mainLink">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="mainLink">
                  My Profile
                </a>
              </li>
              <li>
                <a href="#" className="mainLink">
                  My History
                </a>
              </li>
              <li>
                <a href="#" className="mainLink">
                  Log out
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <header className="walletBalance">
        <div className="balanceInfo">
          <h5 className="logosmall">
            Bidmo<span className="small_logoStyle">o</span>re
          </h5>
          <span className="seperator">|</span>
          <div className="credit">
            <h5 className="logosmall">Credit 8,580</h5>
            <div className="coin_icon">
              <img src={coin} className="coin" />
            </div>
          </div>
          <span className="seperator">|</span>
          <h5 className="logosmall">Top up now</h5>
        </div>
      </header>
      <header className="howTo">
        <h5 className="howTo-header">HOW IT WORKS</h5>
        <div className="steps">
          <div className="howTo_steps">
            <div className="howTo_background"></div>
            <h6 className="howTo__text">
              Subscribe to <br />a Product
            </h6>
          </div>

          <div className="howTo_steps">
            <div className="howTo_background"></div>
            <h6 className="howTo__text">
              Bid for <br />
              FREE
            </h6>
          </div>
          <div className="howTo_steps">
            <div className="howTo_background"></div>
            <h6 className="howTo__text">
              Win Bid and <br />
              Get Reward
            </h6>
          </div>
        </div>
      </header>
      <section className="AuctionSection">
        <div className="cards">
          {auctionState?.auctions?._liveAuctions?.map((auction, index) => {
            return (
              <div key={index} className="Auctioncard">
                <div className="auctionHeader">
                  <h5 className="auctionName">{auction.product.name}</h5>
                  <p className="auctionPrice">
                    ₦{auction.discountPrice} <del>₦{auction.product.price}</del>
                  </p>
                </div>
                <div className="AuctionImage">
                  <div className="auction_image">
                    <img src={auction.product.image} className="auctionItem" />
                  </div>
                  <div className="subsinfo">
                    <h6 className="subsCharge">
                      5<img src={coin} className="coinCharge" />
                      <span className="per">/</span>bid
                    </h6>

                    <h6 className="subsCharge">Up to 90%</h6>
                  </div>
                </div>
                <div className="AuctionTime">
                  <h5 className="time-Text">{auction.currentPrice}</h5>
                  <h5 className="start__time">{handleDate(auction.endTime)}</h5>
                </div>

                <div className="currentSub">
                  <h5 className="username">{auction?.lastBidder?.username}</h5>
                  <p className="subStatus">
                    {renderSubscriptionText(
                      auction.status,
                      auction.subscriptions
                    )}
                  </p>
                </div>

                <button
                  onClick={() => {
                    const sub = auction.subscriptions;
                    const issub = sub.includes(username);
                    console.log("isSub", issub);
                    console.log("sub", sub);
                    if (issub) {
                      sendBid(auction.auctionId);
                    } else {
                      sendSub(auction.auctionId);
                    }
                  }}
                  className="sub_button"
                >
                  {renderAuctionText(auction.status, auction.subCharge)}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default LandingPage;
