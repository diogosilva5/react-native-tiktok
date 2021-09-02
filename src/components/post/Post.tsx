import React from 'react';
import { View, Text } from 'react-native';

import { layout } from '../../constants';

interface Props {
    item: any;
}

const Post = ({ item }: Props) => {
    return (
        <View
            style={{
                width: layout.width,
                height: layout.height,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: item.color,
            }}>
            <Text>{item.name}</Text>
        </View>
    );
};

export default Post;
