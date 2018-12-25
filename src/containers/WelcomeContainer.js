import {connect} from 'react-redux';
import Welcome from '../components/Welcome'

//绑定页面属性
const mapStateToProps = (state,ownProps)=>{
    return {
        result:state.amountReducer.amount
    }
}

//绑定页面方法
const mapDispatchToProps = (dispatch,ownProps)=>{
    return{
    }
}

//注入绑定关系
export default connect(mapStateToProps,mapDispatchToProps)(Welcome);
