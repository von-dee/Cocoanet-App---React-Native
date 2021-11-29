import React from "react";
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';

import Spinner from 'react-native-loading-spinner-overlay';

import RNFetchBlob from 'rn-fetch-blob'
const axios = require('axios')

export default class Stream extends React.Component {

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  state = {
    spinner: false
  };

  
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };

      this.setState({
        spinner: true
      });

      const data = await this.camera.takePictureAsync(options);

      const filename_date = Date.now();
      const filename_ = filename_date.toString();
      
      

      RNFetchBlob.fetch('POST', 'https://cocoanet-bdzh.onrender.com/check', {
        'Content-Type': 'multipart/form-data'
      }, [
        
          {name: 'file', filename: filename_, data: data.base64}
      ]).then((resp) => {
          console.log(resp);
          console.log(JSON.parse(resp.data).result);

          this.setState({
            spinner: false
          });

          if(JSON.parse(resp.data).result == "Healthy Pod"){
            this.props.navigation.navigate('Articles', {
            title_: 'Duaba Pa (Healthy Pod)',
            details_: 'English \n Congrats. Your cocoa has not been infected. Cocoa is rich in polyphenols, which have significant health benefits, including reduced inflammation and improved cholesterol levels. However, processing cocoa into chocolate or other products can substantially decrease the polyphenol content. \n \n  Twi \n Wa yɛ lucky, mmoawa biara ɛnkyee wo kookoo no. Wo kookoo no gyina brane. Wo bɛya wo kookoo no ho mfaso pa.',
            soundtitle_: 'healthypod',
            });
          }else if(JSON.parse(resp.data).result == "Black Pod"){
            this.props.navigation.navigate('Articles', {
            title_: 'Black pod  Moawamoawa (Black Pod)',
            details_: 'English \n The black pod disease is caused by fungus. It is prevalent during the rainy season, that is between April and October. This disease can be chemically treated and some of the fungicides that are commonly used are Agro Commet, Okumanonom, Fungikill, Champion and Sidalco Defender. For the application of Agro Commet, Okumanonom and Fungikill per 15 litres spraying tank, take 75g of each and dilute with a sachet of water. \n \n Twi \n Wo kookoo no aya Black pod mmoawa mmoawa no bi. Na ɛmmom ɛnsuro, kokonɛt wɔ hɔ sɛ yɛbɛboa wo amma wo kookoo no agyina brane. ɛnoa ne sɛ wo bɛkɔ agrokɛmikal a ɛbɛn wo na w\'akɔtɔ Agrokomɛt, Okumanonom, Fungikill, Champion ɛne sidalko defɛndar. Fa saa nnuro yi mu biara 75 grams nafa nsuo fra mu kɔpɛm sɛ motobro no bɛyɛ ma. ɛnoa no no w\'awie. Black pod mmoawa mmoawa no nyinaa awu. Kae sɛ wo bɛsaa agu wo kookoo no so wɔ nnawɔtwe mmiɛnsa anaa bosome ntɛm.',
            soundtitle_: 'blackpod',
            });            
          }else if(JSON.parse(resp.data).result == "Pest Infested Pod"){
            this.props.navigation.navigate('Articles', {
            title_: 'Pest Infested Pod (Mwoawamoawa)',
            details_: 'English \n Pests cannot be avoided from feeding on the cocoa plantation and so measures must be put in place to reduce their impact on the farms. Some of the insecticides used are Akatemaster, Okumakate, Confidor Oteq, Confidz 200 SC, Akatiwura. To apply Akatemaster, take 100 ml per tank filling and the tank-fill per litre should be 33.3, for Okumakate 24 ml per tank filling should be used and the tank-fill per litre should be 41.6. 30 ml per tank filling of Confidor Oteq can also be applied to get rid of insects in 33.3 tank-fill.  \n \n Twi \n Swollen Shoot Mmoawa akye wo kookoo no. Na ɛmmom, saa mmoawa mmoawa yi, aduro biara ni hɔ a yɛ de tu wɔnase. ɛmmom wobɛ tumi asi wɔn ho kwan. Twa kookoo kɔrɔ a mmoawa no akye no no fir kookoo no mu. Wo wie a no wo ahye ne nyinaa. Afei dua ankaa anaa abɛ fa wo kookoo afuo no nyinaa ho. W\'awie.',
            soundtitle_: 'swollenshoot',
            });
          }else{

          }

      }).catch((err) => {
      })
      
      
      

      console.log(data.uri);
      console.log(data);
    }
  };

  render() {
    
    // const { visible } = this.state;

    return (
      <View style={styles.container}>

        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />

        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ top: -60, justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Image source={require('./../assets/cambtn.png')} style={{flex:1, width: 67}} resizeMode="contain"/>
            
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
    backgroundColor: 'black',
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    // flex: 0,
    backgroundColor: '#173F34',
    padding: 5,
    alignSelf: 'center',
    margin: 20,
    height: 80,
    width: 80,
    borderRadius:400,
  },
});

// AppRegistry.registerComponent('BadInstagramCloneApp', () => BadInstagramCloneApp);
