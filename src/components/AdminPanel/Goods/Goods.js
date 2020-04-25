import React, { useState } from 'react';
import { useEffect } from 'react';
import { firestore } from '../../../config/fbConfig';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Goods = ({match,history}) => {
    const [goods,setGoods]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        const docs=[];
        firestore.collection('goods').get().then(snapshot=>{
            setLoading(false);
            snapshot.forEach(doc=>{
                docs.push(doc.data());
            })
        });
        setGoods(docs);
    },[]);
    if(loading){
        return <h1>Loading</h1>
    }
    return (
        <div className="goods">
            <div className="goods__add">
                <Link to={`${match.path}/add_good`} className="ui primary button">Add goods</Link>
            </div>
            <div className="goods__list">
                {
                    goods.map(good=>{
                        return <div key={good.title}>
                            <h3>{good.title}</h3>
                            <p>Price: {good.price}</p>
                            <ul>
                                {good.colors.map(color=>{
                                    return <li className="color-item" key={color}>{color}</li>;
                                })}                        
                            </ul>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Goods;

