import "./style.css";
import dashboard_icon from "../icons/Dashboard/dashboard_icon.svg";
import customer_icon from "../icons/Dashboard/customer_icon.svg";
import product_icon from "../icons/Dashboard/product_icon.svg";
import auction_icon from "../icons/Dashboard/auction_icon.svg";
import sold_out_auction from "../icons/Dashboard/sold_out_auction.svg";
import wallet_transaction from "../icons/Dashboard/wallet_transaction.svg";
import logout from "../icons/Dashboard/logout.svg";

function DashboardAuctions() {
    return (
        <div>
            <div className="Auctions">
                <div>
                    <aside className="AuctionAside">
                        <h3 className="customerLogo">
                            Bidmo
                            <span className="customerStyle">o</span>
                            re
                        </h3>
                        <div className="Auction__navContainer">
                            <ul className="customerList__items">
                                <li>
                                    <a href="" className="customerLink">
                                        <div className="customerNav__icon">
                                            <img
                                                src={dashboard_icon}
                                                alt="dashboard_icon"
                                                className="nav__iconAside"
                                            />
                                            <p className="customer__navPara">
                                                Dashboard
                                            </p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="" className="customerLink">
                                        <div className="DashboardCustomer__nav">
                                            <img
                                                src={customer_icon}
                                                alt="customer_icon"
                                                className="nav__iconAside"
                                            />
                                            <p className="customer__navPara">
                                                Customers
                                            </p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="" className="customerLink">
                                        <div className="customerNav__icon">
                                            <img
                                                src={product_icon}
                                                alt="production_icon"
                                                className="nav__iconAside"
                                            />
                                            <p className="customer__navPara">
                                                Products
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="customerLink">
                                        <div className="customerNav__icon">
                                            <img
                                                src={auction_icon}
                                                alt="auction_icon"
                                                className="nav__iconAside"
                                            />
                                            <p className="customer__navPara">
                                                Auctions
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="customerLink">
                                        <div className="customerNav__icon">
                                            <img
                                                src={sold_out_auction}
                                                alt="sold_out_icon"
                                                className="nav__iconAside"
                                            />
                                            <p className="customer__navPara">
                                                Sold Auction Products
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="customerLink">
                                        <div className="customerNav__icon">
                                            <img
                                                src={wallet_transaction}
                                                alt="wallet_transaction_icon"
                                                className="nav__iconAside"
                                            />
                                            <p className="customer__navPara">
                                                Wallet Transaction
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="customerLink">
                                        <div className="customerNav__icon">
                                            <img
                                                src={logout}
                                                alt="logout_icon"
                                                className="nav__iconAside"
                                            />
                                            <p className="customer__navPara">
                                                Logout
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <main className="Auction_mainSection">
                    <div className="auction_borderTop"></div>
                    <section className="AuctionCard">
                        <div className="auctionTop_buttons">
                            <h6 className="card__header">Products (5)</h6>
                            <a href="">
                                <button className="newAuction__btn">
                                    <span className="add">+</span>Create new
                                    auctions
                                </button>
                            </a>
                        </div>
                        <div className="AuctionInfo">
                            <div className="DashboardCustomerCard__innerContent">
                                <p className="filterPara">FILTER BY</p>
                                <div className="AuctionDetails">
                                    <div className="auctionDetails2">
                                        <label
                                            htmlFor="auctionForm"
                                            className="inputLabel"
                                        >
                                            Auction Created Form
                                        </label>
                                        <br />
                                        <input
                                            type="date"
                                            placeholder="Pick start date"
                                            className="auction__info"
                                        />
                                    </div>
                                    <br />
                                    <div className="groupedData">
                                        <label
                                            htmlFor="auctionForm"
                                            className="inputLabel"
                                        >
                                            Auction Created Till
                                        </label>
                                        <br />
                                        <input
                                            type="date"
                                            placeholder="Enter start date"
                                            className="auction__info"
                                        />
                                    </div>
                                    <br />

                                    <div className="groupedData">
                                        <label
                                            htmlFor="auctionForm"
                                            className="inputLabel"
                                        >
                                            Live Date
                                        </label>
                                        <br />
                                        <input
                                            type="date"
                                            placeholder="Pick live date"
                                            className="auction__info"
                                        />
                                    </div>
                                    <div className="groupedData">
                                        <label
                                            htmlFor="auctionForm"
                                            className="inputLabel"
                                        >
                                            Auction Status
                                        </label>
                                        <br />
                                        <select
                                            name="auctionType"
                                            className="auction__info"
                                        >
                                            <option>Going Live</option>
                                            <option>Closed</option>
                                            <option>Uppcoming</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="AuctionButtons">
                                    <button className="auction_clearButton">
                                        Clear all
                                    </button>
                                    <button className="auction_applyButton">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="AuctionCard">
                        <table>
                            <tr>
                                <th>TYPE</th>
                                <th>COSTS</th>
                                <th>ACTIVITIES</th>
                                <th>LIVE DATE</th>
                                <th>PRODUCT</th>
                                <th>AUCTION PRICES</th>
                                <th>STATUSES</th>
                            </tr>
                            <tr>
                                <td>Pay per Bid</td>
                                <td>
                                    <span className="boldtext">Sub:</span> ₦0.00{" "}
                                    <br />
                                    Bid: ₦400.00
                                </td>
                                <td>
                                    <span className="boldtext">Subs:</span> 2
                                    <br />
                                    <span className="boldtext">Bid:</span>{" "}
                                    <a href="" className="viewMoreBids">
                                        View bids
                                    </a>
                                </td>
                                <td>
                                    <span className="boldtext">Starts:</span>{" "}
                                    Jan 1, 2022, 9:17AM <br />
                                    <span className="boldtext">Ends:</span> Jan
                                    7, 2022, 8:00 AM
                                </td>
                                <td>
                                    Play Station 5 <br />
                                    <span className="boldtext">
                                        Created On:
                                    </span>{" "}
                                    Jan 7, 2022, 8:00 AM
                                </td>
                                <td>
                                    <span className="boldtext">
                                        Disc Price:
                                    </span>{" "}
                                    ₦4000.00 <br />
                                    <span className="boldtext">
                                        Prince Inc. / Bid:
                                    </span>{" "}
                                    ₦1.00
                                </td>
                                <td>
                                    <div>
                                        <p>LIVE*ACTIVE</p>
                                        <p>PUBLISHED</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Pay per Bid</td>
                                <td>
                                    <span className="boldtext">Sub:</span> ₦0.00{" "}
                                    <br />
                                    Bid: ₦400.00
                                </td>
                                <td>
                                    <span className="boldtext">Subs:</span> 2
                                    <br />
                                    <span className="boldtext">Bid:</span>{" "}
                                    <a href="" className="viewMoreBids">
                                        View bids
                                    </a>
                                </td>
                                <td>
                                    <span className="boldtext">Starts:</span>{" "}
                                    Jan 1, 2022, 9:17AM <br />
                                    <span className="boldtext">Ends:</span> Jan
                                    7, 2022, 8:00 AM
                                </td>
                                <td>
                                    Play Station 5 <br />
                                    <span className="boldtext">
                                        Created On:
                                    </span>{" "}
                                    Jan 7, 2022, 8:00 AM
                                </td>
                                <td>
                                    <span className="boldtext">
                                        Disc Price:
                                    </span>{" "}
                                    ₦4000.00 <br />
                                    <span className="boldtext">
                                        Prince Inc. / Bid:
                                    </span>{" "}
                                    ₦1.00
                                </td>
                                <td>
                                    <div>
                                        <p>LIVE*ACTIVE</p>
                                        <p>PUBLISHED</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Pay per Bid</td>
                                <td>
                                    <span className="boldtext">Sub:</span> ₦0.00{" "}
                                    <br />
                                    Bid: ₦400.00
                                </td>
                                <td>
                                    <span className="boldtext">Subs:</span> 2
                                    <br />
                                    <span className="boldtext">Bid:</span>{" "}
                                    <a href="" className="viewMoreBids">
                                        View bids
                                    </a>
                                </td>
                                <td>
                                    <span className="boldtext">Starts:</span>{" "}
                                    Jan 1, 2022, 9:17AM <br />
                                    <span className="boldtext">Ends:</span> Jan
                                    7, 2022, 8:00 AM
                                </td>
                                <td>
                                    Play Station 5 <br />
                                    <span className="boldtext">
                                        Created On:
                                    </span>{" "}
                                    Jan 7, 2022, 8:00 AM
                                </td>
                                <td>
                                    <span className="boldtext">
                                        Disc Price:
                                    </span>{" "}
                                    ₦4000.00 <br />
                                    <span className="boldtext">
                                        Prince Inc. / Bid:
                                    </span>{" "}
                                    ₦1.00
                                </td>
                                <td>
                                    <div>
                                        <p>LIVE*ACTIVE</p>
                                        <p>PUBLISHED</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Pay per Bid</td>
                                <td>
                                    <span className="boldtext">Sub:</span> ₦0.00{" "}
                                    <br />
                                    Bid: ₦400.00
                                </td>
                                <td>
                                    <span className="boldtext">Subs:</span> 2
                                    <br />
                                    <span className="boldtext">Bid:</span>{" "}
                                    <a href="" className="viewMoreBids">
                                        View bids
                                    </a>
                                </td>
                                <td>
                                    <span className="boldtext">Starts:</span>{" "}
                                    Jan 1, 2022, 9:17AM <br />
                                    <span className="boldtext">Ends:</span> Jan
                                    7, 2022, 8:00 AM
                                </td>
                                <td>
                                    Play Station 5 <br />
                                    <span className="boldtext">
                                        Created On:
                                    </span>{" "}
                                    Jan 7, 2022, 8:00 AM
                                </td>
                                <td>
                                    <span className="boldtext">
                                        Disc Price:
                                    </span>{" "}
                                    ₦4000.00 <br />
                                    <span className="boldtext">
                                        Prince Inc. / Bid:
                                    </span>{" "}
                                    ₦1.00
                                </td>
                                <td>
                                    <div>
                                        <p>LIVE*ACTIVE</p>
                                        <p>PUBLISHED</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Pay per Bid</td>
                                <td>
                                    <span className="boldtext">Sub:</span> ₦0.00{" "}
                                    <br />
                                    Bid: ₦400.00
                                </td>
                                <td>
                                    <span className="boldtext">Subs:</span> 2
                                    <br />
                                    <span className="boldtext">Bid:</span>{" "}
                                    <a href="" className="viewMoreBids">
                                        View bids
                                    </a>
                                </td>
                                <td>
                                    <span className="boldtext">Starts:</span>{" "}
                                    Jan 1, 2022, 9:17AM <br />
                                    <span className="boldtext">Ends:</span> Jan
                                    7, 2022, 8:00 AM
                                </td>
                                <td>
                                    Play Station 5 <br />
                                    <span className="boldtext">
                                        Created On:
                                    </span>{" "}
                                    Jan 7, 2022, 8:00 AM
                                </td>
                                <td>
                                    <span className="boldtext">
                                        Disc Price:
                                    </span>{" "}
                                    ₦4000.00 <br />
                                    <span className="boldtext">
                                        Prince Inc. / Bid:
                                    </span>{" "}
                                    ₦1.00
                                </td>
                                <td>
                                    <div>
                                        <p>LIVE*ACTIVE</p>
                                        <p>PUBLISHED</p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </section>
                </main>
            </div>
        </div>
    );
}
export default DashboardAuctions;
