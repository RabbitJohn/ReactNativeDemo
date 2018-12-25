import React,{Component} from 'react'
import {View,Text,Dimensions,Image} from 'react-native'

const screenWidth = Dimensions.get('window').width

export default class Welcome extends Component{
    render(){
        return (<View style={{flex:1,width:screenWidth,backgroundColor:'white'}}>
            <Text style={{
                    marginTop:100,
                    alignSelf:'center',
                    color:'#234',
                    width:screenWidth,
                    textAlign:'center',
                }}
                >
                    Welcome ! Have fun with React Native Programming! 
                </Text>
                <Image 
                style={{
                    marginTop:50,
                    width:150,
                    height:150,
                    alignSelf:'center',
                }}
                source={{uri:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1542804654&di=d4dc965a2476aa97a4fecbc4bf765180&src=http://imgsrc.baidu.com/imgad/pic/item/1e30e924b899a901f97830ff17950a7b0308f5ae.jpg'}}/>
                <Text style={{alignSelf:'center',marginTop:20,fontSize:30}}>{this.props.result}</Text>
        </View>)
    }
}




