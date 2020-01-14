/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import Video from 'react-native-video';
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Picture from './src/Picture.js';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor="red" barStyle="light-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header />
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <View style={{backgroundColor: 'blue', flex: 0.3}} />
          <View style={{backgroundColor: 'red', flex: 0.5}} />
        </View>
        <Text style={styles.sectionDescription}>WORKING FUCK YEAH!!!!</Text>
        <View>
          <Image
            style={{width: 400, height: 400}}
            source={require('./img001.jpg')}
          />
          {/* <Video
            source={require('./output.mp4')}
            ref={ref => {
              this.player = ref;
            }}
            onBuffer={this.onBuffer}
            onError={this.videoError}
            style={styles.backgroundVideo}
          /> */}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 50,
    fontWeight: '900',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
