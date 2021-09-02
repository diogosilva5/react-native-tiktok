import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';

import { layout } from '../../constants';

import Post from '../../components/post/Post';

const data = [
    { id: '1', name: 'Diogo', color: 'red' },
    { id: '2', name: 'Diogo', color: 'orange' },
    { id: '3', name: 'Diogo', color: 'yellow' },
    { id: '4', name: 'Diogo', color: 'green' },
    { id: '5', name: 'Diogo', color: 'blue' },
];

const Home = () => {
    return (
        <FlatList
            data={data}
            snapToInterval={layout.height}
            snapToAlignment="start"
            decelerationRate="fast"
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Post item={item} />}
        />
    );
};

export default Home;
