import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllGoods } from '../../../store/actions/goodsAction';
import { Icon } from 'semantic-ui-react';
import "./Goods.css";
import GoodsList from './GoodsList/GoodsList';

const Goods = ({match,history}) => {
    const {loading,goods}=useSelector(state=>state.goods);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllGoods());
    },[dispatch]);

    if(loading){
        return <h1>Loading</h1>
    }
    return (
        <div className="goods">
            <header className="goods__header">
                <Link to={`${match.path}/add-good`} className="ui purple button goods__add-link">
                    <Icon name="plus square outline" />
                    Add goods
                </Link>
            </header>
            <GoodsList goods={goods} history={history} match={match} />
        </div>
    );
}

export default Goods;

