import {createUpdateAmountAction} from './actions'

//业务逻辑
export const createAddAmountAction = ()=>{
    //中间件
    return (dispatch,getState)=>{
        let amount = getState().amountReducer.amount;
        dispatch(createUpdateAmountAction(amount+1))
    }
}

export const createMinusAmountAction = (amount)=>{
    return createUpdateAmountAction(amount-1)
}