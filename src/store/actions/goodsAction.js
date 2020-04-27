import * as actionTypes from './actionTypes';
import {firestore} from "../../config/fbConfig";

const goodsRequest=()=>({type:actionTypes.GOODS_REQUEST});
const goodsSuccess=data=>({type:actionTypes.GOODS_SUCCESS,data});
const goodInfoSuccess=data=>({type:actionTypes.GOOD_INFO_SUCCESS,data});
const goodsFailure=error=>({type:actionTypes.GOODS_FAILURE,error});

export const getAllGoods=()=>dispatch=>{
    dispatch(goodsRequest());
    firestore
        .collection('goods')
        .get()
        .then(snapshots=>{
            //const goods=snapshots.docs.map(doc=>{
            //    return {
            //        id:doc.id,
            //        ...doc.data()
            //    }
            //})
            //dispatch(goodsSuccess(goods));
            dispatch(goodsSuccess(
                snapshots.docs.map(doc=>{
                    return{
                        id:doc.id,...doc.data()
                    }
                })
            ));
        })
        .catch(error=>dispatch(goodsFailure(error)))
};

export const addGood=(good,history)=>dispatch=>{
    dispatch(goodsRequest());
    firestore
        .collection('goods')
        .add(good)
        .then(()=>{
            history.push('./dashboard/goods');
        })
        .catch(error=>dispatch(goodsFailure(error)))
};

export const getGoodInfo=id=>dispatch=>{
    dispatch(goodsRequest());
    firestore
        .collection('goods')
        .doc(id)
        .get()
        .then(doc=>{
            dispatch(goodInfoSuccess(doc.data()))
        })
        .catch(error=>dispatch(goodsFailure(error)))
}