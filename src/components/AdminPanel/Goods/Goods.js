import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllGoods } from '../../../store/actions/goodsAction';

const Goods = ({match,history}) => {
    const {loading,goods}=useSelector(state=>state.goods);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllGoods());
    },[dispatch]);

    const redirectToGood=(id)=>{
        history.push(`${match.path}/${id}`)
    };

    if(loading){
        return <h1>Loading</h1>
    }
    return (
        <div className="goods">
            <h1>List of goods</h1>
            <div className="goods__add">
                <Link to={`${match.path}/add_good`} className="ui primary button">Add goods</Link>
            </div>
            <div className="goods__list">
                {
                    goods.map(good=>{
                        return <h2 key={good.id} onClick={()=>redirectToGood(good.id)}>{good.title}</h2>
                    })
                }
            </div>
        </div>
    );
}

export default Goods;

