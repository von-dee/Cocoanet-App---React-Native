import React from "react";
import { View, StyleSheet, ImageBackground,Text, TouchableOpacity, Image} from "react-native";
import { Icon } from 'react-native-elements';

import SoundPlayer from 'react-native-sound-player';
import call from 'react-native-phone-call';



export default class Articles extends React.Component {
  

  constructor(props) {
    super(props);
    
    const { navigation } = this.props;
    const title_ = navigation.getParam('title_', 'NO-Title');
    const details_ = navigation.getParam('details_', 'some default value');
    const soundtitle_ = navigation.getParam('soundtitle_', 'audio');


    console.log(`First Param `, this.props.navigation.getParam('title_', 'NO-ID'));
    console.log(`Second Param `, this.props.navigation.getParam('details_', 'some default value'));

    this.state = {
      isplaying: false,
    }
   
  }


  _call() {
    
    //handler to make a call_
    const args = {
      number: '191',
      prompt: false,
    };
    call(args).catch(console.error);

  };

  _playsound() {
   
    if(!this.state.isplaying){
     
      try {
        // play the file tone.mp3
        SoundPlayer.playSoundFile(this.props.navigation.getParam('soundtitle_', 'audio'), 'wav')
        // or play from url
        // SoundPlayer.playUrl('http://62.138.24.195/tb/e/cd/mc_hammer_u_can_t_touch_this_mp3_813.mp3')
      } catch (e) {
          console.log(`cannot play the sound file`, e)
      } 

      this.state.isplaying= true;
      console.log("Sound is turned on ", this.state.isplaying);
    }else{
      SoundPlayer.stop();
      this.state.isplaying= false;
      console.log("Sound is turned off");
    }
  }

  
  

  render() {
    return (
        <View style={styles.container}>
          <View style={{flex: 4, flexDirection: 'row'}}>
            <ImageBackground source={require('./../assets/bg.png')} style={{width: '100%', height: '100%'}}>
              <View style={{flex: 4, flexDirection: 'row'}}>
                <View style={{flex: 2, flexDirection: 'column'}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <Icon iconStyle={[styles.icon,styles.colour_white,{marginTop: 14}]} name='arrow-left' type='font-awesome' />
                  </TouchableOpacity>
                </View>
                <View style={{flex: 10, flexDirection: 'column'}}></View>
              </View>
            </ImageBackground>
          </View>


          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={[styles.card,styles.myshadow, {flex: 1, flexDirection: 'column'}]}> 
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 8, flexDirection: 'column'}}>
              </View>
              
            </View>
            <View style={{flex: 2, flexDirection: 'row'}}>
              <Text style={styles.feed_title}> {this.props.navigation.getParam('title_', 'NO-ID')}  </Text>
            </View>
            <View style={{flex: 2, flexDirection: 'row'}}>
              <View style={{flex: 7, flexDirection: 'column'}}>
                <Text style={styles.feed_readmore}> Kofi, 20 Oforisuo </Text>
              </View>
              <View style={{flex: 2, flexDirection: 'column'}}>
                <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {this._playsound()}}>
                  <Icon iconStyle={styles.icon} name='sound' type='foundation' />
                </TouchableOpacity>  
              </View>
            </View>
            </View>     
          </View>



          <View style={{flex: 7, flexDirection: 'row'}}>
            <Text style={styles.h2}>{this.props.navigation.getParam('details_', 'some default value')}</Text>

            <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.clickHandler}
            style={styles.TouchableOpacityStyle} 
            onPress={() => {this._call()}}>
            <Image
              source={require('./../assets/call.png')}
              style={styles.FloatingButtonStyle}
            />
          </TouchableOpacity>


          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F6F6F6'
  },
  card: {
    height: 110, 
    backgroundColor: '#fff', 
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
    marginBottom: 25,
    top: -80, 
    width: 100
  },
  feed_title: {
    marginTop: 4,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#626262'
  },
  feed_date: {
    fontSize: 13,
    marginTop: 5,
    marginLeft: 10,
    color: '#C7C7C7'
  },
  feed_readmore: {
    fontSize: 10,
    marginLeft: 10
  },
  camera_text: {
    fontSize: 12,
    marginTop: 18,
  },
  icon: {
    marginLeft: 20,
    fontSize: 22,
    width: 40,
    height: 40
  },
  colour_white: {
    color: '#ffffff',
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
  h1: {
    flex:1,
    marginTop: 2,
    marginLeft: 10,
    fontSize: 25,
    color: '#000',
  },
  h2: {
    flex:1,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 14,
    color: '#000',
  },
  h3: {
    flex:1,
    fontSize: 10,
    marginLeft: 10,
    color: '#000',
  },
  h4: {
    flex:1,
    fontSize: 25,
    marginLeft: 10,
    color: '#000',
    backgroundColor: '#44251d'
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
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
 
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50
  },
});