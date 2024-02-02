import { useSelector } from "react-redux";

function BagSummary(){
    const bagItems = useSelector(store => store.bag);
    const items = useSelector(store => store.items);

    let totalItem = bagItems.length;
    const CONVINIENCE_FEES = 99;
    let totalMRP = 0;
    let totalDiscount = 0;
    let finalPayment = 0;    
    
    items.forEach((item) => {bagItems.forEach((itemId) => {
            if(item.id === itemId){
                totalMRP += item.original_price;
                totalDiscount += item.original_price - item.current_price;
            }
        })
    })

    finalPayment = (totalMRP - totalDiscount) + CONVINIENCE_FEES;

    return(
        <div className="bag-summary">
            <div className="bag-details-container">
                <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
                <div className="price-item">
                <span className="price-item-tag">Total MRP</span>
                <span className="price-item-value">₹ {totalMRP}</span>
                </div>
                <div className="price-item">
                <span className="price-item-tag">Discount on MRP</span>
                <span className="price-item-value priceDetail-base-discount">-₹ {totalDiscount}</span>
                </div>
                <div className="price-item">
                <span className="price-item-tag">Convenience Fee</span>
                <span className="price-item-value">₹ {CONVINIENCE_FEES}</span>
                </div>
                <hr className="summary-line"/>
                <div className="price-footer">
                <span className="price-item-tag">Total Amount</span>
                <span className="price-item-value">₹ {finalPayment}</span>
                </div>
            </div>
            {finalPayment == CONVINIENCE_FEES ? <button className="btn-place-order" disabled>
                <div className="css-xjhrni">PLACE ORDER</div>
            </button> : <button className="btn-place-order">
                <div className="css-xjhrni">PLACE ORDER</div>
            </button>} 
        </div>
    );
}

export default BagSummary;