import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdOutlinePlaylistRemove } from "react-icons/md";

function BagItem({item}){

    const dispatch = useDispatch();

    let handleRemoveBagItemBtn = (itemId) => {
        dispatch(bagActions.removeFromBag(itemId));
    }

    return(
            <div className="bag-item-container">
                <div className="item-left-part">
                    <img loading="lazy" className="bag-item-img" src={item.image} alt={item.item_name}/>
                </div>
                <div className="item-right-part">
                    <div className="company">{item.company}</div>
                    <div className="item-name">{item.item_name}</div>
                    <div className="price-container">
                        <span className="current-price">Rs {item.current_price}</span>
                        <span className="original-price">Rs {item.original_price}</span>
                        <span className="discount-percentage">({item.discount_percentage}% OFF)</span>
                    </div>
                    <div className="return-period">
                        <span className="return-period-days">{item.return_period} days</span> return available
                    </div>
                    <div className="delivery-details">
                        Delivery by
                        <span className="delivery-details-days">{item.delivery_date}</span>
                    </div>
                </div>
                <div className="remove-from-cart" onClick={() => handleRemoveBagItemBtn(item.id)}><MdOutlinePlaylistRemove /></div>
            </div>
    );
}

export default BagItem;