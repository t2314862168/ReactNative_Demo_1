import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

//默认应用的容器组件
class TouchDemo extends Component {
    show(text) {
        alert(text);
    }

    render() {
        return (
            <View style={styles.flex}>
                <TouchableHighlight onPress={this.show.bind(this, '做最好的开发者知识平台')}
                                    underlayColor="#E1F6FF">
                    <Text style={styles.item}>欢迎访问hangge.com</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.show.bind(this,'Fuck you')} underlayColor="#787878">
                    <Text>Fuck you</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

//样式定义
const styles = StyleSheet.create({
    flex: {
        flex: 1,
        marginTop: 30
    },
    item: {
        fontSize: 18,
        marginLeft: 10,
        color: '#434343'
    }
});

// AppRegistry.registerComponent('Demo_1', () => TouchDemo);