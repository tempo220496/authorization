import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getGoodInfo} from "../../../../store/actions/goodsAction";

const GoodItem = ({match}) => {
    const {goodItem,loading}=useSelector(state=>state.goods);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getGoodInfo(match.params.id));
    },[dispatch,match.params.id]);

    if(loading) return <h1>Loading...</h1>
    return (
        <div>
            <h1>{goodItem.title}</h1>
            <p>Price: {goodItem.price}</p>
            <p>{goodItem.description}</p>
        </div>
    );
}

export default GoodItem;