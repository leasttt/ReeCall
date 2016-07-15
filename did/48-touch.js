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
    PanResponder,
    ProgressViewIOS,
} from 'react-native';

import Dimensions from 'Dimensions';
import moment from 'moment';
import Geolocation from 'Geolocation';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

let totalWidth = Dimensions.get('window').width;

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
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
        }
    }

    componentWillMount() {
        this.watcher = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: this._onPanResponderGrant,//处理按下的事件
            onPanResponderMove: this._onPanResponderMove,//处理移动的事件
        });
    }

    _onPanResponderGrant = (event, gestureState) => {
        let touchPonitX = gestureState.x0;
        let progress;
        if (touchPonitX < 20) progress = 0;
        else {
            if (touchPonitX > (totalWidth - 20)) progress = 1;
            else progress = (touchPonitX - 20) / (totalWidth - 40);
        }
        this.setState({ progress });
    }

    _onPanResponderMove = (event, gestureState) => {
        let touchPonitX = gestureState.moveX;
        let progress;
        if (touchPonitX < 20) progress = 0;
        else {
            if (touchPonitX > (totalWidth - 20)) progress = 1;
            else progress = (touchPonitX - 20) / (totalWidth - 40);
        }
        this.setState({ progress });
    }


    render() {
        return (
            <View style={styles.container}>
                <ProgressViewIOS
                    style={styles.ProgressViewStyle}
                    progress={this.state.progress} />
                <Text style={styles.textStyle}>你选择了{Math.round(this.state.progress * 100) }%</Text>
                <View style={styles.touchViewStyle}
                    {...this.watcher.panHandlers} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ProgressViewStyle: {
        width: totalWidth - 40,
        left: 20,
        top: 50,
    },
    touchViewStyle: {
        width: totalWidth - 20,
        height: 40,
        backgroundColor: 'transparent',
        position: 'absolute',
        left: 10,
        top: 32,
    },
    textStyle: {
        fontSize: 30,
        left: 20,
        top: 70,
    },

});
AppRegistry.registerComponent('ReeCall', () => ReeCall);
