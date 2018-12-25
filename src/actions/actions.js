
//actions{消息}
export const UpdateAmountAction = 'UpdateAmountAction'

export const createUpdateAmountAction = (amount)=>{
    return{
        type:UpdateAmountAction,
        amount
    }
}
