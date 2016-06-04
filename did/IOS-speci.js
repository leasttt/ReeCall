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
    Switch,
    SegmentedControlIOS,
    ActivityIndicatorIOS,
    Slider,
    View
} from 'react-native';

var onePT = 1/PixelRatio.get();

class ReeCall extends Component {
    constructor(props){
        super(props);
        this.state = {
            language:null,
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
        };
    }

    render() {

        return (
            <ScrollView
                horizontal={true}
                contentInset={{top: -50}}
                style={[styles.scrollView, styles.horizontalScrollView]}>
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

                    <Switch
                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                        style={{marginBottom:10,marginTop:10}}
                        value={this.state.falseSwitchIsOn} />
                    <Switch
                        onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
                        value={this.state.trueSwitchIsOn} />

                    <View >
                        <SegmentedControlIOS
                            values={['全国', '南通']}
                            tintColor='red'
                            style={{margin:10,height:30,width:200,alignSelf:'center'}}/>

                        <SegmentedControlIOS
                            values={['Android', 'iOS','Java','React']}
                            tintColor='green'
                            selectedIndex={1}
                            onValueChange={(value)=> console.log('选中了'+value)}
                            style={{marginTop:20,margin:10,height:30,width:300,alignSelf:'center'}}/>
                    </View>

                    <View>
                        <Text style={styles.welcome}>
                            SliderIOS使用实例
                        </Text>
                        <Text style={{marginLeft:10}}>默认的SliderIOS</Text>
                        <Slider  style={{margin:10}}
                                    onSlidingComplete={()=>console.log('当前的值为'+this.state.value)}
                                    onValueChange={(value)=>this.setState({value:value})}
                            />
                        <Text style={{marginLeft:10}}>设置SliderIOS无法滑动</Text>
                        <Slider
                            style={{margin:10}}
                            disabled={true}
                            />
                        <Text style={{marginLeft:10}}>定制SliderIOS</Text>
                        {/**
                        <Slider
                            style={{margin:10}}
                            value={0.4}
                            thumbImage={require('./imgs/slider.png')}
                            minimumTrackImage={require('./imgs/slider-left.png')}
                            maximumTrackImage={require('./imgs/slider-right.png')}
                            onSlidingComplete={()=>console.log('当前的值为'+this.state.value)}
                            onValueChange={(value)=>this.setState({value:value})}
                        />
                        **/}
                    </View>

                    <View >
                        <Text style={styles.welcome}>
                            ActivityIndicatorIOS使用实例
                        </Text>
                        <Text style={{margin:10}}>自定义颜色指示器</Text>
                        <View style={styles.horizontal}>
                            <ActivityIndicatorIOS color="#0000ff" />
                            <ActivityIndicatorIOS color="#aa00aa" />
                            <ActivityIndicatorIOS color="#aa3300" />
                            <ActivityIndicatorIOS color="#00aa00" />
                        </View>
                        <Text style={{margin:10}}>Large进度指示器</Text>
                        <ActivityIndicatorIOS
                            style={[styles.centering,{margin:10}, {backgroundColor:'#cccccc'}, {height: 80}]}
                            color="white"
                            size="large"
                            />
                    </View>
                </View>
            </ScrollView>


        );
    }
}


const styles = StyleSheet.create({
    flex:{
        flex:1,
        overflow: 'hidden',
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    horizontal: {
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    scrollView: {
        height: 300,
    },
    horizontalScrollView: {
        height: 120,
    },
});

AppRegistry.registerComponent('ReeCall', () => ReeCall);
