import {connect} from 'react-redux';
import Caculator from '../components/Caculator'
import {createAddAmountAction,createMinusAmountAction} from '../actions/operations'

//绑定页面属性
const mapStateToProps = (state,ownProps)=>{
    return {
        amount:state.amountReducer.amount
    }
}

//绑定页面方法
const mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        addOne:()=>{
            dispatch(createAddAmountAction())
        },
        minusOne:(oldAmount)=>{
            dispatch(createMinusAmountAction(oldAmount))
        }
    }
}

//注入绑定关系
export default connect(mapStateToProps,mapDispatchToProps)(Caculator);
