import React, {Component} from 'react'

import {Image, View} from 'react-native'

type Style = number | string | Object | Array<?Style>

type Prop = {
    placeholderColor?: string,
    style: {
        width: number,
        height: number,
        [key: string]: Style
    },
    loadCompleted: Function,
    source: string
}

type State = {
    loaded: bool
}

let showAlert = false;

export default class AsyncImage extends Component {
    props: Prop
    state: State

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        Image.getSize('http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png', (width, height) => {
            if (this.props.loadCompleted != null) {
                this.props.loadCompleted(width, height);
            }
            if (showAlert != null && showAlert == true) {
                alert('图片的宽度:' + width + "\n图片的高度:" + height);
            }
        }, (errorMsg) => {
            console.log(errorMsg);
        });
    }

    _onLoad(): void {
        this.setState({
            loaded: true
        });
    }

    render() {
        const {
            placeholderColor,
            style,
            loadCompleted,
            source
        } = this.props;
        return (
            <View style={style}>
                <Image source={source} resizeMode={'cover'} style={style} onLoad={() => this._onLoad()}/>

                {!this.state.loaded && <View style={[style, {
                    // so import
                    position: 'absolute',
                    backgroundColor: placeholderColor || 'red'
                }]}/>}
            </View>
        );
    }
}