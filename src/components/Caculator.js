import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

export default class Caculator extends Component{

    render(){
        return (<View style={{
            flex:1,
            backgroundColor:'lightgray',
            alignItems:'center',
            }}>

                <Text style={{marginTop:100,width:200,textAlignVertical:'center',textAlign:'center',backgroundColor:'lightgray'}}>{this.props.amount}</Text>

                <TouchableOpacity style={{
                    marginTop:20,
                    width:200,
                    height:30,
                    backgroundColor:'red',
                    justifyContent:'center'
                }}
                    onPress={()=>{
                    this.props.addOne()
                    }}
                >
                    <Text style={{
                        textAlign:'center',
                        textAlignVertical:'center'
                    }}>加1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    marginTop:20,
                    width:200,
                    height:30,
                    backgroundColor:'yellow',
                }}
                    onPress={()=>{
                    this.props.minusOne(this.props.amount)
                    }}
                >
                    <Text style={{textAlign:'center'}}>减1</Text>
                </TouchableOpacity>

        </View>)
    }

}

Caculator.defaultProps = {
    amount:1,
 }
const styles = {

}