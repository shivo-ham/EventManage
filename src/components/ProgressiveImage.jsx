import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const styles = StyleSheet.create({
    imageOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }
});

class ProgressiveImage extends React.Component {

    thumbnailAnimated = new Animated.Value(0);
    imageAnimated = new Animated.Value(0);

    handleThumbnailLoad = () => {
        Animated.timing(this.thumbnailAnimated, {
            toValue: 1,
            useNativeDriver: true
        }).start();
    };

    onImageLoad = () => {
        Animated.timing(this.imageAnimated, {
            toValue: 1,
            useNativeDriver: true
        }).start();
    };

    render() {
        const { thumbnailSource, source, style, ...props } = this.props;

        return (
            <View
                style={{
                    width: style.width,
                    height: style.height,
                    backgroundColor: '#e1e4e8'
                }}>
                <Animated.Image
                    {...props}
                    source={thumbnailSource}
                    style={[style, { opacity: this.thumbnailAnimated }]}
                    onLoad={this.handleThumbnailLoad}
                    blurRadius={1}
                />
                <Animated.Image
                    {...props}
                    source={source}
                    style={[
                        styles.imageOverlay,
                        { opacity: this.imageAnimated },
                        style
                    ]}
                    onLoad={this.onImageLoad}
                />
            </View>
        );
    }
}

export default ProgressiveImage;
