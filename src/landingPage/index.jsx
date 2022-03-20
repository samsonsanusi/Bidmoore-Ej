import "./style.css";
import iPhone13Pro from "../icons/Dashboard/iPhone13Pro.svg";
import coin from "../icons/Dashboard/coin.svg";
function LandingPage() {
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
                    <div className="Auctioncard">
                        <div className="auctionHeader">
                            <h5 className="auctionName">PlayStation 5</h5>
                            <p className="auctionPrice">
                                ₦4,500 <del>₦45,000</del>
                            </p>
                        </div>
                        <div className="AuctionImage">
                            <div className="auction_image">
                                <img
                                    src={iPhone13Pro}
                                    className="auctionItem"
                                />
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
                            <h5 className="time-Text">BIDDING STARTS</h5>
                            <h5 className="start__time">52h30m23s</h5>
                        </div>
                        <div className="currentSub">
                            <h5 className="username">lovebud</h5>
                            <p className="subStatus"> just subscribed</p>
                        </div>
                        <button className="sub_button">
                            Subscribe for 10c
                        </button>
                    </div>

                    <div className="Auctioncard">
                        <div className="auctionHeader">
                            <h5 className="auctionName">PlayStation 5</h5>
                            <p className="auctionPrice">
                                ₦4,500 <del>₦45,000</del>
                            </p>
                        </div>
                        <div className="AuctionImage">
                            <div className="auction_image">
                                <img
                                    src={iPhone13Pro}
                                    className="auctionItem"
                                />
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
                            <h5 className="time-Text">BIDDING STARTS</h5>
                            <h5 className="start__time">52h30m23s</h5>
                        </div>
                        <div className="currentSub">
                            <h5 className="username">lovebud</h5>
                            <p className="subStatus"> just subscribed</p>
                        </div>
                        <button className="sub_button">
                            Subscribe for 10c
                        </button>
                    </div>
                    <div className="Auctioncard">
                        <div className="auctionHeader">
                            <h5 className="auctionName">PlayStation 5</h5>
                            <p className="auctionPrice">
                                ₦4,500 <del>₦45,000</del>
                            </p>
                        </div>
                        <div className="AuctionImage">
                            <div className="auction_image">
                                <img
                                    src={iPhone13Pro}
                                    className="auctionItem"
                                />
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
                            <h5 className="time-Text">BIDDING STARTS</h5>
                            <h5 className="start__time">52h30m23s</h5>
                        </div>
                        <div className="currentSub">
                            <h5 className="username">lovebud</h5>
                            <p className="subStatus"> just subscribed</p>
                        </div>
                        <button className="sub_button">
                            Subscribe for 10c
                        </button>
                    </div>
                    <div className="Auctioncard">
                        <div className="auctionHeader">
                            <h5 className="auctionName">PlayStation 5</h5>
                            <p className="auctionPrice">
                                ₦4,500 <del>₦45,000</del>
                            </p>
                        </div>
                        <div className="AuctionImage">
                            <div className="auction_image">
                                <img
                                    src={iPhone13Pro}
                                    className="auctionItem"
                                />
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
                            <h5 className="time-Text">BIDDING STARTS</h5>
                            <h5 className="start__time">52h30m23s</h5>
                        </div>
                        <div className="currentSub">
                            <h5 className="username">lovebud</h5>
                            <p className="subStatus"> just subscribed</p>
                        </div>
                        <button className="sub_button">
                            Subscribe for 10c
                        </button>
                    </div>
                    <div className="Auctioncard">
                        <div className="auctionHeader">
                            <h5 className="auctionName">PlayStation 5</h5>
                            <p className="auctionPrice">
                                ₦4,500 <del>₦45,000</del>
                            </p>
                        </div>
                        <div className="AuctionImage">
                            <div className="auction_image">
                                <img
                                    src={iPhone13Pro}
                                    className="auctionItem"
                                />
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
                            <h5 className="time-Text">BIDDING STARTS</h5>
                            <h5 className="start__time">52h30m23s</h5>
                        </div>
                        <div className="currentSub">
                            <h5 className="username">lovebud</h5>
                            <p className="subStatus"> just subscribed</p>
                        </div>
                        <button className="sub_button">
                            Subscribe for 10c
                        </button>
                    </div>
                </div>
                <div className="cards">
                    <div className="Auctioncard">
                        <div className="auctionHeader">
                            <h5 className="auctionName">PlayStation 5</h5>
                            <p className="auctionPrice">
                                ₦4,500 <del>₦45,000</del>
                            </p>
                        </div>
                        <div className="AuctionImage">
                            <div className="auction_image">
                                <img
                                    src={iPhone13Pro}
                                    className="auctionItem"
                                />
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
                            <h5 className="time-Text">BIDDING STARTS</h5>
                            <h5 className="start__time">52h30m23s</h5>
                        </div>
                        <div className="currentSub">
                            <h5 className="username">lovebud</h5>
                            <p className="subStatus"> just subscribed</p>
                        </div>
                        <button className="sub_button">
                            Subscribe for 10c
                        </button>
                    </div>

                    <div className="Auctioncard">
                        <div className="auctionHeader">
                            <h5 className="auctionName">PlayStation 5</h5>
                            <p className="auctionPrice">
                                ₦4,500 <del>₦45,000</del>
                            </p>
                        </div>
                        <div className="AuctionImage">
                            <div className="auction_image">
                                <img
                                    src={iPhone13Pro}
                                    className="auctionItem"
                                />
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
                            <h5 className="time-Text">BIDDING STARTS</h5>
                            <h5 className="start__time">52h30m23s</h5>
                        </div>
                        <div className="currentSub">
                            <h5 className="username">lovebud</h5>
                            <p className="subStatus"> just subscribed</p>
                        </div>
                        <button className="sub_button">
                            Subscribe for 10c
                        </button>
                    </div>
                    <div className="Auctioncard">
                        <div className="auctionHeader">
                            <h5 className="auctionName">PlayStation 5</h5>
                            <p className="auctionPrice">
                                ₦4,500 <del>₦45,000</del>
                            </p>
                        </div>
                        <div className="AuctionImage">
                            <div className="auction_image">
                                <img
                                    src={iPhone13Pro}
                                    className="auctionItem"
                                />
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
                            <h5 className="time-Text">BIDDING STARTS</h5>
                            <h5 className="start__time">52h30m23s</h5>
                        </div>
                        <div className="currentSub">
                            <h5 className="username">lovebud</h5>
                            <p className="subStatus"> just subscribed</p>
                        </div>
                        <button className="sub_button">
                            Subscribe for 10c
                        </button>
                    </div>
                    <div className="Auctioncard">
                        <div className="auctionHeader">
                            <h5 className="auctionName">PlayStation 5</h5>
                            <p className="auctionPrice">
                                ₦4,500 <del>₦45,000</del>
                            </p>
                        </div>
                        <div className="AuctionImage">
                            <div className="auction_image">
                                <img
                                    src={iPhone13Pro}
                                    className="auctionItem"
                                />
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
                            <h5 className="time-Text">BIDDING STARTS</h5>
                            <h5 className="start__time">52h30m23s</h5>
                        </div>
                        <div className="currentSub">
                            <h5 className="username">lovebud</h5>
                            <p className="subStatus"> just subscribed</p>
                        </div>
                        <button className="sub_button">
                            Subscribe for 10c
                        </button>
                    </div>
                    <div className="Auctioncard">
                        <div className="auctionHeader">
                            <h5 className="auctionName">PlayStation 5</h5>
                            <p className="auctionPrice">
                                ₦4,500 <del>₦45,000</del>
                            </p>
                        </div>
                        <div className="AuctionImage">
                            <div className="auction_image">
                                <img
                                    src={iPhone13Pro}
                                    className="auctionItem"
                                />
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
                            <h5 className="time-Text">BIDDING STARTS</h5>
                            <h5 className="start__time">52h30m23s</h5>
                        </div>
                        <div className="currentSub">
                            <h5 className="username">lovebud</h5>
                            <p className="subStatus"> just subscribed</p>
                        </div>
                        <button className="sub_button">
                            Subscribe for 10c
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default LandingPage;
