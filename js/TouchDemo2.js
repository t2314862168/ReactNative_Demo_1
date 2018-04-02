import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

class TouchDemo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'hangge.com'
        };
    }

    _demo_1() {
        return (
            <View style={styles.flex}>
                <TouchableNativeFeedback
                    onPress={this._show.bind(this, "点击")}
                    onPressOut={() => this.setState({text: "松开"})}
                    onLongPress={() => this.setState({text: "长按"})}>
                    <View style={styles.btn}>
                        <Text style={{color: '#fff'}}>
                            {this.state.text}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

    _show(msg) {
        alert(msg)
    }

    render() {
        return this._demo_1();
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        marginTop: 30
    },
    btn: {
        marginLeft: 30,
        marginTop: 30,
        width: 100,
        height: 100,
        backgroundColor: '#18B4FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    }
});
// AppRegistry.registerComponent('Demo_1', () => TouchDemo2);