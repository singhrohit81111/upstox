import React, { useState } from 'react'
import stocks from '../assets/data.json'
import './style.scss';
import StockDataList from './StockDataList';
import MyWatchList from './MyWatchList';
import Header from './Header';

export default function Content() {
    const [stockListBool, setStockListBool] = useState(true);
    const [wishList, setWishList] = useState(false);
    const handleStockData = () => {
        document.getElementsByClassName("myWatchList")[0].style.borderBottom = "none";
        document.getElementsByClassName("myWatchList")[0].style.color = "black";
        document.getElementsByClassName("stock")[0].style.borderBottom = "2px solid blue";
        document.getElementsByClassName("stock")[0].style.color = "blue";
        setWishList(false);
        setStockListBool(true);

    }
    const handleWishData = () => {
        document.getElementsByClassName("stock")[0].style.borderBottom = "none";
        document.getElementsByClassName("stock")[0].style.color = "black";
        document.getElementsByClassName("myWatchList")[0].style.borderBottom = "2px solid blue";
        document.getElementsByClassName("myWatchList")[0].style.color = "blue";
        setStockListBool(false);
        setWishList(true);
    }
    return (
        <div className='stockDataList'>
            <Header />
            <div className='contentNav'>
                <div className='stock' onClick={handleStockData}>
                    STOCK DATA LIST
                </div>
                <div className='myWatchList' onClick={handleWishData}>
                    MY WATCHLIST
                </div>
            </div>
            {stockListBool && <StockDataList />}
            {wishList && <MyWatchList />}
        </div>
    )
}
