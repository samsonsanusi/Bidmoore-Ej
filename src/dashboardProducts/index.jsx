import "./style.css";
import dashboard_icon from "../icons/Dashboard/dashboard_icon.svg";
import customer_icon from "../icons/Dashboard/customer_icon.svg";
import product_icon from "../icons/Dashboard/product_icon.svg";
import auction_icon from "../icons/Dashboard/auction_icon.svg";
import sold_out_auction from "../icons/Dashboard/sold_out_auction.svg";
import wallet_transaction from "../icons/Dashboard/wallet_transaction.svg";
import logout from "../icons/Dashboard/logout.svg";
import iPhone_13_Pro from "../icons/Dashboard/iPhone_13_Pro.png";
import Ps5 from "../icons/Dashboard/Ps5.png";

function DashboardProducts() {
    return (
        <div>
            <div className="DashboardCustomerContainer">
                <div>
                    <aside className="DashboardCustomer_aside">
                        <h3 className="DashboardCustomer_logo">
                            Bidmo
                            <span className="DashboardCustomer_style">o</span>
                            re
                        </h3>
                        <div className="DashboardCustomer__navContainer">
                            <ul className="DashboardCustomer__listItems">
                                <li>
                                    <a
                                        href=""
                                        className="DashboardCustomer__link"
                                    >
                                        <div className="DashboardCustomer__nav">
                                            <img
                                                src={dashboard_icon}
                                                alt="dashboard_icon"
                                                className="nav__icon"
                                            />
                                            <p className="DashboardCustomer_navPara">
                                                Dashboard
                                            </p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href=""
                                        className="DashboardCustomer__link"
                                    >
                                        <div className="DashboardCustomer__nav">
                                            <img
                                                src={customer_icon}
                                                alt="customer_icon"
                                                className="nav__icon"
                                            />
                                            <p className="DashboardCustomer_navPara">
                                                Customers
                                            </p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href=""
                                        className="DashboardCustomer__link"
                                    >
                                        <div className="DashboardCustomer__nav">
                                            <img
                                                src={product_icon}
                                                alt="production_icon"
                                                className="nav__icon"
                                            />
                                            <p className="DashboardCustomer_navPara">
                                                Products
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="DashboardCustomer__link"
                                    >
                                        <div className="DashboardCustomer__nav">
                                            <img
                                                src={auction_icon}
                                                alt="auction_icon"
                                                className="nav__icon"
                                            />
                                            <p className="DashboardCustomer_navPara">
                                                Auctions
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="DashboardCustomer__link"
                                    >
                                        <div className="DashboardCustomer__nav">
                                            <img
                                                src={sold_out_auction}
                                                alt="sold_out_icon"
                                                className="nav__icon"
                                            />
                                            <p className="DashboardCustomer_navPara">
                                                Sold Auction Products
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="DashboardCustomer__link"
                                    >
                                        <div className="DashboardCustomer__nav">
                                            <img
                                                src={wallet_transaction}
                                                alt="wallet_transaction_icon"
                                                className="nav__icon"
                                            />
                                            <p className="DashboardCustomer_navPara">
                                                Wallet Transaction
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="DashboardCustomer__link"
                                    >
                                        <div className="DashboardCustomer__nav">
                                            <img
                                                src={logout}
                                                alt="logout_icon"
                                                className="nav__icon"
                                            />
                                            <p className="DashboardCustomer_navPara">
                                                Logout
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <main className="DashboardCustomer_mainSection">
                    <div className="DashboardCustomer-mainSectionBorderTop"></div>
                    <section className="DashboardCustomerCard">
                        <div className="DashboardCustomerCard_topButtons">
                            <h6 className="DashboardCustomerCard_header">
                                Products (5)
                            </h6>
                            <a href="">
                                <button className="DashboardCustomer__addMoreBtn">
                                    <span className="add">+</span>Add new
                                    products
                                </button>
                            </a>
                        </div>
                        <div className="DashboardCustomerCard__content">
                            <div className="DashboardCustomerCard__innerContent">
                                <p className="DashboardCustomerCard__fiterPara">
                                    FILTER BY
                                </p>
                                <div className="DashboardCustomerCard__input">
                                    <div className="groupedData2">
                                        <label
                                            htmlFor="porductName"
                                            className="inputLabel"
                                        >
                                            Name
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            placeholder="Enter Product Name"
                                            className="inputField"
                                        />
                                    </div>
                                    <br />
                                    <div className="groupedData">
                                        <label
                                            htmlFor="ProductAddedFrom"
                                            className="inputLabel"
                                        >
                                            Products Added From
                                        </label>
                                        <br />
                                        <input
                                            type="number"
                                            placeholder="Enter start date"
                                            className="inputField"
                                        />
                                    </div>
                                    <br />
                                    <div className="groupedData">
                                        <label
                                            htmlFor="ProductAddedTill"
                                            className="inputLabel"
                                        >
                                            Product Added Till
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            placeholder="Enter end date"
                                            className="inputField"
                                        />
                                    </div>
                                </div>
                                <div className="DashboardCustomerCard__bottomButtons">
                                    <button className="DashboardCustomerCard__lightBtn">
                                        Clear all
                                    </button>
                                    <button className="DashboardCustomerCard__coloredBtn">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="ProductInfoCard">
                        <table>
                            <tr>
                                <th>IMAGE</th>
                                <th className="productName">NAME</th>
                                <th>DESCRIPTIONS</th>
                                <th>PRICE</th>
                                <th>CREATED ON</th>
                                <th>UPDATED ON</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="auctionImage">
                                        <img
                                            src={iPhone_13_Pro}
                                            className="productAuction"
                                        />
                                    </div>
                                </td>
                                <td>Play Station 5</td>
                                <td>Play Station 5</td>
                                <td>₦45000</td>
                                <td>Jul 6, 2021, 9:17 AM</td>
                                <td>Jan 1, 2022, 9:17 AM</td>
                                <td>
                                    <div>
                                        <button className="DashboardCustomerCard__lightBtn auctionEdit">
                                            Edit
                                        </button>
                                        <button className="DashboardCustomerCard__coloredBtn auctionDelete">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="auctionImage">
                                        <img
                                            src={Ps5}
                                            className="productAuction"
                                            alt="AuctionImage"
                                        />
                                    </div>
                                </td>
                                <td>Play Station 5</td>
                                <td>Play Station 5</td>
                                <td>₦45000</td>
                                <td>Jul 6, 2021, 9:17 AM</td>
                                <td>Jan 1, 2022, 9:17 AM</td>
                                <td>
                                    <div>
                                        <button className="DashboardCustomerCard__lightBtn auctionEdit">
                                            Edit
                                        </button>
                                        <button className="DashboardCustomerCard__coloredBtn auctionDelete">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="auctionImage">
                                        <img
                                            src={iPhone_13_Pro}
                                            className="productAuction"
                                            alt="AuctionImage"
                                        />
                                    </div>
                                </td>
                                <td>Play Station 5</td>
                                <td>Play Station 5</td>
                                <td>₦45000</td>
                                <td>Jul 6, 2021, 9:17 AM</td>
                                <td>Jan 1, 2022, 9:17 AM</td>
                                <td>
                                    <div>
                                        <button className="DashboardCustomerCard__lightBtn auctionEdit">
                                            Edit
                                        </button>
                                        <button className="DashboardCustomerCard__coloredBtn auctionDelete">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="auctionImage">
                                        <img
                                            src={Ps5}
                                            className="productAuction"
                                            alt="AuctionImage"
                                        />
                                    </div>
                                </td>
                                <td>Play Station 5</td>
                                <td>Play Station 5</td>
                                <td>₦45000</td>
                                <td>Jul 6, 2021, 9:17 AM</td>
                                <td>Jan 1, 2022, 9:17 AM</td>
                                <td>
                                    <div>
                                        <button className="DashboardCustomerCard__lightBtn auctionEdit">
                                            Edit
                                        </button>
                                        <button className="DashboardCustomerCard__coloredBtn auctionDelete">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="auctionImage">
                                        <img
                                            src={iPhone_13_Pro}
                                            className="productAuction"
                                            alt="AuctionImage"
                                        />
                                    </div>
                                </td>
                                <td>Play Station 5</td>
                                <td>Play Station 5</td>
                                <td>₦45000</td>
                                <td>Jul 6, 2021, 9:17 AM</td>
                                <td>Jan 1, 2022, 9:17 AM</td>
                                <td>
                                    <button className="DashboardCustomerCard__lightBtn auctionEdit">
                                        Edit
                                    </button>
                                    <button className="DashboardCustomerCard__coloredBtn auctionDelete">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </section>
                </main>
            </div>
        </div>
    );
}
export default DashboardProducts;
