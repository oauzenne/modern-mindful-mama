import React, { Component } from 'react'
import { Animated, Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons';
import { LinearGradient } from 'expo';

import { Button, Input, Block, Text } from '../components';
import { theme, mocks } from '../constants';

const { width, height } = Dimensions.get('window');

class Calculator extends Component {
    render() {
      return (
        <Block>
            <Text> This is the Calculator</Text>
        </Block>
      );
    }
  }

  
  export default Calculator;