import React, { Component } from 'react'
import { Animated, Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons';
import { LinearGradient, Asset } from 'expo';

import { Button, Input, Block, Text } from '../components';
import { theme, mocks } from '../constants';

const { width, height } = Dimensions.get('window');

class MilkTracker extends Component {

  images = [
    require("../assets/images/bottle_1.png"),
    require("../assets/images/bottle_2.png"),
    require("../assets/images/bottle_3.png"),
    require("../assets/images/bottle_4.png"),
    require("../assets/images/bottle_5.png"),
    require("../assets/images/bottle_6.png"),
    require("../assets/images/bottle_7.png"),
    require("../assets/images/bottle_8.png"),
    require("../assets/images/bottle_9.png"),
    require("../assets/images/bottle_10.png"),
    require("../assets/images/bottle_11.png"),
    require("../assets/images/bottle_12.png")

  ]
  state = {
    imageNumber: 0,
    pumpNumber: 0,
    date: ""
  }

  componentWillMount() {
    this.getDate();
  }

  getDate = () => {
    var date = new Date().toDateString();
    this.setState({ date });
  };

  changeBottle = () => {
    const endingNumber = 12
    this.setState({
      imageNumber: Math.min(this.state.imageNumber + 1, endingNumber)
    })
  }

  changeNumber = () => {
    const endingNumber = 20
    this.setState({
      pumpNumber: Math.min(this.state.pumpNumber + 2, endingNumber)
    })
  }

functionCombined() {
  this.changeBottle();
  this.changeNumber();
}

  componentDidMount(){
    this.images.forEach( id => Asset.fromModule(id).downloadAsync() )
  }

    renderBottle() {
      console.log(this.images[this.state.imageNumber])
      return (
        <TouchableHighlight style={styles.container}>
       <View>
         <Image
         source={this.images[this.state.imageNumber]}
         style={styles.bottleStyle}
         />
       </View>
      </TouchableHighlight>
      );
    }

    renderPlus = () => {
      return(
        <ScrollView keyboardShouldPersistTaps="always">
          <View>
          <TouchableOpacity  style={styles.plusStyle} onPressIn={() => this.functionCombined()} underlayColor="#ffffff00">
          <Image source={require('../assets/images/plusbutton.png')} />
        </TouchableOpacity>
          </View>
        </ScrollView>

      )
    }

    render() {
      const { navigation } = this.props
      const { date } = this.state.date
      return (
        <Block>
          <Block>
            <Text h1 bold center>Date: {this.state.date} </Text>
            <Text h1 center>You've pumped: {this.state.pumpNumber} oz </Text>
            {this.renderPlus()}
            {this.renderBottle()}
            <Block flex={0.5} margin={[0, theme.sizes.padding * 2]}>
            <Button gradient style={styles.doneStyle} onPress={() => navigation.navigate('Journal')}>
            <Text center semibold white>DONE FOR THE DAY</Text>
            </Button>
           </Block>
          </Block>
        </Block>
      )
    }
  }

  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    bottleStyle: {
      // width: 200,
      // height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 240
      // alignSelf: 'center',
      // position: 'absolute'
    },
    plusStyle: {
      marginTop: 20,
      marginLeft: 50
    },
    doneStyle: {
      marginTop: 5
    }
  };

  
  export default MilkTracker;