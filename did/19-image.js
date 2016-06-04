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
    View
} from 'react-native';

var onePT = 1/PixelRatio.get();

var IMG=[
    'https://www.baidu.com/img/bd_logo1.png',
    'https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/img/xiaoman2016_24.png',
    'http://image.xinli001.com/20160530/094111o1yp958oheecy5i7.jpg!120'
];

class ReeCall extends Component {
    render() {
        return (
            <View style={[styles.flex,styles.topStatus]}>
                <MyImage imgs={IMG}> </MyImage>
            </View>
        );
    }
}

class MyImage extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            count:0,
            imgs:this.props.imgs
        };
    }

    goPreview(){
        var count=this.state.count;
        count--;
        if(count>=0){
            this.setState({
                count:count,
            });
        }
    }

    goNext(){
        var count=this.state.count;
        count++;
        if(count<this.state.imgs.length){
            this.setState({
                count:count,
            });
        }
    }

    render(){
        return(
            <View style={[styles.flex,{alignItems:'center'}]}>

                <View style={styles.image}>

                    <Image style={styles.img}
                           resizeMode="contain"
                           source={{uri:this.state.imgs[this.state.count]}}
                           //source={require('./test.jpg')}
                        />

                </View>


                <View style={styles.btns}>


                    <TouchableOpacity onPress={this.goPreview.bind(this)}><View style={styles.btn}><Text>上一张</Text></View></TouchableOpacity>

                    <TouchableOpacity onPress={this.goNext.bind(this)}><View style={styles.btn}><Text>下一张</Text></View></TouchableOpacity>

                </View>


            </View>
        );
    }
}


const styles = StyleSheet.create({
    flex:{
        flex:1,
    },


    btn:{
        width:60,
        height:30,
        borderColor:'#0089FF',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3,
        marginRight:20,

    },

    btns:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'center',
    },


    img:{
        height:150,
        width:200,
    },


    image:{
        marginTop: 20,
        borderWidth:1,
        width:300,
        height:200,
        borderRadius:5,
        borderColor:'#ccc',
        justifyContent:'center',
        alignItems:'center',
    },
});

AppRegistry.registerComponent('ReeCall', () => ReeCall);
