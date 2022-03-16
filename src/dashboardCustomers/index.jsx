import "./style.css";
import dashboard_icon from "../icons/Dashboard/dashboard_icon.svg";
import customer_icon from "../icons/Dashboard/customer_icon.svg";
import product_icon from "../icons/Dashboard/product_icon.svg";
import auction_icon from "../icons/Dashboard/auction_icon.svg";
import sold_out_auction from "../icons/Dashboard/sold_out_auction.svg";
import wallet_transaction from "../icons/Dashboard/wallet_transaction.svg";
import logout from "../icons/Dashboard/logout.svg";

function DashboardCustomers() {
    return (
        <div>
            <div className="CustomerContainer">
                <div>
                    <aside className="CustomerAside">
                        <h3 className="customerLogo">
                            Bidmo
                            <span className="customerStyle">o</span>
                            re
                        </h3>
                        <div className="customer__navContainer">
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
                <main className="CustomerMainSection">
                    <div className="customerBordertop"></div>
                    <section className="CustomerCard">
                        <h6 className="customerMain__header">
                            Customers(45,485)
                        </h6>

                        <div className="customerSearch">
                            <div className="DashboardCustomerCard__innerContent">
                                <p className="customerFilter__Para">
                                    FILTER BY
                                </p>
                                <div className="customerDataInput">
                                    <div className="inputWrapper">
                                        <label
                                            htmlFor="username"
                                            className="inputLabel2"
                                        >
                                            Username
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            placeholder="Customer Username"
                                            className="customerInput_field"
                                        />
                                    </div>
                                    <br />
                                    <div className="inputWrapper">
                                        <label
                                            htmlFor="phoneNumber"
                                            className="inputLabel2"
                                        >
                                            Products Added From
                                        </label>
                                        <br />
                                        <input
                                            type="telephone"
                                            placeholder="Enter Customer Phone Number"
                                            className="customerInput_field"
                                        />
                                    </div>
                                    <br />
                                    <div className="inputWrapper">
                                        <label
                                            htmlFor="customerBalance"
                                            className="inputLabel2"
                                        >
                                            Sort By Balance
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            placeholder="Select Sort Type"
                                            className="customerInput_field"
                                        />
                                    </div>
                                    <br />
                                    <div className="inputWrapper">
                                        <label
                                            htmlFor="registered Form"
                                            className="inputLabel2"
                                        >
                                            Customer Registered Form
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            placeholder="Pick Start Date"
                                            className="customerInput_field"
                                        />
                                    </div>
                                    <br />
                                    <div className="inputWrapper">
                                        <label
                                            htmlFor="registered Form"
                                            className="inputLabel2"
                                        >
                                            Customer Registered Till
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            placeholder="Pick End Date"
                                            className="customerInput_field"
                                        />
                                    </div>
                                </div>
                                <div className="customers__bottomButtons">
                                    <button className="customer__lightBtn">
                                        Clear all
                                    </button>
                                    <button className="customer__coloredBtn">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="CustomerCardInfo">
                        <table className="table2">
                            <colgroup></colgroup>
                            <tr>
                                <th className="tableHead">USERNAME</th>
                                <th className="tableHead">PHONE NUMBER</th>
                                <th className="tableHead">SUBSCRIPTIONS</th>
                                <th className="tableHead">AUCTION BIDS</th>
                                <th className="tableHead">BIDMOORE COINS</th>
                                <th className="tableHead">STATUS</th>
                                <th className="tableHead">ACCOUNT STATUS</th>
                                <th className="tableHead">REGISTERED ON</th>
                                <th className="tableHead">LAST LOGIN ON</th>
                            </tr>
                            <tr>
                                <td className="tableData">
                                    <div className="auctionImage">
                                        <div className="customerAvartar"></div>
                                        Tochi
                                    </div>
                                </td>
                                <td className="tableData">+2348145638291</td>
                                <td className="tableData">
                                    Count: 18 <br />
                                    Worth: ₦4,400.00
                                </td>
                                <td className="tableData">
                                    Count: 18 <br />
                                    Worth: ₦4,400.00
                                </td>
                                <td className="tableData">
                                    Balance: 0 <br />
                                    Worth: ₦0.00
                                </td>
                                <td className="tableData">
                                    <div className="verification">
                                        <div className="verifcationDot"></div>
                                        Verified
                                    </div>
                                </td>
                                <td className="tableData">
                                    <p className="active__background">ACTIVE</p>
                                </td>
                                <td className="tableData">
                                    Jul 6, 2021, 9:17 AM
                                </td>
                                <td className="tableData">
                                    Jan 1, 2022, 9:17 AM
                                </td>
                            </tr>
                            <tr>
                                <td className="tableData">
                                    <div className="auctionImage">
                                        <div className="customerAvartar"></div>
                                        Tochi
                                    </div>
                                </td>
                                <td className="tableData">+2348145638291</td>
                                <td className="tableData">
                                    Count: 18 <br />
                                    Worth: ₦4,400.00
                                </td>
                                <td className="tableData">
                                    Count: 18 <br />
                                    Worth: ₦4,400.00
                                </td>
                                <td className="tableData">
                                    Balance: 0 <br />
                                    Worth: ₦0.00
                                </td>
                                <td className="tableData">
                                    <div className="verification">
                                        <div className="verifcationDot"></div>
                                        Verified
                                    </div>
                                </td>
                                <td className="tableData">
                                    <p className="active__background">ACTIVE</p>
                                </td>
                                <td className="tableData">
                                    Jul 6, 2021, 9:17 AM
                                </td>
                                <td className="tableData">
                                    Jan 1, 2022, 9:17 AM
                                </td>
                            </tr>
                            <tr>
                                <td className="tableData">
                                    <div className="auctionImage">
                                        <div className="customerAvartar"></div>
                                        Tochi
                                    </div>
                                </td>
                                <td className="tableData">+2348145638291</td>
                                <td className="tableData">
                                    Count: 18 <br />
                                    Worth: ₦4,400.00
                                </td>
                                <td className="tableData">
                                    Count: 18 <br />
                                    Worth: ₦4,400.00
                                </td>
                                <td className="tableData">
                                    Balance: 0 <br />
                                    Worth: ₦0.00
                                </td>
                                <td className="tableData">
                                    <div className="verification">
                                        <div className="verifcationDot"></div>
                                        Verified
                                    </div>
                                </td>
                                <td className="tableData">
                                    <p className="active__background">ACTIVE</p>
                                </td>
                                <td className="tableData">
                                    Jul 6, 2021, 9:17 AM
                                </td>
                                <td className="tableData">
                                    Jan 1, 2022, 9:17 AM
                                </td>
                            </tr>
                            <tr>
                                <td className="tableData">
                                    <div className="auctionImage">
                                        <div className="customerAvartar"></div>
                                        Tochi
                                    </div>
                                </td>
                                <td className="tableData">+2348145638291</td>
                                <td className="tableData">
                                    Count: 18 <br />
                                    Worth: ₦4,400.00
                                </td>
                                <td className="tableData">
                                    Count: 18 <br />
                                    Worth: ₦4,400.00
                                </td>
                                <td className="tableData">
                                    Balance: 0 <br />
                                    Worth: ₦0.00
                                </td>
                                <td className="tableData">
                                    <div className="verification">
                                        <div className="verifcationDot"></div>
                                        Verified
                                    </div>
                                </td>
                                <td className="tableData">
                                    <p className="active__background">ACTIVE</p>
                                </td>
                                <td className="tableData">
                                    Jul 6, 2021, 9:17 AM
                                </td>
                                <td className="tableData">
                                    Jan 1, 2022, 9:17 AM
                                </td>
                            </tr>
                            <tr>
                                <td className="tableData">
                                    <div className="auctionImage">
                                        <div className="customerAvartar"></div>
                                        Tochi
                                    </div>
                                </td>
                                <td className="tableData">+2348145638291</td>
                                <td className="tableData">
                                    Count: 18 <br />
                                    Worth: ₦4,400.00
                                </td>
                                <td className="tableData">
                                    Count: 18 <br />
                                    Worth: ₦4,400.00
                                </td>
                                <td className="tableData">
                                    Balance: 0 <br />
                                    Worth: ₦0.00
                                </td>
                                <td className="tableData">
                                    <div className="verification">
                                        <div className="verifcationDot"></div>
                                        Verified
                                    </div>
                                </td>
                                <td className="tableData">
                                    <p className="active__background">ACTIVE</p>
                                </td>
                                <td className="tableData">
                                    Jul 6, 2021, 9:17 AM
                                </td>
                                <td className="tableData">
                                    Jan 1, 2022, 9:17 AM
                                </td>
                            </tr>
                        </table>
                    </section>
                </main>
            </div>
        </div>
    );
}
export default DashboardCustomers;
