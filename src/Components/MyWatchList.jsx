import React from 'react'
import stocks from '../assets/data.json'
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { AiFillHeart } from 'react-icons/ai';
import {deleteData} from '../Redux/Actions'

export default function MyWatchList() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.modifyData);
    const deleteFromWatchList=(stock)=>{
        dispatch(deleteData(stock));
    }

    const valueChangeColor = (string) => {
        if(string.includes("-"))return "red";
        return "green";
     }
    console.log(data);
    return (
        <div>
            <div>
                {data.map(stock => {
                    return <div className='stockData'>
                        <div className='details1'>
                            <div className='stockName'>{stock.name}</div>
                            <div className='stockExchange'>{stock.stockExchange}</div>
                        </div>
                        <div className='icon' id={stock.id} onClick={() => { deleteFromWatchList(stock) }}><AiFillHeart color='black'/></div>
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
