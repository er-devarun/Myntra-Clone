import { IoPerson } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { itemsActions } from "../store/itemsSlice";

function Header(){

    const bag = useSelector(store => store.bag);
    const [serchItem, setSearchItem] = useState("");
    const dispatch = useDispatch();

    const handleSearchBox = (event) => {
        setSearchItem(event.target.value);
    }

    const handleSearchInput = (event) => {
        if(event.key === "Enter"){
            // console.log(serchItem);
            dispatch(itemsActions.displaySearchItem(serchItem));
        }
    }

    return(
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <Link to="/"><img className="myntra-home" src="/images/myntra_logo.webp" alt="myntra_home"/></Link>
                </div>
                <nav className="nav-bar">
                    <a href="#">MEN</a>
                    <a href="#">WOMEN</a>
                    <a href="#">KIDS</a>
                    <a href="#">HOME & LIVING</a>
                    <a href="#">BEAUTY</a>
                    <a href="#">STUDIO<sup>NEW</sup></a>
                </nav>
                <div className="search-bar">
                    <IoSearch className="search-icon"/>
                    <input className="search-input" placeholder="Search for products, brands and more" value={serchItem} onChange={(event) => handleSearchBox(event)} onKeyDown={(event) => handleSearchInput(event)}/>
                </div>
                <div className="action-bar">
                    <div className="action-container">
                        <IoPerson className="action-icon"/>
                        <span className="action-name">Profile</span>
                    </div>

                    <div className="action-container">
                        <FaHeart className="action-icon"/>
                        <span className="action-name">Wishlist</span>
                    </div>

                    <Link className="action-container" to="/bag">
                        <IoBagHandle className="action-icon"/>
                        <span className="action-name">Bag</span>
                        {bag.length > 0 && <span className="bag-item-count">{bag.length}</span>}
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;