import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Video } from 'expo-av';

import { Ionicons } from '@expo/vector-icons';

import { layout } from '../../constants';

import { ContainerActions, ContainerPostInfo } from './Post.styles';

interface Props {
    item: any;
    index: number;
    currentIndex: number;
}

const Post = ({ item, index, currentIndex }: Props) => {
    const video = React.useRef(null);

    const [paused, setPaused] = useState(false);

    React.useEffect(() => {
        index === currentIndex ? video.current.playAsync() : video.current.stopAsync();
    }, [index, currentIndex, paused]);

    return (
        <TouchableWithoutFeedback onPress={() => setPaused(!paused)}>
            <Video
                ref={video}
                style={{
                    flex: 1,
                    width: layout.width,
                    height: layout.height,
                }}
                source={{ uri: item.video }}
                resizeMode="cover"
                isLooping
                isMuted>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        zIndex: 99,
                    }}>
                    <ContainerPostInfo>
                        <Text style={{ color: 'white' }}>{item.name}</Text>
                        <Text style={{ color: 'white' }}>a</Text>
                        <Text style={{ color: 'white' }}>music</Text>
                    </ContainerPostInfo>
                    <Text>{item.name}</Text>

                    <ContainerActions>
                        <Ionicons name="search" size={24} color="white" />
                        <Ionicons name="heart" size={24} color="white" />
                        <Ionicons name="text" size={24} color="white" />
                        <Ionicons name="logo-whatsapp" size={24} color="white" />
                        <Ionicons name="logo-twitch" size={24} color="white" />
                    </ContainerActions>
                </View>
            </Video>
        </TouchableWithoutFeedback>
    );
};

export default Post;
