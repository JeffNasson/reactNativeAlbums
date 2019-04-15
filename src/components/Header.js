// Import Libraries for making componenet
import React from 'react';
import {Text, View} from 'react-native';


// Make a componenet
const Header = () =>{
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums!</Text>
        </View>
    )
}

// Styles
const styles = {
    viewStyle:{
        backgroundColor: '#f8f8f8'
    },
    textStyle:{
        fontSize: 20
    }
}

// Make component available to other parts of the app
export default Header;