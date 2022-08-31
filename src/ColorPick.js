import React from 'react';
import { View } from 'react-native';
import { BitMapColorPicker as ColorPicker } from 'react-native-bitmap-color-picker';

export default class ColorPick extends React.Component {
    constructor(props) {
        super(props);
        this.state = { oldColor: "#f77100" };
    }

    componentDidMount() {
        setTimeout(() => this.colorPicker && this.colorPicker.setOldColor('#fde200'), 1000);
    }

    changeColor = (colorRgb, resType) => resType === 'end' && this.setState({ oldColor: colorRgb })

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <ColorPicker
                    ref={view => {this.colorPicker = view;}}
                    oldColor={this.state.oldColor}
                    onColorChange={this.changeColor}
                    style={{width: 200, height: 200}}/>
            </View>
        );
    }
}