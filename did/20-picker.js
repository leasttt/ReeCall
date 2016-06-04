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
    TextInput,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Picker,
    ProgressViewIOS,
    View
} from 'react-native';

var onePT = 1/PixelRatio.get();

class ReeCall extends Component {
    constructor(props){
        super(props);
        this.state = {
            language:null
        };
    }
    render() {

        return (

            <View style={[styles.flex,{marginTop:45}]}>

                <Text>Picker组件</Text>

                <Picker
                    selectedValue={this.state.language}
                    onValueChange={lang => this.setState({language: lang})}
                    mode="dialog"
                    >

                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="C语言" value="c" />
                    <Picker.Item label="PHP开发" value="php" />
                </Picker>

                <Text>{this.state.language}</Text>

                <ProgressViewIOS
                    progress={0.2}
                    progressTintColor="purple"
                    trackTintColor="#ccc"
                    >
                </ProgressViewIOS>


            </View>

        );
    }
}


const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
});

AppRegistry.registerComponent('ReeCall', () => ReeCall);
