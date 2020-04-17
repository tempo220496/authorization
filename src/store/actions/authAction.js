import * as actionTypes from './actionTypes';
import firebase,{auth} from "../../config/fbConfig";

const authRequest=()=>({type:actionTypes.AUTH_REQUEST});
const authSuccess=()=>({type:actionTypes.AUTH_SUCCESS});
const authFailure=(error)=>({type:actionTypes.AUTH_FAILURE,error});
const userSignOut=()=>({type:actionTypes.AUTH_LOGOUT});

export const userAuth=(email,password)=>dispatch=>{
    dispatch(authRequest());
    firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then(()=>{
            dispatch(authSuccess());
        })
        .catch(error=>dispatch(authFailure(error)))
};

export const authCheck=()=>dispatch=>{
    dispatch(authRequest());
    auth.onAuthStateChanged(user=>{
        if(user){
            dispatch(authSuccess())
        }else{
            dispatch(authFailure({message:'User is not auth'}));
        }
    })
}

export const logout=(history)=>dispatch=>{
    dispatch(authRequest());
    firebase
        .auth()
        .signOut()
        .then(()=>{
            dispatch(userSignOut());
            history.push('/');
        })
};