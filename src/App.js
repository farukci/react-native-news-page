
// This is the old version of news app

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

// import NewsBox from "./components/newsBox";

const App = () => {
  function newsBox(image, header, desc) {
    return <View>
              <Text>{image}</Text>
              <Image
              style={{width:200, height:200}}
                // source={require('./images/')}
              />
              <Text>{header}</Text>
              <Text>{desc}</Text>
            </View>
  }

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.header}>
            <Image></Image>
            <Text style={styles.header}>News</Text>
          </View>
          {/* {newsBox("'./images/react-native.png'", "News1", "Lorem ipsum dolar sit amet!")} */}
          <View style={styles.newsboxes}>
            <Image
              style={styles.images}
              source={require('./images/jet-suit.png')}
            />
            <Text style={styles.newstitle}>Jet Suit</Text>
            <Text>Richard Browning starts a business in 2017. He makes jet suits. A jet suit is a special equipment that a...</Text>
          </View>
          <View style={styles.newsboxes}>
            <Image
              style={styles.images}
              source={require('./images/insect.png')}
            />
            <Text style={styles.newstitle}>One Year ago: Big Insect Problem</Text>
            <Text>Insects are small animals like ants, bees, bugs or flies. They are very important. Many animals eat them. If there...</Text>
          </View>
          <View style={styles.newsboxes}>
            <Image
              style={styles.images}
              source={require('./images/october.jpg')}
            />
            <Text style={styles.newstitle}>October Effect</Text>
            <Text>The October Effect is a perceived market anomaly that stocks tend to fall in October. If we go back in time, back into 1907, a financial crisis ...</Text>
          </View>
          <View style={styles.newsboxes}>
            <Image
              style={styles.images}
              source={require('./images/bird.jpg')}
            />
            <Text style={styles.newstitle}>Birds of Prey Take Down Drones</Text>
            <Text>People know that wild hawks may snatch drones in mid-flight, as they mistake them for smaller birds, and it was those incidents which led researchers to assume...</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
  },
  body: {
    backgroundColor: "white",
    margin: 10,
  },
  header:{
    fontSize: 50,
    fontWeight: "bold",
  },
  newsboxes: {
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    marginBottom: 10,
  },
  images: {
    width: 368,
    height: 200,
    borderRadius: 10,
  },
  newstitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
});

export default App;
