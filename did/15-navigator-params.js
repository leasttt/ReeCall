/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    PixelRatio,
    StyleSheet,
    Text,
    Navigator,
    ScrollView,
    View
} from 'react-native';

class ReeCall extends Component {
    render() {
        let defaultName='List';
        let defaultComponent=List;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                //配置场景
                configureScene={
                    (route) => {
                        //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
                        return Navigator.SceneConfigs.VerticalDownSwipeJump;
                    }
                }
                renderScene={
                    (route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }
                }
            />
        );
    }
}

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author:'Edsion',
            id:0,
            user:null
        };
    }

    _pressButton(id) {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        const self = this;
        if(navigator) {
            navigator.push({
                name: 'Detail',
                component: Detail,
                params: {
                    author:this.state.author,
                    id:id,
                    getUser:function(user){
                        self.setState({
                            user:user
                        });
                    }
                }
            })
        }
    }


    render(){
        return (
            <ScrollView style={styles.flex}>
                <Text style={styles.list_item} onPress={this._pressButton.bind(this, 1)}>获取用户1信息</Text>
                <Text style={styles.list_item} onPress={this._pressButton.bind(this, 2)}>获取用户2信息</Text>
                <Text style={styles.list_item} onPress={this._pressButton.bind(this, 3)}>获取用户3信息</Text>
                <View style={styles.flex}>
                    <Text style={styles.list_item}>用户信息: { JSON.stringify(this.state.user) }</Text>
                </View>
            </ScrollView>
        );
    }


}

const USER_MODELS = {
    1: { name: '1111', age: 23 },
    2: { name: '2222', age: 23 },
    3: { name: '3333', age: 25 }
};


class Detail extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id:null
        };
    }

    componentDidMount() {
        this.setState({
            author:this.props.author,
            id:this.props.id
        });
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:List了
            if(this.props.getUser){
                let user = USER_MODELS[this.state.id];
                this.props.getUser(user);
            }
            navigator.pop();
        }
    }

    render(){
        return(
            <ScrollView>
                <Text style={styles.list_item} onPress={this._pressButton.bind(this)} >{this.state.author}</Text>
                <Text style={styles.list_item} onPress={this._pressButton.bind(this)} >正在获取{this.state.id}号信息</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1

    },
    list_item:{
        height:40,
        marginLeft:10,
        marginRight:10,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        justifyContent:'center'
    }
});

AppRegistry.registerComponent('ReeCall', () => ReeCall);
