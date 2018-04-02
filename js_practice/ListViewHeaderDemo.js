'use strict';
import React, {Component} from 'react';
import {AppRegistry, ListView, RefreshControl, StyleSheet, Text, TouchableHighlight, View} from 'react-native';


class Row extends Component {
    constructor(props) {
        super(props);
    }

    _pressRow(rowID: number) {
        alert('you click rowID ===' + rowID);
    }

    render() {
        console.log(this.props.rowID);
        return (
            <TouchableHighlight
                style={styles.row_0_0}
                onPress={() => this._pressRow(this.props.rowID)}
                underlayColor="blue">
                <View style={styles.row_0}>
                    <Text style={styles.text}>
                        {this.props.data}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

/**
 * http://www.jstips.co/en/javascript/two-ways-to-empty-an-array/
 */
export class ListViewHeaderDemo extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            refreshing: false,
            ds,
        };

        // this._array = Array;
        this._data = [];
        for (let i = 0; i < 20; i++) {
            this._data.push('row ' + i);
        }
        // this._data.push('row 1');
        // this._data.push('row 2');
    }

    /**
     * 下拉刷新数据
     * @private
     */
    _doRefreshData() {
        this._data.length = 0;
        this._data.push('refresh row 1');
        this._data.push('refresh row 2');
    }

    /**
     * 加载更多数据
     * @private
     */
    _doLoadMoreData() {
        var temp_data = ['loadmore row 1', 'loadmore row 2'];
        this._data = this._data.concat(temp_data);
        for (let index in temp_data) {
            this._data.push(temp_data[index]);
        }
        this.setState({});
    }

    _onRefresh() {
        this.setState({refreshing: true});
        // 这里注意,使用setTimeout请关闭debug js 功能,妈卖批
        setTimeout(() => {
            this._doRefreshData();
            this.setState({
                refreshing: false,
                // dataSource: ds.cloneWithRows(['row 1-0', 'row 2-0']),
            });
        }, 1000);
    }

    _renderRow(rowData, sectionID, rowID, highlightRow) {
        return <Row data={rowData} rowID={rowID}/>;
    }

    _onEndReached() {
        console.log('_onEndReached');
        this._doLoadMoreData();
    }

    _renderHeader() {
        return <View style={{height: 200, backgroundColor: 'yellow'}}/>
    }

    _renderFooter() {
        return <View style={{height: 200, backgroundColor: 'gray'}}/>
    }

    render() {
        return (
            <ListView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
                        progressBackgroundColor="#ffffff"
                    />
                }
                renderHeader={() => this._renderHeader()}
                renderFooter={() => this._renderFooter()}
                onEndReached={this._onEndReached.bind(this)}
                onEndReachedThreshold={10}
                dataSource={this.state.ds.cloneWithRows(this._data)}
                renderRow={this._renderRow.bind(this)}>

            </ListView>
        );
    }
}

const styles = StyleSheet.create({
    row_0_0: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    row_0: {
        borderColor: 'red',
        borderWidth: 1,
        padding: 10,
    },
    row: {
        borderColor: 'red',
        borderWidth: 1,
        padding: 10,
        // backgroundColor: '#3a5795',
        margin: 10,
    },
    text: {
        alignSelf: 'center',
        color: 'red',
    },
});

// AppRegistry.registerComponent('Demo_1', () => ListViewHeaderDemo);
