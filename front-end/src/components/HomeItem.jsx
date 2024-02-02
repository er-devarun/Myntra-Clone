import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoBagAddOutline } from "react-icons/io5";
import { IoBagRemoveOutline } from "react-icons/io5";

function HomeItem({item}){

    const bagItems = useSelector(store => store.bag);
    const dispatch = useDispatch();

    let handleAddToBagBtn = (itemId) => {
        dispatch(bagActions.addToBag(itemId));
    }

    let handleRemoveFromBagBtn = (itemId) => {
        dispatch(bagActions.removeFromBag(itemId));
    }

    return (
        <div className="item-card">
            <img className="item-image" src={item.image} alt="item image"/>
            <div className="rating">{item.rating.stars} ⭐ | {item.rating.count}</div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
                <span className="current-price">Rs. {item.current_price}</span>
                <span className="original-price">Rs. {item.original_price}</span>
                <span className="discount">({item.discount_percentage}% OFF)</span>
            </div>
            { !bagItems.includes(item.id) ? <button type="button" className="btn btn-success add-to-bag-btn" onClick={() => handleAddToBagBtn(item.id)}><IoBagAddOutline className="add-to-bag-icon"/> Add to Bag</button> : <button type="button" className="btn btn-danger remove-from-bag-btn"   onClick={() => handleRemoveFromBagBtn(item.id)}><IoBagRemoveOutline className="remove-from-bag-icon"/>
            Remove</button> }
        </div>
    );
}

export default HomeItem;