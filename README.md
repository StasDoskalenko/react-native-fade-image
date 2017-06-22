## react-native-fade-image

Pure component that extends native Image to have images fade in pleasantly when they finish loading.

Component is pure, stateless and using native driver to animate as fast as possible.

Also prefetch feature for Image Cache is used.

### Installation

```
npm i react-native-fade-image --save
```

### Usage

Use as simple Image. All should work out of the box :)

```javascript
import React from 'react';
import {View, StyleSheet} from 'react-native';
import FadeImage from 'react-native-fade-image';

const uri = 'https://facebook.github.io/react/img/logo_og.png';
const imageStyle = StyleSheet.create({width: 100, height: 100});

class FancyImage extends React.Component {
  render() {
    return (
        <View>
            <FadeImage  style = {imageStyle}
                        resizeMode = 'cover'
                        duration = {1000}
                        source = {{uri}}/>
        </View>
    )
  }
}
```

#### props

- `duration` - fade in animation duration (ms).


Copyright © 2017-present, Stanislav Doskalenko doskalenko.s@gmail.com