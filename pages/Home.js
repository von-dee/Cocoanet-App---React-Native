import React from 'react';

import {  AppRegistry, StyleSheet, Text, ImageBackground, View, Image, TouchableOpacity,SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements';

 
export default class Home extends React.Component {

    constructor(props){
      super(props);
      this.state = {
          carouselItems: [
          {
              title:"Item 1"
          },
          {
              title:"Item 2"
          },
          {
              title:"Item 3"
          },
          {
              title:"Item 4"
          },
          {
              title:"Item 5"
          }
      ]}
  }

  _renderItem({item,index}){
      return (
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>                 
              <Image
                source={require('./../assets/farmer.png')}
                />
              <Text style={{color:'#fff'}} >{item.title}</Text>
          </View>
      )
  }

  render() {
    
    return (
          <ImageBackground source={require('./../assets/bgg.png')} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <View style={{flex: 10, flexDirection: 'column', marginTop: 10}}>            
                  <Text style={styles.goodmorning}>Maakye oo</Text> 
                </View>
                <View style={{flex: 2, flexDirection: 'column', marginTop: 10}}>
                  {/* <Icon iconStyle={[styles.icon,{color: '#2D2C2C'}]} name='short-text' type='material' /> */}
                  <Image source={require('./../assets/farmer.png')} style={{flex:1, width: 40, height: 40, borderRadius: 50}} resizeMode="contain"/>
                </View>
                
              </View>

              <View style={{flex: 2, flexDirection: 'row'}}>
                <View style={{flex: 8, flexDirection: 'column'}}>            
                  <View style={{flex: 4, flexDirection: 'row'}}>
                    <View style={{flex: 5, flexDirection: 'column'}}>
                      <Text style={[styles.h4,{fontWeight: 'bold', fontSize :26}]}>Yɛ botaeɛ,</Text>
                    </View>
                    <View style={{flex: 6, flexDirection: 'column'}}></View>
                  </View>
                  <View style={{flex: 4, flexDirection: 'row'}}>
                    <View style={{flex: 11, flexDirection: 'column'}}>
                      <Text style={styles.h4}>Nesɛ yɛ bɛma akuafoɔ anya AI ho mfasoɔ</Text>
                      {/* <Text style={styles.h4}>Is to the bring benefit of AI</Text> */}
                    </View>
                    <View style={{flex: 1, flexDirection: 'column'}}></View>
                  </View>
                  <View style={{flex: 4, flexDirection: 'row'}}>
                    <View style={{flex: 7, flexDirection: 'column'}}>
                      {/* <Text style={styles.h4}></Text> */}
                    </View>
                    <View style={{flex: 5, flexDirection: 'column'}}></View>
                  </View>
                </View>
              </View>


              <View style={{flex: 5, flexDirection: 'row', alignItems: 'center'}}>

                <Image source={require('./../assets/map.png')} style={{flex:1, width: 50}} resizeMode="contain"/>

                {/* <SafeAreaView style={styles.container}>                          
                  <Carousel
                    data={this.state.carouselItems}
                    sliderWidth={250}
                    itemWidth={250}
                    renderItem={this._renderItem}
                  />
                </SafeAreaView>                 */}
              </View>


              <View style={{flex: 3, flexDirection: 'row'}}>
                <View style={{flex: 2, alignItems: 'center'}}>       
                  <TouchableOpacity style={{alignItems: 'center', marginTop: 25}} onPress={() =>
                    this.props.navigation.navigate('Articlesdetail')}>
                    <Icon iconStyle={[styles.icon_list,styles.colour_white]} name='business' type='material' />
                    <Text style={styles.h3}>News</Text>   
                  </TouchableOpacity>
                </View>

                <View style={{flex: 2,alignItems: 'center'}} >
                  <TouchableOpacity style={{alignItems: 'center', marginTop: 25}} onPress={() =>
                  this.props.navigation.navigate('Store')}>
                    <Icon iconStyle={[styles.icon_list,styles.colour_white]} name='store' type='material' />
                    <Text style={styles.h3}>Store</Text>
                  </TouchableOpacity>  
                </View>

                <View style={{flex: 2,alignItems: 'center'}} >
                  <TouchableOpacity style={{alignItems: 'center', marginTop: 25}} onPress={() =>
                  this.props.navigation.navigate('Chatbot')}>
                    <Icon iconStyle={[styles.icon_list,styles.colour_white]} name='message' type='material' />
                    <Text style={styles.h3}>Chat</Text>
                  </TouchableOpacity>  
                </View>
                <View style={{flex: 2,alignItems: 'center'}} >
                  <TouchableOpacity style={styles.capture}  onPress={() => this.props.navigation.navigate('Stream')}>
                    <Image source={require('./../assets/cambtn.png')} style={{flex:1, width: 67}} resizeMode="contain"/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  capture: {
    backgroundColor: '#173F34',
    padding: 5,
    alignSelf: 'center',
    margin: 20,
    height: 80,
    width: 80,
    borderRadius:400,
  },
  margintop_: {
    marginTop: 3,
  },
  camera_text: {
    fontSize: 12,
    marginTop: 18,
  },
  icon_list: {
    marginTop: 25,
    marginLeft: 20,
    width: 40,
    height: 40
  },
  icon: {
    marginTop: 13,
    marginLeft: 20,
    width: 40,
    height: 40
  },
  colour_white: {
    color: '#56766E',
  },
  colour_orange: {
    color: '#9b3a61',
  },
  colour_green: {
    color: '#635674',
  },
  iconplus: {
    marginTop: 14,
    marginLeft: 20,
    fontSize: 42,
    width: 70,
    height: 70,
    color: '#10561a',
  },
  goodmorning: {
    flex:1,
    marginTop: 25,
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#173F34',
  },
  h1: {
    flex:1,
    fontSize: 20,
    color: '#fff',
  },
  h2: {
    flex:1,
    fontSize: 14,
    color: '#e2bfaf',
  },
  h3: {
    flex:1,
    fontSize: 12,
    color: '#031912',
  },
  h4: {
    flex:1,
    marginLeft: 20,
    fontSize: 14,
    color: '#2D2C2C'
  },
  icon_style: {
    marginBottom: 8,
  },
  button_style_me: {
    marginRight: 30,
    marginBottom: 20,
  },
  button_textstyle_me: {
    flex:1,
    fontSize: 15,
    textAlign: 'right',
    marginRight: 10,
    color: '#0e662d',
  },
});

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);