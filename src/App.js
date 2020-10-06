
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
              <Image
              style={{width:200, height:200}}
                source={{uri: {images}}}
              />
              <Text>{header}</Text>
              <Text>{desc}</Text>
            </View>
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.header}>
              <Image></Image>
              <Text style={styles.header}>News</Text>
            </View>
            {newsBox("https://reactnative.dev/img/tiny_logo.png", "News1", "Lorem ipsum dolar sit amet!")}
            
            
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "pink",
  },
  body: {
    backgroundColor: "white",
    margin: 10,
  },
  header:{
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default App;
