import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

// 导入类库
var Dimensions = require('Dimensions');

class FlexDemo extends Component {
    render() {
        return _demo_2_();
    }
}

function _demo_2_() {
    return (
        <View style={styles.container}>
            <View style={styles.subViewStyle1}/>
            <View style={styles.subViewStyle2}/>
            <View style={styles.subViewStyle3}/>
        </View>
    );
}

function _demo_1_() {
    return (
        <View style={styles.container}>
            <Text>当前屏幕的宽度:{Dimensions.get('window').width}</Text>
            <Text>当前屏幕的高度:{Dimensions.get('window').height}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: 'blue',
        alignItems: 'flex-start',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    subViewStyle1: {
        alignSelf: 'flex-end',
        backgroundColor: 'red',
        width: 60,
        height: 60,
        marginLeft: 50,
        marginTop: 50,
        // margin: 50
    },
    subViewStyle2: {
        backgroundColor: 'yellow',
        width: 60,
        height: 60
    },
    subViewStyle3: {
        backgroundColor: 'green',
        width: 60,
        height: 60
    }
});

// AppRegistry.registerComponent('Demo_1', () => FlexDemo);