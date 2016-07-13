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
    CameraRoll,
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

let fetchParams = {
    first: 3,
    assetType: 'Photos',
    //groupTypes in not supported on Android
    // groupTypes:'All',
};
let imgUrl = 'http://www.reactnative.vip/img/';


class HomeUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            pageInfo: null
        };
    }


    _pressButton() {
        const { navigator } = this.props;
        if (navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:了
            navigator.pop();
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.row}>
                    <View style={styles.flex_1}>
                        <Image resizeMode='stretch'
                            style={[styles.imgHeight, styles.m5]}
                            source={{ uri: imgUrl + 'dongfangyao888.jpg' }}
                            />
                    </View>
                    <View style={styles.flex_1}>
                        <Image  resizeMode='stretch'
                            style={[styles.imgHeight, styles.m5]}
                            source={{ uri: imgUrl + 'reactnative.png' }}
                            />
                    </View>
                </View>

                <View>
                    <Text onPress={this.saveImg.bind(this, 'dongfangyao888.jpg', 'reactnative.png') }
                        style={styles.saveImg}
                        >
                        保存图片到相册
                    </Text>
                </View>

                <View style={styles.imageGrid}>
                    {
                        this.state.images.map((image) =>
                            <Image
                                style={styles.image}
                                resizeMode='stretch'
                                source={image}
                                key={image.uri}
                                />
                        )
                    }
                </View>
                <View>
                    <Text onPress={this.getMorePic.bind(this) } style={[styles.saveImg, { backgroundColor: 'purple' }]}>继续加载</Text>
                </View>
            </ScrollView>
        );
    }

    componentDidMount() {
        this.getSomePhotos();
    }

    getSomePhotos(){
        let _that = this;
        //从0.20.0版本开始支持返回Promise机制
        CameraRoll.getPhotos(fetchParams).then(
            (data) => {
                console.log(data);
                let edges = data.edges;
                //.map 是针对数组里的每一个元素，
                //调用回调函数 ，第一个参数是元素，第二个参数是下标，然后把每次调用的返回值按顺序再组织成一个新的数组
                let images = edges.map((edge) => {
                    return edge.node.image;
                });
                let curImages = _that.state.images;
                images.map((img)=>{
                    curImages.push(img);
                });
                let pageInfo = data.page_info;
                _that.setState({
                    images: curImages,
                    pageInfo: pageInfo,
                });
            }
        ).catch(error => {
            console.log('出错了:' + error);
        });
    }

    getMorePic() {
        if(this.state.pageInfo.has_next_page){
            fetchParams.after = this.state.pageInfo.end_cursor;
            this.getSomePhotos();
        }
    }

    saveImg(img1, img2) {
        let _that = this;
        CameraRoll.saveImageWithTag(imgUrl + img1).then(
            (url) => {
                if (url) {
                    let images = _that.state.images;
                    //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
                    images.unshift(
                        {
                            uri: url,
                        }
                    );
                    _that.setState({
                        images: images,
                    });
                    //继续保存第二张图片
                    CameraRoll.saveImageWithTag(imgUrl + img2).then(
                        (url) => {
                            images.unshift(
                                {
                                    uri: url,
                                }
                            );
                            _that.setState({
                                images: images,
                            });
                            alert('图片全部保存成功');
                        }

                    ).catch(
                        error => {
                            alert('保存第二张照片失败-error-' + error);
                        }
                        );
                }
            }
        ).catch(error => {
            alert('保存第一张照片失败-error-' + error);
        });
    }
}

const styles = StyleSheet.create({
    flex_1: {
        flex: 1,
    },
    m5: {
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    row: {
        flexDirection: 'row',
    },
    imageGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },
    imgHeight: {
        height: 180,
    },

    saveImg: {
        flex: 1,
        height: 30,
        textAlign: 'center',
        marginTop: 20,
        color: '#FFF',
        lineHeight: 20,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'bold',
        backgroundColor: '#3BC1FF',
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
});
AppRegistry.registerComponent('ReeCall', () => ReeCall);
