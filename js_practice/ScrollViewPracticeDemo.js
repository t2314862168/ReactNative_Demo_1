import React, {Component} from 'react';
import {AppRegistry, ScrollView, StyleSheet, Text, View} from 'react-native';
import ImageLoad from 'react-native-image-placeholder';

import AsyncImage from './AsyncImage';

// https://moduscreate.com/blog/how-to-use-image-placeholders-in-react-native/

let dimensions = require('Dimensions');
let local_img = require('../img/timg.jpg');
let url_img = 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png';
let net_img = {uri: url_img};

let placeholder_img = require('../img/timg.jpg');

class ScrollViewPracticeDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAlreadyLoad: false,
            img_width: null,
            img_height: null,
            mock_data: []
        }
    }

    _mock_data_2() {
        this.state.mock_data = [{
            name: 'name_0',
            img_url: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png'
        }];
        // this.state.mock_data = [{
        //     name: 'name_0',
        //     img_url: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png'
        // }, {
        //     name: 'name_1',
        //     img_url: 'http://f0.topitme.com/0/7a/63/113144393585b637a0o.jpg'
        // }, {
        //     name: 'name_2',
        //     img_url: 'http://a3.topitme.com/1/21/79/1128833621e7779211o.jpg'
        // }, {
        //     name: 'name_3',
        //     img_url: 'http://f9.topitme.com/9/37/30/11224703137bb30379o.jpg'
        // }, {
        //     name: 'name_4',
        //     img_url: 'http://pic10.nipic.com/20101001/2531170_011837344719_2.jpg'
        // }, {
        //     name: 'name_5',
        //     img_url: 'http://pic17.nipic.com/20111021/8289149_105725398120_2.jpg'
        // }, {
        //     name: 'name_7',
        //     img_url: 'http://pic4.nipic.com/20091021/3190927_234430077114_2.jpg'
        // }, {
        //     name: 'name_8',
        //     img_url: 'http://f2.topitme.com/2/6a/bc/113109954583dbc6a2o.jpg'
        // }, {
        //     name: 'name_9',
        //     img_url: 'http://pic10.nipic.com/20100926/2874022_122448852398_2.jpg'
        // }, {
        //     name: 'name_10',
        //     img_url: 'http://pic11.nipic.com/20101108/347271_174227078426_2.jpg'
        // }, {
        //     name: 'name_11',
        //     img_url: 'http://img.taopic.com/uploads/allimg/140404/240400-1404040P52797.jpg'
        // }];

        let children = [];
        for (let i in this.state.mock_data) {
            // 注意这里如果是数组i表示索引,如果是单个实体则i表示key
            // https://www.cnblogs.com/qingqingzou-143/p/7079725.html
            let item = this.state.mock_data[i];
            children.push(
                <View key={"key_" + item.name}
                      style={{overflow: 'hidden', marginTop: i == 0 ? 0 : 10, marginLeft: 10, marginRight: 10}}>
                    <AsyncImage
                        source={{uri: item.img_url}}
                        style={styles.img_3}
                        placeholderColor='red'>
                    </AsyncImage>
                    <Text style={{
                        position: 'absolute',
                        left: 0,
                        color: 'red',
                        backgroundColor: '#000000'
                    }}>index==={item.name}</Text>
                </View>);
        }
        return children;
    }

    /**
     * scrollview滑动的时候
     * @private
     */
    _onScroll(event) {
        let y = event.nativeEvent.contentOffset.y;
        let height = event.nativeEvent.layoutMeasurement.height;
        let contentHeight = event.nativeEvent.contentSize.height;
        console.log('offsetY-->' + y);
        console.log('height-->' + height);
        console.log('contentHeight-->' + contentHeight);
        if (y + height >= contentHeight - 20) {
            console.log('load more-->' + height);
        }
    }

    _demo_3() {
        let children = this._mock_data_2();
        return (
            <ScrollView
                onScroll={this._onScroll.bind(this)}
                scrollEventThrottle={50}
                horizontal={false}
                showsVerticalScrollIndicator={true}>
                {children}
            </ScrollView>
        );
    }

    render() {
        return this._demo_3();
    }
}

const styles = StyleSheet.create({
    container_3: {
        flex: 1,
        backgroundColor: 'yellow',
        // 主轴方向的排列,比如flexDirection为column时候则表示竖轴方向
        justifyContent: 'center',
        // 辅轴方向的排列,比如flexDirection为column时候则表示横轴方向
        alignItems: 'stretch',
    },
    img_3: {
        flex: 1,
        alignSelf: 'auto',
        position: 'relative',
        height: 300,
    },
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img_1: {
        alignSelf: 'center',
        width: 300,
        height: 300,
        // resizeMode: 'cover',
        borderColor: 'red',
        borderWidth: 5,
        borderRadius: 200
    }
});

// AppRegistry.registerComponent("Demo_1", () => ScrollViewPracticeDemo);