import "./style.css";
import Cancel from "../icons/Dashboard/Cancel.svg";
function CreateAuction() {
    return (
        <div className="Creation">
            <div>
                <form className="AuctionForm">
                    <div className="CreateAuctionContainer">
                        <div className="CancelAuction">
                            <h4>Create new auction</h4>

                            <img src={Cancel} />
                        </div>

                        <div className="auctionDate">
                            <div>
                                <label for="startDate">Start Time</label>
                                <br />
                                <input type="date" className="auctionStart" />
                            </div>
                            <div>
                                <label for="endDate">End Time</label>
                                <br />
                                <input type="date" className="auctionEnd" />
                            </div>
                        </div>
                        <div className="subCharge">
                            <div className="inputHolder">
                                <label for="subCost">
                                    Subscription Cost (NGN)
                                </label>
                                <br />
                                <input
                                    type="number"
                                    placeholder="Enter subscription cost"
                                    className="auctionInput"
                                />
                            </div>
                        </div>
                        <div className="inputHolder">
                            <label for="product">Auction Product</label>
                            <br />
                            <input
                                placeholder="Select auction product"
                                className="auctionInput"
                            />
                        </div>
                        <div className="inputHolder">
                            <label for="product">
                                Product Discounted Price (NGN)
                            </label>
                            <br />
                            <input
                                placeholder="Enter product discounted price"
                                className="auctionInput"
                            />
                        </div>
                        <div className="inputHolder">
                            <label for="product">
                                Product Price Increment Per Bid (NGN)
                            </label>
                            <br />
                            <input
                                placeholder="Enter product price increment per bid"
                                className="auctionInput"
                            />
                        </div>
                        <button className="AuctionSubmit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default CreateAuction;
