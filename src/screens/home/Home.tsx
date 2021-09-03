import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import { layout } from '../../constants';

import Post from '../../components/post/Post';

const data = [
    {
        id: '1',
        name: 'Post 1',
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        color: 'red',
    },
    {
        id: '2',
        name: 'Post 2',
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        color: 'orange',
    },
    {
        id: '3',
        name: 'Post 3',
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        color: 'yellow',
    },
];

const Home = () => {
    const insets = useSafeAreaInsets();

    // State
    const [currentIndex, setCurrentIndex] = React.useState(0);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />
            <FlatList
                data={data}
                snapToInterval={layout.height}
                snapToAlignment="start"
                decelerationRate="fast"
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                onScroll={e => {
                    let offset = e.nativeEvent.contentOffset.y;
                    setCurrentIndex(Math.floor(offset / layout.height));
                }}
                renderItem={({ item, index }) => (
                    <Post item={item} index={index} currentIndex={currentIndex} />
                )}
            />

            <View
                style={{
                    width: '100%',
                    height: 64,
                    position: 'absolute',
                    top: insets.top,

                    paddingHorizontal: 16,

                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                    backgroundColor: 'transparent',
                }}>
                <Ionicons name="logo-xbox" size={24} color="white" />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'white' }}>Seguindo</Text>
                    <View
                        style={{
                            borderWidth: StyleSheet.hairlineWidth,
                            marginHorizontal: 8,
                            borderColor: 'white',
                        }}></View>
                    <Text style={{ color: 'white' }}>Para você</Text>
                </View>
                <Ionicons name="search" size={24} color="white" />
            </View>
        </View>
    );
};
export default Home;
