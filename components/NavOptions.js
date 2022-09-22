import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';


const data = [
    {
        id: '123',
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: '456',
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];

const NavOptions = () => {
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                    <View>
                        <Image
                            style={styles.imgWrapper}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 ml-4 text-lg font-bold`}>{item.title}</Text>
                        <Icon 
                        style={tw`ml-4 p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowright" color='white' type='antdesign' />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions;

const styles = StyleSheet.create({
    imgWrapper: {
        width: 120,
        height: 120,
        resizeMode: "contain",
    },
});
