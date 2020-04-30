import * as actionTypes from './actionTypes';
import {firestore, storage} from "../../config/fbConfig";
import { uploadUrls } from '../../helpers/uploadFiles';

const goodsRequest=()=>({type:actionTypes.GOODS_REQUEST});
const goodsSuccess=data=>({type:actionTypes.GOODS_SUCCESS,data});
const goodInfoSuccess=data=>({type:actionTypes.GOOD_INFO_SUCCESS,data});
const goodsFailure=error=>({type:actionTypes.GOODS_FAILURE,error});

const categoryRequest=()=>({type:actionTypes.CATEGORY_REQUEST});
const categorySuccess=()=>({type:actionTypes.CATEGORY_SUCCESS});
const categoryFailure=error=>({type:actionTypes.CATEGORY_FAILURE,error});

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
};

const onFileUploadHandler=file=>{
    return storage.ref(`category/${new Date().getTime()+file.name}`).put(file);
};

export const categoryAdded=(images,category)=>dispatch=>{
    dispatch(categoryRequest());
    uploadUrls(images,'category').then(urls=>{
        console.log(urls);
    })
};