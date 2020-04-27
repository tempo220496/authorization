import * as actionTypes from "../actions/actionTypes";

const initialState={
    loading:false,
    error:null,
    goods:[],
    goodItem:null
};

const goodsReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.GOODS_REQUEST:
        return{
            ...state,
            loading:true
        };
        case actionTypes.GOODS_SUCCESS:
        return{
            ...state,
            loading:false,
            goods:[
                ...action.data
            ]
        };
        case actionTypes.GOODS_FAILURE:
        return{
            ...state,
            loading:false,
            goods:[],
            error:action.error
        };
        case actionTypes.GOOD_INFO_SUCCESS:
        return{
            ...state,
            loading:false,
            goodItem:{...action.data}
        };
        default: 
            return state;
    }
};

export default goodsReducer;