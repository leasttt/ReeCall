/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    StyleSheet,
    Text,
    WebView,
    ScrollView,
    Image,
    AsyncStorage,
    TouchableOpacity,
    View,
    AlertIOS,
} from 'react-native';

import Dimensions from 'Dimensions';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class ReeCall extends Component {
    render() {
        let defaultName = 'HomeUI';
        let defaultComponent = HomeUI;
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

class HomeUI extends Component {
    _pressButton() {
        const { navigator } = this.props;
        if (navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:了
            navigator.pop();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item} onPress={this.tip}>提示对话框</Text>
                <Text style={styles.item} onPress={this.input}>输入对话框</Text>
            </View>
        );
    }

    tip(){
        AlertIOS.alert('按钮', '嗒嗒嗒嗒', [
            {
                text:'cancle',
                onPress:()=>{
                    alert('cancle');
                }
            },
            {
                text:'wait',
                onPress:()=>{
                    alert('wait');
                }
            },
            {
                text:'submit',
                onPress:()=>{
                    alert('submit');
                }
            },
        ]);
    }

    input(){
        AlertIOS.prompt('输入', '输入姓名', [
            {
                text:'cancle',
                onPress:()=>{
                    alert('cancle');
                }
            },
            {
                text:'submit',
                onPress:(name)=>{
                    alert(name);
                }
            },
        ]);
    }
}

const styles = StyleSheet.create({
    list_item: {
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        borderWidth: 1,
        height: 30,
        borderRadius: 3,
        borderColor: '#ddd',
    },
    list_item_desc: {
        flex: 2,
        fontSize: 15,
    },

    list_item_price: {
        flex: 1,
        fontSize: 15,
        textAlign: 'right',
    },

    clear: {
        marginTop: 10,
        backgroundColor: '#FF7200',
        color: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        marginLeft: 20,
        marginRight: 10,
        lineHeight: 24,
        height: 33,
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    btn: {
        flex: 1,
        backgroundColor: '#FF7200',
        height: 33,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        marginLeft: 10,
        marginRight: 10,
        lineHeight: 24,
        marginTop: 40,
        fontSize: 18,


    },

    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    img: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    item_text: {
        backgroundColor: '#000',
        opacity: 0.7,
        color: '#fff',
        height: 25,
        lineHeight: 18,
        textAlign: 'center',
        marginTop: 74,
    },
    list: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    container: {
        flex: 1,
        marginTop:25,
    },
    item:{
        marginTop:10,
        marginLeft:5,
        marginRight:5,
        height:30,
        borderWidth:1,
        padding:6,
        borderColor:'#ddd',

    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 80,
        height: 80,
        borderRadius: 16,


    },
    //让rightContainer在父容器中占据Image之外剩下的全部空间。

    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        marginBottom: 8,

    },
    year: {
        fontSize: 14,

    },



});
AppRegistry.registerComponent('ReeCall', () => ReeCall);
