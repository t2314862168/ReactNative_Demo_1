'use strict';
import React, {Component} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';

/**
 * http://www.lcode.org/%E3%80%90react-native%E5%BC%80%E5%8F%91%E3%80%91react-native%E6%8E%A7%E4%BB%B6%E4%B9%8Brefreshcontrol%E7%BB%84%E4%BB%B6%E8%AF%A6%E8%A7%A321/
 * https://reactjs.org/docs/lists-and-keys.html
 */
class Row extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.data);
        return (
            <View style={styles.row}>
                <Text style={styles.text}>
                    {this.props.data.text}
                </Text>
            </View>
        );
    }
}

export class RefreshControlDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            loaded: 0,
            // 这里index代表索引,value代表数组里面的值
            rowData: Array.from(new Array(20)).map(
                (value, index) => ({
                    text: '初始行 ' + index
                })),
        };
    }

    _onRefresh() {
        this.setState({refreshing: true});
        // 这里注意,使用setTimeout请关闭debug js 功能,妈卖批
        setTimeout(() => {
            // 准备下拉刷新的5条数据
            const rowData = Array.from(new Array(5))
                .map((value, index) => ({
                    text: '刷新行 ' + (+this.state.loaded + index)
                })).concat(this.state.rowData);
            this.setState({
                refreshing: false,
                loaded: this.state.loaded + 5,
                rowData: rowData
            });
        }, 1000);
    }

    render() {
        const rows = this.state.rowData.map((row, index) => {
            return <Row key={index} data={row}/>;
        });
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
                        progressBackgroundColor="#ffffff"
                    />
                }
                scrollEventThrottle={50}
                horizontal={false}
                showsVerticalScrollIndicator={true}>
                {rows}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        borderColor: 'red',
        borderWidth: 5,
        padding: 20,
        backgroundColor: '#3a5795',
        margin: 5,
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    scrollview: {
        flex: 1,
    },
});

// AppRegistry.registerComponent('Demo_1', () => RefreshControlDemo);
