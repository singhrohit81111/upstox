import React, { useState } from 'react'
import stocks from '../assets/data.json'
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData } from '../Redux/Actions';
import { AiFillHeart } from 'react-icons/ai';

export default function StockDataList() {
    const dispatch = useDispatch();
    const wishListStocks = useSelector(state => state.modifyData);
    console.log(stocks);
    const addToWatchList = (stock) => {
        if (document.getElementById(`${stock.id}`).style.color === "black") {
            dispatch(deleteData(stock));
            console.log(document.getElementById(`${stock.id}`).style.color);
            document.getElementById(`${stock.id}`).style.color = "red";
        }
        else {
            dispatch(addData(stock))
            console.log(stock);
            document.getElementById(`${stock.id}`).style.color = "black";
        }
    }
    const valueChangeColor = (string) => {
        if (string.includes("-")) return "red";
        return "green";
    }
    console.log(wishListStocks);
    return (
        <div className='stockView'>

            <div>
                <span>Search:</span>
                <input type='text' placeholder='search here' />
            </div>
            <div className='info'>
                {stocks.map(stock => {
                    return <div className='stockData'>
                        <div className='details1'>
                            <div className='stockName'>{stock.name}</div>
                            <div className='stockExchange'>{stock.stockExchange}</div>
                        </div>
                        <div className='icon' id={stock.id} onClick={() => { addToWatchList(stock) }}><AiFillHeart /></div>
                        <div className='details2'>
                            <div className='stockPrice'>₹{stock.stockPrice}</div>
                            <div className='stockValueChange' style={{ color: valueChangeColor(stock.stockValueChange) }}>{stock.stockValueChange}</div>
                        </div>
                    </div>
                })}
            </div>




        </div>
    )
}
