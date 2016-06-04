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
    View
} from 'react-native';

var onePT = 1/PixelRatio.get();

class ReeCall extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        );
    }
}


const styles = StyleSheet.create({
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
