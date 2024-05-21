import { Text, View, Image } from 'react-native';
import styles from './style';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import ImgMain from '../../assets/MainPicture.svg';
import ImgClock from '../../assets/Clock.svg'
import ImgVector from '../../assets/Vector.svg'

const loadFont = async () => {
    await Font.loadAsync({
        Poppins400: require('../../assets/fonts/Poppins-Regular.ttf'),
        Poppins600: require('../../assets/fonts/Poppins-SemiBold.ttf'),
        Poppins700: require('../../assets/fonts/Poppins-Bold.ttf')
    })
}

export default function Main() {
    useEffect(() => {
        loadFont();
    }, []);

    return (
        <View style={styles.wrapper}>
            <View style={styles.upContainer}>
                <Image style={styles.image} source={ImgMain} />
                <Text style={styles.welcome}>Welcome Jeegar goyani</Text>
            </View>
            <View style={styles.downContainer}>
                <View style={styles.bottomContent}>
                    <Text style={styles.task}>Task list</Text>
                    <Image style={styles.imgClock} source={ImgClock} />
                    <Text style={styles.good}>Good Afternoon</Text>
                </View>
                <View style={styles.bottomBlock}>
                    <View style={styles.blockDaily}>
                        <Text style={styles.daily}>Daily Task</Text>
                        <Image style={styles.imgVector} source={ImgVector} />
                    </View>
                    <View style={styles.blockParagraphs}>
                        <View style={styles.learn1}>
                            <View style={styles.square1}></View>
                            <Text style={styles.text1}>Learning Programming by 12PM</Text>
                        </View>
                        <View style={styles.learn2}>
                            <View style={styles.square2}></View>
                            <Text style={styles.text2}>Learn how to cook by 1PM</Text>
                        </View>
                        <View style={styles.learn3}>
                            <View style={styles.square3}></View>
                            <Text style={styles.text3}>Learn how to play at 2PM</Text>
                        </View>
                        <View style={styles.learn4}>
                            <View style={styles.square4}></View>
                            <Text style={styles.text4}>Have lunch at 4PM</Text>
                        </View>
                        <View style={styles.learn5}>
                            <View style={styles.square5}></View>
                            <Text style={styles.text5}>Going to travel 6PM</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}


