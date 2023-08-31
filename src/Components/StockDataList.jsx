import React, { useState } from 'react'
import stocks from '../assets/data.json'
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData } from '../Redux/Actions';
import { AiOutlineHeart } from 'react-icons/ai';

export default function StockDataList() {
    const dispatch = useDispatch();
    const wishListStocks = useSelector(state => state.modifyData);
    console.log(stocks);
    const addToWatchList = (stock) => {
        if(document.getElementById(`${stock.id}`).style.color==="black"){
            dispatch(deleteData(stock));
            document.getElementById(`${stock.id}`).style.color="red";
        }
        dispatch(addData(stock))
        console.log(stock);
        document.getElementById(`${stock.id}`).style.color="black";
    }
    console.log(wishListStocks);
    return (
        <div className='stockView'>
            
            <div>
                <span>Search:</span>
                <input type='text' placeholder='search here' />
            </div>
            <div>
                {stocks.map(stock => {
                    return <div className='stockData'>
                        <div className='details1'>
                            <div className='stockName'>{stock.name}</div>
                            <div className='stockExchange'>{stock.stockExchange}</div>
                        </div>
                        <div className='icon' id={stock.id} onClick={()=>{ addToWatchList(stock)}}><AiOutlineHeart /></div>
                        <div className='details2'>
                            <div className='stockPrice'>₹{stock.stockPrice}</div>
                            <div className='stockValueChange'>{stock.stockValueChange}</div>
                        </div>
                    </div>
                })}
            </div>

        


        </div>
    )
}
