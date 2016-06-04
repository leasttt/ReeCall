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
    TabBarIOS,
    View
} from 'react-native';

import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

var onePT = 1/PixelRatio.get();

class ReeCall extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: '历史',
            notifCount: 0,
            presses: 0,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView initialPage={1} renderTabBar={() => <DefaultTabBar />}>
                    <ScrollView tabLabel="ios-paper" style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>News</Text>
                        </View>
                        <View style={styles.card}>
                            <Text>News</Text>
                        </View>
                        <View style={styles.card}>
                            <Text>News</Text>
                        </View>
                        <View style={styles.card}>
                            <Text>News</Text>
                        </View>
                        <View style={styles.card}>
                            <Text>News</Text>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="person-stalker" style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>Friends</Text>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>Messenger</Text>
                        </View>
                    </ScrollView>
                </ScrollableTabView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
   container: {
    flex: 1,
    marginTop: 30,
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

AppRegistry.registerComponent('ReeCall', () => ReeCall);
