import React from 'react';
import {  View, StyleSheet, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Icon, SearchBar } from 'react-native-elements';

export default class Store extends React.Component {
  

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


  render() {
    return (
      <View  style={styles.container}>
        

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 2, flexDirection: 'column'}}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate('Home')}>
              <Icon iconStyle={[styles.icon,styles.colour_grey]}  name='arrow-left' type='font-awesome' />
            </TouchableOpacity>
          </View>
          <View style={{flex: 8, flexDirection: 'column'}}>
            <SearchBar ref={search => this.search = search} placeholder="search"  containerStyle={{backgroundColor: '#fff',height: 30,borderTopColor: '#F6F6F6',borderBottomColor: '#F6F6F6',marginTop: 10}} inputContainerStyle={{borderRadius: 10, height: 30, backgroundColor: '#fff'}} inputStyle={{height: 30}} lightTheme={true}/>
          </View>
          <View style={{flex: 2, flexDirection: 'column'}}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate('Home')}>
              <Icon iconStyle={[styles.icon_cart, {color: '#466B00'}]}  name='cart' type='material-community' />
            </TouchableOpacity>
          </View>
        </View>


        <View style={{flex: 2, flexDirection: 'row'}}>
          <View style={{flex: 2, alignItems: 'center'}}>       
            <TouchableOpacity style={{alignItems: 'center', marginTop: 5}} onPress={() =>
              this.props.navigation.navigate('Articlesdetail')}>
                <Image source={require('./../assets/store/cocoa.png')} style={{flex:1, width: 40}} resizeMode="contain"/>
                <Text style={styles.h3}>Cocoa</Text>   
            </TouchableOpacity>
          </View>

          <View style={{flex: 2,alignItems: 'center'}} >
            <TouchableOpacity style={{alignItems: 'center', marginTop: 5}} onPress={() =>
            this.props.navigation.navigate('Store')}>
                <Image source={require('./../assets/store/fert.png')} style={{flex:1, width: 40}} resizeMode="contain"/>
                <Text style={styles.h3}>Fertilizer</Text>
            </TouchableOpacity>  
          </View>

          <View style={{flex: 2,alignItems: 'center'}} >
            <TouchableOpacity style={{alignItems: 'center', marginTop: 5}} onPress={() =>
            this.props.navigation.navigate('Chatbot')}>
                <Image source={require('./../assets/store/help.png')} style={{flex:1, width: 40}} resizeMode="contain"/>
                <Text style={styles.h3}>Expert</Text>
            </TouchableOpacity>  
          </View>
          
          <View style={{flex: 2,alignItems: 'center'}} >
            <TouchableOpacity style={{alignItems: 'center', marginTop: 5}} onPress={() =>
            this.props.navigation.navigate('Chatbot')}>
                <Image source={require('./../assets/store/pest.png')} style={{flex:1, width: 40}} resizeMode="contain"/>
                <Text style={styles.h3}>Pest</Text>
            </TouchableOpacity>  
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', marginLeft: 10}}>Cocoa Produce</Text>
        </View>

        <View style={{flex: 8, flexDirection: 'row'}}>
          <ScrollView>

            <TouchableOpacity style={styles.card} onPress={() => {this._readmore('Healthy Pod')}}>
              
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 5, flexDirection: 'column'}}>
                    <Image source={require('./../assets/cocoaproduce/1.png')} style={{top: -16, left: -10, width:140, height:160, borderRadius: 10}} />
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
                      <Text style={styles.feed_title}> Moses Obeng  </Text>
                    </View>
                    <View style={{flex: 4, flexDirection: 'row'}}>
                      <Text style={styles.feed_text}> You can get discount.  </Text>
                    </View>
                    <View style={{flex: 2, flexDirection: 'row'}}>
                      <Icon iconStyle={[styles.icon_clock,styles.colour_grey, {marginLeft: 10}]}  name='map-marker' type='material-community' />
                      <Text style={styles.feed_location}> Tarkwa  </Text>
                    </View>
                    <View style={{flex: 2, flexDirection: 'row'}}>
                      <View style={{flex: 4, flexDirection: 'column'}}>
                      </View>
                      <View style={{flex: 8, flexDirection: 'column'}}>
                        <Text style={styles.feed_readmore}> ₵ 300 </Text>
                      </View>
                    </View>
                  </View>
                </View>  

            </TouchableOpacity>


            <TouchableOpacity style={styles.card} onPress={() => {this._readmore('Healthy Pod')}}>
              
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 5, flexDirection: 'column'}}>
                  <Image source={require('./../assets/cocoaproduce/2.png')} style={{top: -16, left: -10, width:140, height:160, borderRadius: 10}} />
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
                    <Text style={styles.feed_title}> Mr Mensah Akoto  </Text>
                  </View>
                  <View style={{flex: 4, flexDirection: 'row'}}>
                    <Text style={styles.feed_text}> You can get discount.  </Text>
                  </View>
                  <View style={{flex: 2, flexDirection: 'row'}}>
                    <Icon iconStyle={[styles.icon_clock,styles.colour_grey, {marginLeft: 10}]}  name='map-marker' type='material-community' />
                    <Text style={styles.feed_location}> Tarkwa  </Text>
                  </View>
                  <View style={{flex: 2, flexDirection: 'row'}}>
                    <View style={{flex: 4, flexDirection: 'column'}}>
                    </View>
                    <View style={{flex: 8, flexDirection: 'column'}}>
                      <Text style={styles.feed_readmore}> ₵ 300 </Text>
                    </View>
                  </View>
                </View>
              </View>  

          </TouchableOpacity>



          <TouchableOpacity style={styles.card} onPress={() => {this._readmore('Healthy Pod')}}>
              
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 5, flexDirection: 'column'}}>
                  <Image source={require('./../assets/cocoaproduce/3.png')} style={{top: -16, left: -10, width:140, height:160, borderRadius: 10}} />
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
                    <Text style={styles.feed_title}> Mrs Jenifer Kusi  </Text>
                  </View>
                  <View style={{flex: 4, flexDirection: 'row'}}>
                    <Text style={styles.feed_text}> You can get discount.  </Text>
                  </View>
                  <View style={{flex: 2, flexDirection: 'row'}}>
                    <Icon iconStyle={[styles.icon_clock,styles.colour_grey, {marginLeft: 10}]}  name='map-marker' type='material-community' />
                    <Text style={styles.feed_location}> Tarkwa  </Text>
                  </View>
                  <View style={{flex: 2, flexDirection: 'row'}}>
                    <View style={{flex: 4, flexDirection: 'column'}}>
                    </View>
                    <View style={{flex: 8, flexDirection: 'column'}}>
                      <Text style={styles.feed_readmore}> ₵ 300 </Text>
                    </View>
                  </View>
                </View>
              </View>  

          </TouchableOpacity>



          <TouchableOpacity style={styles.card} onPress={() => {this._readmore('Healthy Pod')}}>
              
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 5, flexDirection: 'column'}}>
                  <Image source={require('./../assets/cocoaproduce/4.png')} style={{top: -16, left: -10, width:140, height:160, borderRadius: 10}} />
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
                    <Text style={styles.feed_title}> Mrs Jenifer Kusi  </Text>
                  </View>
                  <View style={{flex: 4, flexDirection: 'row'}}>
                    <Text style={styles.feed_text}> You can get discount.  </Text>
                  </View>
                  <View style={{flex: 2, flexDirection: 'row'}}>
                    <Icon iconStyle={[styles.icon_clock,styles.colour_grey, {marginLeft: 10}]}  name='map-marker' type='material-community' />
                    <Text style={styles.feed_location}> Tarkwa  </Text>
                  </View>
                  <View style={{flex: 2, flexDirection: 'row'}}>
                    <View style={{flex: 4, flexDirection: 'column'}}>
                    </View>
                    <View style={{flex: 8, flexDirection: 'column'}}>
                      <Text style={styles.feed_readmore}> ₵ 280 </Text>
                    </View>
                  </View>
                </View>
              </View>  

          </TouchableOpacity>

          
          </ScrollView>

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
    height: 130, 
    backgroundColor: '#fff', 
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
    marginBottom: 25,
    padding: 5,
    elevation: 3
  },
  card_weather: {
    height: 20, 
    backgroundColor: 'transparent',
    justifyContent: 'center',
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
  feed_location: {
    fontSize: 12,
    marginLeft: 5,
    color: '#8B8B8B'
  },
  feed_date: {
    fontSize: 10,
    color: '#C7C7C7'
  }, 
  feed_readmore: {
    fontSize: 16,
    textAlign: 'right',
    marginRight: 10,
    color: '#466B00'
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
    marginTop: 20,
    fontSize: 18,
  },
  icon_cart: {
    marginTop: 20,
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