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
    Modal,
    ScrollView,
    Image,
    AsyncStorage,
    TouchableOpacity,
    View,
    PanResponder,
    ProgressViewIOS,
    PixelRatio,
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
        super(props);//这一句不能省略，照抄即可
        this.state = {
            animationType: 'none',//none slide fade
            modalVisible: false,//模态场景是否可见
            transparent: true,//是否透明显示
        };
    }

    render() {
        let modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : 'red',
        };
        let innerContainerTransparentStyle = this.state.transparent
            ? { backgroundColor: '#fff', padding: 20 }
            : null;

        return (

            <View style={{ alignItems: 'center', flex: 1 }}>
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this._setModalVisible(false) } }
                    onShow={this.startShow}
                    >
                    <View style={[styles.container, modalBackgroundStyle]}>
                        <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                            <Text style={styles.date}>2016-08-11</Text>
                            <View style={styles.row}>
                                <View >
                                    <Text style={styles.station}>长沙站</Text>
                                    <Text style={styles.mp10}>8: 00出发</Text>
                                </View>
                                <View>
                                    <View style={styles.at}></View>
                                    <Text style={[styles.mp10, { textAlign: 'center' }]}>G888</Text>
                                </View>
                                <View >
                                    <Text style={[styles.station, { textAlign: 'right' }]}>北京站</Text>
                                    <Text style={[styles.mp10, { textAlign: 'right' }]}>18: 00抵达</Text>
                                </View>
                            </View>
                            <View style={styles.mp10}>
                                <Text>票价：￥600.00元</Text>
                                <Text>乘车人：东方耀</Text>
                                <Text>长沙站 火车南站 网售</Text>
                            </View>
                            <View style={[styles.mp10, styles.btn, { alignItems: 'center' }]}>
                                <Text style={styles.btn_text}>去支付</Text>
                            </View>
                            <Text
                                onPress={this._setModalVisible.bind(this, false) }
                                style={{ fontSize: 20, marginTop: 10 }}>
                                关闭
                            </Text>
                        </View>
                    </View>
                </Modal>

                <Text style={{ fontSize: 30, color: 'red' }}  onPress={this._setModalVisible.bind(this, true) }>预定火车票</Text>


            </View>
        );
    }

    _setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    startShow = () => {
        alert('开始显示了');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
    row: {
        alignItems: 'center',

        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
    },
    rowTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 5,
        flex: 1,
        height: 44,
        alignSelf: 'stretch',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    buttonText: {
        fontSize: 18,
        margin: 5,
        textAlign: 'center',
    },

    page: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
    },
    zhifu: {
        height: 150,
    },

    flex: {
        flex: 1,
    },
    at: {
        borderWidth: 1 / PixelRatio.get(),
        width: 80,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#18B7FF',
        height: 1,
        marginTop: 10

    },
    date: {
        textAlign: 'center',
        marginBottom: 5
    },
    station: {
        fontSize: 20
    },
    mp10: {
        marginTop: 5,
    },
    btn: {
        width: 60,
        height: 30,
        borderRadius: 3,
        backgroundColor: '#FFBA27',
        padding: 5,
    },
    btn_text: {
        lineHeight: 18,
        textAlign: 'center',
        color: '#fff',
    },
});
AppRegistry.registerComponent('ReeCall', () => ReeCall);
