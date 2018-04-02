import React, {Component} from 'react';
import {AppRegistry, Image, StyleSheet, View} from 'react-native';

// 导入类库
var Dimensions = require('Dimensions');
const img_url = 'http://f.hiphotos.baidu.com/image/pic/item/80cb39dbb6fd5266cdb2ba16a718972bd4073612.jpg';

// import Toast from './ForAndroidToast';
import Log from './ForAndroidLog';

class ImageDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {isAlreadyLoad: false};
    }

    _onLoadStart(param: string) {
        Log.i(param);
    }

    _onLoadStart(param: string) {
        Log.i(param);
    }

    _onLoad(param) {
        Log.i(param);
    }

    _onLoadEnd(param) {
        Log.i(param);
        if (!this.state.isAlreadyLoad) {
            this.state.isAlreadyLoad = true;
            Log.i(this.state.isAlreadyLoad + "");
            Image.getSize(img_url, (width, height) => {
                this.setState({width, height});
            });
        }
    }

    _onLayout(param) {
        Log.i("_onLayout" + param);
    }

    _onProgress(loaded, total) {
        Log.i("_onProgress" + loaded);
        Log.i("_onProgress" + total);
    }

    _onError(param) {
        Log.i('获取图片失败' + param);
    }

    _demo_2_() {
        return (
            <View style={styles.container}>
                <Image source={{uri: img_url}}
                       style={styles.imgStyle}
                       onLoadStart={() => this._onLoadStart('加载开始时调用。')}
                       onLoad={() => this._onLoad('加载成功完成时调用此回调函数。')}
                       onLoadEnd={() => this._onLoadEnd('加载结束后，不论成功还是失败，调用此回调函数')}
                       onLayout={(e) => this._onLayout(e.nativeEvent.layout)}
                       onError={(e) => this._onError(e.nativeEvent.error)}
                       onProgress={(e) => this._onProgress(e.nativeEvent.loaded, e.nativeEvent.total)}
                />
            </View>
        );
    }

    render() {
        return this._demo_2_();
    }
}


function _demo_1_() {
    return (
        <View style={styles.container}>
            <Image source={require('../img/timg.jpg')} style={styles.imgStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    imgStyle: {
        width: 300,
        height: 300,
        // 设置图片填充模式
        // contain：容器完全容纳图片，图片等比例进行拉伸
        // cover( 默认)：图片居中显示且不拉伸图片，超出的部分剪裁掉
        // stretch：图片被拉伸至与容器大小一致，可能会发生变形
        resizeMode: 'cover'
    }

});

// AppRegistry.registerComponent('Demo_1', () => ImageDemo);