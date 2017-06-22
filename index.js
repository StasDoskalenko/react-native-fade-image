/**
 * Created by Stanislav Doskalenko on 22.06.17.
 * © 2017-present, doskalenko.s@gmail.com
 */

'use strict';

import React from 'react';
import { Animated, Image } from 'react-native';

export default class FadeImage extends React.PureComponent {

    constructor (props) {
        super(props);
        if (this.props.source.uri) {
            Image.prefetch(this.props.source.uri);
        }
    }

    imageOpacity = new Animated.Value(0);

    onLoadImage () {
        if (this.props.onLoad) {
            this.props.onLoad();
        }

        Animated.timing(this.imageOpacity, {
            toValue: 1,
            duration: this.props.duration || 500,
            useNativeDriver: true
        }).start();
    }

    render () {
        return (
            <Animated.Image style={[this.props.style, {opacity: this.imageOpacity}]}
                            source={this.props.source}
                            ref={this.props.ref}
                            resizeMode={this.props.resizeMode || 'cover'}
                            onLoadStart={this.props.onLoadStart}
                            onProgress={this.props.onProgress}
                            onLoad={()=>{this.onLoadImage()}}
                            onError={this.props.onError}
                            onLoadEnd={this.props.onLoadEnd}
                            defaultSource={this.props.defaultSource}
            >
                {this.props.children}
            </Animated.Image>
        );
    }
}