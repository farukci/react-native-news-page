import React from "react";
import {View, Text, StyleShee, Image} from "react-native";

const NewsBox = ( newsImage, newsHeader, newsDesc) => {
    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require({newsImage})}
            />
            <Text>{newsHeader}</Text>
            <Text>{newsDesc}</Text>
        </View>
    );
};

export default MyComponent;

const styles = StyleSheet.create({
    container:{
        backgroundColor: "lightgray",
        margin: 5,
        padding: 10,
        borderWidth: 2,
        borderColor: "#7070ff",
        borderRadius: 10,
    },
})