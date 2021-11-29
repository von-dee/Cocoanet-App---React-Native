import React from "react";
import { View, StyleSheet, ScrollView, FlatList, ImageBackground,Text, TouchableOpacity, Image} from "react-native";
import { Icon, SearchBar } from 'react-native-elements';

import SoundPlayer from 'react-native-sound-player'
 
import call from 'react-native-phone-call';

import SwitchToggle from 'react-native-switch-toggle';

export default class Articlesdetail extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      isplaying: false,
      isenglish: true,
      data: {
        title_1: "Healthy Pod",
        body_1:  "Congrats. Your cocoa has not been infected. Cocoa is rich in polyphenols, which have...",
        title_2: "The black pod disease",
        body_2:  "The black pod disease is caused by fungus. It is prevalent during the rainy season...",
        title_3: "Swollen Shoot Disease",
        body_3:  "The cocoa swollen shoot disease is caused by a virus and mealybug is a host for...",
      }


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

  _playsound(soundname) {
   
    if(!this.state.isplaying){
     
      try {
        // play the file tone.mp3
        SoundPlayer.playSoundFile(soundname, 'wav')
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


  _readmore(articlecode) {
   
    if(articlecode == "Healthy Pod"){
      this.props.navigation.navigate('Articles', {
        title_: 'Duaba Pa (Healthy Pod)',
        details_: 'English \n Congrats. Your cocoa has not been infected. Cocoa is rich in polyphenols, which have significant health benefits, including reduced inflammation and improved cholesterol levels. However, processing cocoa into chocolate or other products can substantially decrease the polyphenol content. \n \n  Twi \n Wa yɛ lucky, mmoawa biara ɛnkyee wo kookoo no. Wo kookoo no gyina brane. Wo bɛya wo kookoo no ho mfaso pa.',
        soundtitle_: 'healthypod',
      });
    }else if(articlecode == "Black Pod"){
      this.props.navigation.navigate('Articles', {
        title_: 'Black pod  Moawamoawa (Black Pod)',
        details_: 'English \n The black pod disease is caused by fungus. It is prevalent during the rainy season, that is between April and October. This disease can be chemically treated and some of the fungicides that are commonly used are Agro Commet, Okumanonom, Fungikill, Champion and Sidalco Defender. For the application of Agro Commet, Okumanonom and Fungikill per 15 litres spraying tank, take 75g of each and dilute with a sachet of water. \n \n Twi \n Wo kookoo no aya Black pod mmoawa mmoawa no bi. Na ɛmmom ɛnsuro, kokonɛt wɔ hɔ sɛ yɛbɛboa wo amma wo kookoo no agyina brane. ɛnoa ne sɛ wo bɛkɔ agrokɛmikal a ɛbɛn wo na w\'akɔtɔ Agrokomɛt, Okumanonom, Fungikill, Champion ɛne sidalko defɛndar. Fa saa nnuro yi mu biara 75 grams nafa nsuo fra mu kɔpɛm sɛ motobro no bɛyɛ ma. ɛnoa no no w\'awie. Black pod mmoawa mmoawa no nyinaa awu. Kae sɛ wo bɛsaa agu wo kookoo no so wɔ nnawɔtwe mmiɛnsa anaa bosome ntɛm.',
        soundtitle_: 'blackpod',
      });            
    }else if(articlecode == "Pest Infested Pod"){
      this.props.navigation.navigate('Articles', {
        title_: 'Pest Infested Pod (Mwoawamoawa)',
        details_: 'English \n Pests cannot be avoided from feeding on the cocoa plantation and so measures must be put in place to reduce their impact on the farms. Some of the insecticides used are Akatemaster, Okumakate, Confidor Oteq, Confidz 200 SC, Akatiwura. To apply Akatemaster, take 100 ml per tank filling and the tank-fill per litre should be 33.3, for Okumakate 24 ml per tank filling should be used and the tank-fill per litre should be 41.6. 30 ml per tank filling of Confidor Oteq can also be applied to get rid of insects in 33.3 tank-fill.  \n \n Twi \n Swollen Shoot Mmoawa akye wo kookoo no. Na ɛmmom, saa mmoawa mmoawa yi, aduro biara ni hɔ a yɛ de tu wɔnase. ɛmmom wobɛ tumi asi wɔn ho kwan. Twa kookoo kɔrɔ a mmoawa no akye no no fir kookoo no mu. Wo wie a no wo ahye ne nyinaa. Afei dua ankaa anaa abɛ fa wo kookoo afuo no nyinaa ho. W\'awie.',
        soundtitle_: 'swollenshoot',
      });
    }else{

    }
  }


 
  onPress1 = () => {
      this.setState({ switchOn1: !this.state.switchOn1 });
        if(!this.state.isenglish){
          
          this.setState(
            {data: {
              title_1: "Healthy Pod",
              body_1:  "Congrats. Your cocoa has not been infected.",
              title_2: "The black pod disease",
              body_2:  "The black pod disease is caused by fungus. It is prevalent during the rainy season, that is between April and October. This disease can be chemically treated and some of the fungicides that are commonly used are Agro Commet, Okumanonom, Fungikill, Champion and Sidalco Defender. For the application of Agro Commet, Okumanonom and Fungikill per 15 litres spraying tank, take 75g of each and dilute with a sachet of water.",
              title_3: "Swollen Shoot Disease",
              body_3:  "The cocoa swollen shoot disease is caused by a virus and mealybug is a host for carrying this disease. Chemically and culturally, this disease cannot be cured but it can be managed. There are two main ways of managing this disease. It can be done using preventive measures such as barrier cropping and elimination of infested plants.",
              }
            }
          );
          

          this.state.isenglish= true;
          console.log("Is English", this.state.isenglish);
        }else{
          
          this.setState(
            {data: {
              title_1: "Duaba Pa",
              body_1:  "Wa yɛ lucky, mmoawa biara ɛnkyee wo kookoo no. Wo kookoo no gyina brane. Wo bɛya wo kookoo no ho mfaso pa.",
              title_2: "Black pod Moawamoawa",
              body_2:  "Wo kookoo no aya Black pod mmoawa mmoawa no bi. Na ɛmmom ɛnsuro, kokonɛt wɔ hɔ sɛ yɛbɛboa wo amma wo kookoo no agyina brane. ɛnoa ne sɛ wo bɛkɔ agrokɛmikal a ɛbɛn wo na w'akɔtɔ Agrokomɛt, Okumanonom, Fungikill, Champion ɛne sidalko defɛndar. Fa saa nnuro yi mu biara 75 grams nafa nsuo fra mu kɔpɛm sɛ motobro no bɛyɛ ma. ɛnoa no no w'awie. Black pod mmoawa mmoawa no nyinaa awu. Kae sɛ wo bɛsaa agu wo kookoo no so wɔ nnawɔtwe mmiɛnsa anaa bosome ntɛm.",
              title_3: "Swollen Shoot Moawamoawa",
              body_3:  "Swollen Shoot Mmoawa akye wo kookoo no. Na ɛmmom, saa mmoawa mmoawa yi, aduro biara ni hɔ a yɛ de tu wɔnase. ɛmmom wobɛ tumi asi wɔn ho kwan. Twa kookoo kɔrɔ a mmoawa no akye no no fir kookoo no mu. Wo wie a no wo ahye ne nyinaa. Afei dua ankaa anaa abɛ fa wo kookoo afuo no nyinaa ho. W'awie.",
              }
            }
          );
          

        
          this.state.isenglish= false;
          console.log("Is Twi", this.state.isenglish);
        }
  
    }
  

  render() {
    return (
        <View style={styles.container}>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 2, flexDirection: 'column'}}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('Home')}>
                <Icon iconStyle={[styles.icon,styles.colour_grey]}  name='arrow-left' type='font-awesome' />
              </TouchableOpacity>
            </View>
            <View style={{flex: 8, flexDirection: 'column', alignItems: 'center'}}>
              <View style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.h1_first}> News Feed  </Text>
              </View>
              <View style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.h1_second}> Nkran, 20 Oforisuo  </Text>
              </View>
            </View>
            <View style={{flex: 2, flexDirection: 'column'}}>
              <SwitchToggle switchOn={this.state.switchOn1} onPress={this.onPress1}
              containerStyle={{
                marginTop: 10,
                marginRight: 10,
                width: 30,
                height: 15,
                borderRadius: 10,
                backgroundColor: '#ccc',
                padding: 3,
              }}
                />  
            </View>
          </View>

         
          <View style={{flex: 10, flexDirection: 'row', backgroundColor: '#F6F6F6',  marginTop: 30, borderTopLeftRadius: 20, 
        borderTopRightRadius: 20}}>
            
            <View style={{flex: 1, flexDirection: 'column'}}>
              
              <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                <View style={{flex: 1, flexDirection: 'column'}}></View>
                <View style={{flex: 10, flexDirection: 'column'}}>
                  <SearchBar ref={search => this.search = search} placeholder="search"  containerStyle={{backgroundColor: '#F6F6F6',height: 30,borderTopColor: '#F6F6F6',borderBottomColor: '#F6F6F6'}} inputContainerStyle={{borderRadius: 10, height: 30, backgroundColor: '#fff'}} inputStyle={{height: 30}} lightTheme={true}/>
                </View>
                <View style={{flex: 1, flexDirection: 'column'}}></View>
              </View>
            

              <View style={{flex: 11, flexDirection: 'row', marginBottom: 20}}>
                <ScrollView>



                  <TouchableOpacity style={styles.card_weather} onPress={() => {this._readmore('Healthy Pod')}}>
                    
                    <View style={{flex: 1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'center'}}>
                      <Icon iconStyle={[styles.icon_cloud,styles.colour_white]} name='cloud' type='material' /> 
                      {/* <Text style={[styles.h3,styles.margintop_]}>10°C, Clear Sky</Text> */}
                      <Text style={[styles.h3,styles.margintop_]}>10°C, ewiem dahɔ</Text>
                    </View>  
                
                  </TouchableOpacity>
                  
                  

                  <TouchableOpacity style={styles.card} onPress={() => {this._readmore('Healthy Pod')}}>
                    
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 5, flexDirection: 'column'}}>
                          <Image source={require('./../assets/bg.png')} style={{top: -10, left: -10, width:140, height:150, borderRadius: 10}} />
                        </View>
                        <View style={{flex: 7, flexDirection: 'column'}}>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <View style={{flex: 7, flexDirection: 'column'}}>
                            </View>
                            <View style={{flex: 5, flexDirection: 'column'}}>
                              <View style={{flex: 1, flexDirection: 'row', marginTop: 5, textAlign: 'right',}}>
                                <Icon iconStyle={[styles.icon_clock,styles.colour_grey]}  name='timer' type='material' />
                                <Text style={styles.feed_date}> 2 days ago  </Text>
                              </View>
                            </View>
                          </View>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <Text style={styles.feed_title}> {this.state.data.title_1}  </Text>
                          </View>
                          <View style={{flex: 6, flexDirection: 'row'}}>
                            <Text style={styles.feed_text}> {this.state.data.body_1} </Text>
                          </View>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <View style={{flex: 4, flexDirection: 'column'}}>
                            </View>
                            <View style={{flex: 8, flexDirection: 'column'}}>
                              <Text style={styles.feed_readmore}> By Administrator </Text>
                            </View>
                          </View>
                        </View>
                      </View>  
                  
                  </TouchableOpacity>


                  <TouchableOpacity style={styles.card} onPress={() => {this._readmore('Black Pod')}}>
                    
                    {/* <View style={styles.card}>  */}
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 5, flexDirection: 'column'}}>
                          <Image source={require('./../assets/blackpod.png')} style={{top: -10, left: -10, width:140, height:150, borderRadius: 10}} />
                        </View>
                        <View style={{flex: 7, flexDirection: 'column'}}>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <View style={{flex: 7, flexDirection: 'column'}}>
                            </View>
                            <View style={{flex: 5, flexDirection: 'column'}}>
                              <View style={{flex: 1, flexDirection: 'row', marginTop: 5, textAlign: 'right',}}>
                                <Icon iconStyle={[styles.icon_clock,styles.colour_grey]}  name='timer' type='material' />
                                <Text style={styles.feed_date}> 2 days ago  </Text>
                              </View>
                            </View>
                          </View>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <Text style={styles.feed_title}> {this.state.data.title_2}  </Text>
                          </View>
                          <View style={{flex: 6, flexDirection: 'row'}}>
                            <Text style={styles.feed_text}> {this.state.data.body_2} </Text>
                          </View>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <View style={{flex: 4, flexDirection: 'column'}}>
                            </View>
                            <View style={{flex: 8, flexDirection: 'column'}}>
                              <Text style={styles.feed_readmore}> By Administrator </Text>
                            </View>
                          </View>
                        </View>
                      </View>  
                    {/* </View> */}
                  
                  </TouchableOpacity>


                  <TouchableOpacity style={styles.card} onPress={() => {this._readmore('Pest Infested Pod')}}>
                    
                    {/* <View style={styles.card}>  */}
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 5, flexDirection: 'column'}}>
                          <Image source={require('./../assets/swollen.png')} style={{top: -10, left: -10, width:140, height:150, borderRadius: 10}} />
                        </View>
                        <View style={{flex: 7, flexDirection: 'column'}}>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <View style={{flex: 7, flexDirection: 'column'}}>
                            </View>
                            <View style={{flex: 5, flexDirection: 'column'}}>
                              <View style={{flex: 1, flexDirection: 'row', marginTop: 5, textAlign: 'right',}}>
                                <Icon iconStyle={[styles.icon_clock,styles.colour_grey]}  name='timer' type='material' />
                                <Text style={styles.feed_date}> 2 days ago  </Text>
                              </View>
                            </View>
                          </View>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <Text style={styles.feed_title}> {this.state.data.title_3}  </Text>
                          </View>
                          <View style={{flex: 6, flexDirection: 'row'}}>
                            <Text style={styles.feed_text}> {this.state.data.body_3} </Text>
                          </View>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <View style={{flex: 4, flexDirection: 'column'}}>
                            </View>
                            <View style={{flex: 8, flexDirection: 'column'}}>
                              <Text style={styles.feed_readmore}> By Administrator </Text>
                            </View>
                          </View>
                        </View>
                      </View>  
                    {/* </View> */}
                  
                  </TouchableOpacity>


                  <TouchableOpacity style={styles.card} onPress={() => {this._readmore('Healthy Pod')}}>
                    
                    {/* <View style={styles.card}>  */}
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 5, flexDirection: 'column'}}>
                          <Image source={require('./../assets/bg.png')} style={{top: -10, left: -10, width:140, height:150, borderRadius: 10}} />
                        </View>
                        <View style={{flex: 7, flexDirection: 'column'}}>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <View style={{flex: 7, flexDirection: 'column'}}>
                            </View>
                            <View style={{flex: 5, flexDirection: 'column'}}>
                              <View style={{flex: 1, flexDirection: 'row', marginTop: 5, textAlign: 'right',}}>
                                <Icon iconStyle={[styles.icon_clock,styles.colour_grey]}  name='timer' type='material' />
                                <Text style={styles.feed_date}> 2 days ago  </Text>
                              </View>
                            </View>
                          </View>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <Text style={styles.feed_title}> {this.state.data.title_1}  </Text>
                          </View>
                          <View style={{flex: 6, flexDirection: 'row'}}>
                            <Text style={styles.feed_text}> {this.state.data.body_1} </Text>
                          </View>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <View style={{flex: 4, flexDirection: 'column'}}>
                            </View>
                            <View style={{flex: 8, flexDirection: 'column'}}>
                              <Text style={styles.feed_readmore}> By Administrator </Text>
                            </View>
                          </View>
                        </View>
                      </View>  
                    {/* </View> */}
                  
                  </TouchableOpacity>

                </ScrollView>
              </View>
            </View>

            

          </View>



          

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  card: {
    height: 120, 
    backgroundColor: '#fff', 
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
    marginBottom: 25,
  },
  card_weather: {
    height: 20, 
    backgroundColor: 'transparent',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  feed_title: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#626262'
  },
  feed_text: {
    fontSize: 12,
    marginLeft: 5,
    marginTop: 8,
    color: '#8B8B8B'
  },
  feed_date: {
    fontSize: 10,
    color: '#C7C7C7'
  }, 
  feed_readmore: {
    fontSize: 10,
    textAlign: 'right',
    marginRight: 10,
  },
  camera_text: {
    fontSize: 12,
    marginTop: 18,
  },
  icon_cloud: {
    marginLeft: 80,
    color: '#fff',
  },
  icon_clock: {
    fontSize: 12,
    color: '#333',
  },
  icon: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 18,
  },
  colour_white: {
    color: '#fff',
  },
  colour_grey: {
    color: '#173F34',
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
  h1_first: {
    flex:1,
    marginLeft: 10,
    fontSize: 13,
    textAlign: 'center',
    color: '#2D4203',
  },
  h1_second: {
    flex:1,
    marginLeft: 10,
    fontSize: 15,
    textAlign: 'center',
    color: '#173F34',
  },
  h1: {
    flex:1,
    marginLeft: 10,
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
  },
  h2: {
    flex:1,
    marginTop: 15,
    marginLeft: 10,
    fontSize: 12,
    color: '#000',
  },
  h3: {
    flex:1,
    fontSize: 12,
    marginLeft: 8,
    color: '#8B8B8B',
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