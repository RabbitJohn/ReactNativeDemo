import {UpdateAmountAction} from '../actions/actions'

export const amountReducer = (state={amount:1},action)=>{
    switch (action.type){
    case UpdateAmountAction:
        return {
            ...state,
            amount:action.amount,
        }
    default:
        return {
            ...state,
        }
    }
}