import React from 'react';
import { SafeAreaView, View, Text, ScrollView, Image, FlatList, Dimensions, ImageBackground, StyleSheet } from 'react-native';

import NewsCard from './components/NewsCard'

const news_data = [
    {
        id: 0,
        title: 'Jet Suit',
        description:
            'A mountain ambulance service in England is testing an Iron Man jet suit for its paramedics. The Great North Air Ambulance Service teamed up with the jet suit makers, Gravity Industries, and they are ...',
        imageUrl:
            'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/1532073134-Jet-Suit--960x600.jpg',
    },
    {
        id: 1,
        title: 'One Year ago: Big Insect Problem',
        description:
            'Insects are small animals like ants, bees, bugs or flies. They are very important. Many animals eat them. If there...',
        imageUrl:
            'https://www.wur.nl/upload/93a6f6af-9482-4a0d-93c9-c360fd3b1b26_shutterstock_81081820_sprinkhaan_gras.jpg',
    },
    {
        id: 2,
        title: 'October Effect',
        description:
            "The October Effect is a perceived market anomaly that stocks tend to fall in October. If we go back in time, back into 1907, a financial crisis ...",
        imageUrl:
            'https://www.wisebread.com/files/fruganomics/imagecache/605x340/blog-images/money_stocks_000071871541.jpg',
    },
    {
        id: 3,
        title: 'Why Tesla Stock Fell Sharply Friday Morning - Motley Fool',
        description:
            'Shares are down despite Tesla reporting record third-quarter deliveries. Shares of electric-car maker Tesla(NASDAQ:TSLA) fell Friday morning, declining 5% a few minutes into market open.',
        imageUrl: 'https://g.foolcdn.com/editorial/images/593799/stock-down.jpg',
    },
    {
        id: 4,
        title: 'Twilio hits new 52-week high as stock',
        description:
            'Shares of Twilio extended its gains into Friday, reaching a 52-week high, after the company said in a filing that it expects better-than-expected third-quarter revenue.',
        imageUrl:
            'https://image.cnbcfm.com/api/v1/image/105737636-1550147305726gettyimages-1034802076rr.jpg?v=1601647142',
    },
];
const banner_data = [
    {
        id: 0,
        text: "Best Prime Day 2020 Alexa",
        imageUrl:
            'https://cnet4.cbsistatic.com/img/7bnQrNgv4FtUTWdPZYO29fufx-A=/1200x630/2019/11/20/0aff1d1e-92fc-4b88-aee5-850c550e09a6/cnet-black-friday-best-buy-echo-show-5.jpg',
    },
    {
        id: 1,
        text: "Stocks After Amazon",
        imageUrl:
            'https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg',
    },
    {
        id: 2,
        text: "Levi's Most Popular Jeans",
        imageUrl:
            'https://s.yimg.com/os/creatr-uploaded-images/2020-10/e9b733b0-09cf-11eb-bfce-a2a6e6d17fa5',
    },
    {
        id: 3,
        text: "Social Security Benefits?",
        imageUrl:
            'https://s.marketwatch.com/public/resources/images/MW-IQ535_ss_pay_ZG_20201009111853.jpg',
    },
    {
        id: 4,
        text: "Columbus Day and Veterans Day",
        imageUrl:
            'https://images.mktw.net/im-242755/social',
    },
];

const News = () => {

    const renderNewsData = ({ item }) => <NewsCard news={item} />

    const listHeader = () => {
        return (
            <>
                <Text style={{ fontWeight: 'bold', fontSize: 50, margin: 10 }}>News</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        banner_data.map(banner_item => {
                            return (
                                <View style={styles.container}>
                                    <ImageBackground 
                                        source={{ uri: banner_item.imageUrl }} 
                                        style={styles.image}
                                        imageStyle={{ borderRadius: 10 }}
                                    >
                                        <Text style={styles.bannerText}>{banner_item.text}</Text>
                                    </ImageBackground>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </>
        )
    }

    return (
        <SafeAreaView>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={news_data}
                renderItem={renderNewsData}
                numColumns={2}
                contentContainerStyle={{
                    justifyContent: 'space-between'
                }}
                ListHeaderComponent={listHeader}
            />
        </SafeAreaView>
    )
}

export default News

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        width: Dimensions.get('window').width * 0.90,
        height: Dimensions.get('window').height / 4,
        margin: 5,
        borderRadius: 10,
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    bannerText: {
        color: "white",
        fontSize: 20,
        backgroundColor: "#11111150",
        height: Dimensions.get('window').height / 25,
        textAlignVertical: "center",
        paddingHorizontal: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
})