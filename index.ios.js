/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Swiper from 'react-native-swiper'
import {
    AppRegistry,
    PixelRatio,
    StyleSheet,
    Text,
    Navigator,
    ScrollView,
    TextInput,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Picker,
    ProgressViewIOS,
    Switch,
    SegmentedControlIOS,
    ActivityIndicatorIOS,
    Slider,
    TabBarIOS,
    WebView,
    View
} from 'react-native';

import Dimensions from 'Dimensions';


const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

var onePT = 1/PixelRatio.get();

class ReeCall extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.flex}>
                <WebView
                    style={{height:height,width:width}}
                    source={{uri:'http://m.chinanxh.com'}}
                    injectedJavaScript={"alert('我是东方耀')"}
                    ></WebView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

AppRegistry.registerComponent('ReeCall', () => ReeCall);
