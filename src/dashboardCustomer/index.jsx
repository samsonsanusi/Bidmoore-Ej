import "./style.css";
import dashboard_icon from "../icons/Dashboard/dashboard_icon.svg";
import customer_icon from "../icons/Dashboard/customer_icon.svg";
import product_icon from "../icons/Dashboard/product_icon.svg";
import auction_icon from "../icons/Dashboard/auction_icon.svg";
import sold_out_auction from "../icons/Dashboard/sold_out_auction.svg";
import wallet_transaction from "../icons/Dashboard/wallet_transaction.svg";
import logout from "../icons/Dashboard/logout.svg";

function DashboardCustomer() {
    return (
        <div className="DashboardCustomer">
            <div className="DashboardCustomer_mainSection">
                <div className="DashboardCustomer_aside">
                    <h3 className="DashboardCustomer_logo">
                        Bidmo<span className="DashboardCustomer_style">o</span>
                        re
                    </h3>
                    <div className="DashboardCustomer__navContainer">
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
                        <div className="DashboardCustomer__nav">
                            <img
                                src={logout}
                                alt="logout_icon"
                                className="nav__icon"
                            />
                            <p className="DashboardCustomer_navPara">Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DashboardCustomer;
