import {LIST, BODY} from '../Constants/Constants';

export const reducer =(state={}, action)=>{
switch(action.type){
    case LIST:
        return {...state, list:action.payload};
    case BODY:
        return {...state, body:action.payload};
    default:
        return state;
}
}