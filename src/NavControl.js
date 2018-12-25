import React,{Component} from 'react'
import {View,Image} from 'react-native'
import {Router, Tabs,Scene, Stack} from 'react-native-router-flux'
import Caculator from './containers/CaculatorContainer'
import Welcome from './containers/WelcomeContainer'
// import Welcome from './components/Welcome'
export default class NavControl extends Component{
    render(){
        return (    
        <Router>
            <BaseScene>
                <Tabs initial={true} key={'tabbar'} tabBarPosition={'bottom'} hideNavBar={true}>
                    <Stack key={'tab1'} title={'tab1'} hideNavBar={false} tabBarIcon={({tintColor})=>{
                        return <Image source={require('../resources/welcome.png')} style={{width:20,height:20}} tintColor={tintColor}/>
                    }}>
                        <BaseScene key={'Welcome'} component={Welcome} title={'welcome'}/>
                    </Stack>
                    <Stack key={'tab2'} title={'tab2'} hideNavBar={false} tabBarIcon={({tintColor})=>{
                        return <Image source={require('../resources/jisuanqi.png')} style={{width:20,height:20}} tintColor={tintColor}/>
                    }}>
                        <BaseScene key={'Caculator1'} component={Caculator} title={'caculator'}/>
                    </Stack>
                </Tabs>
            </BaseScene>
        </Router>
        
        )
    }

}

class BaseScene extends Scene{};

BaseScene.defaultProps = {
        navigationBarStyle:{
            backgroundColor:'#2a2b3e',
            shadowColor: "rgba(0, 0, 0, 0.61)",
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 3,
            shadowOpacity: 1,
            borderBottomWidth:0,
        },
        backButtonTintColor:'white',
        titleStyle:{
            color:'white',
            fontFamily: "PingFangSC-Semibold",
            fontSize: 15,
            shadowColor: "rgba(15, 15, 15, 0.63)",
            shadowOffset: {
                width: 0,
                height: 1
            },
            shadowRadius: 0,
            shadowOpacity: 1
        }
}

